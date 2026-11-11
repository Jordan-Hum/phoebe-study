(function () {
  "use strict";

  // SHA-256 hash of the site password. To change the password run:
  //   node tools/set-password.js "your new password"
  var PASSWORD_HASH = "98ad704ea185fad599670c0cc39533b2011cde5916f8a8d59a7d7f14c1c1074b";

  var UNLOCK_KEY = "calc1-unlocked";
  var STATUS_KEY = "calc1-status";

  var TOPICS = window.TOPICS || [];
  var app = document.getElementById("app");

  // ---------- small helpers ----------
  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch (e) {
      return null;
    }
  }

  function getStatus() {
    try {
      return JSON.parse(store(STATUS_KEY) || "{}") || {};
    } catch (e) {
      return {};
    }
  }
  function setStatus(id, value) {
    var s = getStatus();
    if (value) s[id] = value;
    else delete s[id];
    store(STATUS_KEY, JSON.stringify(s));
  }

  function topicById(id) {
    for (var i = 0; i < TOPICS.length; i++) if (TOPICS[i].id === id) return TOPICS[i];
    return null;
  }

  function allProblems() {
    var list = [];
    TOPICS.forEach(function (t) {
      t.problems.forEach(function (p, i) {
        list.push({ topic: t, problem: p, index: i, id: t.id + "-" + i });
      });
    });
    return list;
  }

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "class") e.className = attrs[k];
      else if (k.slice(0, 2) === "on") e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    if (html != null) e.innerHTML = prep(html);
    return e;
  }

  // Escape <, > and & inside math so the HTML parser doesn't eat them.
  function prep(html) {
    return String(html).replace(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g, function (m) {
      return m.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    });
  }

  function renderMath(node) {
    if (window.renderMathInElement) {
      window.renderMathInElement(node, {
        delimiters: [
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false },
        ],
        throwOnError: false,
      });
    } else {
      // KaTeX may still be loading; try again shortly.
      setTimeout(function () {
        if (window.renderMathInElement) renderMath(node);
      }, 300);
    }
  }

  function texBlock(tex) {
    return "\\[" + tex + "\\]";
  }

  // ---------- SHA-256 (works even where crypto.subtle isn't available) ----------
  function sha256(ascii) {
    function rightRotate(v, a) { return (v >>> a) | (v << (32 - a)); }
    var maxWord = Math.pow(2, 32), result = "", words = [], i, j;
    var str = unescape(encodeURIComponent(ascii));
    var bitLen = str.length * 8;
    var hash = [], k = [], primeCounter = 0, isComposite = {};
    for (var c = 2; primeCounter < 64; c++) {
      if (!isComposite[c]) {
        for (i = 0; i < 313; i += c) isComposite[i] = c;
        hash[primeCounter] = (Math.pow(c, 0.5) * maxWord) | 0;
        k[primeCounter++] = (Math.pow(c, 1 / 3) * maxWord) | 0;
      }
    }
    hash = hash.slice(0, 8);
    str += "\x80";
    while ((str.length % 64) - 56) str += "\x00";
    for (i = 0; i < str.length; i++) {
      j = str.charCodeAt(i);
      words[i >> 2] |= j << (((3 - i) % 4) * 8);
    }
    words[words.length] = (bitLen / maxWord) | 0;
    words[words.length] = bitLen;
    for (j = 0; j < words.length; ) {
      var w = words.slice(j, (j += 16)), oldHash = hash;
      hash = hash.slice(0, 8);
      for (i = 0; i < 64; i++) {
        var w15 = w[i - 15], w2 = w[i - 2], a = hash[0], e = hash[4];
        var temp1 = hash[7] + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) +
          ((e & hash[5]) ^ (~e & hash[6])) + k[i] +
          (w[i] = i < 16 ? w[i] : (w[i - 16] + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) +
            w[i - 7] + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) | 0);
        var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) +
          ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
        hash = [(temp1 + temp2) | 0].concat(hash);
        hash[4] = (hash[4] + temp1) | 0;
      }
      for (i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
    }
    for (i = 0; i < 8; i++) for (j = 3; j + 1; j--) {
      var b = (hash[i] >> (j * 8)) & 255;
      result += (b < 16 ? "0" : "") + b.toString(16);
    }
    return result;
  }

  // ---------- password gate ----------
  function isUnlocked() {
    return store(UNLOCK_KEY) === PASSWORD_HASH;
  }

  function showLock() {
    document.body.classList.add("locked");
    app.innerHTML = "";
    var box = el("form", { class: "lock-card" });
    box.innerHTML =
      '<div class="lock-icon">∫</div>' +
      "<h1>Calc 1 Study Hub</h1>" +
      '<p class="muted">Enter the password to start studying.</p>' +
      '<input id="pw" type="password" autocomplete="current-password" placeholder="Password" aria-label="Password" />' +
      '<button class="btn primary" type="submit">Unlock</button>' +
      '<p id="pw-error" class="error" role="alert"></p>';
    box.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var input = document.getElementById("pw");
      if (sha256(input.value.trim()) === PASSWORD_HASH) {
        store(UNLOCK_KEY, PASSWORD_HASH);
        document.body.classList.remove("locked");
        route();
      } else {
        document.getElementById("pw-error").textContent = "Not quite — try again!";
        input.select();
        box.classList.remove("shake");
        void box.offsetWidth;
        box.classList.add("shake");
      }
    });
    app.appendChild(box);
    document.getElementById("pw").focus();
    document.getElementById("site-header").hidden = true;
  }

  // ---------- views ----------
  function progressFor(topic) {
    var s = getStatus(), got = 0, review = 0;
    topic.problems.forEach(function (_, i) {
      var v = s[topic.id + "-" + i];
      if (v === "got") got++;
      else if (v === "review") review++;
    });
    return { got: got, review: review, total: topic.problems.length };
  }

  function viewHome() {
    var all = allProblems(), s = getStatus();
    var got = all.filter(function (p) { return s[p.id] === "got"; }).length;
    var review = all.filter(function (p) { return s[p.id] === "review"; }).length;
    var pct = all.length ? Math.round((got / all.length) * 100) : 0;

    var wrap = el("div");
    wrap.appendChild(el("section", { class: "hero" },
      "<h1>Hi Phoebe! Let's do some calculus.</h1>" +
      '<p class="muted">Pick a topic to read the how-to, check the formulas, and work practice problems with step-by-step solutions. ' +
      "Try each problem on paper first, then reveal one step at a time.</p>" +
      '<div class="overall"><div class="overall-label"><span><b>' + got + "</b> of " + all.length +
      ' problems right</span><span class="muted">' + pct + '%</span></div>' +
      '<div class="bar"><span style="width:' + pct + '%"></span></div></div>' +
      '<div class="hero-actions">' +
      '<a class="btn primary" href="#/practice">Random practice</a>' +
      '<a class="btn" href="#/formulas">Formula sheet</a>' +
      (review ? '<a class="btn" href="#/review">Review list (' + review + ")</a>" : "") +
      "</div>"));

    var grid = el("div", { class: "topic-grid" });
    TOPICS.forEach(function (t, i) {
      var p = progressFor(t);
      var card = el("a", { class: "topic-card", href: "#/topic/" + t.id },
        '<div class="topic-num">' + (i + 1) + "</div>" +
        '<div class="topic-body"><h3>' + t.title + "</h3>" +
        '<p class="muted">' + t.blurb + "</p>" +
        '<div class="mini-bar"><span style="width:' + (p.got / p.total) * 100 + '%"></span></div>' +
        '<div class="topic-meta"><span>' + p.got + "/" + p.total + " right</span>" +
        (p.review ? '<span class="tag review">' + p.review + " to review</span>" : "") +
        "</div></div>");
      grid.appendChild(card);
    });
    wrap.appendChild(grid);
    return wrap;
  }

  function problemCard(item, opts) {
    opts = opts || {};
    var p = item.problem, id = item.id;
    var shown = 0;
    var card = el("article", { class: "problem", id: "p-" + id });

    var head = el("div", { class: "problem-head" });
    head.appendChild(el("span", { class: "problem-label" },
      opts.showTopic ? '<a href="#/topic/' + item.topic.id + '/practice">' + item.topic.title + "</a> · Problem " + (item.index + 1)
        : "Problem " + (item.index + 1)));
    var statusTag = el("span", { class: "tag" });
    head.appendChild(statusTag);
    card.appendChild(head);

    card.appendChild(el("div", { class: "question" }, p.q));


    var stepsList = el("ol", { class: "steps" });
    p.steps.forEach(function (s) {
      var li = el("li", { class: "step" }, s);
      li.hidden = true;
      stepsList.appendChild(li);
    });
    card.appendChild(stepsList);

    var answer = el("div", { class: "answer" }, "<b>Answer:</b> " + p.answer);
    answer.hidden = true;
    card.appendChild(answer);

    var actions = el("div", { class: "actions" });
    var nextBtn = el("button", { class: "btn primary", type: "button" }, "Show step 1");
    var allBtn = el("button", { class: "btn", type: "button" }, "Show all steps");
    var ansBtn = el("button", { class: "btn", type: "button" }, "Just the answer");
    var resetBtn = el("button", { class: "btn ghost", type: "button" }, "Hide");
    resetBtn.hidden = true;
    actions.appendChild(nextBtn);
    actions.appendChild(allBtn);
    actions.appendChild(ansBtn);
    actions.appendChild(resetBtn);
    card.appendChild(actions);

    var mark = el("div", { class: "mark" });
    mark.hidden = true;
    mark.appendChild(el("span", { class: "muted" }, "Did you get it?"));
    var gotBtn = el("button", { class: "btn good", type: "button" }, "✓ I got it right");
    var revBtn = el("button", { class: "btn warn", type: "button" }, "✗ I got it wrong");
    mark.appendChild(gotBtn);
    mark.appendChild(revBtn);
    card.appendChild(mark);

    function refreshStatus() {
      var v = getStatus()[id];
      statusTag.className = "tag" + (v ? " " + v : "");
      statusTag.textContent = v === "got" ? "✓ Got it right" : v === "review" ? "✗ Needs review" : "";
      gotBtn.classList.toggle("active", v === "got");
      revBtn.classList.toggle("active", v === "review");
    }

    function update() {
      var steps = stepsList.children;
      for (var i = 0; i < steps.length; i++) steps[i].hidden = i >= shown;
      var done = shown >= steps.length;
      if (done) {
        answer.hidden = false;
        nextBtn.hidden = true;
        allBtn.hidden = true;
        ansBtn.hidden = true;
      } else {
        nextBtn.hidden = false;
        nextBtn.textContent = shown === 0 ? "Show step 1" : "Next step (" + (shown + 1) + " of " + steps.length + ")";
        allBtn.hidden = false;
        ansBtn.hidden = !answer.hidden;
      }
      resetBtn.hidden = shown === 0 && answer.hidden;
      mark.hidden = answer.hidden;
    }

    nextBtn.addEventListener("click", function () { shown++; update(); });
    allBtn.addEventListener("click", function () { shown = p.steps.length; update(); });
    ansBtn.addEventListener("click", function () { answer.hidden = false; update(); });
    resetBtn.addEventListener("click", function () { shown = 0; answer.hidden = true; update(); });
    gotBtn.addEventListener("click", function () {
      setStatus(id, getStatus()[id] === "got" ? null : "got");
      refreshStatus();
      if (opts.onMark) opts.onMark();
    });
    revBtn.addEventListener("click", function () {
      setStatus(id, getStatus()[id] === "review" ? null : "review");
      refreshStatus();
      if (opts.onMark) opts.onMark();
    });

    refreshStatus();
    update();
    return card;
  }

  function viewTopic(id, tab) {
    var t = topicById(id);
    if (!t) return viewNotFound();
    tab = tab || "howto";
    var idx = TOPICS.indexOf(t);

    var wrap = el("div");
    wrap.appendChild(el("a", { class: "back", href: "#/" }, "← All topics"));
    wrap.appendChild(el("header", { class: "topic-header" },
      '<span class="eyebrow">Topic ' + (idx + 1) + " of " + TOPICS.length + "</span>" +
      "<h1>" + t.title + "</h1><p class=\"muted\">" + t.blurb + "</p>"));

    var tabs = el("nav", { class: "tabs", role: "tablist" });
    [["howto", "How-To"], ["formulas", "Formulas"], ["practice", "Practice (" + t.problems.length + ")"]].forEach(function (x) {
      tabs.appendChild(el("a", {
        href: "#/topic/" + t.id + "/" + x[0],
        class: "tab" + (tab === x[0] ? " active" : ""),
        role: "tab",
        "aria-selected": tab === x[0] ? "true" : "false",
      }, x[1]));
    });
    wrap.appendChild(tabs);

    var body = el("section", { class: "tab-body" });
    if (tab === "howto") {
      t.howto.forEach(function (h) {
        var box = el("div", { class: "howto" });
        box.appendChild(el("h2", null, h.title));
        var ol = el("ol");
        h.steps.forEach(function (s) { ol.appendChild(el("li", null, s)); });
        box.appendChild(ol);
        body.appendChild(box);
      });
      body.appendChild(el("a", { class: "btn primary", href: "#/topic/" + t.id + "/practice" }, "Ready? Go to practice problems →"));
    } else if (tab === "formulas") {
      var list = el("div", { class: "formula-list" });
      t.formulas.forEach(function (f) {
        list.appendChild(el("div", { class: "formula" }, '<div class="formula-name">' + f.name + "</div>" + texBlock(f.tex)));
      });
      body.appendChild(list);
    } else {
      body.appendChild(el("p", { class: "muted tip" }, "Work each one on paper first. Stuck? Reveal one step at a time until you can finish it yourself."));
      t.problems.forEach(function (p, i) {
        body.appendChild(problemCard({ topic: t, problem: p, index: i, id: t.id + "-" + i }));
      });
    }
    wrap.appendChild(body);

    var pager = el("div", { class: "pager" });
    if (idx > 0) pager.appendChild(el("a", { class: "btn ghost", href: "#/topic/" + TOPICS[idx - 1].id }, "← " + TOPICS[idx - 1].title));
    else pager.appendChild(el("span"));
    if (idx < TOPICS.length - 1) pager.appendChild(el("a", { class: "btn ghost", href: "#/topic/" + TOPICS[idx + 1].id }, TOPICS[idx + 1].title + " →"));
    wrap.appendChild(pager);
    return wrap;
  }

  function viewFormulas() {
    var wrap = el("div");
    wrap.appendChild(el("header", { class: "topic-header" },
      "<h1>Formula Sheet</h1><p class=\"muted\">Every formula from every topic in one place.</p>" +
      '<button class="btn" type="button" onclick="window.print()">Print it</button>'));
    var groups = (window.EXTRA_FORMULAS || []).map(function (g) { return { title: g.group, items: g.items }; })
      .concat(TOPICS.map(function (t) { return { title: t.title, items: t.formulas, id: t.id }; }));
    groups.forEach(function (g) {
      var sec = el("section", { class: "formula-group" });
      sec.appendChild(el("h2", null, g.id ? '<a href="#/topic/' + g.id + '">' + g.title + "</a>" : g.title));
      var list = el("div", { class: "formula-list" });
      g.items.forEach(function (f) {
        list.appendChild(el("div", { class: "formula" }, '<div class="formula-name">' + f.name + "</div>" + texBlock(f.tex)));
      });
      sec.appendChild(list);
      wrap.appendChild(sec);
    });
    return wrap;
  }

  var practiceFilter = null; // set of topic ids, null = all
  var lastPracticeId = null;

  function viewPractice() {
    var wrap = el("div");
    wrap.appendChild(el("header", { class: "topic-header" },
      "<h1>Random Practice</h1><p class=\"muted\">A mixed set, like a real exam. Choose which topics to include.</p>"));

    var chips = el("div", { class: "chips" });
    TOPICS.forEach(function (t) {
      var on = !practiceFilter || practiceFilter[t.id];
      var chip = el("button", { class: "chip" + (on ? " on" : ""), type: "button", "aria-pressed": on ? "true" : "false" }, t.title);
      chip.addEventListener("click", function () {
        if (!practiceFilter) {
          practiceFilter = {};
          TOPICS.forEach(function (x) { practiceFilter[x.id] = true; });
        }
        if (practiceFilter[t.id]) delete practiceFilter[t.id];
        else practiceFilter[t.id] = true;
        if (!Object.keys(practiceFilter).length) practiceFilter[t.id] = true;
        render(viewPractice());
      });
      chips.appendChild(chip);
    });
    wrap.appendChild(chips);

    var onlyUnmastered = store("calc1-only-new") === "1";
    var opts = el("label", { class: "check" }, '<input type="checkbox"' + (onlyUnmastered ? " checked" : "") + "> Skip problems I already got right");
    opts.querySelector("input").addEventListener("change", function (e) {
      store("calc1-only-new", e.target.checked ? "1" : null);
      render(viewPractice());
    });
    wrap.appendChild(opts);

    var s = getStatus();
    var pool = allProblems().filter(function (p) {
      return (!practiceFilter || practiceFilter[p.topic.id]) && (!onlyUnmastered || s[p.id] !== "got");
    });
    if (!pool.length) {
      wrap.appendChild(el("div", { class: "empty" }, "🎉 You've gotten every problem right in these topics! Uncheck the box above to keep practicing."));
      return wrap;
    }
    var choices = pool.length > 1 ? pool.filter(function (p) { return p.id !== lastPracticeId; }) : pool;
    var pick = choices[Math.floor(Math.random() * choices.length)];
    lastPracticeId = pick.id;

    wrap.appendChild(problemCard(pick, { showTopic: true }));
    var next = el("button", { class: "btn primary big", type: "button" }, "Next random problem →");
    next.addEventListener("click", function () { render(viewPractice()); window.scrollTo(0, 0); });
    wrap.appendChild(next);
    wrap.appendChild(el("p", { class: "muted small" }, pool.length + " problems in this set."));
    return wrap;
  }

  function viewReview() {
    var wrap = el("div");
    wrap.appendChild(el("header", { class: "topic-header" },
      "<h1>Review List</h1><p class=\"muted\">Problems you marked “I got it wrong.” Try them again and mark “I got it right” once they click.</p>"));
    var s = getStatus();
    var list = allProblems().filter(function (p) { return s[p.id] === "review"; });
    if (!list.length) {
      wrap.appendChild(el("div", { class: "empty" }, "Nothing to review right now. Nice work! <a href=\"#/practice\">Try some random practice →</a>"));
    }
    list.forEach(function (p) { wrap.appendChild(problemCard(p, { showTopic: true })); });
    return wrap;
  }

  function viewNotFound() {
    return el("div", { class: "empty" }, 'Page not found. <a href="#/">Go home</a>');
  }

  // ---------- router ----------
  function render(node) {
    app.innerHTML = "";
    app.appendChild(node);
    renderMath(app);
  }

  function route() {
    if (!isUnlocked()) return showLock();
    document.getElementById("site-header").hidden = false;
    var parts = (location.hash.replace(/^#\/?/, "") || "").split("/");
    var view;
    if (!parts[0]) view = viewHome();
    else if (parts[0] === "topic") view = viewTopic(parts[1], parts[2]);
    else if (parts[0] === "formulas") view = viewFormulas();
    else if (parts[0] === "practice") view = viewPractice();
    else if (parts[0] === "review") view = viewReview();
    else view = viewNotFound();

    document.querySelectorAll(".nav a").forEach(function (a) {
      var target = a.getAttribute("href").replace(/^#\/?/, "");
      a.classList.toggle("active", target === parts[0] || (!target && !parts[0]));
    });
    render(view);
    window.scrollTo(0, 0);
  }

  document.getElementById("lock-btn").addEventListener("click", function () {
    store(UNLOCK_KEY, null);
    location.hash = "#/";
    showLock();
  });

  window.addEventListener("hashchange", route);
  route();
})();
