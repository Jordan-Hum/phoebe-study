// All study content lives here.
// Math is written in LaTeX between \( ... \) (inline) or \[ ... \] (display)
// and rendered by KaTeX in the browser.
//
// To add a practice problem, copy one of the objects inside a topic's
// "problems" list and change the q (question), steps, and answer.

window.TOPICS = [
  // ------------------------------------------------------------------
  {
    id: "limits",
    title: "Limits",
    icon: "→",
    blurb: "What value a function approaches. The foundation of everything else.",
    howto: [
      {
        title: "How to evaluate a limit (the order to try things)",
        steps: [
          String.raw`<b>Plug it in first.</b> If direct substitution gives a real number, that's the answer. Done!`,
          String.raw`<b>Got \(\tfrac{0}{0}\)?</b> That's "indeterminate" &mdash; it means "do more algebra." Try, in order: <b>factor and cancel</b>, <b>multiply by the conjugate</b> (if there's a square root), or <b>combine fractions</b> (if there are fractions inside fractions). Later you can also use L'H&ocirc;pital's Rule.`,
          String.raw`<b>Got \(\tfrac{\text{nonzero}}{0}\)?</b> There's a vertical asymptote. The limit is \(\infty\), \(-\infty\), or does not exist. Check the sign from each side (plug in a number slightly bigger and slightly smaller).`,
          String.raw`<b>\(x \to \infty\) with a fraction of polynomials?</b> Compare the highest powers: bigger on bottom \(\Rightarrow 0\); same power \(\Rightarrow\) ratio of leading coefficients; bigger on top \(\Rightarrow \pm\infty\).`,
          String.raw`<b>Trig?</b> Try to make it look like \(\dfrac{\sin(\text{stuff})}{\text{stuff}} \to 1\).`,
        ],
      },
      {
        title: "One-sided limits",
        steps: [
          String.raw`\(\lim_{x\to a^-}\) means approach from the <b>left</b> (numbers smaller than \(a\)); \(\lim_{x\to a^+}\) means from the <b>right</b>.`,
          String.raw`The (two-sided) limit exists <b>only if</b> the left and right limits are equal.`,
          String.raw`For piecewise functions, use the piece that applies on each side.`,
        ],
      },
      {
        title: "Squeeze Theorem",
        steps: [
          String.raw`Use when you have something like \(\sin\) or \(\cos\) of something crazy (like \(\sin(1/x)\)) multiplied by something that goes to 0.`,
          String.raw`Start with \(-1 \le \sin(\text{anything}) \le 1\), then multiply all three parts by the other factor.`,
          String.raw`If the outside two go to the same limit \(L\), the middle is "squeezed" to \(L\) too.`,
        ],
      },
    ],
    formulas: [
      { name: "Special trig limit", tex: String.raw`\lim_{x\to 0}\frac{\sin x}{x}=1` },
      { name: "Special trig limit", tex: String.raw`\lim_{x\to 0}\frac{1-\cos x}{x}=0` },
      { name: "Definition of e", tex: String.raw`\lim_{x\to\infty}\left(1+\frac{1}{x}\right)^x=e` },
      { name: "Limit laws", tex: String.raw`\lim (f\pm g)=\lim f \pm \lim g,\quad \lim (fg)=\lim f\cdot\lim g` },
      { name: "Limit at infinity", tex: String.raw`\lim_{x\to\infty}\frac{1}{x^n}=0 \quad (n>0)` },
      { name: "Conjugate trick", tex: String.raw`(\sqrt{a}-b)(\sqrt{a}+b)=a-b^2` },
    ],
    problems: [
      {
        q: String.raw`Evaluate \(\displaystyle\lim_{x\to 3}\frac{x^2-9}{x-3}\).`,
        steps: [
          String.raw`Plug in \(x=3\): \(\dfrac{9-9}{3-3}=\dfrac{0}{0}\). Indeterminate, so we need algebra.`,
          String.raw`Factor the top (difference of squares): \(x^2-9=(x-3)(x+3)\).`,
          String.raw`\(\dfrac{(x-3)(x+3)}{x-3}=x+3\) &nbsp;(cancel the \(x-3\); fine since \(x\neq 3\) in a limit).`,
          String.raw`Now plug in: \(\lim_{x\to3}(x+3)=3+3=6\).`,
        ],
        answer: String.raw`\(6\)`,
      },
      {
        q: String.raw`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sqrt{x+4}-2}{x}\).`,
        steps: [
          String.raw`Plug in: \(\dfrac{\sqrt4-2}{0}=\dfrac00\). There's a square root, so use the conjugate.`,
          String.raw`Multiply top and bottom by the conjugate \(\sqrt{x+4}+2\): \[\frac{\sqrt{x+4}-2}{x}\cdot\frac{\sqrt{x+4}+2}{\sqrt{x+4}+2}=\frac{(x+4)-4}{x(\sqrt{x+4}+2)}\]`,
          String.raw`Simplify the top: \(\dfrac{x}{x(\sqrt{x+4}+2)}=\dfrac{1}{\sqrt{x+4}+2}\).`,
          String.raw`Plug in \(x=0\): \(\dfrac{1}{\sqrt4+2}=\dfrac14\).`,
        ],
        answer: String.raw`\(\dfrac14\)`,
      },
      {
        q: String.raw`Evaluate \(\displaystyle\lim_{x\to \infty}\frac{3x^2-5x+1}{7x^2+2}\).`,
        steps: [
          String.raw`Highest power on top and bottom is \(x^2\) (same degree).`,
          String.raw`Divide every term by \(x^2\): \[\frac{3-\frac5x+\frac1{x^2}}{7+\frac{2}{x^2}}\]`,
          String.raw`As \(x\to\infty\), every term with \(x\) in the denominator goes to 0.`,
          String.raw`Result: \(\dfrac{3-0+0}{7+0}=\dfrac37\). (Shortcut: same degree &rArr; ratio of leading coefficients.)`,
        ],
        answer: String.raw`\(\dfrac37\)`,
      },
      {
        q: String.raw`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sin(5x)}{x}\).`,
        steps: [
          String.raw`We want \(\dfrac{\sin(\text{stuff})}{\text{stuff}}\) with the same stuff: here stuff \(=5x\).`,
          String.raw`Multiply top and bottom by 5: \(\dfrac{\sin(5x)}{x}=5\cdot\dfrac{\sin(5x)}{5x}\).`,
          String.raw`As \(x\to0\), \(5x\to0\), so \(\dfrac{\sin(5x)}{5x}\to1\).`,
          String.raw`Answer: \(5\cdot1=5\).`,
        ],
        answer: String.raw`\(5\)`,
      },
      {
        q: String.raw`Evaluate \(\displaystyle\lim_{x\to 2}\frac{x+1}{(x-2)^2}\).`,
        steps: [
          String.raw`Plug in: \(\dfrac{3}{0}\). Nonzero over zero &rArr; vertical asymptote. Check signs.`,
          String.raw`The top approaches \(3\) (positive).`,
          String.raw`The bottom \((x-2)^2\) is a square, so it's a tiny <b>positive</b> number from both sides.`,
          String.raw`Positive / tiny positive \(= +\infty\) from both sides, so the limit is \(+\infty\).`,
        ],
        answer: String.raw`\(+\infty\)`,
      },
      {
        q: String.raw`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\frac{1}{x+2}-\frac12}{x}\).`,
        steps: [
          String.raw`Plug in: \(\dfrac{\frac12-\frac12}{0}=\dfrac00\). Fractions inside a fraction &rArr; combine them.`,
          String.raw`Common denominator \(2(x+2)\): \(\dfrac{1}{x+2}-\dfrac12=\dfrac{2-(x+2)}{2(x+2)}=\dfrac{-x}{2(x+2)}\).`,
          String.raw`Divide by \(x\): \(\dfrac{-x}{2(x+2)}\cdot\dfrac1x=\dfrac{-1}{2(x+2)}\).`,
          String.raw`Plug in \(x=0\): \(\dfrac{-1}{2(2)}=-\dfrac14\).`,
        ],
        answer: String.raw`\(-\dfrac14\)`,
      },
      {
        q: String.raw`Use the Squeeze Theorem to find \(\displaystyle\lim_{x\to 0}x^2\sin\!\left(\frac1x\right)\).`,
        steps: [
          String.raw`Sine is always between \(-1\) and \(1\): \(-1\le\sin\!\left(\frac1x\right)\le1\).`,
          String.raw`Multiply by \(x^2\) (which is \(\ge 0\), so the inequalities don't flip): \(-x^2\le x^2\sin\!\left(\frac1x\right)\le x^2\).`,
          String.raw`Both outside functions go to 0: \(\lim_{x\to0}(-x^2)=0\) and \(\lim_{x\to0}x^2=0\).`,
          String.raw`The middle is squeezed between them, so its limit is also \(0\).`,
        ],
        answer: String.raw`\(0\)`,
      },
      {
        q: String.raw`Let \(f(x)=\begin{cases}x^2+1 & x<1\\ 3x-1 & x\ge1\end{cases}\). Find \(\lim_{x\to1}f(x)\).`,
        steps: [
          String.raw`Left side (\(x<1\)) uses \(x^2+1\): \(\lim_{x\to1^-}f(x)=1+1=2\).`,
          String.raw`Right side (\(x\ge1\)) uses \(3x-1\): \(\lim_{x\to1^+}f(x)=3-1=2\).`,
          String.raw`Left limit = right limit = 2, so the two-sided limit exists.`,
        ],
        answer: String.raw`\(2\)`,
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: "continuity",
    title: "Continuity",
    icon: "〰",
    blurb: "No holes, jumps, or breaks. Plus the Intermediate Value Theorem.",
    howto: [
      {
        title: "Checking if f is continuous at x = a (the 3-step test)",
        steps: [
          String.raw`<b>1.</b> \(f(a)\) is defined (you can plug it in).`,
          String.raw`<b>2.</b> \(\lim_{x\to a}f(x)\) exists (left limit = right limit).`,
          String.raw`<b>3.</b> They're equal: \(\lim_{x\to a}f(x)=f(a)\).`,
          String.raw`If any step fails, \(f\) is discontinuous at \(a\).`,
        ],
      },
      {
        title: "Types of discontinuities",
        steps: [
          String.raw`<b>Removable (hole):</b> the limit exists but doesn't equal \(f(a)\) (or \(f(a)\) undefined). Usually a factor that cancels.`,
          String.raw`<b>Jump:</b> left and right limits exist but are different (common in piecewise).`,
          String.raw`<b>Infinite:</b> vertical asymptote &mdash; a factor in the denominator that does <i>not</i> cancel.`,
        ],
      },
      {
        title: "Making a piecewise function continuous",
        steps: [
          String.raw`Find where the pieces switch (the "break point").`,
          String.raw`Plug the break point into <b>both</b> pieces.`,
          String.raw`Set them equal and solve for the unknown constant.`,
        ],
      },
      {
        title: "Intermediate Value Theorem (IVT)",
        steps: [
          String.raw`If \(f\) is <b>continuous</b> on \([a,b]\) and \(N\) is between \(f(a)\) and \(f(b)\), then \(f(c)=N\) for some \(c\) in \((a,b)\).`,
          String.raw`To show a root exists: show \(f\) is continuous, then show \(f(a)\) and \(f(b)\) have <b>opposite signs</b>.`,
          String.raw`Always state "\(f\) is continuous" in your answer &mdash; teachers take points off if you skip it!`,
        ],
      },
    ],
    formulas: [
      { name: "Continuity at a", tex: String.raw`\lim_{x\to a}f(x)=f(a)` },
      { name: "IVT", tex: String.raw`f \text{ cont. on }[a,b],\ N \text{ between } f(a),f(b) \Rightarrow \exists\, c:\ f(c)=N` },
    ],
    problems: [
      {
        q: String.raw`Find \(k\) so that \(f(x)=\begin{cases}kx+3 & x<2\\ x^2-k & x\ge2\end{cases}\) is continuous everywhere.`,
        steps: [
          String.raw`Each piece is a polynomial (continuous), so the only trouble spot is the break point \(x=2\).`,
          String.raw`Left piece at \(x=2\): \(k(2)+3=2k+3\).`,
          String.raw`Right piece at \(x=2\): \(2^2-k=4-k\).`,
          String.raw`Set equal: \(2k+3=4-k \Rightarrow 3k=1 \Rightarrow k=\tfrac13\).`,
        ],
        answer: String.raw`\(k=\dfrac13\)`,
      },
      {
        q: String.raw`Where is \(f(x)=\dfrac{x^2-1}{x^2-3x+2}\) discontinuous? Classify each discontinuity.`,
        steps: [
          String.raw`A rational function is discontinuous where the denominator is 0. Factor: \(x^2-3x+2=(x-1)(x-2)\). So \(x=1\) and \(x=2\).`,
          String.raw`Factor the top too: \(x^2-1=(x-1)(x+1)\). So \(f(x)=\dfrac{(x-1)(x+1)}{(x-1)(x-2)}\).`,
          String.raw`At \(x=1\): the \((x-1)\) cancels, leaving \(\dfrac{x+1}{x-2}\to\dfrac{2}{-1}=-2\). The limit exists &rArr; <b>removable</b> discontinuity (a hole at \((1,-2)\)).`,
          String.raw`At \(x=2\): the \((x-2)\) does not cancel, top \(\to 3\neq0\) &rArr; <b>infinite</b> discontinuity (vertical asymptote).`,
        ],
        answer: String.raw`Removable at \(x=1\); infinite (vertical asymptote) at \(x=2\).`,
      },
      {
        q: String.raw`Show that \(x^3+x-1=0\) has a solution between \(0\) and \(1\).`,
        steps: [
          String.raw`Let \(f(x)=x^3+x-1\). It's a polynomial, so it's <b>continuous</b> on \([0,1]\).`,
          String.raw`\(f(0)=0+0-1=-1<0\).`,
          String.raw`\(f(1)=1+1-1=1>0\).`,
          String.raw`Since \(0\) is between \(-1\) and \(1\), the IVT says there's a \(c\) in \((0,1)\) with \(f(c)=0\).`,
        ],
        answer: String.raw`By the IVT, a root exists in \((0,1)\).`,
      },
      {
        q: String.raw`Is \(g(x)=\begin{cases}\dfrac{x^2-4}{x-2} & x\neq2\\ 5 & x=2\end{cases}\) continuous at \(x=2\)?`,
        steps: [
          String.raw`Step 1: \(g(2)=5\). Defined. ✓`,
          String.raw`Step 2: \(\lim_{x\to2}\dfrac{(x-2)(x+2)}{x-2}=\lim_{x\to2}(x+2)=4\). Exists. ✓`,
          String.raw`Step 3: Is \(4=5\)? No. ✗`,
          String.raw`So \(g\) is <b>not</b> continuous at 2; it's a removable discontinuity. (Redefining \(g(2)=4\) would fix it.)`,
        ],
        answer: String.raw`No &mdash; removable discontinuity (limit is 4 but \(g(2)=5\)).`,
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: "definition",
    title: "Definition of the Derivative",
    icon: "Δ",
    blurb: "The limit definition and tangent lines.",
    howto: [
      {
        title: "Finding f′(x) with the limit definition",
        steps: [
          String.raw`Write the formula: \(f'(x)=\displaystyle\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\).`,
          String.raw`Find \(f(x+h)\) by replacing <b>every</b> \(x\) with \((x+h)\). Use parentheses!`,
          String.raw`Subtract \(f(x)\) and simplify the top. Everything without an \(h\) should cancel. (If it doesn't, check your algebra.)`,
          String.raw`Factor an \(h\) out of the top and cancel it with the bottom.`,
          String.raw`Now plug in \(h=0\).`,
        ],
      },
      {
        title: "Equation of a tangent line at x = a",
        steps: [
          String.raw`Point: find \(y_1=f(a)\).`,
          String.raw`Slope: find \(m=f'(a)\).`,
          String.raw`Point-slope form: \(y-f(a)=f'(a)(x-a)\).`,
          String.raw`(Normal line: same point, slope \(-\dfrac{1}{f'(a)}\).)`,
        ],
      },
    ],
    formulas: [
      { name: "Limit definition", tex: String.raw`f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}` },
      { name: "Alternate form at a", tex: String.raw`f'(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}` },
      { name: "Tangent line", tex: String.raw`y-f(a)=f'(a)(x-a)` },
      { name: "Average rate of change", tex: String.raw`\frac{f(b)-f(a)}{b-a}` },
    ],
    problems: [
      {
        q: String.raw`Use the limit definition to find \(f'(x)\) for \(f(x)=x^2+3x\).`,
        steps: [
          String.raw`\(f(x+h)=(x+h)^2+3(x+h)=x^2+2xh+h^2+3x+3h\).`,
          String.raw`\(f(x+h)-f(x)=(x^2+2xh+h^2+3x+3h)-(x^2+3x)=2xh+h^2+3h\).`,
          String.raw`Divide by \(h\): \(\dfrac{2xh+h^2+3h}{h}=\dfrac{h(2x+h+3)}{h}=2x+h+3\).`,
          String.raw`Let \(h\to0\): \(f'(x)=2x+3\).`,
        ],
        answer: String.raw`\(f'(x)=2x+3\)`,
      },
      {
        q: String.raw`Use the limit definition to find \(f'(x)\) for \(f(x)=\dfrac1x\).`,
        steps: [
          String.raw`\(\dfrac{f(x+h)-f(x)}{h}=\dfrac{\frac{1}{x+h}-\frac1x}{h}\).`,
          String.raw`Combine the top over \(x(x+h)\): \(\dfrac1{x+h}-\dfrac1x=\dfrac{x-(x+h)}{x(x+h)}=\dfrac{-h}{x(x+h)}\).`,
          String.raw`Divide by \(h\): \(\dfrac{-h}{x(x+h)}\cdot\dfrac1h=\dfrac{-1}{x(x+h)}\).`,
          String.raw`Let \(h\to0\): \(f'(x)=\dfrac{-1}{x\cdot x}=-\dfrac1{x^2}\).`,
        ],
        answer: String.raw`\(f'(x)=-\dfrac1{x^2}\)`,
      },
      {
        q: String.raw`Use the limit definition to find \(f'(x)\) for \(f(x)=\sqrt x\).`,
        steps: [
          String.raw`\(\dfrac{\sqrt{x+h}-\sqrt x}{h}\). Square roots &rArr; multiply by the conjugate \(\sqrt{x+h}+\sqrt x\).`,
          String.raw`Top becomes \((x+h)-x=h\): \(\dfrac{h}{h(\sqrt{x+h}+\sqrt x)}\).`,
          String.raw`Cancel \(h\): \(\dfrac{1}{\sqrt{x+h}+\sqrt x}\).`,
          String.raw`Let \(h\to0\): \(\dfrac1{\sqrt x+\sqrt x}=\dfrac1{2\sqrt x}\).`,
        ],
        answer: String.raw`\(f'(x)=\dfrac{1}{2\sqrt x}\)`,
      },
      {
        q: String.raw`Find the equation of the tangent line to \(y=x^3\) at \(x=2\).`,
        steps: [
          String.raw`Point: \(y=2^3=8\), so the point is \((2,8)\).`,
          String.raw`Derivative: \(y'=3x^2\). Slope at \(x=2\): \(m=3(4)=12\).`,
          String.raw`Point-slope: \(y-8=12(x-2)\).`,
          String.raw`Slope-intercept: \(y=12x-24+8=12x-16\).`,
        ],
        answer: String.raw`\(y=12x-16\)`,
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: "rules",
    title: "Derivative Rules",
    icon: "′",
    blurb: "Power, product, and quotient rules — the shortcuts.",
    howto: [
      {
        title: "Power Rule",
        steps: [
          String.raw`\(\dfrac{d}{dx}x^n=nx^{n-1}\): bring the power down front, subtract 1 from the power.`,
          String.raw`<b>Rewrite first!</b> Roots become fractional powers: \(\sqrt x=x^{1/2}\), \(\sqrt[3]{x^2}=x^{2/3}\).`,
          String.raw`Variables in the denominator become negative powers: \(\dfrac{5}{x^3}=5x^{-3}\).`,
          String.raw`Constants have derivative 0. Constant multiples just ride along.`,
        ],
      },
      {
        title: "Product Rule — when two functions are multiplied",
        steps: [
          String.raw`\((fg)'=f'g+fg'\). Say it: "derivative of the first times the second, plus the first times the derivative of the second."`,
          String.raw`Tip: if both are simple polynomials, you can also just multiply out first and use the power rule.`,
        ],
      },
      {
        title: "Quotient Rule — when one function is divided by another",
        steps: [
          String.raw`\(\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}\).`,
          String.raw`Memory trick: "<b>low d-high minus high d-low, over the square of what's below</b>."`,
          String.raw`The order matters because of the minus sign &mdash; always start with the derivative of the <b>top</b>.`,
          String.raw`If the bottom is just a constant or a single power of \(x\), rewriting is often easier than the quotient rule.`,
        ],
      },
    ],
    formulas: [
      { name: "Constant", tex: String.raw`\frac{d}{dx}c=0` },
      { name: "Power rule", tex: String.raw`\frac{d}{dx}x^n=nx^{n-1}` },
      { name: "Constant multiple", tex: String.raw`\frac{d}{dx}[cf(x)]=cf'(x)` },
      { name: "Sum / difference", tex: String.raw`(f\pm g)'=f'\pm g'` },
      { name: "Product rule", tex: String.raw`(fg)'=f'g+fg'` },
      { name: "Quotient rule", tex: String.raw`\left(\frac fg\right)'=\frac{f'g-fg'}{g^2}` },
    ],
    problems: [
      {
        q: String.raw`Differentiate \(f(x)=4x^5-3x^2+7x-9\).`,
        steps: [
          String.raw`Power rule term by term: \(4x^5\to 20x^4\).`,
          String.raw`\(-3x^2\to-6x\); &nbsp;\(7x\to7\); &nbsp;\(-9\to0\).`,
          String.raw`Combine: \(f'(x)=20x^4-6x+7\).`,
        ],
        answer: String.raw`\(f'(x)=20x^4-6x+7\)`,
      },
      {
        q: String.raw`Differentiate \(f(x)=3\sqrt x+\dfrac{2}{x^3}\).`,
        steps: [
          String.raw`Rewrite with exponents: \(f(x)=3x^{1/2}+2x^{-3}\).`,
          String.raw`\(3x^{1/2}\to3\cdot\tfrac12x^{-1/2}=\tfrac32x^{-1/2}\).`,
          String.raw`\(2x^{-3}\to2(-3)x^{-4}=-6x^{-4}\).`,
          String.raw`Rewrite nicely: \(f'(x)=\dfrac{3}{2\sqrt x}-\dfrac{6}{x^4}\).`,
        ],
        answer: String.raw`\(f'(x)=\dfrac{3}{2\sqrt x}-\dfrac{6}{x^4}\)`,
      },
      {
        q: String.raw`Use the product rule to differentiate \(f(x)=(x^2+1)(3x-5)\).`,
        steps: [
          String.raw`First \(=x^2+1\), first\(' = 2x\). Second \(=3x-5\), second\('=3\).`,
          String.raw`\(f'(x)=(2x)(3x-5)+(x^2+1)(3)\).`,
          String.raw`Expand: \(6x^2-10x+3x^2+3\).`,
          String.raw`Combine: \(f'(x)=9x^2-10x+3\).`,
        ],
        answer: String.raw`\(f'(x)=9x^2-10x+3\)`,
      },
      {
        q: String.raw`Use the quotient rule to differentiate \(f(x)=\dfrac{2x+1}{x^2+3}\).`,
        steps: [
          String.raw`High \(=2x+1\), d-high \(=2\). Low \(=x^2+3\), d-low \(=2x\).`,
          String.raw`\(f'(x)=\dfrac{(2)(x^2+3)-(2x+1)(2x)}{(x^2+3)^2}\).`,
          String.raw`Expand the top: \(2x^2+6-(4x^2+2x)=-2x^2-2x+6\).`,
          String.raw`\(f'(x)=\dfrac{-2x^2-2x+6}{(x^2+3)^2}\).`,
        ],
        answer: String.raw`\(f'(x)=\dfrac{-2x^2-2x+6}{(x^2+3)^2}\)`,
      },
      {
        q: String.raw`Differentiate \(f(x)=x^2\sin x\).`,
        steps: [
          String.raw`It's a product: first \(=x^2\), second \(=\sin x\).`,
          String.raw`\(\dfrac{d}{dx}x^2=2x\) and \(\dfrac{d}{dx}\sin x=\cos x\).`,
          String.raw`Product rule: \(f'(x)=2x\sin x+x^2\cos x\).`,
        ],
        answer: String.raw`\(f'(x)=2x\sin x+x^2\cos x\)`,
      },
      {
        q: String.raw`Differentiate \(f(x)=\dfrac{x^3-4x+2}{x}\) (without the quotient rule).`,
        steps: [
          String.raw`Split the fraction: \(f(x)=\dfrac{x^3}{x}-\dfrac{4x}{x}+\dfrac2x=x^2-4+2x^{-1}\).`,
          String.raw`Power rule: \(2x-0+2(-1)x^{-2}\).`,
          String.raw`\(f'(x)=2x-\dfrac{2}{x^2}\).`,
        ],
        answer: String.raw`\(f'(x)=2x-\dfrac{2}{x^2}\)`,
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: "chain",
    title: "Chain Rule, Trig, Exp & Log",
    icon: "⛓",
    blurb: "Derivatives of functions inside functions, plus all the special derivatives.",
    howto: [
      {
        title: "Chain Rule — a function inside another function",
        steps: [
          String.raw`\(\dfrac{d}{dx}f(g(x))=f'(g(x))\cdot g'(x)\).`,
          String.raw`In words: "derivative of the <b>outside</b> (leave the inside alone), <b>times</b> the derivative of the <b>inside</b>."`,
          String.raw`Spot it: if you see parentheses with more than just \(x\) in them, like \((3x^2+1)^5\), \(\sin(x^3)\), \(e^{2x}\), \(\ln(x^2+5)\) &mdash; it's chain rule.`,
          String.raw`Layers can stack: \(\sin^2(4x)=[\sin(4x)]^2\) has three layers (square, sine, \(4x\)). Peel them one at a time, multiplying as you go.`,
        ],
      },
      {
        title: "Common mistakes to avoid",
        steps: [
          String.raw`Forgetting to multiply by the inside's derivative (this is the #1 mistake!).`,
          String.raw`\(\sin^2 x\) means \((\sin x)^2\), <b>not</b> \(\sin(x^2)\).`,
          String.raw`\(\dfrac{d}{dx}\cos x=-\sin x\) &mdash; don't lose the negative. All the "co" functions (cos, cot, csc) have negative derivatives.`,
          String.raw`\(\dfrac{d}{dx}e^x=e^x\), but \(\dfrac{d}{dx}x^e=ex^{e-1}\) (that's just the power rule).`,
        ],
      },
    ],
    formulas: [
      { name: "Chain rule", tex: String.raw`\frac{d}{dx}f(g(x))=f'(g(x))\,g'(x)` },
      { name: "Sine", tex: String.raw`\frac{d}{dx}\sin x=\cos x` },
      { name: "Cosine", tex: String.raw`\frac{d}{dx}\cos x=-\sin x` },
      { name: "Tangent", tex: String.raw`\frac{d}{dx}\tan x=\sec^2 x` },
      { name: "Cotangent", tex: String.raw`\frac{d}{dx}\cot x=-\csc^2 x` },
      { name: "Secant", tex: String.raw`\frac{d}{dx}\sec x=\sec x\tan x` },
      { name: "Cosecant", tex: String.raw`\frac{d}{dx}\csc x=-\csc x\cot x` },
      { name: "Exponential", tex: String.raw`\frac{d}{dx}e^x=e^x,\qquad \frac{d}{dx}a^x=a^x\ln a` },
      { name: "Logarithm", tex: String.raw`\frac{d}{dx}\ln x=\frac1x,\qquad \frac{d}{dx}\log_a x=\frac{1}{x\ln a}` },
      { name: "Inverse sine", tex: String.raw`\frac{d}{dx}\arcsin x=\frac{1}{\sqrt{1-x^2}}` },
      { name: "Inverse tangent", tex: String.raw`\frac{d}{dx}\arctan x=\frac{1}{1+x^2}` },
    ],
    problems: [
      {
        q: String.raw`Differentiate \(f(x)=(3x^2+1)^5\).`,
        steps: [
          String.raw`Outside: \((\ \cdot\ )^5\). Inside: \(3x^2+1\).`,
          String.raw`Derivative of outside (keep inside): \(5(3x^2+1)^4\).`,
          String.raw`Derivative of inside: \(6x\).`,
          String.raw`Multiply: \(f'(x)=5(3x^2+1)^4\cdot6x=30x(3x^2+1)^4\).`,
        ],
        answer: String.raw`\(f'(x)=30x(3x^2+1)^4\)`,
      },
      {
        q: String.raw`Differentiate \(f(x)=\sin(x^3)\).`,
        steps: [
          String.raw`Outside: \(\sin(\ \cdot\ )\). Inside: \(x^3\).`,
          String.raw`Derivative of outside: \(\cos(x^3)\).`,
          String.raw`Derivative of inside: \(3x^2\).`,
          String.raw`\(f'(x)=3x^2\cos(x^3)\).`,
        ],
        answer: String.raw`\(f'(x)=3x^2\cos(x^3)\)`,
      },
      {
        q: String.raw`Differentiate \(f(x)=e^{2x}\cos x\).`,
        steps: [
          String.raw`It's a product of \(e^{2x}\) and \(\cos x\), so product rule.`,
          String.raw`\(\dfrac{d}{dx}e^{2x}=e^{2x}\cdot2=2e^{2x}\) (chain rule). \(\dfrac{d}{dx}\cos x=-\sin x\).`,
          String.raw`\(f'(x)=2e^{2x}\cos x+e^{2x}(-\sin x)\).`,
          String.raw`Factor: \(f'(x)=e^{2x}(2\cos x-\sin x)\).`,
        ],
        answer: String.raw`\(f'(x)=e^{2x}(2\cos x-\sin x)\)`,
      },
      {
        q: String.raw`Differentiate \(f(x)=\ln(x^2+5)\).`,
        steps: [
          String.raw`\(\dfrac{d}{dx}\ln(u)=\dfrac{1}{u}\cdot u'\).`,
          String.raw`Here \(u=x^2+5\) and \(u'=2x\).`,
          String.raw`\(f'(x)=\dfrac{1}{x^2+5}\cdot2x=\dfrac{2x}{x^2+5}\).`,
        ],
        answer: String.raw`\(f'(x)=\dfrac{2x}{x^2+5}\)`,
      },
      {
        q: String.raw`Differentiate \(f(x)=\sqrt{1+\tan x}\).`,
        steps: [
          String.raw`Rewrite: \(f(x)=(1+\tan x)^{1/2}\).`,
          String.raw`Outside: \(\tfrac12(1+\tan x)^{-1/2}\).`,
          String.raw`Inside derivative: \(\sec^2x\).`,
          String.raw`\(f'(x)=\tfrac12(1+\tan x)^{-1/2}\sec^2x=\dfrac{\sec^2x}{2\sqrt{1+\tan x}}\).`,
        ],
        answer: String.raw`\(f'(x)=\dfrac{\sec^2x}{2\sqrt{1+\tan x}}\)`,
      },
      {
        q: String.raw`Differentiate \(f(x)=\cos^2(4x)\).`,
        steps: [
          String.raw`Rewrite: \(f(x)=[\cos(4x)]^2\). Three layers: square &rarr; cosine &rarr; \(4x\).`,
          String.raw`Square layer: \(2\cos(4x)\).`,
          String.raw`Cosine layer: \(-\sin(4x)\).`,
          String.raw`Inner layer: \(4\).`,
          String.raw`Multiply all: \(f'(x)=2\cos(4x)\cdot(-\sin(4x))\cdot4=-8\sin(4x)\cos(4x)\). (Using \(2\sin\theta\cos\theta=\sin2\theta\), this also equals \(-4\sin(8x)\).)`,
        ],
        answer: String.raw`\(f'(x)=-8\sin(4x)\cos(4x)=-4\sin(8x)\)`,
      },
      {
        q: String.raw`Differentiate \(f(x)=\arctan(2x)\).`,
        steps: [
          String.raw`\(\dfrac{d}{dx}\arctan u=\dfrac{1}{1+u^2}\cdot u'\), with \(u=2x\), \(u'=2\).`,
          String.raw`\(f'(x)=\dfrac{1}{1+(2x)^2}\cdot2\).`,
          String.raw`\(f'(x)=\dfrac{2}{1+4x^2}\).`,
        ],
        answer: String.raw`\(f'(x)=\dfrac{2}{1+4x^2}\)`,
      },
      {
        q: String.raw`Differentiate \(f(x)=5^{x^2}\).`,
        steps: [
          String.raw`\(\dfrac{d}{dx}a^u=a^u\ln a\cdot u'\), with \(a=5\), \(u=x^2\), \(u'=2x\).`,
          String.raw`\(f'(x)=5^{x^2}\cdot\ln5\cdot2x\).`,
          String.raw`\(f'(x)=2x\ln5\cdot5^{x^2}\).`,
        ],
        answer: String.raw`\(f'(x)=2x\,(\ln 5)\,5^{x^2}\)`,
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: "implicit",
    title: "Implicit Differentiation",
    icon: "↺",
    blurb: "Finding dy/dx when y isn't solved for.",
    howto: [
      {
        title: "Steps for implicit differentiation",
        steps: [
          String.raw`Take \(\dfrac{d}{dx}\) of <b>both sides</b> of the equation.`,
          String.raw`Every time you differentiate something with \(y\) in it, multiply by \(\dfrac{dy}{dx}\) (that's the chain rule, since \(y\) is a function of \(x\)). E.g. \(\dfrac{d}{dx}y^3=3y^2\dfrac{dy}{dx}\).`,
          String.raw`Watch out for products like \(xy\): use the product rule: \(\dfrac{d}{dx}(xy)=y+x\dfrac{dy}{dx}\).`,
          String.raw`Move all \(\dfrac{dy}{dx}\) terms to one side, everything else to the other.`,
          String.raw`Factor out \(\dfrac{dy}{dx}\) and divide.`,
        ],
      },
      {
        title: "Logarithmic differentiation (for things like xˣ)",
        steps: [
          String.raw`Use when the variable is in <b>both</b> the base and the exponent, or for messy products/quotients.`,
          String.raw`Take \(\ln\) of both sides, then use log rules to bring exponents down.`,
          String.raw`Differentiate implicitly (\(\dfrac{d}{dx}\ln y=\dfrac{1}{y}\dfrac{dy}{dx}\)), then multiply by \(y\).`,
        ],
      },
    ],
    formulas: [
      { name: "Key idea", tex: String.raw`\frac{d}{dx}\big[g(y)\big]=g'(y)\,\frac{dy}{dx}` },
      { name: "Product with y", tex: String.raw`\frac{d}{dx}(xy)=y+x\frac{dy}{dx}` },
      { name: "Log rules", tex: String.raw`\ln(ab)=\ln a+\ln b,\quad \ln\frac ab=\ln a-\ln b,\quad \ln a^r=r\ln a` },
    ],
    problems: [
      {
        q: String.raw`Find \(\dfrac{dy}{dx}\) for \(x^2+y^2=25\), and the slope of the tangent line at \((3,4)\).`,
        steps: [
          String.raw`Differentiate both sides: \(2x+2y\dfrac{dy}{dx}=0\).`,
          String.raw`Isolate: \(2y\dfrac{dy}{dx}=-2x\).`,
          String.raw`\(\dfrac{dy}{dx}=-\dfrac{x}{y}\).`,
          String.raw`At \((3,4)\): \(\dfrac{dy}{dx}=-\dfrac34\).`,
        ],
        answer: String.raw`\(\dfrac{dy}{dx}=-\dfrac xy\); slope at \((3,4)\) is \(-\dfrac34\).`,
      },
      {
        q: String.raw`Find \(\dfrac{dy}{dx}\) for \(x^3+y^3=6xy\).`,
        steps: [
          String.raw`Left side: \(3x^2+3y^2\dfrac{dy}{dx}\).`,
          String.raw`Right side (product rule on \(6xy\)): \(6y+6x\dfrac{dy}{dx}\).`,
          String.raw`Gather \(\dfrac{dy}{dx}\) terms on the left: \(3y^2\dfrac{dy}{dx}-6x\dfrac{dy}{dx}=6y-3x^2\).`,
          String.raw`Factor: \(\dfrac{dy}{dx}(3y^2-6x)=6y-3x^2\).`,
          String.raw`Divide (and cancel a 3): \(\dfrac{dy}{dx}=\dfrac{2y-x^2}{y^2-2x}\).`,
        ],
        answer: String.raw`\(\dfrac{dy}{dx}=\dfrac{2y-x^2}{y^2-2x}\)`,
      },
      {
        q: String.raw`Find \(\dfrac{dy}{dx}\) for \(\sin(xy)=x\).`,
        steps: [
          String.raw`Chain rule on the left: \(\cos(xy)\cdot\dfrac{d}{dx}(xy)\).`,
          String.raw`Product rule inside: \(\dfrac{d}{dx}(xy)=y+x\dfrac{dy}{dx}\). So: \(\cos(xy)\left(y+x\dfrac{dy}{dx}\right)=1\).`,
          String.raw`Distribute: \(y\cos(xy)+x\cos(xy)\dfrac{dy}{dx}=1\).`,
          String.raw`Solve: \(\dfrac{dy}{dx}=\dfrac{1-y\cos(xy)}{x\cos(xy)}\).`,
        ],
        answer: String.raw`\(\dfrac{dy}{dx}=\dfrac{1-y\cos(xy)}{x\cos(xy)}\)`,
      },
      {
        q: String.raw`Use logarithmic differentiation to find \(\dfrac{dy}{dx}\) for \(y=x^x\) (with \(x>0\)).`,
        steps: [
          String.raw`Take \(\ln\) of both sides: \(\ln y=\ln(x^x)=x\ln x\).`,
          String.raw`Differentiate: \(\dfrac1y\dfrac{dy}{dx}=1\cdot\ln x+x\cdot\dfrac1x=\ln x+1\).`,
          String.raw`Multiply by \(y\): \(\dfrac{dy}{dx}=y(\ln x+1)\).`,
          String.raw`Substitute \(y=x^x\): \(\dfrac{dy}{dx}=x^x(\ln x+1)\).`,
        ],
        answer: String.raw`\(\dfrac{dy}{dx}=x^x(\ln x+1)\)`,
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: "related",
    title: "Related Rates",
    icon: "⏱",
    blurb: "How fast one thing changes when another is changing.",
    howto: [
      {
        title: "The related rates recipe",
        steps: [
          String.raw`<b>Draw a picture</b> and label everything that changes with a <b>variable</b> (not a number!).`,
          String.raw`Write down what you <b>know</b> (rates like \(\dfrac{dV}{dt}=100\)) and what you <b>want</b> (like \(\dfrac{dr}{dt}=?\)) and <b>when</b> (like "when \(r=5\)").`,
          String.raw`Find an <b>equation</b> relating the variables (geometry formula, Pythagorean theorem, similar triangles...).`,
          String.raw`If there are extra variables, use similar triangles or other info to eliminate them <b>before</b> differentiating.`,
          String.raw`<b>Differentiate both sides with respect to \(t\)</b> (every variable gets a \(\frac{d}{dt}\)).`,
          String.raw`<b>Now</b> plug in the numbers and solve. (Plugging in before differentiating is the most common mistake!)`,
          String.raw`Answer with units. Negative rate = decreasing.`,
        ],
      },
    ],
    formulas: [
      { name: "Sphere volume", tex: String.raw`V=\tfrac43\pi r^3` },
      { name: "Sphere surface area", tex: String.raw`S=4\pi r^2` },
      { name: "Circle area / circumference", tex: String.raw`A=\pi r^2,\quad C=2\pi r` },
      { name: "Cone volume", tex: String.raw`V=\tfrac13\pi r^2h` },
      { name: "Cylinder volume", tex: String.raw`V=\pi r^2h` },
      { name: "Pythagorean theorem", tex: String.raw`x^2+y^2=z^2` },
    ],
    problems: [
      {
        q: String.raw`Air is pumped into a spherical balloon at \(100\text{ cm}^3/\text{s}\). How fast is the radius increasing when \(r=5\) cm?`,
        steps: [
          String.raw`Know: \(\dfrac{dV}{dt}=100\). Want: \(\dfrac{dr}{dt}\) when \(r=5\).`,
          String.raw`Equation: \(V=\tfrac43\pi r^3\).`,
          String.raw`Differentiate with respect to \(t\): \(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
          String.raw`Plug in: \(100=4\pi(5)^2\dfrac{dr}{dt}=100\pi\dfrac{dr}{dt}\).`,
          String.raw`\(\dfrac{dr}{dt}=\dfrac{100}{100\pi}=\dfrac1\pi\approx0.318\) cm/s.`,
        ],
        answer: String.raw`\(\dfrac1\pi\approx0.318\) cm/s`,
      },
      {
        q: String.raw`A 10 ft ladder leans against a wall. The bottom slides away from the wall at 2 ft/s. How fast is the top sliding down when the bottom is 6 ft from the wall?`,
        steps: [
          String.raw`Let \(x\) = distance from wall to bottom, \(y\) = height of top. Know \(\dfrac{dx}{dt}=2\). Want \(\dfrac{dy}{dt}\) when \(x=6\).`,
          String.raw`Equation (Pythagorean): \(x^2+y^2=100\).`,
          String.raw`When \(x=6\): \(36+y^2=100\Rightarrow y=8\).`,
          String.raw`Differentiate: \(2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0\).`,
          String.raw`Plug in: \(2(6)(2)+2(8)\dfrac{dy}{dt}=0\Rightarrow24+16\dfrac{dy}{dt}=0\Rightarrow\dfrac{dy}{dt}=-\dfrac32\).`,
          String.raw`Negative means \(y\) is decreasing: the top slides down at 1.5 ft/s.`,
        ],
        answer: String.raw`The top slides down at \(\tfrac32\) ft/s (\(\tfrac{dy}{dt}=-\tfrac32\)).`,
      },
      {
        q: String.raw`A stone dropped in a pond makes a circular ripple whose radius grows at 3 cm/s. How fast is the area growing when \(r=10\) cm?`,
        steps: [
          String.raw`Know \(\dfrac{dr}{dt}=3\). Want \(\dfrac{dA}{dt}\) when \(r=10\).`,
          String.raw`\(A=\pi r^2\).`,
          String.raw`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\).`,
          String.raw`\(\dfrac{dA}{dt}=2\pi(10)(3)=60\pi\approx188.5\) cm²/s.`,
        ],
        answer: String.raw`\(60\pi\approx188.5\ \text{cm}^2/\text{s}\)`,
      },
      {
        q: String.raw`A cone-shaped tank (point down) is 12 ft tall with a top radius of 4 ft. Water flows in at 2 ft³/min. How fast is the water level rising when the water is 6 ft deep?`,
        steps: [
          String.raw`Know \(\dfrac{dV}{dt}=2\). Want \(\dfrac{dh}{dt}\) when \(h=6\).`,
          String.raw`\(V=\tfrac13\pi r^2h\) has an extra variable \(r\). Use similar triangles: \(\dfrac rh=\dfrac4{12}\Rightarrow r=\dfrac h3\).`,
          String.raw`Substitute: \(V=\tfrac13\pi\left(\dfrac h3\right)^2h=\dfrac{\pi h^3}{27}\).`,
          String.raw`Differentiate: \(\dfrac{dV}{dt}=\dfrac{3\pi h^2}{27}\dfrac{dh}{dt}=\dfrac{\pi h^2}{9}\dfrac{dh}{dt}\).`,
          String.raw`Plug in: \(2=\dfrac{\pi(36)}{9}\dfrac{dh}{dt}=4\pi\dfrac{dh}{dt}\).`,
          String.raw`\(\dfrac{dh}{dt}=\dfrac{2}{4\pi}=\dfrac1{2\pi}\approx0.159\) ft/min.`,
        ],
        answer: String.raw`\(\dfrac1{2\pi}\approx0.159\) ft/min`,
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: "linear",
    title: "Linear Approximation",
    icon: "≈",
    blurb: "Using the tangent line to estimate values.",
    howto: [
      {
        title: "How to approximate a value with a tangent line",
        steps: [
          String.raw`Pick the function \(f\) and a nice number \(a\) close to the value you want (e.g. for \(\sqrt{26}\), use \(f(x)=\sqrt x\) and \(a=25\)).`,
          String.raw`Find \(f(a)\) and \(f'(a)\).`,
          String.raw`Build the tangent line \(L(x)=f(a)+f'(a)(x-a)\).`,
          String.raw`Plug in the value you want into \(L\).`,
          String.raw`If \(f\) is concave up, the approximation is an <b>under</b>estimate; concave down &rArr; <b>over</b>estimate.`,
        ],
      },
    ],
    formulas: [
      { name: "Linearization", tex: String.raw`L(x)=f(a)+f'(a)(x-a)` },
      { name: "Differential", tex: String.raw`dy=f'(x)\,dx` },
    ],
    problems: [
      {
        q: String.raw`Use linear approximation to estimate \(\sqrt{26}\).`,
        steps: [
          String.raw`\(f(x)=\sqrt x\), \(a=25\) (perfect square near 26).`,
          String.raw`\(f(25)=5\). \(f'(x)=\dfrac1{2\sqrt x}\Rightarrow f'(25)=\dfrac1{10}\).`,
          String.raw`\(L(x)=5+\dfrac1{10}(x-25)\).`,
          String.raw`\(L(26)=5+\dfrac1{10}=5.1\). (Actual: \(5.0990\ldots\) &mdash; very close!)`,
        ],
        answer: String.raw`\(\sqrt{26}\approx5.1\)`,
      },
      {
        q: String.raw`Use linear approximation to estimate \(\sqrt[3]{8.06}\).`,
        steps: [
          String.raw`\(f(x)=x^{1/3}\), \(a=8\).`,
          String.raw`\(f(8)=2\). \(f'(x)=\tfrac13x^{-2/3}\Rightarrow f'(8)=\tfrac13\cdot\tfrac14=\tfrac1{12}\).`,
          String.raw`\(L(x)=2+\dfrac1{12}(x-8)\).`,
          String.raw`\(L(8.06)=2+\dfrac{0.06}{12}=2+0.005=2.005\).`,
        ],
        answer: String.raw`\(\sqrt[3]{8.06}\approx2.005\)`,
      },
      {
        q: String.raw`Find the linearization of \(f(x)=\ln x\) at \(a=1\), and use it to estimate \(\ln(1.1)\).`,
        steps: [
          String.raw`\(f(1)=\ln1=0\). \(f'(x)=\dfrac1x\Rightarrow f'(1)=1\).`,
          String.raw`\(L(x)=0+1(x-1)=x-1\).`,
          String.raw`\(\ln(1.1)\approx L(1.1)=0.1\). (Actual: \(0.0953\ldots\). It's an overestimate because \(\ln x\) is concave down.)`,
        ],
        answer: String.raw`\(L(x)=x-1\); \(\ln(1.1)\approx0.1\)`,
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: "curves",
    title: "Extrema & Curve Sketching",
    icon: "⛰",
    blurb: "Increasing/decreasing, max/min, concavity, inflection points.",
    howto: [
      {
        title: "Increasing / decreasing and local max/min (First Derivative Test)",
        steps: [
          String.raw`Find \(f'(x)\).`,
          String.raw`Find <b>critical numbers</b>: where \(f'(x)=0\) or \(f'(x)\) is undefined (and \(f\) is defined).`,
          String.raw`Put them on a number line. Pick a test number in each interval and check the <b>sign</b> of \(f'\).`,
          String.raw`\(f'>0\) &rArr; increasing ↗. \(f'<0\) &rArr; decreasing ↘.`,
          String.raw`↗ then ↘ = <b>local max</b>. ↘ then ↗ = <b>local min</b>. No sign change = neither.`,
          String.raw`Give the max/min <b>value</b> by plugging the \(x\) into the original \(f\).`,
        ],
      },
      {
        title: "Concavity and inflection points",
        steps: [
          String.raw`Find \(f''(x)\). Find where \(f''=0\) or undefined.`,
          String.raw`Test the sign of \(f''\) in each interval: \(f''>0\) &rArr; concave up ∪, \(f''<0\) &rArr; concave down ∩.`,
          String.raw`<b>Inflection point</b>: where concavity actually changes.`,
          String.raw`<b>Second Derivative Test</b>: at a critical number \(c\) with \(f'(c)=0\): \(f''(c)>0\) &rArr; local min, \(f''(c)<0\) &rArr; local max, \(f''(c)=0\) &rArr; test fails, use the first derivative test.`,
        ],
      },
      {
        title: "Absolute max/min on a closed interval [a, b] (Closed Interval Method)",
        steps: [
          String.raw`Find the critical numbers inside \((a,b)\).`,
          String.raw`Plug the critical numbers <b>and</b> the endpoints \(a\) and \(b\) into \(f\).`,
          String.raw`Biggest output = absolute max. Smallest output = absolute min.`,
        ],
      },
    ],
    formulas: [
      { name: "Critical number", tex: String.raw`f'(c)=0 \text{ or } f'(c) \text{ undefined}` },
      { name: "Increasing / decreasing", tex: String.raw`f'>0 \Rightarrow \nearrow,\qquad f'<0\Rightarrow\searrow` },
      { name: "Concavity", tex: String.raw`f''>0 \Rightarrow \cup,\qquad f''<0\Rightarrow\cap` },
      { name: "Second derivative test", tex: String.raw`f'(c)=0:\ f''(c)>0\Rightarrow\text{min},\ f''(c)<0\Rightarrow\text{max}` },
    ],
    problems: [
      {
        q: String.raw`For \(f(x)=x^3-3x^2-9x+5\), find where \(f\) is increasing/decreasing, the local extrema, and where it's concave up/down.`,
        steps: [
          String.raw`\(f'(x)=3x^2-6x-9=3(x^2-2x-3)=3(x-3)(x+1)\). Critical numbers: \(x=-1,\ 3\).`,
          String.raw`Sign test: \(x=-2\): \(3(-5)(-1)=15>0\) ↗. &nbsp; \(x=0\): \(3(-3)(1)=-9<0\) ↘. &nbsp; \(x=4\): \(3(1)(5)=15>0\) ↗.`,
          String.raw`Increasing on \((-\infty,-1)\) and \((3,\infty)\); decreasing on \((-1,3)\).`,
          String.raw`Local max at \(x=-1\): \(f(-1)=-1-3+9+5=10\). Local min at \(x=3\): \(f(3)=27-27-27+5=-22\).`,
          String.raw`\(f''(x)=6x-6=0\Rightarrow x=1\). For \(x<1\), \(f''<0\) (concave down); for \(x>1\), \(f''>0\) (concave up).`,
          String.raw`Inflection point at \(x=1\): \(f(1)=1-3-9+5=-6\), so \((1,-6)\).`,
        ],
        answer: String.raw`↗ on \((-\infty,-1)\cup(3,\infty)\), ↘ on \((-1,3)\). Local max \((-1,10)\), local min \((3,-22)\). Concave down on \((-\infty,1)\), up on \((1,\infty)\), inflection point \((1,-6)\).`,
      },
      {
        q: String.raw`Find the absolute max and min of \(f(x)=x^3-12x\) on \([-3,5]\).`,
        steps: [
          String.raw`\(f'(x)=3x^2-12=3(x-2)(x+2)=0\Rightarrow x=\pm2\). Both are in \([-3,5]\).`,
          String.raw`Endpoints: \(f(-3)=-27+36=9\), \(f(5)=125-60=65\).`,
          String.raw`Critical numbers: \(f(-2)=-8+24=16\), \(f(2)=8-24=-16\).`,
          String.raw`Compare \(9,\ 65,\ 16,\ -16\). Largest is 65, smallest is \(-16\).`,
        ],
        answer: String.raw`Absolute max \(65\) at \(x=5\); absolute min \(-16\) at \(x=2\).`,
      },
      {
        q: String.raw`Use the second derivative test on \(f(x)=x^4-4x^3\). Also find the inflection points.`,
        steps: [
          String.raw`\(f'(x)=4x^3-12x^2=4x^2(x-3)\). Critical numbers: \(x=0,\ 3\).`,
          String.raw`\(f''(x)=12x^2-24x=12x(x-2)\).`,
          String.raw`\(f''(3)=108-72=36>0\) &rArr; local min at \(x=3\): \(f(3)=81-108=-27\).`,
          String.raw`\(f''(0)=0\) &rArr; test fails. First derivative test: \(4x^2\ge0\) and \(x-3<0\) near 0, so \(f'<0\) on both sides &rArr; no extremum at \(x=0\).`,
          String.raw`Inflection: \(f''=0\) at \(x=0,2\). Signs: \(x<0\): \(+\); \(0<x<2\): \(-\); \(x>2\): \(+\). Concavity changes at both.`,
          String.raw`\(f(0)=0\), \(f(2)=16-32=-16\).`,
        ],
        answer: String.raw`Local min at \((3,-27)\); no extremum at \(x=0\). Inflection points \((0,0)\) and \((2,-16)\).`,
      },
      {
        q: String.raw`Find the local extrema and inflection point of \(f(x)=xe^{-x}\).`,
        steps: [
          String.raw`Product rule: \(f'(x)=e^{-x}+x(-e^{-x})=e^{-x}(1-x)\).`,
          String.raw`\(e^{-x}\) is never 0, so the only critical number is \(x=1\). For \(x<1\), \(f'>0\); for \(x>1\), \(f'<0\) &rArr; local max.`,
          String.raw`\(f(1)=1\cdot e^{-1}=\dfrac1e\).`,
          String.raw`\(f''(x)=-e^{-x}(1-x)+e^{-x}(-1)=e^{-x}(x-2)\). Zero at \(x=2\), sign changes from \(-\) to \(+\).`,
          String.raw`\(f(2)=2e^{-2}=\dfrac{2}{e^2}\).`,
        ],
        answer: String.raw`Local max \(\left(1,\tfrac1e\right)\); inflection point \(\left(2,\tfrac{2}{e^2}\right)\).`,
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: "mvt",
    title: "Mean Value Theorem",
    icon: "⟋",
    blurb: "Rolle's Theorem and the MVT.",
    howto: [
      {
        title: "Using the Mean Value Theorem",
        steps: [
          String.raw`Check the conditions: \(f\) is <b>continuous on \([a,b]\)</b> and <b>differentiable on \((a,b)\)</b>.`,
          String.raw`Find the average slope: \(\dfrac{f(b)-f(a)}{b-a}\).`,
          String.raw`Set \(f'(c)\) equal to that average slope and solve for \(c\).`,
          String.raw`Keep only the \(c\) values that are inside \((a,b)\).`,
          String.raw`<b>Rolle's Theorem</b> is the special case \(f(a)=f(b)\): then some \(f'(c)=0\).`,
        ],
      },
    ],
    formulas: [
      { name: "Mean Value Theorem", tex: String.raw`f'(c)=\frac{f(b)-f(a)}{b-a}` },
      { name: "Rolle's Theorem", tex: String.raw`f(a)=f(b)\Rightarrow f'(c)=0 \text{ for some } c\in(a,b)` },
    ],
    problems: [
      {
        q: String.raw`Find all \(c\) that satisfy the MVT for \(f(x)=x^2\) on \([1,3]\).`,
        steps: [
          String.raw`\(f\) is a polynomial &rArr; continuous and differentiable everywhere. ✓`,
          String.raw`Average slope: \(\dfrac{f(3)-f(1)}{3-1}=\dfrac{9-1}{2}=4\).`,
          String.raw`\(f'(c)=2c=4\Rightarrow c=2\).`,
          String.raw`\(2\) is in \((1,3)\). ✓`,
        ],
        answer: String.raw`\(c=2\)`,
      },
      {
        q: String.raw`Find all \(c\) that satisfy the MVT for \(f(x)=x^3-x\) on \([0,2]\).`,
        steps: [
          String.raw`Polynomial &rArr; conditions satisfied.`,
          String.raw`\(f(2)=8-2=6\), \(f(0)=0\). Average slope: \(\dfrac{6-0}{2-0}=3\).`,
          String.raw`\(f'(c)=3c^2-1=3\Rightarrow c^2=\dfrac43\Rightarrow c=\pm\dfrac{2}{\sqrt3}\).`,
          String.raw`Only \(c=\dfrac2{\sqrt3}\approx1.155\) is in \((0,2)\).`,
        ],
        answer: String.raw`\(c=\dfrac{2}{\sqrt3}\approx1.155\)`,
      },
      {
        q: String.raw`Verify Rolle's Theorem for \(f(x)=x^2-4x+1\) on \([0,4]\).`,
        steps: [
          String.raw`Polynomial &rArr; continuous & differentiable.`,
          String.raw`\(f(0)=1\) and \(f(4)=16-16+1=1\). Equal ✓.`,
          String.raw`\(f'(c)=2c-4=0\Rightarrow c=2\), which is in \((0,4)\).`,
        ],
        answer: String.raw`\(c=2\)`,
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: "optimization",
    title: "Optimization",
    icon: "★",
    blurb: "Word problems: make something as big or small as possible.",
    howto: [
      {
        title: "The optimization recipe",
        steps: [
          String.raw`<b>Draw a picture</b> and label the variables.`,
          String.raw`Write the formula for the thing you want to <b>maximize or minimize</b> (the "objective").`,
          String.raw`Write the <b>constraint</b> equation (the fixed amount: fencing, volume, sum...).`,
          String.raw`Use the constraint to solve for one variable, and substitute so the objective has <b>only one variable</b>.`,
          String.raw`Figure out the domain (e.g. lengths must be positive).`,
          String.raw`Take the derivative, set it equal to 0, solve.`,
          String.raw`Confirm it's a max/min (second derivative test, first derivative test, or check endpoints).`,
          String.raw`Answer the actual question asked (dimensions? the max value? both?).`,
        ],
      },
    ],
    formulas: [
      { name: "Rectangle", tex: String.raw`A=xy,\quad P=2x+2y` },
      { name: "Box (open top, square base)", tex: String.raw`V=x^2h,\quad S=x^2+4xh` },
      { name: "Cylinder", tex: String.raw`V=\pi r^2h,\quad S=2\pi r^2+2\pi rh` },
      { name: "Distance", tex: String.raw`d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}` },
    ],
    problems: [
      {
        q: String.raw`A farmer has 1200 ft of fencing to enclose a rectangular field along a straight river (no fence needed along the river). What dimensions give the largest area?`,
        steps: [
          String.raw`Let \(x\) = each side perpendicular to the river, \(y\) = side parallel to the river.`,
          String.raw`Objective: \(A=xy\). Constraint: \(2x+y=1200\Rightarrow y=1200-2x\).`,
          String.raw`Substitute: \(A(x)=x(1200-2x)=1200x-2x^2\), for \(0<x<600\).`,
          String.raw`\(A'(x)=1200-4x=0\Rightarrow x=300\).`,
          String.raw`\(A''(x)=-4<0\) &rArr; maximum ✓. Then \(y=1200-600=600\).`,
          String.raw`Max area: \(300\times600=180{,}000\) ft².`,
        ],
        answer: String.raw`300 ft by 600 ft (the 600 ft side along the river); area \(180{,}000\) ft².`,
      },
      {
        q: String.raw`An open-top box is made from a 12 in by 12 in sheet by cutting equal squares from the corners and folding up the sides. What size squares give the largest volume?`,
        steps: [
          String.raw`Let \(x\) = side of each cut square = height of the box. Base is \((12-2x)\) by \((12-2x)\).`,
          String.raw`\(V(x)=x(12-2x)^2\), domain \(0<x<6\).`,
          String.raw`Product + chain rule: \(V'(x)=(12-2x)^2+x\cdot2(12-2x)(-2)=(12-2x)\big[(12-2x)-4x\big]=(12-2x)(12-6x)\).`,
          String.raw`\(V'=0\Rightarrow x=6\) (not in domain; gives \(V=0\)) or \(x=2\).`,
          String.raw`\(V(2)=2(8)^2=128\). Check: \(V\to0\) at both ends of the domain, so \(x=2\) is the max.`,
        ],
        answer: String.raw`Cut 2 in squares; max volume \(128\text{ in}^3\).`,
      },
      {
        q: String.raw`Find the point on the curve \(y=\sqrt x\) closest to the point \((3,0)\).`,
        steps: [
          String.raw`Distance from \((x,\sqrt x)\) to \((3,0)\): \(d=\sqrt{(x-3)^2+(\sqrt x)^2}\).`,
          String.raw`Trick: minimizing \(d\) is the same as minimizing \(d^2\) (no square root!). \(D(x)=(x-3)^2+x=x^2-5x+9\).`,
          String.raw`\(D'(x)=2x-5=0\Rightarrow x=\tfrac52\).`,
          String.raw`\(D''=2>0\) &rArr; minimum ✓. Point: \(\left(\tfrac52,\sqrt{\tfrac52}\right)\).`,
          String.raw`(Minimum distance: \(\sqrt{D(5/2)}=\sqrt{\tfrac{25}4-\tfrac{25}2+9}=\sqrt{\tfrac{11}{4}}=\tfrac{\sqrt{11}}2\).)`,
        ],
        answer: String.raw`\(\left(\tfrac52,\ \sqrt{\tfrac52}\right)\approx(2.5,\ 1.581)\)`,
      },
      {
        q: String.raw`A cylindrical can must hold \(500\text{ cm}^3\). Find the radius that uses the least material (minimum surface area, including top and bottom).`,
        steps: [
          String.raw`Objective: \(S=2\pi r^2+2\pi rh\). Constraint: \(\pi r^2h=500\Rightarrow h=\dfrac{500}{\pi r^2}\).`,
          String.raw`Substitute: \(S(r)=2\pi r^2+2\pi r\cdot\dfrac{500}{\pi r^2}=2\pi r^2+\dfrac{1000}{r}\), \(r>0\).`,
          String.raw`\(S'(r)=4\pi r-\dfrac{1000}{r^2}=0\Rightarrow4\pi r^3=1000\Rightarrow r^3=\dfrac{250}{\pi}\).`,
          String.raw`\(r=\sqrt[3]{\dfrac{250}{\pi}}\approx4.30\) cm. \(S''(r)=4\pi+\dfrac{2000}{r^3}>0\) &rArr; minimum ✓.`,
          String.raw`Height: \(h=\dfrac{500}{\pi r^2}\approx8.60\) cm. (Fun fact: the best can has \(h=2r\) &mdash; height equals diameter.)`,
        ],
        answer: String.raw`\(r=\sqrt[3]{250/\pi}\approx4.30\) cm (and \(h\approx8.60\) cm)`,
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: "lhopital",
    title: "L'Hôpital's Rule",
    icon: "∞",
    blurb: "A shortcut for 0/0 and ∞/∞ limits.",
    howto: [
      {
        title: "Using L'Hôpital's Rule",
        steps: [
          String.raw`<b>Check first!</b> Plug in. It only works for \(\dfrac00\) or \(\dfrac{\pm\infty}{\pm\infty}\).`,
          String.raw`Take the derivative of the top and the derivative of the bottom <b>separately</b> (this is NOT the quotient rule).`,
          String.raw`Try the limit again. If it's still \(\frac00\) or \(\frac\infty\infty\), you can use the rule again.`,
          String.raw`<b>\(0\cdot\infty\)</b>: rewrite as a fraction, e.g. \(fg=\dfrac{f}{1/g}\).`,
          String.raw`<b>\(1^\infty,\ 0^0,\ \infty^0\)</b> (variable in the exponent): let \(y=\) the expression, take \(\ln y\), find that limit, then the answer is \(e^{\text{that}}\).`,
        ],
      },
    ],
    formulas: [
      { name: "L'Hôpital's Rule", tex: String.raw`\lim\frac{f(x)}{g(x)}=\lim\frac{f'(x)}{g'(x)}\ \text{ if } \tfrac00 \text{ or } \tfrac{\infty}{\infty}` },
      { name: "Growth order (as x → ∞)", tex: String.raw`\ln x \ll x^n \ll e^x` },
    ],
    problems: [
      {
        q: String.raw`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^x-1}{x}\).`,
        steps: [
          String.raw`Plug in: \(\dfrac{1-1}{0}=\dfrac00\) ✓ L'Hôpital applies.`,
          String.raw`Derivatives: top \(e^x\), bottom \(1\).`,
          String.raw`\(\lim_{x\to0}\dfrac{e^x}{1}=e^0=1\).`,
        ],
        answer: String.raw`\(1\)`,
      },
      {
        q: String.raw`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{\ln x}{x}\).`,
        steps: [
          String.raw`Form: \(\dfrac{\infty}{\infty}\) ✓.`,
          String.raw`Derivatives: \(\dfrac{1/x}{1}=\dfrac1x\).`,
          String.raw`\(\lim_{x\to\infty}\dfrac1x=0\).`,
        ],
        answer: String.raw`\(0\)`,
      },
      {
        q: String.raw`Evaluate \(\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}\).`,
        steps: [
          String.raw`Form: \(\dfrac{1-1}{0}=\dfrac00\) ✓.`,
          String.raw`Apply once: \(\dfrac{\sin x}{2x}\). Still \(\dfrac00\).`,
          String.raw`Apply again: \(\dfrac{\cos x}{2}\).`,
          String.raw`Plug in: \(\dfrac{\cos0}{2}=\dfrac12\).`,
        ],
        answer: String.raw`\(\dfrac12\)`,
      },
      {
        q: String.raw`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{x^2}{e^x}\).`,
        steps: [
          String.raw`Form \(\dfrac\infty\infty\). Apply: \(\dfrac{2x}{e^x}\). Still \(\dfrac\infty\infty\).`,
          String.raw`Apply again: \(\dfrac{2}{e^x}\).`,
          String.raw`As \(x\to\infty\), \(e^x\to\infty\), so \(\dfrac2{e^x}\to0\).`,
        ],
        answer: String.raw`\(0\)`,
      },
      {
        q: String.raw`Evaluate \(\displaystyle\lim_{x\to0^+}x\ln x\).`,
        steps: [
          String.raw`Form: \(0\cdot(-\infty)\). Rewrite as a fraction: \(x\ln x=\dfrac{\ln x}{1/x}\), now \(\dfrac{-\infty}{\infty}\).`,
          String.raw`Derivatives: \(\dfrac{1/x}{-1/x^2}\).`,
          String.raw`Simplify: \(\dfrac1x\cdot\dfrac{x^2}{-1}=-x\).`,
          String.raw`\(\lim_{x\to0^+}(-x)=0\).`,
        ],
        answer: String.raw`\(0\)`,
      },
      {
        q: String.raw`Evaluate \(\displaystyle\lim_{x\to\infty}\left(1+\frac1x\right)^x\).`,
        steps: [
          String.raw`Form \(1^\infty\). Let \(y=\left(1+\frac1x\right)^x\), so \(\ln y=x\ln\!\left(1+\frac1x\right)=\dfrac{\ln(1+\frac1x)}{1/x}\) &mdash; form \(\dfrac00\).`,
          String.raw`Derivative of top: \(\dfrac{1}{1+\frac1x}\cdot\left(-\dfrac1{x^2}\right)\). Derivative of bottom: \(-\dfrac1{x^2}\).`,
          String.raw`The \(-\dfrac1{x^2}\) cancels: \(\dfrac{1}{1+\frac1x}\to\dfrac11=1\). So \(\ln y\to1\).`,
          String.raw`Undo the log: \(y\to e^1=e\).`,
        ],
        answer: String.raw`\(e\)`,
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: "antiderivatives",
    title: "Antiderivatives",
    icon: "∫",
    blurb: "Going backwards: indefinite integrals and initial value problems.",
    howto: [
      {
        title: "Finding antiderivatives",
        steps: [
          String.raw`Ask: "what function has <b>this</b> as its derivative?"`,
          String.raw`<b>Power rule backwards:</b> add 1 to the power, then divide by the new power: \(\int x^n\,dx=\dfrac{x^{n+1}}{n+1}+C\) (\(n\neq-1\)).`,
          String.raw`<b>Rewrite first</b>, just like derivatives: roots &rarr; fractional powers, \(\frac{1}{x^n}\) &rarr; \(x^{-n}\). Split fractions by dividing each term.`,
          String.raw`\(\int\dfrac1x\,dx=\ln|x|+C\) (this is the \(n=-1\) case).`,
          String.raw`<b>Always add \(+C\)</b> for indefinite integrals!`,
          String.raw`You can check your answer by differentiating it.`,
        ],
      },
      {
        title: "Initial value problems (finding C)",
        steps: [
          String.raw`Integrate to get the general answer with \(+C\).`,
          String.raw`Plug in the given point (like \(f(1)=10\)) and solve for \(C\).`,
          String.raw`For a second derivative, integrate twice; you'll get two constants.`,
          String.raw`Motion: \(a(t)\xrightarrow{\int}v(t)\xrightarrow{\int}s(t)\).`,
        ],
      },
    ],
    formulas: [
      { name: "Power rule", tex: String.raw`\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\quad(n\neq-1)` },
      { name: "1/x", tex: String.raw`\int\frac1x\,dx=\ln|x|+C` },
      { name: "Exponential", tex: String.raw`\int e^x\,dx=e^x+C,\qquad \int a^x\,dx=\frac{a^x}{\ln a}+C` },
      { name: "Sine / cosine", tex: String.raw`\int\cos x\,dx=\sin x+C,\qquad\int\sin x\,dx=-\cos x+C` },
      { name: "Secant squared", tex: String.raw`\int\sec^2x\,dx=\tan x+C` },
      { name: "Sec tan", tex: String.raw`\int\sec x\tan x\,dx=\sec x+C` },
      { name: "Inverse trig", tex: String.raw`\int\frac{dx}{1+x^2}=\arctan x+C,\qquad\int\frac{dx}{\sqrt{1-x^2}}=\arcsin x+C` },
    ],
    problems: [
      {
        q: String.raw`Find \(\displaystyle\int(6x^2-4x+5)\,dx\).`,
        steps: [
          String.raw`\(\int6x^2\,dx=6\cdot\dfrac{x^3}3=2x^3\).`,
          String.raw`\(\int-4x\,dx=-4\cdot\dfrac{x^2}2=-2x^2\).`,
          String.raw`\(\int5\,dx=5x\).`,
          String.raw`Combine and add \(C\): \(2x^3-2x^2+5x+C\).`,
        ],
        answer: String.raw`\(2x^3-2x^2+5x+C\)`,
      },
      {
        q: String.raw`Find \(\displaystyle\int\left(\sqrt x+\frac1{x^2}\right)dx\).`,
        steps: [
          String.raw`Rewrite: \(\int(x^{1/2}+x^{-2})\,dx\).`,
          String.raw`\(\int x^{1/2}\,dx=\dfrac{x^{3/2}}{3/2}=\tfrac23x^{3/2}\).`,
          String.raw`\(\int x^{-2}\,dx=\dfrac{x^{-1}}{-1}=-\dfrac1x\).`,
          String.raw`Answer: \(\tfrac23x^{3/2}-\dfrac1x+C\).`,
        ],
        answer: String.raw`\(\tfrac23x^{3/2}-\dfrac1x+C\)`,
      },
      {
        q: String.raw`Find \(\displaystyle\int\left(3\cos x-2e^x+\frac4x\right)dx\).`,
        steps: [
          String.raw`\(\int3\cos x\,dx=3\sin x\).`,
          String.raw`\(\int-2e^x\,dx=-2e^x\).`,
          String.raw`\(\int\dfrac4x\,dx=4\ln|x|\).`,
          String.raw`Answer: \(3\sin x-2e^x+4\ln|x|+C\).`,
        ],
        answer: String.raw`\(3\sin x-2e^x+4\ln|x|+C\)`,
      },
      {
        q: String.raw`Find \(\displaystyle\int\frac{x^2+1}{x}\,dx\).`,
        steps: [
          String.raw`Split the fraction: \(\dfrac{x^2}{x}+\dfrac1x=x+\dfrac1x\).`,
          String.raw`\(\int x\,dx=\dfrac{x^2}2\), and \(\int\dfrac1x\,dx=\ln|x|\).`,
          String.raw`Answer: \(\dfrac{x^2}{2}+\ln|x|+C\).`,
        ],
        answer: String.raw`\(\dfrac{x^2}{2}+\ln|x|+C\)`,
      },
      {
        q: String.raw`Find \(f(x)\) if \(f'(x)=6x+2\) and \(f(1)=10\).`,
        steps: [
          String.raw`Integrate: \(f(x)=3x^2+2x+C\).`,
          String.raw`Use \(f(1)=10\): \(3(1)^2+2(1)+C=10\Rightarrow5+C=10\Rightarrow C=5\).`,
          String.raw`\(f(x)=3x^2+2x+5\).`,
        ],
        answer: String.raw`\(f(x)=3x^2+2x+5\)`,
      },
      {
        q: String.raw`A ball is thrown upward from the ground at 48 ft/s. Its acceleration is \(a(t)=-32\) ft/s². Find its height function and its maximum height.`,
        steps: [
          String.raw`\(v(t)=\int-32\,dt=-32t+C_1\). Since \(v(0)=48\): \(C_1=48\), so \(v(t)=-32t+48\).`,
          String.raw`\(s(t)=\int(-32t+48)\,dt=-16t^2+48t+C_2\). Since \(s(0)=0\): \(C_2=0\).`,
          String.raw`Max height when \(v(t)=0\): \(-32t+48=0\Rightarrow t=1.5\) s.`,
          String.raw`\(s(1.5)=-16(2.25)+48(1.5)=-36+72=36\) ft.`,
        ],
        answer: String.raw`\(s(t)=-16t^2+48t\); max height \(36\) ft at \(t=1.5\) s.`,
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: "definite",
    title: "Definite Integrals & FTC",
    icon: "▭",
    blurb: "Riemann sums, the Fundamental Theorem of Calculus, area.",
    howto: [
      {
        title: "Evaluating a definite integral (FTC Part 2)",
        steps: [
          String.raw`Find an antiderivative \(F(x)\) (no \(+C\) needed).`,
          String.raw`Compute \(F(b)-F(a)\): <b>top minus bottom</b>.`,
          String.raw`Use parentheses when subtracting! \([F(x)]_a^b=F(b)-F(a)\).`,
        ],
      },
      {
        title: "Derivative of an integral (FTC Part 1)",
        steps: [
          String.raw`\(\dfrac{d}{dx}\displaystyle\int_a^x f(t)\,dt=f(x)\): just plug \(x\) into the function.`,
          String.raw`If the top limit is a function \(g(x)\): plug in \(g(x)\) <b>and multiply by \(g'(x)\)</b> (chain rule).`,
          String.raw`If \(x\) is on the bottom, flip the limits and add a negative sign.`,
        ],
      },
      {
        title: "Riemann sums",
        steps: [
          String.raw`Width of each rectangle: \(\Delta x=\dfrac{b-a}{n}\).`,
          String.raw`List the \(x\)-values: \(a,\ a+\Delta x,\ a+2\Delta x,\ \ldots,\ b\).`,
          String.raw`<b>Left sum:</b> use all but the last. <b>Right sum:</b> use all but the first. <b>Midpoint:</b> use the middle of each subinterval.`,
          String.raw`Sum \(=\Delta x\,[f(x_1)+f(x_2)+\cdots]\).`,
        ],
      },
      {
        title: "Area between curves",
        steps: [
          String.raw`Find where the curves intersect (set them equal) to get the limits.`,
          String.raw`Figure out which is on <b>top</b> (plug in a test point).`,
          String.raw`Area \(=\displaystyle\int_a^b(\text{top}-\text{bottom})\,dx\).`,
        ],
      },
    ],
    formulas: [
      { name: "FTC Part 2", tex: String.raw`\int_a^b f(x)\,dx=F(b)-F(a)` },
      { name: "FTC Part 1", tex: String.raw`\frac{d}{dx}\int_a^{x}f(t)\,dt=f(x)` },
      { name: "FTC Part 1 + chain rule", tex: String.raw`\frac{d}{dx}\int_a^{g(x)}f(t)\,dt=f(g(x))\,g'(x)` },
      { name: "Riemann sum", tex: String.raw`\Delta x=\frac{b-a}{n},\quad \int_a^b f(x)\,dx\approx\sum_{i=1}^n f(x_i^*)\Delta x` },
      { name: "Average value", tex: String.raw`f_{\text{avg}}=\frac{1}{b-a}\int_a^b f(x)\,dx` },
      { name: "Area between curves", tex: String.raw`A=\int_a^b\big(f(x)-g(x)\big)\,dx` },
      { name: "Properties", tex: String.raw`\int_a^a f=0,\quad\int_b^a f=-\int_a^b f,\quad\int_a^b f+\int_b^c f=\int_a^c f` },
      { name: "Sum formulas", tex: String.raw`\sum_{i=1}^n i=\frac{n(n+1)}2,\quad\sum_{i=1}^n i^2=\frac{n(n+1)(2n+1)}6` },
    ],
    problems: [
      {
        q: String.raw`Evaluate \(\displaystyle\int_1^3(2x+1)\,dx\).`,
        steps: [
          String.raw`Antiderivative: \(F(x)=x^2+x\).`,
          String.raw`\(F(3)=9+3=12\).`,
          String.raw`\(F(1)=1+1=2\).`,
          String.raw`\(F(3)-F(1)=12-2=10\).`,
        ],
        answer: String.raw`\(10\)`,
      },
      {
        q: String.raw`Evaluate \(\displaystyle\int_0^\pi\sin x\,dx\).`,
        steps: [
          String.raw`Antiderivative: \(-\cos x\).`,
          String.raw`\([-\cos x]_0^\pi=(-\cos\pi)-(-\cos0)\).`,
          String.raw`\(=(-(-1))-(-1)=1+1=2\).`,
        ],
        answer: String.raw`\(2\)`,
      },
      {
        q: String.raw`Evaluate \(\displaystyle\int_1^4\frac{1}{\sqrt x}\,dx\).`,
        steps: [
          String.raw`Rewrite: \(x^{-1/2}\). Antiderivative: \(\dfrac{x^{1/2}}{1/2}=2\sqrt x\).`,
          String.raw`\([2\sqrt x]_1^4=2\sqrt4-2\sqrt1=4-2=2\).`,
        ],
        answer: String.raw`\(2\)`,
      },
      {
        q: String.raw`Find \(\displaystyle\frac{d}{dx}\int_0^{x^2}\cos t\,dt\).`,
        steps: [
          String.raw`FTC Part 1 with chain rule. Upper limit \(g(x)=x^2\), \(g'(x)=2x\).`,
          String.raw`Plug \(x^2\) into the integrand: \(\cos(x^2)\).`,
          String.raw`Multiply by \(g'(x)\): \(2x\cos(x^2)\).`,
        ],
        answer: String.raw`\(2x\cos(x^2)\)`,
      },
      {
        q: String.raw`Approximate \(\displaystyle\int_0^2x^2\,dx\) using a left Riemann sum and a right Riemann sum with \(n=4\).`,
        steps: [
          String.raw`\(\Delta x=\dfrac{2-0}{4}=0.5\). Points: \(0,\ 0.5,\ 1,\ 1.5,\ 2\).`,
          String.raw`Left sum uses \(0,0.5,1,1.5\): \(L_4=0.5\,[0+0.25+1+2.25]=0.5(3.5)=1.75\).`,
          String.raw`Right sum uses \(0.5,1,1.5,2\): \(R_4=0.5\,[0.25+1+2.25+4]=0.5(7.5)=3.75\).`,
          String.raw`(Exact value: \(\left[\frac{x^3}3\right]_0^2=\frac83\approx2.67\), which is between them, as expected for an increasing function.)`,
        ],
        answer: String.raw`\(L_4=1.75\), \(R_4=3.75\)`,
      },
      {
        q: String.raw`Find the average value of \(f(x)=x^2\) on \([0,3]\).`,
        steps: [
          String.raw`\(f_{\text{avg}}=\dfrac1{3-0}\displaystyle\int_0^3x^2\,dx\).`,
          String.raw`\(\displaystyle\int_0^3x^2\,dx=\left[\frac{x^3}3\right]_0^3=9-0=9\).`,
          String.raw`\(f_{\text{avg}}=\dfrac13\cdot9=3\).`,
        ],
        answer: String.raw`\(3\)`,
      },
      {
        q: String.raw`Find the area between \(y=x\) and \(y=x^2\).`,
        steps: [
          String.raw`Intersections: \(x=x^2\Rightarrow x^2-x=0\Rightarrow x(x-1)=0\Rightarrow x=0,1\).`,
          String.raw`Which is on top? Test \(x=0.5\): \(y=x\) gives \(0.5\), \(y=x^2\) gives \(0.25\). So \(y=x\) is on top.`,
          String.raw`\(A=\displaystyle\int_0^1(x-x^2)\,dx=\left[\frac{x^2}2-\frac{x^3}3\right]_0^1\).`,
          String.raw`\(=\dfrac12-\dfrac13=\dfrac16\).`,
        ],
        answer: String.raw`\(\dfrac16\)`,
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: "usub",
    title: "U-Substitution",
    icon: "u",
    blurb: "The chain rule in reverse for integrals.",
    howto: [
      {
        title: "U-substitution steps",
        steps: [
          String.raw`Pick \(u\) = the "inside" function, usually something whose derivative also appears (maybe off by a constant). Good guesses: inside parentheses, inside a root, in an exponent, or a denominator.`,
          String.raw`Find \(du=u'\,dx\).`,
          String.raw`Rewrite the <b>whole</b> integral in terms of \(u\) &mdash; no \(x\)'s left! If you're off by a constant, divide it out (e.g. \(x\,dx=\tfrac12du\)).`,
          String.raw`Integrate with respect to \(u\).`,
          String.raw`Substitute back \(u=\) (whatever it was) and add \(+C\).`,
        ],
      },
      {
        title: "U-sub with definite integrals",
        steps: [
          String.raw`<b>Option A:</b> change the limits too: new limits are \(u(a)\) and \(u(b)\). Then you never go back to \(x\).`,
          String.raw`<b>Option B:</b> do it as an indefinite integral, substitute back to \(x\), then use the original limits.`,
          String.raw`Don't mix them up (using \(x\)-limits with a \(u\) expression is a classic mistake).`,
        ],
      },
    ],
    formulas: [
      { name: "Substitution", tex: String.raw`\int f(g(x))\,g'(x)\,dx=\int f(u)\,du,\quad u=g(x)` },
      { name: "Definite version", tex: String.raw`\int_a^b f(g(x))g'(x)\,dx=\int_{g(a)}^{g(b)}f(u)\,du` },
      { name: "Useful results", tex: String.raw`\int\tan x\,dx=\ln|\sec x|+C,\qquad\int e^{kx}dx=\frac{e^{kx}}k+C` },
    ],
    problems: [
      {
        q: String.raw`Find \(\displaystyle\int2x(x^2+1)^5\,dx\).`,
        steps: [
          String.raw`Let \(u=x^2+1\). Then \(du=2x\,dx\) &mdash; exactly what's there!`,
          String.raw`Rewrite: \(\int u^5\,du\).`,
          String.raw`Integrate: \(\dfrac{u^6}{6}+C\).`,
          String.raw`Substitute back: \(\dfrac{(x^2+1)^6}{6}+C\).`,
        ],
        answer: String.raw`\(\dfrac{(x^2+1)^6}{6}+C\)`,
      },
      {
        q: String.raw`Find \(\displaystyle\int x^2\cos(x^3)\,dx\).`,
        steps: [
          String.raw`Let \(u=x^3\). Then \(du=3x^2\,dx\), so \(x^2\,dx=\tfrac13du\).`,
          String.raw`Rewrite: \(\tfrac13\int\cos u\,du\).`,
          String.raw`Integrate: \(\tfrac13\sin u+C\).`,
          String.raw`Back to \(x\): \(\tfrac13\sin(x^3)+C\).`,
        ],
        answer: String.raw`\(\tfrac13\sin(x^3)+C\)`,
      },
      {
        q: String.raw`Find \(\displaystyle\int e^{5x}\,dx\).`,
        steps: [
          String.raw`Let \(u=5x\), \(du=5\,dx\Rightarrow dx=\tfrac15du\).`,
          String.raw`\(\tfrac15\int e^u\,du=\tfrac15e^u+C\).`,
          String.raw`\(=\tfrac15e^{5x}+C\).`,
        ],
        answer: String.raw`\(\dfrac{e^{5x}}{5}+C\)`,
      },
      {
        q: String.raw`Find \(\displaystyle\int\frac{x}{x^2+4}\,dx\).`,
        steps: [
          String.raw`Let \(u=x^2+4\) (the denominator). \(du=2x\,dx\Rightarrow x\,dx=\tfrac12du\).`,
          String.raw`\(\tfrac12\int\dfrac1u\,du=\tfrac12\ln|u|+C\).`,
          String.raw`\(=\tfrac12\ln(x^2+4)+C\) (no absolute value needed since \(x^2+4>0\)).`,
        ],
        answer: String.raw`\(\tfrac12\ln(x^2+4)+C\)`,
      },
      {
        q: String.raw`Find \(\displaystyle\int\tan x\,dx\).`,
        steps: [
          String.raw`Rewrite: \(\tan x=\dfrac{\sin x}{\cos x}\).`,
          String.raw`Let \(u=\cos x\), \(du=-\sin x\,dx\Rightarrow\sin x\,dx=-du\).`,
          String.raw`\(\int\dfrac{-du}{u}=-\ln|u|+C=-\ln|\cos x|+C\).`,
          String.raw`Using log rules, \(-\ln|\cos x|=\ln\left|\dfrac1{\cos x}\right|=\ln|\sec x|\).`,
        ],
        answer: String.raw`\(-\ln|\cos x|+C=\ln|\sec x|+C\)`,
      },
      {
        q: String.raw`Evaluate \(\displaystyle\int_0^1x(x^2+1)^3\,dx\).`,
        steps: [
          String.raw`Let \(u=x^2+1\), \(du=2x\,dx\Rightarrow x\,dx=\tfrac12du\).`,
          String.raw`Change limits: \(x=0\Rightarrow u=1\); \(x=1\Rightarrow u=2\).`,
          String.raw`\(\tfrac12\displaystyle\int_1^2u^3\,du=\tfrac12\left[\frac{u^4}4\right]_1^2\).`,
          String.raw`\(=\tfrac12\left(\dfrac{16}4-\dfrac14\right)=\tfrac12\cdot\dfrac{15}4=\dfrac{15}8\).`,
        ],
        answer: String.raw`\(\dfrac{15}{8}\)`,
      },
      {
        q: String.raw`Find \(\displaystyle\int\frac{\ln x}{x}\,dx\).`,
        steps: [
          String.raw`Let \(u=\ln x\). Then \(du=\dfrac1x\,dx\).`,
          String.raw`Rewrite: \(\int u\,du\).`,
          String.raw`\(=\dfrac{u^2}2+C=\dfrac{(\ln x)^2}{2}+C\).`,
        ],
        answer: String.raw`\(\dfrac{(\ln x)^2}{2}+C\)`,
      },
    ],
  },
];

// Extra formulas that only show up on the Formula Sheet page
window.EXTRA_FORMULAS = [
  {
    group: "Algebra & Trig Review",
    items: [
      { name: "Pythagorean identity", tex: String.raw`\sin^2x+\cos^2x=1` },
      { name: "Other Pythagorean identities", tex: String.raw`1+\tan^2x=\sec^2x,\quad 1+\cot^2x=\csc^2x` },
      { name: "Double angle", tex: String.raw`\sin 2x=2\sin x\cos x,\quad \cos2x=\cos^2x-\sin^2x` },
      { name: "Unit circle values", tex: String.raw`\sin\tfrac\pi6=\tfrac12,\ \sin\tfrac\pi4=\tfrac{\sqrt2}2,\ \sin\tfrac\pi3=\tfrac{\sqrt3}2,\ \sin\tfrac\pi2=1` },
      { name: "Exponent rules", tex: String.raw`x^ax^b=x^{a+b},\ \frac{x^a}{x^b}=x^{a-b},\ (x^a)^b=x^{ab},\ x^{-a}=\frac1{x^a},\ x^{m/n}=\sqrt[n]{x^m}` },
      { name: "Log rules", tex: String.raw`\ln(ab)=\ln a+\ln b,\ \ln\tfrac ab=\ln a-\ln b,\ \ln a^r=r\ln a,\ \ln e=1,\ \ln1=0` },
      { name: "Factoring", tex: String.raw`a^2-b^2=(a-b)(a+b),\quad a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)` },
      { name: "Quadratic formula", tex: String.raw`x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}` },
    ],
  },
];
