// All study content lives here.
// Math is written in LaTeX between \( ... \) (inline) or \[ ... \] (display)
// and rendered by KaTeX in the browser.
//
// To add a practice problem, copy one of the objects inside a topic's
// "problems" list and change the q (question), steps, and answer.

var R = String.raw;
function P(q, steps, answer) { return { q: q, steps: steps, answer: answer }; }

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
      // ---- more practice ----
        P(R`Evaluate \(\displaystyle\lim_{x\to -2}\frac{x^2+5x+6}{x+2}\).`, [
          R`Plug in: \(\dfrac{4-10+6}{0}=\dfrac00\). Factor.`,
          R`\(x^2+5x+6=(x+2)(x+3)\).`,
          R`Cancel: \(\dfrac{(x+2)(x+3)}{x+2}=x+3\).`,
          R`\(\lim_{x\to-2}(x+3)=1\).`,
        ], R`\(1\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to 1}\frac{x^3-1}{x-1}\).`, [
          R`Plug in: \(\dfrac00\).`,
          R`Difference of cubes: \(x^3-1=(x-1)(x^2+x+1)\).`,
          R`Cancel: \(x^2+x+1\).`,
          R`Plug in \(x=1\): \(1+1+1=3\).`,
        ], R`\(3\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to 9}\frac{\sqrt x-3}{x-9}\).`, [
          R`Plug in: \(\dfrac{3-3}{0}=\dfrac00\).`,
          R`Notice \(x-9=(\sqrt x-3)(\sqrt x+3)\) (difference of squares with \(\sqrt x\)). Or multiply by the conjugate &mdash; same result.`,
          R`\(\dfrac{\sqrt x-3}{(\sqrt x-3)(\sqrt x+3)}=\dfrac1{\sqrt x+3}\).`,
          R`Plug in: \(\dfrac{1}{3+3}=\dfrac16\).`,
        ], R`\(\dfrac16\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to 4}\frac{x-4}{\sqrt x-2}\).`, [
          R`Plug in: \(\dfrac00\).`,
          R`Factor the top as a difference of squares: \(x-4=(\sqrt x-2)(\sqrt x+2)\).`,
          R`Cancel: \(\sqrt x+2\).`,
          R`Plug in: \(2+2=4\).`,
        ], R`\(4\)`),
        P(R`Evaluate \(\displaystyle\lim_{h\to 0}\frac{(2+h)^2-4}{h}\).`, [
          R`Expand: \((2+h)^2-4=4+4h+h^2-4=4h+h^2\).`,
          R`\(\dfrac{4h+h^2}{h}=\dfrac{h(4+h)}{h}=4+h\).`,
          R`Let \(h\to0\): \(4\).`,
          R`(This is actually the derivative of \(x^2\) at \(x=2\)!)`,
        ], R`\(4\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{2x^3+1}{5x^2-x}\).`, [
          R`Degree of top is 3, degree of bottom is 2. Top is bigger.`,
          R`Divide everything by \(x^2\): \(\dfrac{2x+\frac1{x^2}}{5-\frac1x}\).`,
          R`As \(x\to\infty\): top \(\to\infty\), bottom \(\to5\).`,
          R`So the limit is \(+\infty\).`,
        ], R`\(+\infty\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{4x+1}{x^2+3}\).`, [
          R`Degree of top (1) is smaller than degree of bottom (2).`,
          R`Divide by \(x^2\): \(\dfrac{\frac4x+\frac1{x^2}}{1+\frac3{x^2}}\).`,
          R`Top \(\to0\), bottom \(\to1\). Limit \(=0\).`,
        ], R`\(0\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to-\infty}\frac{3x-2}{\sqrt{x^2+1}}\).`, [
          R`Careful: \(\sqrt{x^2}=|x|\), and when \(x<0\), \(|x|=-x\).`,
          R`So for \(x<0\): \(\sqrt{x^2+1}=|x|\sqrt{1+\frac1{x^2}}=-x\sqrt{1+\frac1{x^2}}\).`,
          R`Divide top and bottom by \(x\): \(\dfrac{3-\frac2x}{-\sqrt{1+\frac1{x^2}}}\).`,
          R`As \(x\to-\infty\): \(\dfrac{3-0}{-\sqrt{1}}=-3\).`,
        ], R`\(-3\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\tan(3x)}{x}\).`, [
          R`Rewrite tangent: \(\dfrac{\tan(3x)}{x}=\dfrac{\sin(3x)}{x\cos(3x)}\).`,
          R`Make the sine limit appear: \(3\cdot\dfrac{\sin(3x)}{3x}\cdot\dfrac{1}{\cos(3x)}\).`,
          R`As \(x\to0\): \(\dfrac{\sin 3x}{3x}\to1\) and \(\cos(3x)\to1\).`,
          R`Limit \(=3\cdot1\cdot1=3\).`,
        ], R`\(3\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sin(4x)}{\sin(7x)}\).`, [
          R`Multiply and divide to create two special limits: \[\frac{\sin 4x}{\sin 7x}=\frac{\sin4x}{4x}\cdot\frac{7x}{\sin7x}\cdot\frac{4x}{7x}\]`,
          R`The first two fractions each \(\to1\).`,
          R`\(\dfrac{4x}{7x}=\dfrac47\).`,
          R`Limit \(=\dfrac47\).`,
        ], R`\(\dfrac47\)`),
        P(R`Find \(\displaystyle\lim_{x\to3^-}\frac1{x-3}\), \(\displaystyle\lim_{x\to3^+}\frac1{x-3}\), and \(\displaystyle\lim_{x\to3}\frac1{x-3}\).`, [
          R`From the left (\(x\) slightly less than 3, like 2.99): \(x-3\) is a tiny negative number. \(\dfrac1{\text{tiny negative}}\to-\infty\).`,
          R`From the right (like 3.01): \(x-3\) is tiny positive, so \(\to+\infty\).`,
          R`The one-sided limits don't match, so the two-sided limit does not exist.`,
        ], R`\(-\infty\), \(+\infty\), and does not exist.`),
        P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{|x|}{x}\).`, [
          R`For \(x>0\): \(|x|=x\), so \(\dfrac{|x|}{x}=1\). Right limit \(=1\).`,
          R`For \(x<0\): \(|x|=-x\), so \(\dfrac{|x|}{x}=-1\). Left limit \(=-1\).`,
          R`\(1\neq-1\), so the limit does not exist.`,
        ], R`Does not exist (left \(=-1\), right \(=1\)).`),
      // ---- even more practice ----
      P(R`Evaluate \(\displaystyle\lim_{x\to -3}\frac{x^{2}+7x+12}{x+3}\).`, [
        R`Plug in \(x=-3\): top \(=9-21+12=0\) and bottom \(=0\). That's \(\tfrac00\), so factor.`,
        R`Factor the top: \(x^{2}+7x+12=(x+3)(x+4)\).`,
        R`Cancel \((x+3)\): you're left with \(x+4\).`,
        R`Plug in: \(-3+4=1\).`,
      ], R`\(1\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 5}\frac{x^{2}-6x+5}{x-5}\).`, [
        R`Plug in \(x=5\): top \(=25-30+5=0\) and bottom \(=0\). That's \(\tfrac00\), so factor.`,
        R`Factor the top: \(x^{2}-6x+5=(x-5)(x-1)\).`,
        R`Cancel \((x-5)\): you're left with \(x-1\).`,
        R`Plug in: \(5-1=4\).`,
      ], R`\(4\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 6}\frac{x^{2}-x-30}{x-6}\).`, [
        R`Plug in \(x=6\): top \(=36-6-30=0\) and bottom \(=0\). That's \(\tfrac00\), so factor.`,
        R`Factor the top: \(x^{2}-x-30=(x-6)(x+5)\).`,
        R`Cancel \((x-6)\): you're left with \(x+5\).`,
        R`Plug in: \(6+5=11\).`,
      ], R`\(11\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 6}\frac{x^{2}-36}{x-6}\).`, [
        R`Plug in \(x=6\): top \(=36+0-36=0\) and bottom \(=0\). That's \(\tfrac00\), so factor.`,
        R`Factor the top: \(x^{2}-36=(x-6)(x+6)\).`,
        R`Cancel \((x-6)\): you're left with \(x+6\).`,
        R`Plug in: \(6+6=12\).`,
      ], R`\(12\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{3x^{2}+9x-4}{6x^{2}+4}\).`, [
        R`Top and bottom both have degree 2.`,
        R`Divide every term by \(x^2\); every term with \(x\) left in a denominator goes to 0.`,
        R`What's left is the ratio of leading coefficients: \(\dfrac{3}{6}\).`,
      ], R`\(\dfrac{1}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{x^{2}+2x-3}{x^{2}+6}\).`, [
        R`Top and bottom both have degree 2.`,
        R`Divide every term by \(x^2\); every term with \(x\) left in a denominator goes to 0.`,
        R`What's left is the ratio of leading coefficients: \(\dfrac{1}{1}\).`,
      ], R`\(1\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sin(8x)}{9x}\).`, [
        R`Make it look like \(\dfrac{\sin(\text{stuff})}{\text{stuff}}\) with stuff \(=8x\).`,
        R`\(\dfrac{\sin(8x)}{9x}=\dfrac{8}{9}\cdot\dfrac{\sin(8x)}{8x}\).`,
        R`\(\dfrac{\sin(8x)}{8x}\to1\), so the limit is \(\dfrac{8}{9}\).`,
      ], R`\(\dfrac{8}{9}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sin(7x)}{2x}\).`, [
        R`Make it look like \(\dfrac{\sin(\text{stuff})}{\text{stuff}}\) with stuff \(=7x\).`,
        R`\(\dfrac{\sin(7x)}{2x}=\dfrac{7}{2}\cdot\dfrac{\sin(7x)}{7x}\).`,
        R`\(\dfrac{\sin(7x)}{7x}\to1\), so the limit is \(\dfrac{7}{2}\).`,
      ], R`\(\dfrac{7}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sin(2x)}{3x}\).`, [
        R`Make it look like \(\dfrac{\sin(\text{stuff})}{\text{stuff}}\) with stuff \(=2x\).`,
        R`\(\dfrac{\sin(2x)}{3x}=\dfrac{2}{3}\cdot\dfrac{\sin(2x)}{2x}\).`,
        R`\(\dfrac{\sin(2x)}{2x}\to1\), so the limit is \(\dfrac{2}{3}\).`,
      ], R`\(\dfrac{2}{3}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sqrt{x+16}-4}{x}\).`, [
        R`Plug in: \(\dfrac{4-4}{0}=\dfrac00\). Multiply by the conjugate \(\sqrt{x+16}+4\).`,
        R`Top becomes \((x+16)-16=x\), so you get \(\dfrac{x}{x(\sqrt{x+16}+4)}=\dfrac{1}{\sqrt{x+16}+4}\).`,
        R`Plug in \(x=0\): \(\dfrac{1}{4+4}=\dfrac{1}{8}\).`,
      ], R`\(\dfrac{1}{8}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sqrt{x+36}-6}{x}\).`, [
        R`Plug in: \(\dfrac{6-6}{0}=\dfrac00\). Multiply by the conjugate \(\sqrt{x+36}+6\).`,
        R`Top becomes \((x+36)-36=x\), so you get \(\dfrac{x}{x(\sqrt{x+36}+6)}=\dfrac{1}{\sqrt{x+36}+6}\).`,
        R`Plug in \(x=0\): \(\dfrac{1}{6+6}=\dfrac{1}{12}\).`,
      ], R`\(\dfrac{1}{12}\)`),
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
      // ---- more practice ----
        P(R`Find \(c\) so that \(f(x)=\begin{cases}cx^2+2x & x<2\\ x^3-cx & x\ge2\end{cases}\) is continuous.`, [
          R`The break point is \(x=2\). Plug 2 into both pieces.`,
          R`Left: \(c(4)+2(2)=4c+4\).`,
          R`Right: \(8-2c\).`,
          R`Set equal: \(4c+4=8-2c\Rightarrow6c=4\Rightarrow c=\tfrac23\).`,
        ], R`\(c=\dfrac23\)`),
        P(R`Find \(a\) and \(b\) so that \(f(x)=\begin{cases}x+1 & x<1\\ ax+b & 1\le x<3\\ 3x & x\ge3\end{cases}\) is continuous.`, [
          R`Two break points: \(x=1\) and \(x=3\).`,
          R`At \(x=1\): \(1+1=a+b\Rightarrow a+b=2\).`,
          R`At \(x=3\): \(3a+b=3(3)=9\).`,
          R`Subtract the first equation from the second: \(2a=7\Rightarrow a=\tfrac72\).`,
          R`Then \(b=2-\tfrac72=-\tfrac32\).`,
        ], R`\(a=\dfrac72,\ b=-\dfrac32\)`),
        P(R`On what intervals is \(f(x)=\dfrac{\sqrt{x-2}}{x-5}\) continuous?`, [
          R`The square root needs \(x-2\ge0\), so \(x\ge2\).`,
          R`The denominator can't be 0: \(x\neq5\).`,
          R`Combine: \(x\ge2\) and \(x\neq5\).`,
        ], R`\([2,5)\cup(5,\infty)\)`),
        P(R`Show that \(\cos x=x\) has a solution in \(\left(0,\tfrac\pi2\right)\).`, [
          R`Move everything to one side: let \(f(x)=\cos x-x\). We want \(f(c)=0\).`,
          R`\(f\) is continuous (cos and \(x\) are continuous).`,
          R`\(f(0)=1-0=1>0\).`,
          R`\(f\!\left(\tfrac\pi2\right)=0-\tfrac\pi2<0\).`,
          R`Opposite signs + continuous &rArr; by the IVT there's a \(c\) in \(\left(0,\tfrac\pi2\right)\) with \(f(c)=0\), i.e. \(\cos c=c\).`,
        ], R`By the IVT, a solution exists.`),
        P(R`Classify the discontinuity of \(f(x)=\begin{cases}x^2 & x<0\\ x+1 & x\ge0\end{cases}\) at \(x=0\).`, [
          R`Left limit: \(\lim_{x\to0^-}x^2=0\).`,
          R`Right limit: \(\lim_{x\to0^+}(x+1)=1\).`,
          R`Both one-sided limits exist but are different.`,
        ], R`Jump discontinuity at \(x=0\).`),
        P(R`\(f(x)=\dfrac{x^2-x-6}{x-3}\) is undefined at \(x=3\). What value should \(f(3)\) be to make \(f\) continuous?`, [
          R`Factor: \(x^2-x-6=(x-3)(x+2)\).`,
          R`For \(x\neq3\): \(f(x)=x+2\).`,
          R`\(\lim_{x\to3}(x+2)=5\).`,
          R`Define \(f(3)=5\) to fill the hole.`,
        ], R`\(f(3)=5\)`),
      // ---- even more practice ----
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx+2 & x<4\\ x^{2}+4 & x\ge 4\end{cases}\) is continuous.`, [
        R`Both pieces are polynomials, so only the break point \(x=4\) matters.`,
        R`Left piece at \(x=4\): \(4k+2\).`,
        R`Right piece at \(x=4\): \(16+4=20\).`,
        R`Set equal: \(4k+2=20\Rightarrow 4k=18\Rightarrow k=\dfrac{9}{2}\).`,
      ], R`\(k=\dfrac{9}{2}\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx+1 & x<4\\ x^{2}-1 & x\ge 4\end{cases}\) is continuous.`, [
        R`Both pieces are polynomials, so only the break point \(x=4\) matters.`,
        R`Left piece at \(x=4\): \(4k+1\).`,
        R`Right piece at \(x=4\): \(16-1=15\).`,
        R`Set equal: \(4k+1=15\Rightarrow 4k=14\Rightarrow k=\dfrac{7}{2}\).`,
      ], R`\(k=\dfrac{7}{2}\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx+5 & x<1\\ x^{2}+4 & x\ge 1\end{cases}\) is continuous.`, [
        R`Both pieces are polynomials, so only the break point \(x=1\) matters.`,
        R`Left piece at \(x=1\): \(1k+5\).`,
        R`Right piece at \(x=1\): \(1+4=5\).`,
        R`Set equal: \(1k+5=5\Rightarrow 1k=0\Rightarrow k=0\).`,
      ], R`\(k=0\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx+6 & x<2\\ x^{2}+5 & x\ge 2\end{cases}\) is continuous.`, [
        R`Both pieces are polynomials, so only the break point \(x=2\) matters.`,
        R`Left piece at \(x=2\): \(2k+6\).`,
        R`Right piece at \(x=2\): \(4+5=9\).`,
        R`Set equal: \(2k+6=9\Rightarrow 2k=3\Rightarrow k=\dfrac{3}{2}\).`,
      ], R`\(k=\dfrac{3}{2}\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx-1 & x<3\\ x^{2} & x\ge 3\end{cases}\) is continuous.`, [
        R`Both pieces are polynomials, so only the break point \(x=3\) matters.`,
        R`Left piece at \(x=3\): \(3k-1\).`,
        R`Right piece at \(x=3\): \(9+0=9\).`,
        R`Set equal: \(3k-1=9\Rightarrow 3k=10\Rightarrow k=\dfrac{10}{3}\).`,
      ], R`\(k=\dfrac{10}{3}\)`),
      P(R`\(f(x)=\dfrac{x^{2}-3x-10}{x-5}\) has a hole at \(x=5\). What should \(f(5)\) be to make \(f\) continuous?`, [
        R`Factor the top: \((x-5)(x+2)\).`,
        R`Cancel: for \(x\neq5\), \(f(x)=x+2\).`,
        R`\(\lim_{x\to5}f(x)=5+2=7\).`,
        R`Define \(f(5)=7\).`,
      ], R`\(f(5)=7\)`),
      P(R`\(f(x)=\dfrac{x^{2}+3x+2}{x+1}\) has a hole at \(x=-1\). What should \(f(-1)\) be to make \(f\) continuous?`, [
        R`Factor the top: \((x+1)(x+2)\).`,
        R`Cancel: for \(x\neq-1\), \(f(x)=x+2\).`,
        R`\(\lim_{x\to-1}f(x)=-1+2=1\).`,
        R`Define \(f(-1)=1\).`,
      ], R`\(f(-1)=1\)`),
      P(R`\(f(x)=\dfrac{x^{2}-3x+2}{x-2}\) has a hole at \(x=2\). What should \(f(2)\) be to make \(f\) continuous?`, [
        R`Factor the top: \((x-2)(x-1)\).`,
        R`Cancel: for \(x\neq2\), \(f(x)=x-1\).`,
        R`\(\lim_{x\to2}f(x)=2-1=1\).`,
        R`Define \(f(2)=1\).`,
      ], R`\(f(2)=1\)`),
      P(R`Use the IVT to show \(x^{3}+x-8=0\) has a solution between \(1\) and \(2\).`, [
        R`Let \(f(x)=x^{3}+x-8\). It's a polynomial, so it's continuous on \([1,2]\).`,
        R`\(f(1)=-6\).`,
        R`\(f(2)=2\).`,
        R`One is negative and one is positive, so by the IVT there's a \(c\) in \((1,2)\) with \(f(c)=0\).`,
      ], R`A root exists in \((1,2)\) by the IVT.`),
      P(R`Use the IVT to show \(x^{3}+4x+4=0\) has a solution between \(-1\) and \(0\).`, [
        R`Let \(f(x)=x^{3}+4x+4\). It's a polynomial, so it's continuous on \([-1,0]\).`,
        R`\(f(-1)=-1\).`,
        R`\(f(0)=4\).`,
        R`One is negative and one is positive, so by the IVT there's a \(c\) in \((-1,0)\) with \(f(c)=0\).`,
      ], R`A root exists in \((-1,0)\) by the IVT.`),
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
      // ---- more practice ----
        P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=5x-7\).`, [
          R`\(f(x+h)=5(x+h)-7=5x+5h-7\).`,
          R`\(f(x+h)-f(x)=5x+5h-7-5x+7=5h\).`,
          R`\(\dfrac{5h}{h}=5\).`,
          R`Limit as \(h\to0\): \(5\). (Makes sense &mdash; a line's slope is constant.)`,
        ], R`\(f'(x)=5\)`),
        P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=2x^2-x\).`, [
          R`\(f(x+h)=2(x+h)^2-(x+h)=2x^2+4xh+2h^2-x-h\).`,
          R`Subtract \(f(x)=2x^2-x\): \(4xh+2h^2-h\).`,
          R`Divide by \(h\): \(4x+2h-1\).`,
          R`\(h\to0\): \(4x-1\).`,
        ], R`\(f'(x)=4x-1\)`),
        P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=x^3\).`, [
          R`\((x+h)^3=x^3+3x^2h+3xh^2+h^3\).`,
          R`Subtract \(x^3\): \(3x^2h+3xh^2+h^3\).`,
          R`Divide by \(h\): \(3x^2+3xh+h^2\).`,
          R`\(h\to0\): \(3x^2\).`,
        ], R`\(f'(x)=3x^2\)`),
        P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\dfrac1{x+1}\).`, [
          R`\(\dfrac{\frac{1}{x+h+1}-\frac{1}{x+1}}{h}\).`,
          R`Common denominator on top: \(\dfrac{(x+1)-(x+h+1)}{(x+1)(x+h+1)}=\dfrac{-h}{(x+1)(x+h+1)}\).`,
          R`Divide by \(h\): \(\dfrac{-1}{(x+1)(x+h+1)}\).`,
          R`\(h\to0\): \(-\dfrac{1}{(x+1)^2}\).`,
        ], R`\(f'(x)=-\dfrac1{(x+1)^2}\)`),
        P(R`Find the tangent line to \(y=\sqrt x\) at \(x=4\).`, [
          R`Point: \(\sqrt4=2\), so \((4,2)\).`,
          R`\(y'=\dfrac1{2\sqrt x}\), so slope \(=\dfrac1{2\cdot2}=\dfrac14\).`,
          R`\(y-2=\tfrac14(x-4)\).`,
          R`\(y=\tfrac14x-1+2=\tfrac14x+1\).`,
        ], R`\(y=\tfrac14x+1\)`),
        P(R`Find the tangent line to \(f(x)=\dfrac1x\) at \(x=2\).`, [
          R`Point: \(f(2)=\tfrac12\).`,
          R`\(f'(x)=-\dfrac1{x^2}\Rightarrow f'(2)=-\dfrac14\).`,
          R`\(y-\tfrac12=-\tfrac14(x-2)\).`,
          R`\(y=-\tfrac14x+\tfrac12+\tfrac12=-\tfrac14x+1\).`,
        ], R`\(y=-\tfrac14x+1\)`),
        P(R`The limit \(\displaystyle\lim_{h\to0}\frac{(3+h)^4-81}{h}\) is a derivative in disguise. Identify \(f\) and \(a\), then evaluate it.`, [
          R`Compare with \(\displaystyle f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}\).`,
          R`\(f(a+h)=(3+h)^4\) suggests \(f(x)=x^4\) and \(a=3\). Check: \(f(3)=81\). ✓`,
          R`\(f'(x)=4x^3\Rightarrow f'(3)=4(27)=108\).`,
        ], R`\(f(x)=x^4,\ a=3\); the limit is \(108\).`),
        P(R`Find the average rate of change of \(f(x)=x^2-3x\) on \([1,4]\).`, [
          R`\(f(4)=16-12=4\).`,
          R`\(f(1)=1-3=-2\).`,
          R`\(\dfrac{f(4)-f(1)}{4-1}=\dfrac{4-(-2)}{3}=\dfrac63=2\).`,
        ], R`\(2\)`),
      // ---- even more practice ----
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=3x^{2}-4x+8\).`, [
        R`\(f(x+h)=3(x+h)^2-4(x+h)+8\)`,
        R`Expand and subtract \(f(x)\) (the \(x^2\), \(x\), and constant terms cancel): \(f(x+h)-f(x)=6xh+3h^2-4h\).`,
        R`Divide by \(h\): \(6x+3h-4\).`,
        R`Let \(h\to0\): \(f'(x)=6x-4\).`,
      ], R`\(f'(x)=6x-4\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=4x^{2}+4x+1\).`, [
        R`\(f(x+h)=4(x+h)^2+4(x+h)+1\)`,
        R`Expand and subtract \(f(x)\) (the \(x^2\), \(x\), and constant terms cancel): \(f(x+h)-f(x)=8xh+4h^2+4h\).`,
        R`Divide by \(h\): \(8x+4h+4\).`,
        R`Let \(h\to0\): \(f'(x)=8x+4\).`,
      ], R`\(f'(x)=8x+4\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=2x^{2}+7\).`, [
        R`\(f(x+h)=2(x+h)^2+7\)`,
        R`Expand and subtract \(f(x)\) (the \(x^2\), \(x\), and constant terms cancel): \(f(x+h)-f(x)=4xh+2h^2\).`,
        R`Divide by \(h\): \(4x+2h\).`,
        R`Let \(h\to0\): \(f'(x)=4x\).`,
      ], R`\(f'(x)=4x\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=3x^{2}+5x+6\).`, [
        R`\(f(x+h)=3(x+h)^2+5(x+h)+6\)`,
        R`Expand and subtract \(f(x)\) (the \(x^2\), \(x\), and constant terms cancel): \(f(x+h)-f(x)=6xh+3h^2+5h\).`,
        R`Divide by \(h\): \(6x+3h+5\).`,
        R`Let \(h\to0\): \(f'(x)=6x+5\).`,
      ], R`\(f'(x)=6x+5\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=-2x^{2}-5x-4\).`, [
        R`\(f(x+h)=-2(x+h)^2-5(x+h)-4\)`,
        R`Expand and subtract \(f(x)\) (the \(x^2\), \(x\), and constant terms cancel): \(f(x+h)-f(x)=-4xh-2h^2-5h\).`,
        R`Divide by \(h\): \(-4x-2h-5\).`,
        R`Let \(h\to0\): \(f'(x)=-4x-5\).`,
      ], R`\(f'(x)=-4x-5\)`),
      P(R`Find the tangent line to \(y=-2x^{2}+5x+6\) at \(x=-2\).`, [
        R`Point: \(y(-2)=-12\), so \((-2,-12)\).`,
        R`\(y'=-4x+5\), so slope \(m=y'(-2)=13\).`,
        R`\(y-(-12)=13(x-(-2))\).`,
        R`Simplify: \(y=13x+14\).`,
      ], R`\(y=13x+14\)`),
      P(R`Find the tangent line to \(y=-3x^{2}-x-4\) at \(x=1\).`, [
        R`Point: \(y(1)=-8\), so \((1,-8)\).`,
        R`\(y'=-6x-1\), so slope \(m=y'(1)=-7\).`,
        R`\(y-(-8)=-7(x-1)\).`,
        R`Simplify: \(y=-7x-1\).`,
      ], R`\(y=-7x-1\)`),
      P(R`Find the tangent line to \(y=2x^{2}+3x+3\) at \(x=-3\).`, [
        R`Point: \(y(-3)=12\), so \((-3,12)\).`,
        R`\(y'=4x+3\), so slope \(m=y'(-3)=-9\).`,
        R`\(y-12=-9(x-(-3))\).`,
        R`Simplify: \(y=-9x-15\).`,
      ], R`\(y=-9x-15\)`),
      P(R`Find the tangent line to \(y=-2x^{2}-6x+5\) at \(x=2\).`, [
        R`Point: \(y(2)=-15\), so \((2,-15)\).`,
        R`\(y'=-4x-6\), so slope \(m=y'(2)=-14\).`,
        R`\(y-(-15)=-14(x-2)\).`,
        R`Simplify: \(y=-14x+13\).`,
      ], R`\(y=-14x+13\)`),
      P(R`Find the tangent line to \(y=-x^{2}+6x+5\) at \(x=-1\).`, [
        R`Point: \(y(-1)=-2\), so \((-1,-2)\).`,
        R`\(y'=-2x+6\), so slope \(m=y'(-1)=8\).`,
        R`\(y-(-2)=8(x-(-1))\).`,
        R`Simplify: \(y=8x+6\).`,
      ], R`\(y=8x+6\)`),
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
      // ---- more practice ----
        P(R`Differentiate \(f(x)=7x^4-2x^3+x-12\).`, [
          R`\(7x^4\to28x^3\).`,
          R`\(-2x^3\to-6x^2\).`,
          R`\(x\to1\), \(-12\to0\).`,
        ], R`\(f'(x)=28x^3-6x^2+1\)`),
        P(R`Differentiate \(f(x)=\sqrt[3]{x^2}+\dfrac{4}{\sqrt x}\).`, [
          R`Rewrite: \(f(x)=x^{2/3}+4x^{-1/2}\).`,
          R`\(x^{2/3}\to\tfrac23x^{-1/3}\).`,
          R`\(4x^{-1/2}\to4\cdot\left(-\tfrac12\right)x^{-3/2}=-2x^{-3/2}\).`,
          R`\(f'(x)=\dfrac{2}{3\sqrt[3]x}-\dfrac{2}{x^{3/2}}\).`,
        ], R`\(f'(x)=\tfrac23x^{-1/3}-2x^{-3/2}\)`),
        P(R`Differentiate \(f(x)=(x+1)^2\) without the chain rule.`, [
          R`Expand: \((x+1)^2=x^2+2x+1\).`,
          R`Power rule: \(2x+2\).`,
        ], R`\(f'(x)=2x+2\)`),
        P(R`Differentiate \(f(x)=(x^3-2x)(4x+1)\) using the product rule.`, [
          R`First \(=x^3-2x\), first\('=3x^2-2\). Second \(=4x+1\), second\('=4\).`,
          R`\(f'=(3x^2-2)(4x+1)+(x^3-2x)(4)\).`,
          R`Expand: \(12x^3+3x^2-8x-2+4x^3-8x\).`,
          R`Combine: \(16x^3+3x^2-16x-2\).`,
        ], R`\(f'(x)=16x^3+3x^2-16x-2\)`),
        P(R`Differentiate \(f(x)=\dfrac{x}{x+1}\).`, [
          R`High \(=x\), d-high \(=1\). Low \(=x+1\), d-low \(=1\).`,
          R`\(f'=\dfrac{1\cdot(x+1)-x\cdot1}{(x+1)^2}\).`,
          R`Simplify the top: \(x+1-x=1\).`,
        ], R`\(f'(x)=\dfrac1{(x+1)^2}\)`),
        P(R`Differentiate \(f(x)=\dfrac{x^2}{x-3}\).`, [
          R`High \(=x^2\), d-high \(=2x\). Low \(=x-3\), d-low \(=1\).`,
          R`\(f'=\dfrac{2x(x-3)-x^2(1)}{(x-3)^2}\).`,
          R`Top: \(2x^2-6x-x^2=x^2-6x\).`,
        ], R`\(f'(x)=\dfrac{x^2-6x}{(x-3)^2}\)`),
        P(R`Differentiate \(f(x)=x^3\cos x\).`, [
          R`Product rule with \(x^3\) and \(\cos x\).`,
          R`\((x^3)'=3x^2\), \((\cos x)'=-\sin x\).`,
          R`\(f'=3x^2\cos x+x^3(-\sin x)\).`,
        ], R`\(f'(x)=3x^2\cos x-x^3\sin x\)`),
        P(R`Differentiate \(f(x)=\dfrac{e^x}{x}\).`, [
          R`Quotient rule: high \(=e^x\), d-high \(=e^x\); low \(=x\), d-low \(=1\).`,
          R`\(f'=\dfrac{e^x\cdot x-e^x\cdot1}{x^2}\).`,
          R`Factor: \(\dfrac{e^x(x-1)}{x^2}\).`,
        ], R`\(f'(x)=\dfrac{e^x(x-1)}{x^2}\)`),
        P(R`Use the quotient rule on \(\tan x=\dfrac{\sin x}{\cos x}\) to prove \(\dfrac{d}{dx}\tan x=\sec^2x\).`, [
          R`\(\dfrac{\cos x\cdot\cos x-\sin x\cdot(-\sin x)}{\cos^2x}\).`,
          R`Top: \(\cos^2x+\sin^2x=1\).`,
          R`\(\dfrac{1}{\cos^2x}=\sec^2x\). ✓`,
        ], R`\(\sec^2 x\)`),
        P(R`Find all points where the tangent line to \(y=x^3-3x\) is horizontal.`, [
          R`Horizontal tangent means slope 0: \(y'=3x^2-3=0\).`,
          R`\(x^2=1\Rightarrow x=\pm1\).`,
          R`\(y(1)=1-3=-2\). \(y(-1)=-1+3=2\).`,
        ], R`\((1,-2)\) and \((-1,2)\)`),
        P(R`Differentiate \(f(x)=x\ln x\).`, [
          R`Product rule: \((x)'=1\), \((\ln x)'=\dfrac1x\).`,
          R`\(f'=1\cdot\ln x+x\cdot\dfrac1x\).`,
          R`\(=\ln x+1\).`,
        ], R`\(f'(x)=\ln x+1\)`),
        P(R`Find \(f''(x)\) for \(f(x)=x^4-5x^2+3\).`, [
          R`\(f'(x)=4x^3-10x\).`,
          R`Differentiate again: \(f''(x)=12x^2-10\).`,
        ], R`\(f''(x)=12x^2-10\)`),
      // ---- even more practice ----
      P(R`Differentiate \(f(x)=7x^{7}+5x^{2}+5x+6\).`, [
        R`Power rule on each term: bring the power down, subtract 1.`,
        R`\(7x^{7}\to49x^{6}\), \(5x^{2}\to10x\), \(5x\to5\), and the constant \(\to0\).`,
      ], R`\(f'(x)=49x^{6}+10x+5\)`),
      P(R`Differentiate \(f(x)=2x^{6}+4x^{2}+3x+5\).`, [
        R`Power rule on each term: bring the power down, subtract 1.`,
        R`\(2x^{6}\to12x^{5}\), \(4x^{2}\to8x\), \(3x\to3\), and the constant \(\to0\).`,
      ], R`\(f'(x)=12x^{5}+8x+3\)`),
      P(R`Differentiate \(f(x)=6x^{7}+8x^{3}+6x-6\).`, [
        R`Power rule on each term: bring the power down, subtract 1.`,
        R`\(6x^{7}\to42x^{6}\), \(8x^{3}\to24x^{2}\), \(6x\to6\), and the constant \(\to0\).`,
      ], R`\(f'(x)=42x^{6}+24x^{2}+6\)`),
      P(R`Differentiate \(f(x)=9x^{6}+x^{2}+9x-8\).`, [
        R`Power rule on each term: bring the power down, subtract 1.`,
        R`\(9x^{6}\to54x^{5}\), \(x^{2}\to2x\), \(9x\to9\), and the constant \(\to0\).`,
      ], R`\(f'(x)=54x^{5}+2x+9\)`),
      P(R`Differentiate \(f(x)=-3x^{5}+3x^{3}-9x-6\).`, [
        R`Power rule on each term: bring the power down, subtract 1.`,
        R`\(-3x^{5}\to-15x^{4}\), \(3x^{3}\to9x^{2}\), \(-9x\to-9\), and the constant \(\to0\).`,
      ], R`\(f'(x)=-15x^{4}+9x^{2}-9\)`),
      P(R`Use the product rule to differentiate \(f(x)=(4x-1)(4x^{2}+2)\).`, [
        R`First \(=4x-1\), first\('\) \(=4\). Second \(=4x^{2}+2\), second\('\) \(=8x\).`,
        R`\(f'=4(4x^{2}+2)+(4x-1)(8x)\).`,
        R`Expand: \(16x^{2}+8+(32x^{2}-8x)\).`,
        R`Combine: \(48x^{2}-8x+8\).`,
      ], R`\(f'(x)=48x^{2}-8x+8\)`),
      P(R`Use the product rule to differentiate \(f(x)=(-3x-1)(-2x^{2}+4)\).`, [
        R`First \(=-3x-1\), first\('\) \(=-3\). Second \(=-2x^{2}+4\), second\('\) \(=-4x\).`,
        R`\(f'=-3(-2x^{2}+4)+(-3x-1)(-4x)\).`,
        R`Expand: \(6x^{2}-12+(12x^{2}+4x)\).`,
        R`Combine: \(18x^{2}+4x-12\).`,
      ], R`\(f'(x)=18x^{2}+4x-12\)`),
      P(R`Use the product rule to differentiate \(f(x)=(-4x-1)(-3x^{2}-5)\).`, [
        R`First \(=-4x-1\), first\('\) \(=-4\). Second \(=-3x^{2}-5\), second\('\) \(=-6x\).`,
        R`\(f'=-4(-3x^{2}-5)+(-4x-1)(-6x)\).`,
        R`Expand: \(12x^{2}+20+(24x^{2}+6x)\).`,
        R`Combine: \(36x^{2}+6x+20\).`,
      ], R`\(f'(x)=36x^{2}+6x+20\)`),
      P(R`Use the product rule to differentiate \(f(x)=(4x+2)(x^{2}+5)\).`, [
        R`First \(=4x+2\), first\('\) \(=4\). Second \(=x^{2}+5\), second\('\) \(=2x\).`,
        R`\(f'=4(x^{2}+5)+(4x+2)(2x)\).`,
        R`Expand: \(4x^{2}+20+(8x^{2}+4x)\).`,
        R`Combine: \(12x^{2}+4x+20\).`,
      ], R`\(f'(x)=12x^{2}+4x+20\)`),
      P(R`Use the quotient rule to differentiate \(f(x)=\dfrac{4x-5}{x+2}\).`, [
        R`High \(=4x-5\), d-high \(=4\); low \(=x+2\), d-low \(=1\).`,
        R`\(f'=\dfrac{4(x+2)-(4x-5)(1)}{(x+2)^2}\).`,
        R`Top: \(4x+8-(4x-5)=13\).`,
      ], R`\(f'(x)=\dfrac{13}{(x+2)^2}\)`),
      P(R`Use the quotient rule to differentiate \(f(x)=\dfrac{3x+3}{3x+1}\).`, [
        R`High \(=3x+3\), d-high \(=3\); low \(=3x+1\), d-low \(=3\).`,
        R`\(f'=\dfrac{3(3x+1)-(3x+3)(3)}{(3x+1)^2}\).`,
        R`Top: \(9x+3-(9x+9)=-6\).`,
      ], R`\(f'(x)=\dfrac{-6}{(3x+1)^2}\)`),
      P(R`Use the quotient rule to differentiate \(f(x)=\dfrac{x+4}{2x+2}\).`, [
        R`High \(=x+4\), d-high \(=1\); low \(=2x+2\), d-low \(=2\).`,
        R`\(f'=\dfrac{1(2x+2)-(x+4)(2)}{(2x+2)^2}\).`,
        R`Top: \(2x+2-(2x+8)=-6\).`,
      ], R`\(f'(x)=\dfrac{-6}{(2x+2)^2}\)`),
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
      // ---- more practice ----
        P(R`Differentiate \(f(x)=(2x-5)^7\).`, [
          R`Outside: \(7(2x-5)^6\). Inside derivative: \(2\).`,
          R`\(f'=7(2x-5)^6\cdot2\).`,
        ], R`\(f'(x)=14(2x-5)^6\)`),
        P(R`Differentiate \(f(x)=\sqrt{x^2+9}\).`, [
          R`Rewrite: \((x^2+9)^{1/2}\).`,
          R`Outside: \(\tfrac12(x^2+9)^{-1/2}\). Inside derivative: \(2x\).`,
          R`\(\tfrac12(x^2+9)^{-1/2}\cdot2x=\dfrac{x}{\sqrt{x^2+9}}\).`,
        ], R`\(f'(x)=\dfrac{x}{\sqrt{x^2+9}}\)`),
        P(R`Differentiate \(f(x)=e^{x^2}\).`, [
          R`\(\dfrac{d}{dx}e^{u}=e^u\cdot u'\) with \(u=x^2\).`,
          R`\(f'=e^{x^2}\cdot2x\).`,
        ], R`\(f'(x)=2xe^{x^2}\)`),
        P(R`Differentiate \(f(x)=\cos(5x)\).`, [
          R`Outside: \(-\sin(5x)\). Inside: \(5\).`,
        ], R`\(f'(x)=-5\sin(5x)\)`),
        P(R`Differentiate \(f(x)=\tan(3x^2)\).`, [
          R`Outside: \(\sec^2(3x^2)\). Inside derivative: \(6x\).`,
        ], R`\(f'(x)=6x\sec^2(3x^2)\)`),
        P(R`Differentiate \(f(x)=\ln(\sin x)\).`, [
          R`\(\dfrac{1}{\sin x}\cdot\cos x\).`,
          R`\(\dfrac{\cos x}{\sin x}=\cot x\).`,
        ], R`\(f'(x)=\cot x\)`),
        P(R`Differentiate \(f(x)=\dfrac{1}{(x^2+1)^3}\).`, [
          R`Rewrite: \((x^2+1)^{-3}\). (Avoid the quotient rule!)`,
          R`Outside: \(-3(x^2+1)^{-4}\). Inside: \(2x\).`,
          R`\(-3(x^2+1)^{-4}\cdot2x=\dfrac{-6x}{(x^2+1)^4}\).`,
        ], R`\(f'(x)=-\dfrac{6x}{(x^2+1)^4}\)`),
        P(R`Differentiate \(f(x)=\sin^2x\).`, [
          R`Rewrite: \((\sin x)^2\).`,
          R`Outside: \(2\sin x\). Inside: \(\cos x\).`,
          R`\(2\sin x\cos x\), which also equals \(\sin(2x)\).`,
        ], R`\(f'(x)=2\sin x\cos x=\sin 2x\)`),
        P(R`Differentiate \(f(x)=x^2e^{3x}\).`, [
          R`Product rule. \((x^2)'=2x\); \((e^{3x})'=3e^{3x}\) (chain).`,
          R`\(f'=2xe^{3x}+x^2\cdot3e^{3x}\).`,
          R`Factor: \(xe^{3x}(2+3x)\).`,
        ], R`\(f'(x)=xe^{3x}(3x+2)\)`),
        P(R`Differentiate \(f(x)=e^{\sin x}\).`, [
          R`\(e^{u}\cdot u'\) with \(u=\sin x\), \(u'=\cos x\).`,
        ], R`\(f'(x)=\cos x\,e^{\sin x}\)`),
        P(R`Differentiate \(f(x)=\arcsin(x^2)\).`, [
          R`\(\dfrac{d}{dx}\arcsin u=\dfrac{u'}{\sqrt{1-u^2}}\), with \(u=x^2\).`,
          R`\(\dfrac{2x}{\sqrt{1-(x^2)^2}}\).`,
        ], R`\(f'(x)=\dfrac{2x}{\sqrt{1-x^4}}\)`),
        P(R`Differentiate \(f(x)=\ln\!\left(\dfrac{x+1}{x-1}\right)\).`, [
          R`Use log rules first: \(f(x)=\ln(x+1)-\ln(x-1)\). Much easier!`,
          R`\(f'=\dfrac1{x+1}-\dfrac1{x-1}\).`,
          R`Combine: \(\dfrac{(x-1)-(x+1)}{(x+1)(x-1)}=\dfrac{-2}{x^2-1}\).`,
        ], R`\(f'(x)=-\dfrac{2}{x^2-1}\)`),
        P(R`Differentiate \(f(x)=\sec(4x)\).`, [
          R`Outside: \(\sec(4x)\tan(4x)\). Inside: \(4\).`,
        ], R`\(f'(x)=4\sec(4x)\tan(4x)\)`),
        P(R`Differentiate \(f(x)=\log_2(x^3+1)\).`, [
          R`\(\dfrac{d}{dx}\log_a u=\dfrac{u'}{u\ln a}\).`,
          R`\(u=x^3+1\), \(u'=3x^2\), \(a=2\).`,
        ], R`\(f'(x)=\dfrac{3x^2}{(x^3+1)\ln2}\)`),
      // ---- even more practice ----
      P(R`Differentiate \(f(x)=(3x-1)^{5}\).`, [
        R`Outside: \(5(3x-1)^{4}\). Inside derivative: \(3\).`,
        R`Multiply: \(15(3x-1)^{4}\).`,
      ], R`\(f'(x)=15(3x-1)^{4}\)`),
      P(R`Differentiate \(f(x)=(-2x+4)^{6}\).`, [
        R`Outside: \(6(-2x+4)^{5}\). Inside derivative: \(-2\).`,
        R`Multiply: \(-12(-2x+4)^{5}\).`,
      ], R`\(f'(x)=-12(-2x+4)^{5}\)`),
      P(R`Differentiate \(f(x)=(-2x-5)^{6}\).`, [
        R`Outside: \(6(-2x-5)^{5}\). Inside derivative: \(-2\).`,
        R`Multiply: \(-12(-2x-5)^{5}\).`,
      ], R`\(f'(x)=-12(-2x-5)^{5}\)`),
      P(R`Differentiate \(f(x)=(-5x-1)^{3}\).`, [
        R`Outside: \(3(-5x-1)^{2}\). Inside derivative: \(-5\).`,
        R`Multiply: \(-15(-5x-1)^{2}\).`,
      ], R`\(f'(x)=-15(-5x-1)^{2}\)`),
      P(R`Differentiate \(f(x)=\cos(3x^{4})\).`, [
        R`Outside derivative: \(-\sin(3x^{4})\). Inside derivative: \(12x^{3}\).`,
        R`Multiply them.`,
      ], R`\(f'(x)=-12x^{3}\sin(3x^{4})\)`),
      P(R`Differentiate \(f(x)=\sin(4x^{4})\).`, [
        R`Outside derivative: \(\cos(4x^{4})\). Inside derivative: \(16x^{3}\).`,
        R`Multiply them.`,
      ], R`\(f'(x)=16x^{3}\cos(4x^{4})\)`),
      P(R`Differentiate \(f(x)=\sin(6x^{3})\).`, [
        R`Outside derivative: \(\cos(6x^{3})\). Inside derivative: \(18x^{2}\).`,
        R`Multiply them.`,
      ], R`\(f'(x)=18x^{2}\cos(6x^{3})\)`),
      P(R`Differentiate \(f(x)=e^{3x^{2}-2}\).`, [
        R`\(\dfrac{d}{dx}e^u=e^u\cdot u'\), with \(u=3x^{2}-2\), \(u'=6x\).`,
      ], R`\(f'(x)=6x\,e^{3x^{2}-2}\)`),
      P(R`Differentiate \(f(x)=e^{x^{2}+4}\).`, [
        R`\(\dfrac{d}{dx}e^u=e^u\cdot u'\), with \(u=x^{2}+4\), \(u'=2x\).`,
      ], R`\(f'(x)=2x\,e^{x^{2}+4}\)`),
      P(R`Differentiate \(f(x)=e^{x^{2}+2}\).`, [
        R`\(\dfrac{d}{dx}e^u=e^u\cdot u'\), with \(u=x^{2}+2\), \(u'=2x\).`,
      ], R`\(f'(x)=2x\,e^{x^{2}+2}\)`),
      P(R`Differentiate \(f(x)=\ln(4x^{2}+7)\).`, [
        R`\(\dfrac{d}{dx}\ln u=\dfrac{u'}{u}\), with \(u=4x^{2}+7\), \(u'=8x\).`,
      ], R`\(f'(x)=\dfrac{8x}{4x^{2}+7}\)`),
      P(R`Differentiate \(f(x)=\ln(4x^{2}+2)\).`, [
        R`\(\dfrac{d}{dx}\ln u=\dfrac{u'}{u}\), with \(u=4x^{2}+2\), \(u'=8x\).`,
      ], R`\(f'(x)=\dfrac{8x}{4x^{2}+2}\)`),
      P(R`Differentiate \(f(x)=\ln(x^{2}+9)\).`, [
        R`\(\dfrac{d}{dx}\ln u=\dfrac{u'}{u}\), with \(u=x^{2}+9\), \(u'=2x\).`,
      ], R`\(f'(x)=\dfrac{2x}{x^{2}+9}\)`),
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
      // ---- more practice ----
        P(R`Find \(\dfrac{dy}{dx}\) for \(xy=6\).`, [
          R`Product rule on the left: \(1\cdot y+x\dfrac{dy}{dx}=0\).`,
          R`\(x\dfrac{dy}{dx}=-y\).`,
        ], R`\(\dfrac{dy}{dx}=-\dfrac yx\)`),
        P(R`Find \(\dfrac{dy}{dx}\) for \(x^2+xy+y^2=7\), and the slope at \((1,2)\).`, [
          R`Differentiate: \(2x+\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
          R`Gather: \(\dfrac{dy}{dx}(x+2y)=-(2x+y)\).`,
          R`\(\dfrac{dy}{dx}=-\dfrac{2x+y}{x+2y}\).`,
          R`At \((1,2)\): \(-\dfrac{2+2}{1+4}=-\dfrac45\).`,
        ], R`\(\dfrac{dy}{dx}=-\dfrac{2x+y}{x+2y}\); slope \(-\dfrac45\).`),
        P(R`Find \(\dfrac{dy}{dx}\) for \(y^2=x^3+2x\).`, [
          R`\(2y\dfrac{dy}{dx}=3x^2+2\).`,
          R`Divide by \(2y\).`,
        ], R`\(\dfrac{dy}{dx}=\dfrac{3x^2+2}{2y}\)`),
        P(R`Find \(\dfrac{dy}{dx}\) for \(e^y=x+y\).`, [
          R`\(e^y\dfrac{dy}{dx}=1+\dfrac{dy}{dx}\).`,
          R`\(e^y\dfrac{dy}{dx}-\dfrac{dy}{dx}=1\).`,
          R`\(\dfrac{dy}{dx}(e^y-1)=1\).`,
        ], R`\(\dfrac{dy}{dx}=\dfrac{1}{e^y-1}\)`),
        P(R`Find \(\dfrac{dy}{dx}\) for \(x^2y^3=8\).`, [
          R`Product rule: \(2xy^3+x^2\cdot3y^2\dfrac{dy}{dx}=0\).`,
          R`\(\dfrac{dy}{dx}=\dfrac{-2xy^3}{3x^2y^2}\).`,
          R`Simplify: \(-\dfrac{2y}{3x}\).`,
        ], R`\(\dfrac{dy}{dx}=-\dfrac{2y}{3x}\)`),
        P(R`Find \(\dfrac{dy}{dx}\) for \(\cos y=x^2\).`, [
          R`\(-\sin y\,\dfrac{dy}{dx}=2x\).`,
          R`Divide by \(-\sin y\).`,
        ], R`\(\dfrac{dy}{dx}=-\dfrac{2x}{\sin y}\)`),
        P(R`Find the tangent line to \(x^2-y^2=9\) at \((5,4)\).`, [
          R`\(2x-2y\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=\dfrac xy\).`,
          R`At \((5,4)\): slope \(=\dfrac54\).`,
          R`\(y-4=\tfrac54(x-5)\).`,
        ], R`\(y-4=\tfrac54(x-5)\), or \(y=\tfrac54x-\tfrac94\)`),
        P(R`Find \(\dfrac{d^2y}{dx^2}\) for \(x^2+y^2=25\).`, [
          R`First derivative (from before): \(y'=-\dfrac xy\).`,
          R`Quotient rule: \(y''=-\dfrac{1\cdot y-x\cdot y'}{y^2}\).`,
          R`Substitute \(y'=-\frac xy\): \(y''=-\dfrac{y+\frac{x^2}{y}}{y^2}=-\dfrac{y^2+x^2}{y^3}\).`,
          R`Since \(x^2+y^2=25\): \(y''=-\dfrac{25}{y^3}\).`,
        ], R`\(\dfrac{d^2y}{dx^2}=-\dfrac{25}{y^3}\)`),
        P(R`Use logarithmic differentiation on \(y=x^{\sin x}\) (\(x>0\)).`, [
          R`\(\ln y=\sin x\ln x\).`,
          R`Product rule: \(\dfrac{1}{y}y'=\cos x\ln x+\sin x\cdot\dfrac1x\).`,
          R`Multiply by \(y=x^{\sin x}\).`,
        ], R`\(y'=x^{\sin x}\left(\cos x\ln x+\dfrac{\sin x}{x}\right)\)`),
      // ---- even more practice ----
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2+4y^2=25\) and the slope of the tangent line at \((3,2)\).`, [
        R`Differentiate: \(2x+8y\dfrac{dy}{dx}=0\).`,
        R`Solve: \(\dfrac{dy}{dx}=-\dfrac{2x}{8y}=-\dfrac{x}{4y}\).`,
        R`Plug in \((3,2)\): \(-\dfrac{3}{8}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{x}{4y}\); slope \(-\dfrac{3}{8}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2+2y^2=41\) and the slope of the tangent line at \((-3,4)\).`, [
        R`Differentiate: \(2x+4y\dfrac{dy}{dx}=0\).`,
        R`Solve: \(\dfrac{dy}{dx}=-\dfrac{2x}{4y}=-\dfrac{x}{2y}\).`,
        R`Plug in \((-3,4)\): \(\dfrac{3}{8}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{x}{2y}\); slope \(\dfrac{3}{8}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(3x^2+2y^2=50\) and the slope of the tangent line at \((-4,1)\).`, [
        R`Differentiate: \(6x+4y\dfrac{dy}{dx}=0\).`,
        R`Solve: \(\dfrac{dy}{dx}=-\dfrac{6x}{4y}=-\dfrac{3x}{2y}\).`,
        R`Plug in \((-4,1)\): \(6\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{3x}{2y}\); slope \(6\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(4x^2+2y^2=44\) and the slope of the tangent line at \((3,-2)\).`, [
        R`Differentiate: \(8x+4y\dfrac{dy}{dx}=0\).`,
        R`Solve: \(\dfrac{dy}{dx}=-\dfrac{8x}{4y}=-\dfrac{2x}{y}\).`,
        R`Plug in \((3,-2)\): \(3\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x}{y}\); slope \(3\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(5x^2+5y^2=40\) and the slope of the tangent line at \((-2,-2)\).`, [
        R`Differentiate: \(10x+10y\dfrac{dy}{dx}=0\).`,
        R`Solve: \(\dfrac{dy}{dx}=-\dfrac{10x}{10y}=-\dfrac{x}{y}\).`,
        R`Plug in \((-2,-2)\): \(-1\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{x}{y}\); slope \(-1\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2+xy+y^2=9\), then the slope at \((3,-3)\).`, [
        R`Differentiate (product rule on the middle): \(2x+1\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`Gather: \(\dfrac{dy}{dx}(1x+2y)=-(2x+1y)\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x+1y}{1x+2y}\).`,
        R`At \((3,-3)\): \(-\dfrac{3}{-3}=1\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x+1y}{1x+2y}\); slope \(1\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2-3xy+y^2=19\), then the slope at \((1,-3)\).`, [
        R`Differentiate (product rule on the middle): \(2x+(-3)\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`Gather: \(\dfrac{dy}{dx}(-3x+2y)=-(2x-3y)\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x-3y}{-3x+2y}\).`,
        R`At \((1,-3)\): \(-\dfrac{11}{-9}=\dfrac{11}{9}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x-3y}{-3x+2y}\); slope \(\dfrac{11}{9}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2-3xy+y^2=1\), then the slope at \((-1,-3)\).`, [
        R`Differentiate (product rule on the middle): \(2x+(-3)\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`Gather: \(\dfrac{dy}{dx}(-3x+2y)=-(2x-3y)\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x-3y}{-3x+2y}\).`,
        R`At \((-1,-3)\): \(-\dfrac{7}{-3}=\dfrac{7}{3}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x-3y}{-3x+2y}\); slope \(\dfrac{7}{3}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2+3xy+y^2=20\), then the slope at \((2,2)\).`, [
        R`Differentiate (product rule on the middle): \(2x+3\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`Gather: \(\dfrac{dy}{dx}(3x+2y)=-(2x+3y)\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x+3y}{3x+2y}\).`,
        R`At \((2,2)\): \(-\dfrac{10}{10}=-1\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x+3y}{3x+2y}\); slope \(-1\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2-3xy+y^2=31\), then the slope at \((3,-2)\).`, [
        R`Differentiate (product rule on the middle): \(2x+(-3)\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`Gather: \(\dfrac{dy}{dx}(-3x+2y)=-(2x-3y)\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x-3y}{-3x+2y}\).`,
        R`At \((3,-2)\): \(-\dfrac{12}{-13}=\dfrac{12}{13}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x-3y}{-3x+2y}\); slope \(\dfrac{12}{13}\)`),
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
      // ---- more practice ----
        P(R`The side of a square grows at 2 cm/s. How fast is the area growing when the side is 5 cm?`, [
          R`\(A=s^2\). Know \(\dfrac{ds}{dt}=2\). Want \(\dfrac{dA}{dt}\) when \(s=5\).`,
          R`\(\dfrac{dA}{dt}=2s\dfrac{ds}{dt}\).`,
          R`\(=2(5)(2)=20\).`,
        ], R`\(20\ \text{cm}^2/\text{s}\)`),
        P(R`Each edge of a cube grows at 0.5 in/s. How fast is the volume growing when an edge is 4 in?`, [
          R`\(V=s^3\Rightarrow\dfrac{dV}{dt}=3s^2\dfrac{ds}{dt}\).`,
          R`\(=3(16)(0.5)=24\).`,
        ], R`\(24\ \text{in}^3/\text{s}\)`),
        P(R`Car A is 30 mi north of an intersection driving north at 60 mph. Car B is 40 mi east of it driving east at 80 mph. How fast is the distance between them changing?`, [
          R`Let \(y\)=A's distance north, \(x\)=B's distance east, \(z\)=distance between. \(x^2+y^2=z^2\).`,
          R`Right now \(x=40\), \(y=30\), so \(z=50\).`,
          R`Differentiate: \(2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=2z\dfrac{dz}{dt}\).`,
          R`\(40(80)+30(60)=50\dfrac{dz}{dt}\Rightarrow5000=50\dfrac{dz}{dt}\).`,
          R`\(\dfrac{dz}{dt}=100\).`,
        ], R`Increasing at \(100\) mph`),
        P(R`A spherical snowball melts so its volume decreases at 10 cm³/min. How fast is the diameter decreasing when the diameter is 10 cm?`, [
          R`With diameter \(d\), \(r=\tfrac d2\): \(V=\tfrac43\pi\left(\tfrac d2\right)^3=\tfrac{\pi}{6}d^3\).`,
          R`\(\dfrac{dV}{dt}=\tfrac\pi2d^2\dfrac{dd}{dt}\).`,
          R`\(-10=\tfrac\pi2(100)\dfrac{dd}{dt}=50\pi\dfrac{dd}{dt}\).`,
          R`\(\dfrac{dd}{dt}=-\dfrac{1}{5\pi}\approx-0.0637\).`,
        ], R`Decreasing at \(\dfrac1{5\pi}\approx0.064\) cm/min`),
        P(R`A 6 ft tall person walks away from a 15 ft lamppost at 5 ft/s. How fast is the length of their shadow increasing?`, [
          R`Let \(x\)= distance from post to person, \(s\)= shadow length. Know \(\dfrac{dx}{dt}=5\).`,
          R`Similar triangles (big: post; small: person): \(\dfrac{15}{x+s}=\dfrac6s\).`,
          R`Cross-multiply: \(15s=6x+6s\Rightarrow9s=6x\Rightarrow s=\tfrac23x\).`,
          R`\(\dfrac{ds}{dt}=\tfrac23\dfrac{dx}{dt}=\tfrac23(5)=\tfrac{10}3\).`,
        ], R`\(\tfrac{10}{3}\approx3.33\) ft/s`),
        P(R`Water fills a cylindrical tank of radius 5 m at 3 m³/min. How fast is the water level rising?`, [
          R`\(V=\pi r^2h=25\pi h\) (radius is fixed).`,
          R`\(\dfrac{dV}{dt}=25\pi\dfrac{dh}{dt}\).`,
          R`\(3=25\pi\dfrac{dh}{dt}\Rightarrow\dfrac{dh}{dt}=\dfrac3{25\pi}\approx0.038\).`,
        ], R`\(\dfrac{3}{25\pi}\approx0.038\) m/min`),
        P(R`A plane flies horizontally at an altitude of 1 mi at 500 mph and passes directly over a radar station. How fast is its distance from the station increasing when it's 2 mi away from the station?`, [
          R`Let \(x\)= horizontal distance, \(z\)= distance to station. \(x^2+1=z^2\).`,
          R`When \(z=2\): \(x^2=3\Rightarrow x=\sqrt3\).`,
          R`Differentiate: \(2x\dfrac{dx}{dt}=2z\dfrac{dz}{dt}\).`,
          R`\(\sqrt3(500)=2\dfrac{dz}{dt}\Rightarrow\dfrac{dz}{dt}=250\sqrt3\approx433\).`,
        ], R`\(250\sqrt3\approx433\) mph`),
        P(R`A kite flies 100 ft high and the wind carries it horizontally at 8 ft/s. How fast must the string be let out when 200 ft of string is out?`, [
          R`\(x\)= horizontal distance, \(z\)= string. \(x^2+100^2=z^2\).`,
          R`When \(z=200\): \(x^2=40000-10000=30000\Rightarrow x=100\sqrt3\).`,
          R`\(x\dfrac{dx}{dt}=z\dfrac{dz}{dt}\).`,
          R`\(100\sqrt3(8)=200\dfrac{dz}{dt}\Rightarrow\dfrac{dz}{dt}=4\sqrt3\approx6.93\).`,
        ], R`\(4\sqrt3\approx6.93\) ft/s`),
      // ---- even more practice ----
      P(R`A circle's radius grows at 2 cm/s. How fast is its area growing when \(r=4\) cm?`, [
        R`\(A=\pi r^2\Rightarrow\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\).`,
        R`\(\dfrac{dA}{dt}=2\pi(4)(2)=16\pi\).`,
      ], R`\(16\pi\approx50.3\) cm²/s`),
      P(R`A circle's radius grows at 5 cm/s. How fast is its area growing when \(r=11\) cm?`, [
        R`\(A=\pi r^2\Rightarrow\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\).`,
        R`\(\dfrac{dA}{dt}=2\pi(11)(5)=110\pi\).`,
      ], R`\(110\pi\approx345.6\) cm²/s`),
      P(R`A circle's radius grows at 3 cm/s. How fast is its area growing when \(r=18\) cm?`, [
        R`\(A=\pi r^2\Rightarrow\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\).`,
        R`\(\dfrac{dA}{dt}=2\pi(18)(3)=108\pi\).`,
      ], R`\(108\pi\approx339.3\) cm²/s`),
      P(R`A spherical balloon is inflated at 50 cm³/s. How fast is the radius increasing when \(r=6\) cm?`, [
        R`\(V=\tfrac43\pi r^3\Rightarrow\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(50=4\pi(6)^2\dfrac{dr}{dt}=144\pi\dfrac{dr}{dt}\).`,
        R`\(\dfrac{dr}{dt}=\dfrac{50}{144\pi}=\dfrac{25}{72\pi}\approx0.1105\).`,
      ], R`\(\dfrac{25}{72\pi}\approx0.1105\) cm/s`),
      P(R`A spherical balloon is inflated at 200 cm³/s. How fast is the radius increasing when \(r=10\) cm?`, [
        R`\(V=\tfrac43\pi r^3\Rightarrow\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(200=4\pi(10)^2\dfrac{dr}{dt}=400\pi\dfrac{dr}{dt}\).`,
        R`\(\dfrac{dr}{dt}=\dfrac{200}{400\pi}=\dfrac{1}{2\pi}\approx0.1592\).`,
      ], R`\(\dfrac{1}{2\pi}\approx0.1592\) cm/s`),
      P(R`A spherical balloon is inflated at 200 cm³/s. How fast is the radius increasing when \(r=3\) cm?`, [
        R`\(V=\tfrac43\pi r^3\Rightarrow\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(200=4\pi(3)^2\dfrac{dr}{dt}=36\pi\dfrac{dr}{dt}\).`,
        R`\(\dfrac{dr}{dt}=\dfrac{200}{36\pi}=\dfrac{50}{9\pi}\approx1.7684\).`,
      ], R`\(\dfrac{50}{9\pi}\approx1.7684\) cm/s`),
      P(R`A 15 ft ladder leans against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 9 ft from the wall?`, [
        R`\(x^2+y^2=225\). When \(x=9\): \(y=\sqrt{225-81}=12\).`,
        R`Differentiate: \(2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0\).`,
        R`\(9(2)+12\dfrac{dy}{dt}=0\Rightarrow\dfrac{dy}{dt}=-\dfrac{3}{2}\).`,
        R`Negative means the top is moving down.`,
      ], R`Down at \(\dfrac{3}{2}\) ft/s`),
      P(R`A 10 ft ladder leans against a wall. The bottom slides away at 1 ft/s. How fast is the top sliding down when the bottom is 8 ft from the wall?`, [
        R`\(x^2+y^2=100\). When \(x=8\): \(y=\sqrt{100-64}=6\).`,
        R`Differentiate: \(2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0\).`,
        R`\(8(1)+6\dfrac{dy}{dt}=0\Rightarrow\dfrac{dy}{dt}=-\dfrac{4}{3}\).`,
        R`Negative means the top is moving down.`,
      ], R`Down at \(\dfrac{4}{3}\) ft/s`),
      P(R`A 17 ft ladder leans against a wall. The bottom slides away at 4 ft/s. How fast is the top sliding down when the bottom is 15 ft from the wall?`, [
        R`\(x^2+y^2=289\). When \(x=15\): \(y=\sqrt{289-225}=8\).`,
        R`Differentiate: \(2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0\).`,
        R`\(15(4)+8\dfrac{dy}{dt}=0\Rightarrow\dfrac{dy}{dt}=-\dfrac{15}{2}\).`,
        R`Negative means the top is moving down.`,
      ], R`Down at \(\dfrac{15}{2}\) ft/s`),
      P(R`A 10 ft ladder leans against a wall. The bottom slides away at 3 ft/s. How fast is the top sliding down when the bottom is 6 ft from the wall?`, [
        R`\(x^2+y^2=100\). When \(x=6\): \(y=\sqrt{100-36}=8\).`,
        R`Differentiate: \(2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0\).`,
        R`\(6(3)+8\dfrac{dy}{dt}=0\Rightarrow\dfrac{dy}{dt}=-\dfrac{9}{4}\).`,
        R`Negative means the top is moving down.`,
      ], R`Down at \(\dfrac{9}{4}\) ft/s`),
      P(R`The side of a square increases at 3 in/min. How fast is the area increasing when the side is 12 in?`, [
        R`\(A=s^2\Rightarrow\dfrac{dA}{dt}=2s\dfrac{ds}{dt}\).`,
        R`\(2(12)(3)=72\).`,
      ], R`\(72\) in²/min`),
      P(R`The side of a square increases at 3 in/min. How fast is the area increasing when the side is 4 in?`, [
        R`\(A=s^2\Rightarrow\dfrac{dA}{dt}=2s\dfrac{ds}{dt}\).`,
        R`\(2(4)(3)=24\).`,
      ], R`\(24\) in²/min`),
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
      // ---- more practice ----
        P(R`Estimate \(\sqrt{4.1}\) with linear approximation.`, [
          R`\(f(x)=\sqrt x\), \(a=4\). \(f(4)=2\), \(f'(4)=\dfrac1{2\cdot2}=\dfrac14\).`,
          R`\(L(4.1)=2+\tfrac14(0.1)=2.025\).`,
        ], R`\(\approx2.025\)`),
        P(R`Estimate \((1.02)^{10}\).`, [
          R`\(f(x)=x^{10}\), \(a=1\). \(f(1)=1\), \(f'(x)=10x^9\Rightarrow f'(1)=10\).`,
          R`\(L(1.02)=1+10(0.02)=1.2\).`,
          R`(Actual: \(1.219\ldots\))`,
        ], R`\(\approx1.2\)`),
        P(R`Estimate \(\sin(0.05)\).`, [
          R`\(f(x)=\sin x\), \(a=0\). \(f(0)=0\), \(f'(0)=\cos0=1\).`,
          R`\(L(x)=x\), so \(\sin(0.05)\approx0.05\).`,
        ], R`\(\approx0.05\)`),
        P(R`Estimate \(e^{0.1}\).`, [
          R`\(f(x)=e^x\), \(a=0\). \(f(0)=1\), \(f'(0)=1\).`,
          R`\(L(x)=1+x\Rightarrow L(0.1)=1.1\).`,
          R`(Actual \(1.105\ldots\); underestimate since \(e^x\) is concave up.)`,
        ], R`\(\approx1.1\)`),
        P(R`Estimate \(\dfrac{1}{0.98}\).`, [
          R`\(f(x)=\dfrac1x\), \(a=1\). \(f(1)=1\), \(f'(x)=-\dfrac1{x^2}\Rightarrow f'(1)=-1\).`,
          R`\(L(0.98)=1-1(0.98-1)=1+0.02=1.02\).`,
        ], R`\(\approx1.02\)`),
        P(R`A sphere's radius is measured as 10 cm with a possible error of 0.1 cm. Use differentials to estimate the maximum error in the volume.`, [
          R`\(V=\tfrac43\pi r^3\Rightarrow dV=4\pi r^2\,dr\).`,
          R`\(r=10\), \(dr=0.1\): \(dV=4\pi(100)(0.1)=40\pi\).`,
        ], R`\(40\pi\approx125.7\ \text{cm}^3\)`),
        P(R`Find the linearization of \(f(x)=\sqrt{x+3}\) at \(a=1\) and use it to estimate \(\sqrt{4.05}\).`, [
          R`\(f(1)=2\). \(f'(x)=\dfrac{1}{2\sqrt{x+3}}\Rightarrow f'(1)=\dfrac14\).`,
          R`\(L(x)=2+\tfrac14(x-1)\).`,
          R`\(\sqrt{4.05}=f(1.05)\approx2+\tfrac14(0.05)=2.0125\).`,
        ], R`\(L(x)=2+\tfrac14(x-1)\); \(\sqrt{4.05}\approx2.0125\)`),
      // ---- even more practice ----
      P(R`Use linear approximation to estimate \(\sqrt{24.7}\).`, [
        R`\(f(x)=\sqrt x\), \(a=25\). \(f(25)=5\).`,
        R`\(f'(x)=\dfrac1{2\sqrt x}\Rightarrow f'(25)=\dfrac1{10}\).`,
        R`\(L(24.7)=5+\dfrac1{10}(-0.3)\approx4.97\).`,
        R`(Actual: \(4.9699\).)`,
      ], R`\(\approx4.97\)`),
      P(R`Use linear approximation to estimate \(\sqrt{100.4}\).`, [
        R`\(f(x)=\sqrt x\), \(a=100\). \(f(100)=10\).`,
        R`\(f'(x)=\dfrac1{2\sqrt x}\Rightarrow f'(100)=\dfrac1{20}\).`,
        R`\(L(100.4)=10+\dfrac1{20}(0.4)\approx10.02\).`,
        R`(Actual: \(10.0200\).)`,
      ], R`\(\approx10.02\)`),
      P(R`Use linear approximation to estimate \(\sqrt{25.4}\).`, [
        R`\(f(x)=\sqrt x\), \(a=25\). \(f(25)=5\).`,
        R`\(f'(x)=\dfrac1{2\sqrt x}\Rightarrow f'(25)=\dfrac1{10}\).`,
        R`\(L(25.4)=5+\dfrac1{10}(0.4)\approx5.04\).`,
        R`(Actual: \(5.0398\).)`,
      ], R`\(\approx5.04\)`),
      P(R`Use linear approximation to estimate \(\sqrt{36.3}\).`, [
        R`\(f(x)=\sqrt x\), \(a=36\). \(f(36)=6\).`,
        R`\(f'(x)=\dfrac1{2\sqrt x}\Rightarrow f'(36)=\dfrac1{12}\).`,
        R`\(L(36.3)=6+\dfrac1{12}(0.3)\approx6.025\).`,
        R`(Actual: \(6.0249\).)`,
      ], R`\(\approx6.025\)`),
      P(R`Use linear approximation to estimate \(\sqrt{8.9}\).`, [
        R`\(f(x)=\sqrt x\), \(a=9\). \(f(9)=3\).`,
        R`\(f'(x)=\dfrac1{2\sqrt x}\Rightarrow f'(9)=\dfrac1{6}\).`,
        R`\(L(8.9)=3+\dfrac1{6}(-0.1)\approx2.9833\).`,
        R`(Actual: \(2.9833\).)`,
      ], R`\(\approx2.9833\)`),
      P(R`Use linear approximation to estimate \(\sqrt{99.7}\).`, [
        R`\(f(x)=\sqrt x\), \(a=100\). \(f(100)=10\).`,
        R`\(f'(x)=\dfrac1{2\sqrt x}\Rightarrow f'(100)=\dfrac1{20}\).`,
        R`\(L(99.7)=10+\dfrac1{20}(-0.3)\approx9.985\).`,
        R`(Actual: \(9.9850\).)`,
      ], R`\(\approx9.985\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{26.7}\).`, [
        R`\(f(x)=x^{1/3}\), \(a=27\), \(f(27)=3\).`,
        R`\(f'(x)=\tfrac13x^{-2/3}\Rightarrow f'(27)=\dfrac{1}{3\cdot9}=\dfrac1{27}\).`,
        R`\(L(26.7)=3+\dfrac{-0.3}{27}\approx2.9889\).`,
      ], R`\(\approx2.9889\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{125.1}\).`, [
        R`\(f(x)=x^{1/3}\), \(a=125\), \(f(125)=5\).`,
        R`\(f'(x)=\tfrac13x^{-2/3}\Rightarrow f'(125)=\dfrac{1}{3\cdot25}=\dfrac1{75}\).`,
        R`\(L(125.1)=5+\dfrac{0.1}{75}\approx5.0013\).`,
      ], R`\(\approx5.0013\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{63.7}\).`, [
        R`\(f(x)=x^{1/3}\), \(a=64\), \(f(64)=4\).`,
        R`\(f'(x)=\tfrac13x^{-2/3}\Rightarrow f'(64)=\dfrac{1}{3\cdot16}=\dfrac1{48}\).`,
        R`\(L(63.7)=4+\dfrac{-0.3}{48}\approx3.9938\).`,
      ], R`\(\approx3.9938\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{125.3}\).`, [
        R`\(f(x)=x^{1/3}\), \(a=125\), \(f(125)=5\).`,
        R`\(f'(x)=\tfrac13x^{-2/3}\Rightarrow f'(125)=\dfrac{1}{3\cdot25}=\dfrac1{75}\).`,
        R`\(L(125.3)=5+\dfrac{0.3}{75}\approx5.004\).`,
      ], R`\(\approx5.004\)`),
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
      // ---- more practice ----
        P(R`For \(f(x)=2x^3-3x^2-12x+1\), find the local extrema and the inflection point.`, [
          R`\(f'=6x^2-6x-12=6(x-2)(x+1)\). CPs: \(x=-1,2\).`,
          R`Signs: \(x<-1\): \(+\); \(-1<x<2\): \(-\); \(x>2\): \(+\).`,
          R`Local max at \(x=-1\): \(f(-1)=-2-3+12+1=8\).`,
          R`Local min at \(x=2\): \(f(2)=16-12-24+1=-19\).`,
          R`\(f''=12x-6=0\Rightarrow x=\tfrac12\); \(f(\tfrac12)=\tfrac14-\tfrac34-6+1=-\tfrac{11}2\).`,
        ], R`Local max \((-1,8)\), local min \((2,-19)\), inflection \(\left(\tfrac12,-\tfrac{11}2\right)\)`),
        P(R`Find the absolute max and min of \(f(x)=x^2-4x+1\) on \([0,5]\).`, [
          R`\(f'=2x-4=0\Rightarrow x=2\).`,
          R`\(f(0)=1\), \(f(2)=-3\), \(f(5)=25-20+1=6\).`,
        ], R`Abs max \(6\) at \(x=5\); abs min \(-3\) at \(x=2\).`),
        P(R`Find the absolute max and min of \(f(x)=x+\dfrac4x\) on \([1,4]\).`, [
          R`\(f'=1-\dfrac4{x^2}=0\Rightarrow x^2=4\Rightarrow x=2\) (only \(+2\) is in the interval).`,
          R`\(f(1)=5\), \(f(2)=4\), \(f(4)=5\).`,
        ], R`Abs max \(5\) at \(x=1\) and \(x=4\); abs min \(4\) at \(x=2\).`),
        P(R`Find the critical numbers and local extrema of \(f(x)=x^{2/3}\).`, [
          R`\(f'(x)=\tfrac23x^{-1/3}=\dfrac{2}{3\sqrt[3]x}\).`,
          R`Never 0, but undefined at \(x=0\) (and \(f(0)=0\) is defined) &rArr; CP at \(x=0\).`,
          R`\(x<0\): \(f'<0\). \(x>0\): \(f'>0\). So local min.`,
        ], R`CP \(x=0\); local min at \((0,0)\) (a sharp "cusp").`),
        P(R`Find the local max of \(f(x)=\dfrac{\ln x}{x}\).`, [
          R`Quotient rule: \(f'=\dfrac{\frac1x\cdot x-\ln x\cdot1}{x^2}=\dfrac{1-\ln x}{x^2}\).`,
          R`\(f'=0\Rightarrow\ln x=1\Rightarrow x=e\).`,
          R`\(x<e\): \(f'>0\); \(x>e\): \(f'<0\) &rArr; local max.`,
          R`\(f(e)=\dfrac1e\).`,
        ], R`Local max \(\left(e,\tfrac1e\right)\)`),
        P(R`Find the absolute max and min of \(f(x)=\sin x+\cos x\) on \([0,2\pi]\).`, [
          R`\(f'=\cos x-\sin x=0\Rightarrow\tan x=1\Rightarrow x=\tfrac\pi4,\ \tfrac{5\pi}4\).`,
          R`\(f(0)=1\), \(f(2\pi)=1\).`,
          R`\(f(\tfrac\pi4)=\tfrac{\sqrt2}2+\tfrac{\sqrt2}2=\sqrt2\).`,
          R`\(f(\tfrac{5\pi}4)=-\tfrac{\sqrt2}2-\tfrac{\sqrt2}2=-\sqrt2\).`,
        ], R`Abs max \(\sqrt2\) at \(\tfrac\pi4\); abs min \(-\sqrt2\) at \(\tfrac{5\pi}4\).`),
        P(R`Find the intervals of concavity and inflection points of \(f(x)=x^4-6x^2\).`, [
          R`\(f'=4x^3-12x\), \(f''=12x^2-12=12(x-1)(x+1)\).`,
          R`\(f''=0\) at \(x=\pm1\).`,
          R`\(x<-1\): \(+\) (up). \(-1<x<1\): \(-\) (down). \(x>1\): \(+\) (up).`,
          R`\(f(\pm1)=1-6=-5\).`,
        ], R`Up on \((-\infty,-1)\cup(1,\infty)\), down on \((-1,1)\); inflection points \((\pm1,-5)\).`),
        P(R`Suppose \(f'(x)=(x-1)^2(x+2)\). Where is \(f\) increasing/decreasing, and where are the local extrema?`, [
          R`CPs: \(x=1\), \(x=-2\).`,
          R`\((x-1)^2\ge0\) always, so the sign of \(f'\) is the sign of \((x+2)\).`,
          R`\(x<-2\): \(f'<0\). \(x>-2\): \(f'>0\) (except \(=0\) at \(x=1\)).`,
          R`Sign changes \(-\to+\) at \(x=-2\): local min. No sign change at \(x=1\): neither.`,
        ], R`Decreasing on \((-\infty,-2)\), increasing on \((-2,\infty)\); local min at \(x=-2\); no extremum at \(x=1\).`),
        P(R`Find the local extrema of \(f(x)=\dfrac{x}{x^2+1}\).`, [
          R`\(f'=\dfrac{1(x^2+1)-x(2x)}{(x^2+1)^2}=\dfrac{1-x^2}{(x^2+1)^2}\).`,
          R`\(f'=0\Rightarrow x=\pm1\).`,
          R`\(x<-1\): \(-\). \(-1<x<1\): \(+\). \(x>1\): \(-\).`,
          R`Local min \(f(-1)=-\tfrac12\); local max \(f(1)=\tfrac12\).`,
        ], R`Local min \(\left(-1,-\tfrac12\right)\), local max \(\left(1,\tfrac12\right)\)`),
      // ---- even more practice ----
      P(R`For \(f(x)=x^{3}+6x^{2}+9x-4\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}+12x+9=3(x+3)(x+1)\). Critical numbers \(x=-3,\ -1\).`,
        R`Sign of \(f'\): \(+\) before \(-3\), \(-\) between, \(+\) after \(-1\).`,
        R`Local max at \(x=-3\): \(f(-3)=-4\). Local min at \(x=-1\): \(f(-1)=-8\).`,
        R`\(f''(x)=6x+12=0\Rightarrow x=-2\); \(f(-2)=-6\). Concavity changes there.`,
      ], R`Local max \((-3,-4)\), local min \((-1,-8)\), inflection \((-2,-6)\)`),
      P(R`For \(f(x)=x^{3}-3x^{2}-9x+1\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}-6x-9=3(x+1)(x-3)\). Critical numbers \(x=-1,\ 3\).`,
        R`Sign of \(f'\): \(+\) before \(-1\), \(-\) between, \(+\) after \(3\).`,
        R`Local max at \(x=-1\): \(f(-1)=6\). Local min at \(x=3\): \(f(3)=-26\).`,
        R`\(f''(x)=6x-6=0\Rightarrow x=1\); \(f(1)=-10\). Concavity changes there.`,
      ], R`Local max \((-1,6)\), local min \((3,-26)\), inflection \((1,-10)\)`),
      P(R`For \(f(x)=x^{3}-9x^{2}+24x+5\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}-18x+24=3(x-2)(x-4)\). Critical numbers \(x=2,\ 4\).`,
        R`Sign of \(f'\): \(+\) before \(2\), \(-\) between, \(+\) after \(4\).`,
        R`Local max at \(x=2\): \(f(2)=25\). Local min at \(x=4\): \(f(4)=21\).`,
        R`\(f''(x)=6x-18=0\Rightarrow x=3\); \(f(3)=23\). Concavity changes there.`,
      ], R`Local max \((2,25)\), local min \((4,21)\), inflection \((3,23)\)`),
      P(R`For \(f(x)=x^{3}+9x^{2}+24x-5\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}+18x+24=3(x+4)(x+2)\). Critical numbers \(x=-4,\ -2\).`,
        R`Sign of \(f'\): \(+\) before \(-4\), \(-\) between, \(+\) after \(-2\).`,
        R`Local max at \(x=-4\): \(f(-4)=-21\). Local min at \(x=-2\): \(f(-2)=-25\).`,
        R`\(f''(x)=6x+18=0\Rightarrow x=-3\); \(f(-3)=-23\). Concavity changes there.`,
      ], R`Local max \((-4,-21)\), local min \((-2,-25)\), inflection \((-3,-23)\)`),
      P(R`For \(f(x)=x^{3}-6x^{2}+1\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}-12x=3(x)(x-4)\). Critical numbers \(x=0,\ 4\).`,
        R`Sign of \(f'\): \(+\) before \(0\), \(-\) between, \(+\) after \(4\).`,
        R`Local max at \(x=0\): \(f(0)=1\). Local min at \(x=4\): \(f(4)=-31\).`,
        R`\(f''(x)=6x-12=0\Rightarrow x=2\); \(f(2)=-15\). Concavity changes there.`,
      ], R`Local max \((0,1)\), local min \((4,-31)\), inflection \((2,-15)\)`),
      P(R`For \(f(x)=x^{3}+6x^{2}-5\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}+12x=3(x+4)(x)\). Critical numbers \(x=-4,\ 0\).`,
        R`Sign of \(f'\): \(+\) before \(-4\), \(-\) between, \(+\) after \(0\).`,
        R`Local max at \(x=-4\): \(f(-4)=27\). Local min at \(x=0\): \(f(0)=-5\).`,
        R`\(f''(x)=6x+12=0\Rightarrow x=-2\); \(f(-2)=11\). Concavity changes there.`,
      ], R`Local max \((-4,27)\), local min \((0,-5)\), inflection \((-2,11)\)`),
      P(R`For \(f(x)=x^{3}-12x+3\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}-12=3(x+2)(x-2)\). Critical numbers \(x=-2,\ 2\).`,
        R`Sign of \(f'\): \(+\) before \(-2\), \(-\) between, \(+\) after \(2\).`,
        R`Local max at \(x=-2\): \(f(-2)=19\). Local min at \(x=2\): \(f(2)=-13\).`,
        R`\(f''(x)=6x=0\Rightarrow x=0\); \(f(0)=3\). Concavity changes there.`,
      ], R`Local max \((-2,19)\), local min \((2,-13)\), inflection \((0,3)\)`),
      P(R`Find the absolute max and min of \(f(x)=2x^{2}-12x\) on \([0,5]\).`, [
        R`\(f'(x)=4x-12=0\Rightarrow x=3\) (inside the interval).`,
        R`Endpoints: \(f(0)=0\), \(f(5)=-10\). Critical number: \(f(3)=-18\).`,
        R`Biggest is the max, smallest is the min.`,
      ], R`Abs max \(0\) at \(x=0\); abs min \(-18\) at \(x=3\)`),
      P(R`Find the absolute max and min of \(f(x)=x^{2}-4x-3\) on \([0,4]\).`, [
        R`\(f'(x)=2x-4=0\Rightarrow x=2\) (inside the interval).`,
        R`Endpoints: \(f(0)=-3\), \(f(4)=-3\). Critical number: \(f(2)=-7\).`,
        R`Biggest is the max, smallest is the min.`,
      ], R`Abs max \(-3\) at \(x=0\); abs min \(-7\) at \(x=2\)`),
      P(R`Find the absolute max and min of \(f(x)=x^{2}+4x\) on \([-5,-1]\).`, [
        R`\(f'(x)=2x+4=0\Rightarrow x=-2\) (inside the interval).`,
        R`Endpoints: \(f(-5)=5\), \(f(-1)=-3\). Critical number: \(f(-2)=-4\).`,
        R`Biggest is the max, smallest is the min.`,
      ], R`Abs max \(5\) at \(x=-5\); abs min \(-4\) at \(x=-2\)`),
      P(R`Find the absolute max and min of \(f(x)=x^{2}+4x+4\) on \([-5,1]\).`, [
        R`\(f'(x)=2x+4=0\Rightarrow x=-2\) (inside the interval).`,
        R`Endpoints: \(f(-5)=9\), \(f(1)=9\). Critical number: \(f(-2)=0\).`,
        R`Biggest is the max, smallest is the min.`,
      ], R`Abs max \(9\) at \(x=-5\); abs min \(0\) at \(x=-2\)`),
      P(R`Find the absolute max and min of \(f(x)=2x^{2}-8x+4\) on \([1,6]\).`, [
        R`\(f'(x)=4x-8=0\Rightarrow x=2\) (inside the interval).`,
        R`Endpoints: \(f(1)=-2\), \(f(6)=28\). Critical number: \(f(2)=-4\).`,
        R`Biggest is the max, smallest is the min.`,
      ], R`Abs max \(28\) at \(x=6\); abs min \(-4\) at \(x=2\)`),
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
      // ---- more practice ----
        P(R`Find \(c\) satisfying the MVT for \(f(x)=\sqrt x\) on \([0,4]\).`, [
          R`\(f\) is continuous on \([0,4]\) and differentiable on \((0,4)\). ✓`,
          R`Average slope: \(\dfrac{2-0}{4-0}=\dfrac12\).`,
          R`\(\dfrac1{2\sqrt c}=\dfrac12\Rightarrow\sqrt c=1\Rightarrow c=1\).`,
        ], R`\(c=1\)`),
        P(R`Find \(c\) satisfying the MVT for \(f(x)=\dfrac1x\) on \([1,3]\).`, [
          R`\(\dfrac1x\) is fine on \([1,3]\) (no zero). ✓`,
          R`Average slope: \(\dfrac{\frac13-1}{3-1}=\dfrac{-2/3}{2}=-\dfrac13\).`,
          R`\(-\dfrac1{c^2}=-\dfrac13\Rightarrow c^2=3\Rightarrow c=\sqrt3\) (the positive one is in \((1,3)\)).`,
        ], R`\(c=\sqrt3\approx1.732\)`),
        P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([-1,2]\).`, [
          R`Average slope: \(\dfrac{8-(-1)}{2-(-1)}=\dfrac93=3\).`,
          R`\(3c^2=3\Rightarrow c=\pm1\).`,
          R`\(c=-1\) is an endpoint, not inside \((-1,2)\). Keep \(c=1\).`,
        ], R`\(c=1\)`),
        P(R`Why doesn't the MVT apply to \(f(x)=|x|\) on \([-1,1]\)?`, [
          R`The MVT needs \(f\) differentiable on \((-1,1)\).`,
          R`\(|x|\) has a sharp corner at \(x=0\), so \(f'(0)\) doesn't exist.`,
          R`Check: the average slope is \(\frac{1-1}{2}=0\), but \(f'(x)\) is only ever \(-1\) or \(1\), never 0.`,
        ], R`\(f\) is not differentiable at \(x=0\).`),
        P(R`You drive 150 miles in 2 hours. Explain why your speedometer read exactly 75 mph at some moment.`, [
          R`Let \(s(t)\) be position; it's continuous and differentiable.`,
          R`Average velocity: \(\dfrac{s(2)-s(0)}{2-0}=\dfrac{150}2=75\).`,
          R`By the MVT, \(s'(c)=75\) for some \(c\) in \((0,2)\).`,
        ], R`By the MVT, the instantaneous speed equaled the average speed, 75 mph, at some time.`),
        P(R`If \(f(1)=3\) and \(f'(x)\le2\) for all \(x\), what's the largest possible value of \(f(4)\)?`, [
          R`MVT on \([1,4]\): \(\dfrac{f(4)-f(1)}{4-1}=f'(c)\le2\).`,
          R`\(f(4)-3\le6\).`,
          R`\(f(4)\le9\).`,
        ], R`\(9\)`),
      // ---- even more practice ----
      P(R`Find all \(c\) that satisfy the Mean Value Theorem for \(f(x)=3x^{2}-4x+4\) on \([-3,1]\).`, [
        R`Polynomial &rArr; continuous and differentiable. ✓`,
        R`Average slope: \(\dfrac{f(1)-f(-3)}{1-(-3)}=\dfrac{3-43}{4}=-10\).`,
        R`\(f'(c)=6c-4=-10\Rightarrow c=-1\).`,
        R`\(-1\) is inside \((-3,1)\). ✓ (For any quadratic, \(c\) is always the midpoint!)`,
      ], R`\(c=-1\)`),
      P(R`Find all \(c\) that satisfy the Mean Value Theorem for \(f(x)=3x^{2}+5x-2\) on \([1,5]\).`, [
        R`Polynomial &rArr; continuous and differentiable. ✓`,
        R`Average slope: \(\dfrac{f(5)-f(1)}{5-1}=\dfrac{98-6}{4}=23\).`,
        R`\(f'(c)=6c+5=23\Rightarrow c=3\).`,
        R`\(3\) is inside \((1,5)\). ✓ (For any quadratic, \(c\) is always the midpoint!)`,
      ], R`\(c=3\)`),
      P(R`Find all \(c\) that satisfy the Mean Value Theorem for \(f(x)=4x^{2}+5x+2\) on \([-1,2]\).`, [
        R`Polynomial &rArr; continuous and differentiable. ✓`,
        R`Average slope: \(\dfrac{f(2)-f(-1)}{2-(-1)}=\dfrac{28-1}{3}=9\).`,
        R`\(f'(c)=8c+5=9\Rightarrow c=\dfrac{1}{2}\).`,
        R`\(\dfrac{1}{2}\) is inside \((-1,2)\). ✓ (For any quadratic, \(c\) is always the midpoint!)`,
      ], R`\(c=\dfrac{1}{2}\)`),
      P(R`Find all \(c\) that satisfy the Mean Value Theorem for \(f(x)=2x^{2}+x+3\) on \([-2,-1]\).`, [
        R`Polynomial &rArr; continuous and differentiable. ✓`,
        R`Average slope: \(\dfrac{f(-1)-f(-2)}{-1-(-2)}=\dfrac{4-9}{1}=-5\).`,
        R`\(f'(c)=4c+1=-5\Rightarrow c=-\dfrac{3}{2}\).`,
        R`\(-\dfrac{3}{2}\) is inside \((-2,-1)\). ✓ (For any quadratic, \(c\) is always the midpoint!)`,
      ], R`\(c=-\dfrac{3}{2}\)`),
      P(R`Find all \(c\) that satisfy the Mean Value Theorem for \(f(x)=3x^{2}-3x-4\) on \([-2,1]\).`, [
        R`Polynomial &rArr; continuous and differentiable. ✓`,
        R`Average slope: \(\dfrac{f(1)-f(-2)}{1-(-2)}=\dfrac{-4-14}{3}=-6\).`,
        R`\(f'(c)=6c-3=-6\Rightarrow c=-\dfrac{1}{2}\).`,
        R`\(-\dfrac{1}{2}\) is inside \((-2,1)\). ✓ (For any quadratic, \(c\) is always the midpoint!)`,
      ], R`\(c=-\dfrac{1}{2}\)`),
      P(R`Find all \(c\) that satisfy the Mean Value Theorem for \(f(x)=3x^{2}+3x\) on \([-2,-1]\).`, [
        R`Polynomial &rArr; continuous and differentiable. ✓`,
        R`Average slope: \(\dfrac{f(-1)-f(-2)}{-1-(-2)}=\dfrac{0-6}{1}=-6\).`,
        R`\(f'(c)=6c+3=-6\Rightarrow c=-\dfrac{3}{2}\).`,
        R`\(-\dfrac{3}{2}\) is inside \((-2,-1)\). ✓ (For any quadratic, \(c\) is always the midpoint!)`,
      ], R`\(c=-\dfrac{3}{2}\)`),
      P(R`Find all \(c\) that satisfy the Mean Value Theorem for \(f(x)=3x^{2}-5x+5\) on \([-3,-1]\).`, [
        R`Polynomial &rArr; continuous and differentiable. ✓`,
        R`Average slope: \(\dfrac{f(-1)-f(-3)}{-1-(-3)}=\dfrac{13-47}{2}=-17\).`,
        R`\(f'(c)=6c-5=-17\Rightarrow c=-2\).`,
        R`\(-2\) is inside \((-3,-1)\). ✓ (For any quadratic, \(c\) is always the midpoint!)`,
      ], R`\(c=-2\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,7]\).`, [
        R`Average slope: \(\dfrac{343-0}{7}=49\).`,
        R`\(3c^2=49\Rightarrow c^2=\dfrac{49}{3}\Rightarrow c=\dfrac{7}{\sqrt3}\) (take the positive one).`,
        R`\(\dfrac{7}{\sqrt3}\approx4.041\), which is in \((0,7)\). ✓`,
      ], R`\(c=\dfrac{7}{\sqrt3}\approx4.041\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,5]\).`, [
        R`Average slope: \(\dfrac{125-0}{5}=25\).`,
        R`\(3c^2=25\Rightarrow c^2=\dfrac{25}{3}\Rightarrow c=\dfrac{5}{\sqrt3}\) (take the positive one).`,
        R`\(\dfrac{5}{\sqrt3}\approx2.887\), which is in \((0,5)\). ✓`,
      ], R`\(c=\dfrac{5}{\sqrt3}\approx2.887\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,2]\).`, [
        R`Average slope: \(\dfrac{8-0}{2}=4\).`,
        R`\(3c^2=4\Rightarrow c^2=\dfrac{4}{3}\Rightarrow c=\dfrac{2}{\sqrt3}\) (take the positive one).`,
        R`\(\dfrac{2}{\sqrt3}\approx1.155\), which is in \((0,2)\). ✓`,
      ], R`\(c=\dfrac{2}{\sqrt3}\approx1.155\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,9]\).`, [
        R`Average slope: \(\dfrac{729-0}{9}=81\).`,
        R`\(3c^2=81\Rightarrow c^2=27\Rightarrow c=\dfrac{9}{\sqrt3}\) (take the positive one).`,
        R`\(\dfrac{9}{\sqrt3}\approx5.196\), which is in \((0,9)\). ✓`,
      ], R`\(c=\dfrac{9}{\sqrt3}\approx5.196\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,4]\).`, [
        R`Average slope: \(\dfrac{64-0}{4}=16\).`,
        R`\(3c^2=16\Rightarrow c^2=\dfrac{16}{3}\Rightarrow c=\dfrac{4}{\sqrt3}\) (take the positive one).`,
        R`\(\dfrac{4}{\sqrt3}\approx2.309\), which is in \((0,4)\). ✓`,
      ], R`\(c=\dfrac{4}{\sqrt3}\approx2.309\)`),
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
      // ---- more practice ----
        P(R`Two positive numbers have product 100. Minimize their sum.`, [
          R`\(xy=100\Rightarrow y=\dfrac{100}x\). Sum \(S=x+\dfrac{100}x\).`,
          R`\(S'=1-\dfrac{100}{x^2}=0\Rightarrow x=10\).`,
          R`\(S''=\dfrac{200}{x^3}>0\) &rArr; min. \(y=10\).`,
        ], R`\(10\) and \(10\); minimum sum \(20\).`),
        P(R`Find the dimensions of the rectangle with perimeter 40 and the largest area.`, [
          R`\(2x+2y=40\Rightarrow y=20-x\).`,
          R`\(A=x(20-x)=20x-x^2\).`,
          R`\(A'=20-2x=0\Rightarrow x=10\), \(y=10\).`,
          R`\(A''=-2<0\) &rArr; max.`,
        ], R`\(10\times10\) (a square); area \(100\)`),
        P(R`An open-top box with a square base must hold 32,000 cm³. Find the dimensions that use the least material.`, [
          R`Base \(x\times x\), height \(h\). \(x^2h=32000\Rightarrow h=\dfrac{32000}{x^2}\).`,
          R`Material: \(S=x^2+4xh=x^2+\dfrac{128000}{x}\).`,
          R`\(S'=2x-\dfrac{128000}{x^2}=0\Rightarrow x^3=64000\Rightarrow x=40\).`,
          R`\(h=\dfrac{32000}{1600}=20\). \(S''>0\) so it's a min.`,
        ], R`Base \(40\times40\) cm, height \(20\) cm`),
        P(R`Find the number that exceeds its square by the greatest amount.`, [
          R`Maximize \(f(x)=x-x^2\).`,
          R`\(f'=1-2x=0\Rightarrow x=\tfrac12\). \(f''=-2<0\) &rArr; max.`,
          R`Amount: \(\tfrac12-\tfrac14=\tfrac14\).`,
        ], R`\(\tfrac12\) (it exceeds its square by \(\tfrac14\))`),
        P(R`A rectangle has its base on the \(x\)-axis and top corners on \(y=12-x^2\). Find the largest possible area.`, [
          R`Top-right corner \((x,12-x^2)\), so width \(2x\), height \(12-x^2\).`,
          R`\(A=2x(12-x^2)=24x-2x^3\), \(0<x<\sqrt{12}\).`,
          R`\(A'=24-6x^2=0\Rightarrow x=2\).`,
          R`\(A=4\cdot8=32\).`,
        ], R`Max area \(32\) (width 4, height 8)`),
        P(R`Demand for a product is \(q=1000-20p\) where \(p\) is the price in dollars. What price maximizes revenue?`, [
          R`Revenue \(=\) price \(\times\) quantity: \(R=p(1000-20p)=1000p-20p^2\).`,
          R`\(R'=1000-40p=0\Rightarrow p=25\).`,
          R`\(R(25)=25\cdot500=12500\). \(R''<0\) &rArr; max.`,
        ], R`\(p=\$25\); max revenue \(\$12{,}500\)`),
        P(R`A 600 ft² rectangular pen is split in two by a fence parallel to one side. Minimize the total fencing.`, [
          R`Let \(x\)= length of the sides parallel to the divider (there are 3 of those), \(y\)= other side (2 of those).`,
          R`\(xy=600\Rightarrow y=\dfrac{600}x\). Fence \(F=3x+2y=3x+\dfrac{1200}x\).`,
          R`\(F'=3-\dfrac{1200}{x^2}=0\Rightarrow x^2=400\Rightarrow x=20\).`,
          R`\(y=30\). \(F=60+60=120\).`,
        ], R`\(20\) ft by \(30\) ft; \(120\) ft of fence`),
      // ---- even more practice ----
      P(R`You have 1872 ft of fence to make a rectangular pen along a river (no fence on the river side). Maximize the area.`, [
        R`Let \(x\) = sides perpendicular to the river, \(y\) = side parallel. \(2x+y=1872\Rightarrow y=1872-2x\).`,
        R`\(A=x(1872-2x)=1872x-2x^2\).`,
        R`\(A'=1872-4x=0\Rightarrow x=468\); \(A''=-4<0\) so it's a max.`,
        R`\(y=936\), \(A=468\cdot936=438048\).`,
      ], R`\(468\times936\) ft; area \(438048\) ft²`),
      P(R`You have 1568 ft of fence to make a rectangular pen along a river (no fence on the river side). Maximize the area.`, [
        R`Let \(x\) = sides perpendicular to the river, \(y\) = side parallel. \(2x+y=1568\Rightarrow y=1568-2x\).`,
        R`\(A=x(1568-2x)=1568x-2x^2\).`,
        R`\(A'=1568-4x=0\Rightarrow x=392\); \(A''=-4<0\) so it's a max.`,
        R`\(y=784\), \(A=392\cdot784=307328\).`,
      ], R`\(392\times784\) ft; area \(307328\) ft²`),
      P(R`You have 1208 ft of fence to make a rectangular pen along a river (no fence on the river side). Maximize the area.`, [
        R`Let \(x\) = sides perpendicular to the river, \(y\) = side parallel. \(2x+y=1208\Rightarrow y=1208-2x\).`,
        R`\(A=x(1208-2x)=1208x-2x^2\).`,
        R`\(A'=1208-4x=0\Rightarrow x=302\); \(A''=-4<0\) so it's a max.`,
        R`\(y=604\), \(A=302\cdot604=182408\).`,
      ], R`\(302\times604\) ft; area \(182408\) ft²`),
      P(R`Find the rectangle with perimeter 224 that has the largest area.`, [
        R`\(2x+2y=224\Rightarrow y=112-x\).`,
        R`\(A=x(112-x)\Rightarrow A'=112-2x=0\Rightarrow x=56\).`,
        R`\(y=56\): a square. \(A=3136\).`,
      ], R`\(56\times56\); area \(3136\)`),
      P(R`Find the rectangle with perimeter 124 that has the largest area.`, [
        R`\(2x+2y=124\Rightarrow y=62-x\).`,
        R`\(A=x(62-x)\Rightarrow A'=62-2x=0\Rightarrow x=31\).`,
        R`\(y=31\): a square. \(A=961\).`,
      ], R`\(31\times31\); area \(961\)`),
      P(R`Find the rectangle with perimeter 16 that has the largest area.`, [
        R`\(2x+2y=16\Rightarrow y=8-x\).`,
        R`\(A=x(8-x)\Rightarrow A'=8-2x=0\Rightarrow x=4\).`,
        R`\(y=4\): a square. \(A=16\).`,
      ], R`\(4\times4\); area \(16\)`),
      P(R`Two positive numbers have product 121. Find the numbers that make their sum as small as possible.`, [
        R`\(y=\dfrac{121}x\), \(S=x+\dfrac{121}x\).`,
        R`\(S'=1-\dfrac{121}{x^2}=0\Rightarrow x=11\). \(S''>0\) &rArr; min.`,
        R`\(y=11\), sum \(22\).`,
      ], R`\(11\) and \(11\) (sum \(22\))`),
      P(R`Two positive numbers have product 256. Find the numbers that make their sum as small as possible.`, [
        R`\(y=\dfrac{256}x\), \(S=x+\dfrac{256}x\).`,
        R`\(S'=1-\dfrac{256}{x^2}=0\Rightarrow x=16\). \(S''>0\) &rArr; min.`,
        R`\(y=16\), sum \(32\).`,
      ], R`\(16\) and \(16\) (sum \(32\))`),
      P(R`Two numbers add up to 96. Find them so their product is as large as possible.`, [
        R`\(y=96-x\), \(P=x(96-x)=96x-x^2\).`,
        R`\(P'=96-2x=0\Rightarrow x=48\); \(P''=-2<0\).`,
        R`Both are \(48\); product \(2304\).`,
      ], R`\(48\) and \(48\); max product \(2304\)`),
      P(R`Two numbers add up to 118. Find them so their product is as large as possible.`, [
        R`\(y=118-x\), \(P=x(118-x)=118x-x^2\).`,
        R`\(P'=118-2x=0\Rightarrow x=59\); \(P''=-2<0\).`,
        R`Both are \(59\); product \(3481\).`,
      ], R`\(59\) and \(59\); max product \(3481\)`),
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
      // ---- more practice ----
        P(R`Use L'Hôpital's Rule: \(\displaystyle\lim_{x\to2}\frac{x^2-4}{x-2}\).`, [
          R`\(\dfrac00\) ✓.`,
          R`\(\dfrac{2x}{1}\to4\).`,
        ], R`\(4\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\sin(3x)}{2x}\).`, [
          R`\(\dfrac00\) ✓.`,
          R`\(\dfrac{3\cos(3x)}{2}\to\dfrac32\).`,
        ], R`\(\dfrac32\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{2x}-1}{\sin x}\).`, [
          R`\(\dfrac{1-1}{0}=\dfrac00\) ✓.`,
          R`\(\dfrac{2e^{2x}}{\cos x}\to\dfrac21=2\).`,
        ], R`\(2\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to1}\frac{\ln x}{x-1}\).`, [
          R`\(\dfrac{0}{0}\) ✓.`,
          R`\(\dfrac{1/x}{1}\to1\).`,
        ], R`\(1\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{(\ln x)^2}{x}\).`, [
          R`\(\dfrac\infty\infty\) ✓.`,
          R`\(\dfrac{2\ln x\cdot\frac1x}{1}=\dfrac{2\ln x}{x}\). Still \(\dfrac\infty\infty\).`,
          R`Again: \(\dfrac{2/x}{1}\to0\).`,
        ], R`\(0\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^3}\).`, [
          R`\(\dfrac00\). Apply: \(\dfrac{1-\cos x}{3x^2}\) &mdash; still \(\dfrac00\).`,
          R`Apply: \(\dfrac{\sin x}{6x}\) &mdash; still \(\dfrac00\).`,
          R`Apply: \(\dfrac{\cos x}{6}\to\dfrac16\).`,
        ], R`\(\dfrac16\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to\infty}x\sin\!\left(\frac1x\right)\).`, [
          R`Form \(\infty\cdot0\). Rewrite: \(\dfrac{\sin(1/x)}{1/x}\), form \(\dfrac00\).`,
          R`Top derivative: \(\cos(1/x)\cdot\left(-\dfrac1{x^2}\right)\). Bottom derivative: \(-\dfrac1{x^2}\).`,
          R`Cancel: \(\cos(1/x)\to\cos0=1\).`,
        ], R`\(1\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to0^+}x^x\).`, [
          R`Form \(0^0\). Let \(y=x^x\), \(\ln y=x\ln x\).`,
          R`We found earlier that \(\lim_{x\to0^+}x\ln x=0\) (rewrite as \(\frac{\ln x}{1/x}\) and use L'Hôpital).`,
          R`So \(\ln y\to0\Rightarrow y\to e^0=1\).`,
        ], R`\(1\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to0}\left(\frac1x-\frac1{\sin x}\right)\).`, [
          R`Form \(\infty-\infty\). Combine: \(\dfrac{\sin x-x}{x\sin x}\), now \(\dfrac00\).`,
          R`Apply: \(\dfrac{\cos x-1}{\sin x+x\cos x}\), still \(\dfrac00\).`,
          R`Apply: \(\dfrac{-\sin x}{\cos x+\cos x-x\sin x}\to\dfrac{0}{2}=0\).`,
        ], R`\(0\)`),
        P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\left(1+\frac3x\right)^x\).`, [
          R`Form \(1^\infty\). \(\ln y=x\ln(1+\tfrac3x)=\dfrac{\ln(1+3/x)}{1/x}\), form \(\dfrac00\).`,
          R`Top derivative: \(\dfrac{1}{1+3/x}\cdot\left(-\dfrac3{x^2}\right)\). Bottom: \(-\dfrac1{x^2}\).`,
          R`Ratio: \(\dfrac{3}{1+3/x}\to3\). So \(\ln y\to3\).`,
          R`\(y\to e^3\).`,
        ], R`\(e^3\)`),
      // ---- even more practice ----
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{6x}-1}{9x}\).`, [
        R`Plug in: \(\dfrac{1-1}{0}=\dfrac00\) ✓.`,
        R`Derivatives: top \(6e^{6x}\), bottom \(9\).`,
        R`\(\dfrac{6e^0}{9}=\dfrac{2}{3}\).`,
      ], R`\(\dfrac{2}{3}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{9x}-1}{2x}\).`, [
        R`Plug in: \(\dfrac{1-1}{0}=\dfrac00\) ✓.`,
        R`Derivatives: top \(9e^{9x}\), bottom \(2\).`,
        R`\(\dfrac{9e^0}{2}=\dfrac{9}{2}\).`,
      ], R`\(\dfrac{9}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{8x}-1}{4x}\).`, [
        R`Plug in: \(\dfrac{1-1}{0}=\dfrac00\) ✓.`,
        R`Derivatives: top \(8e^{8x}\), bottom \(4\).`,
        R`\(\dfrac{8e^0}{4}=2\).`,
      ], R`\(2\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{2x}-1}{8x}\).`, [
        R`Plug in: \(\dfrac{1-1}{0}=\dfrac00\) ✓.`,
        R`Derivatives: top \(2e^{2x}\), bottom \(8\).`,
        R`\(\dfrac{2e^0}{8}=\dfrac{1}{4}\).`,
      ], R`\(\dfrac{1}{4}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to3}\frac{x^{6}-729}{x-3}\).`, [
        R`\(\dfrac00\) ✓.`,
        R`Derivatives: \(\dfrac{6x^{5}}{1}\).`,
        R`Plug in: \(6(3)^{5}=1458\).`,
      ], R`\(1458\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to1}\frac{x^{4}-1}{x-1}\).`, [
        R`\(\dfrac00\) ✓.`,
        R`Derivatives: \(\dfrac{4x^{3}}{1}\).`,
        R`Plug in: \(4(1)^{3}=4\).`,
      ], R`\(4\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to4}\frac{x^{6}-4096}{x-4}\).`, [
        R`\(\dfrac00\) ✓.`,
        R`Derivatives: \(\dfrac{6x^{5}}{1}\).`,
        R`Plug in: \(6(4)^{5}=6144\).`,
      ], R`\(6144\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\ln(1+8x)}{9x}\).`, [
        R`\(\dfrac{\ln 1}{0}=\dfrac00\) ✓.`,
        R`Top derivative: \(\dfrac{8}{1+8x}\). Bottom: \(9\).`,
        R`At \(x=0\): \(\dfrac{8}{9}\).`,
      ], R`\(\dfrac{8}{9}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\ln(1+3x)}{9x}\).`, [
        R`\(\dfrac{\ln 1}{0}=\dfrac00\) ✓.`,
        R`Top derivative: \(\dfrac{3}{1+3x}\). Bottom: \(9\).`,
        R`At \(x=0\): \(\dfrac{3}{9}\).`,
      ], R`\(\dfrac{1}{3}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\ln(1+9x)}{8x}\).`, [
        R`\(\dfrac{\ln 1}{0}=\dfrac00\) ✓.`,
        R`Top derivative: \(\dfrac{9}{1+9x}\). Bottom: \(8\).`,
        R`At \(x=0\): \(\dfrac{9}{8}\).`,
      ], R`\(\dfrac{9}{8}\)`),
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
      // ---- more practice ----
        P(R`Find \(\displaystyle\int(x^3-2x+7)\,dx\).`, [
          R`\(\dfrac{x^4}4-x^2+7x\).`,
          R`Add \(C\).`,
        ], R`\(\dfrac{x^4}4-x^2+7x+C\)`),
        P(R`Find \(\displaystyle\int\frac{5}{x^3}\,dx\).`, [
          R`Rewrite: \(5x^{-3}\).`,
          R`\(5\cdot\dfrac{x^{-2}}{-2}=-\dfrac{5}{2x^2}\).`,
        ], R`\(-\dfrac{5}{2x^2}+C\)`),
        P(R`Find \(\displaystyle\int(2\sin x+\sec^2x)\,dx\).`, [
          R`\(\int2\sin x\,dx=-2\cos x\).`,
          R`\(\int\sec^2x\,dx=\tan x\).`,
        ], R`\(-2\cos x+\tan x+C\)`),
        P(R`Find \(\displaystyle\int x(x+2)\,dx\).`, [
          R`Multiply out first: \(x^2+2x\).`,
          R`\(\dfrac{x^3}3+x^2\).`,
        ], R`\(\dfrac{x^3}3+x^2+C\)`),
        P(R`Find \(\displaystyle\int\frac{(x-1)^2}{\sqrt x}\,dx\).`, [
          R`Expand the top: \(x^2-2x+1\). Divide each term by \(x^{1/2}\): \(x^{3/2}-2x^{1/2}+x^{-1/2}\).`,
          R`\(\int x^{3/2}=\tfrac25x^{5/2}\); \(\int-2x^{1/2}=-\tfrac43x^{3/2}\); \(\int x^{-1/2}=2x^{1/2}\).`,
        ], R`\(\tfrac25x^{5/2}-\tfrac43x^{3/2}+2\sqrt x+C\)`),
        P(R`Find \(\displaystyle\int\frac{3}{1+x^2}\,dx\).`, [
          R`\(\int\dfrac{1}{1+x^2}dx=\arctan x\).`,
        ], R`\(3\arctan x+C\)`),
        P(R`Find \(\displaystyle\int\left(e^x+\frac{1}{\sqrt{1-x^2}}\right)dx\).`, [
          R`\(\int e^x\,dx=e^x\); \(\int\dfrac{dx}{\sqrt{1-x^2}}=\arcsin x\).`,
        ], R`\(e^x+\arcsin x+C\)`),
        P(R`Find \(f\) if \(f''(x)=12x\), \(f'(0)=3\), \(f(0)=1\).`, [
          R`\(f'(x)=6x^2+C_1\). \(f'(0)=3\Rightarrow C_1=3\).`,
          R`\(f(x)=2x^3+3x+C_2\). \(f(0)=1\Rightarrow C_2=1\).`,
        ], R`\(f(x)=2x^3+3x+1\)`),
        P(R`Find \(f\) if \(f'(x)=\cos x\) and \(f\!\left(\tfrac\pi2\right)=4\).`, [
          R`\(f(x)=\sin x+C\).`,
          R`\(\sin\tfrac\pi2+C=4\Rightarrow1+C=4\Rightarrow C=3\).`,
        ], R`\(f(x)=\sin x+3\)`),
        P(R`A particle has velocity \(v(t)=3t^2-4\) and \(s(0)=5\). Find \(s(t)\) and \(s(2)\).`, [
          R`\(s(t)=t^3-4t+C\). \(s(0)=5\Rightarrow C=5\).`,
          R`\(s(2)=8-8+5=5\).`,
        ], R`\(s(t)=t^3-4t+5\); \(s(2)=5\)`),
      // ---- even more practice ----
      P(R`Find \(\displaystyle\int(30x^{4}+8x+2)\,dx\).`, [
        R`Power rule backwards: add 1 to the power, divide by the new power.`,
        R`\(30x^{4}\to6x^{5}\), \(8x\to4x^{2}\), \(2\to2x\).`,
        R`Add \(C\).`,
      ], R`\(6x^{5}+4x^{2}+2x+C\)`),
      P(R`Find \(\displaystyle\int(18x^{5}-12x+4)\,dx\).`, [
        R`Power rule backwards: add 1 to the power, divide by the new power.`,
        R`\(18x^{5}\to3x^{6}\), \(-12x\to-6x^{2}\), \(4\to4x\).`,
        R`Add \(C\).`,
      ], R`\(3x^{6}-6x^{2}+4x+C\)`),
      P(R`Find \(\displaystyle\int(-25x^{4}-4x+5)\,dx\).`, [
        R`Power rule backwards: add 1 to the power, divide by the new power.`,
        R`\(-25x^{4}\to-5x^{5}\), \(-4x\to-2x^{2}\), \(5\to5x\).`,
        R`Add \(C\).`,
      ], R`\(-5x^{5}-2x^{2}+5x+C\)`),
      P(R`Find \(\displaystyle\int(15x^{4}-2x-3)\,dx\).`, [
        R`Power rule backwards: add 1 to the power, divide by the new power.`,
        R`\(15x^{4}\to3x^{5}\), \(-2x\to-x^{2}\), \(-3\to-3x\).`,
        R`Add \(C\).`,
      ], R`\(3x^{5}-x^{2}-3x+C\)`),
      P(R`Find \(\displaystyle\int(20x^{3}+4x-4)\,dx\).`, [
        R`Power rule backwards: add 1 to the power, divide by the new power.`,
        R`\(20x^{3}\to5x^{4}\), \(4x\to2x^{2}\), \(-4\to-4x\).`,
        R`Add \(C\).`,
      ], R`\(5x^{4}+2x^{2}-4x+C\)`),
      P(R`Find \(\displaystyle\int(-24x^{5}-12x-3)\,dx\).`, [
        R`Power rule backwards: add 1 to the power, divide by the new power.`,
        R`\(-24x^{5}\to-4x^{6}\), \(-12x\to-6x^{2}\), \(-3\to-3x\).`,
        R`Add \(C\).`,
      ], R`\(-4x^{6}-6x^{2}-3x+C\)`),
      P(R`Find \(f(x)\) if \(f'(x)=-6x-3\) and \(f(0)=-8\).`, [
        R`Integrate: \(f(x)=-3x^{2}-3x+C\).`,
        R`Plug in \(x=0\): \(0+C=-8\Rightarrow C=-8\).`,
      ], R`\(f(x)=-3x^{2}-3x-8\)`),
      P(R`Find \(f(x)\) if \(f'(x)=-8x-3\) and \(f(1)=8\).`, [
        R`Integrate: \(f(x)=-4x^{2}-3x+C\).`,
        R`Plug in \(x=1\): \(-7+C=8\Rightarrow C=15\).`,
      ], R`\(f(x)=-4x^{2}-3x+15\)`),
      P(R`Find \(f(x)\) if \(f'(x)=-8x-5\) and \(f(-2)=-8\).`, [
        R`Integrate: \(f(x)=-4x^{2}-5x+C\).`,
        R`Plug in \(x=-2\): \(-6+C=-8\Rightarrow C=-2\).`,
      ], R`\(f(x)=-4x^{2}-5x-2\)`),
      P(R`Find \(f(x)\) if \(f'(x)=-4x-1\) and \(f(-1)=-5\).`, [
        R`Integrate: \(f(x)=-2x^{2}-x+C\).`,
        R`Plug in \(x=-1\): \(-1+C=-5\Rightarrow C=-4\).`,
      ], R`\(f(x)=-2x^{2}-x-4\)`),
      P(R`Find \(f(x)\) if \(f'(x)=8x\) and \(f(0)=-8\).`, [
        R`Integrate: \(f(x)=4x^{2}+C\).`,
        R`Plug in \(x=0\): \(0+C=-8\Rightarrow C=-8\).`,
      ], R`\(f(x)=4x^{2}-8\)`),
      P(R`Find \(\displaystyle\int\left(\frac{-5}{x}-3e^x-4\cos x\right)dx\).`, [
        R`\(\int\dfrac{-5}{x}dx=-5\ln|x|\).`,
        R`\(\int -3e^x\,dx=-3e^x\). \(\int -4\cos x\,dx=-4\sin x\).`,
      ], R`\(-5\ln|x|-3e^x-4\sin x+C\)`),
      P(R`Find \(\displaystyle\int\left(\frac{-4}{x}-4e^x+5\cos x\right)dx\).`, [
        R`\(\int\dfrac{-4}{x}dx=-4\ln|x|\).`,
        R`\(\int -4e^x\,dx=-4e^x\). \(\int 5\cos x\,dx=5\sin x\).`,
      ], R`\(-4\ln|x|-4e^x+5\sin x+C\)`),
      P(R`Find \(\displaystyle\int\left(\frac{-4}{x}+e^x-5\cos x\right)dx\).`, [
        R`\(\int\dfrac{-4}{x}dx=-4\ln|x|\).`,
        R`\(\int e^x\,dx=e^x\). \(\int -5\cos x\,dx=-5\sin x\).`,
      ], R`\(-4\ln|x|+e^x-5\sin x+C\)`),
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
      // ---- more practice ----
        P(R`Evaluate \(\displaystyle\int_0^2(3x^2-2x)\,dx\).`, [
          R`Antiderivative: \(x^3-x^2\).`,
          R`\((8-4)-(0-0)=4\).`,
        ], R`\(4\)`),
        P(R`Evaluate \(\displaystyle\int_1^e\frac1x\,dx\).`, [
          R`\([\ln x]_1^e=\ln e-\ln1=1-0\).`,
        ], R`\(1\)`),
        P(R`Evaluate \(\displaystyle\int_0^{\pi/2}\cos x\,dx\).`, [
          R`\([\sin x]_0^{\pi/2}=1-0\).`,
        ], R`\(1\)`),
        P(R`Evaluate \(\displaystyle\int_{-1}^1x^3\,dx\).`, [
          R`\(\left[\dfrac{x^4}4\right]_{-1}^1=\dfrac14-\dfrac14=0\).`,
          R`(Shortcut: \(x^3\) is odd, so the areas above and below cancel on a symmetric interval.)`,
        ], R`\(0\)`),
        P(R`Evaluate \(\displaystyle\int_0^1e^x\,dx\).`, [
          R`\([e^x]_0^1=e-1\).`,
        ], R`\(e-1\approx1.718\)`),
        P(R`Evaluate \(\displaystyle\int_1^2\left(x^2+\frac1{x^2}\right)dx\).`, [
          R`Antiderivative: \(\dfrac{x^3}3-\dfrac1x\).`,
          R`At 2: \(\dfrac83-\dfrac12\). At 1: \(\dfrac13-1\).`,
          R`Subtract: \(\dfrac83-\dfrac12-\dfrac13+1=\dfrac73+\dfrac12=\dfrac{17}6\).`,
        ], R`\(\dfrac{17}{6}\)`),
        P(R`Find \(\displaystyle\frac{d}{dx}\int_1^x\sqrt{t^2+1}\,dt\).`, [
          R`FTC Part 1: plug \(x\) in for \(t\).`,
        ], R`\(\sqrt{x^2+1}\)`),
        P(R`Find \(\displaystyle\frac{d}{dx}\int_x^5\sin(t^2)\,dt\).`, [
          R`\(x\) is on the bottom. Flip: \(\displaystyle-\int_5^x\sin(t^2)\,dt\).`,
          R`FTC: \(-\sin(x^2)\).`,
        ], R`\(-\sin(x^2)\)`),
        P(R`Find \(\displaystyle\frac{d}{dx}\int_2^{3x}e^{t^2}\,dt\).`, [
          R`Upper limit \(g(x)=3x\), \(g'(x)=3\).`,
          R`\(e^{(3x)^2}\cdot3\).`,
        ], R`\(3e^{9x^2}\)`),
        P(R`Find the area under \(y=4-x^2\) and above the \(x\)-axis.`, [
          R`Crosses the axis where \(4-x^2=0\Rightarrow x=\pm2\).`,
          R`\(\displaystyle\int_{-2}^2(4-x^2)\,dx=\left[4x-\frac{x^3}3\right]_{-2}^2\).`,
          R`\(\left(8-\tfrac83\right)-\left(-8+\tfrac83\right)=16-\tfrac{16}3=\tfrac{32}3\).`,
        ], R`\(\dfrac{32}3\)`),
        P(R`Find the area between \(y=x^2\) and \(y=2x\).`, [
          R`Intersect: \(x^2=2x\Rightarrow x=0,2\).`,
          R`At \(x=1\): \(2x=2\), \(x^2=1\). So \(2x\) is on top.`,
          R`\(\displaystyle\int_0^2(2x-x^2)\,dx=\left[x^2-\frac{x^3}3\right]_0^2=4-\frac83\).`,
        ], R`\(\dfrac43\)`),
        P(R`If \(\int_0^5f(x)\,dx=10\) and \(\int_0^2f(x)\,dx=3\), find \(\int_2^5f(x)\,dx\) and \(\int_5^2f(x)\,dx\).`, [
          R`\(\int_0^2f+\int_2^5f=\int_0^5f\Rightarrow3+\int_2^5f=10\).`,
          R`\(\int_2^5f=7\).`,
          R`Flipping limits flips the sign: \(\int_5^2f=-7\).`,
        ], R`\(7\) and \(-7\)`),
        P(R`Use the midpoint rule with \(n=3\) to estimate \(\displaystyle\int_0^3x^2\,dx\).`, [
          R`\(\Delta x=1\). Subintervals \([0,1],[1,2],[2,3]\); midpoints \(0.5,1.5,2.5\).`,
          R`\(f\): \(0.25,\ 2.25,\ 6.25\). Sum \(=8.75\).`,
          R`\(M_3=1\cdot8.75=8.75\). (Exact: \(9\).)`,
        ], R`\(8.75\)`),
        P(R`Find the average value of \(\sin x\) on \([0,\pi]\).`, [
          R`\(\dfrac1{\pi-0}\displaystyle\int_0^\pi\sin x\,dx\).`,
          R`\(\int_0^\pi\sin x\,dx=2\) (computed earlier).`,
          R`\(\dfrac2\pi\).`,
        ], R`\(\dfrac2\pi\approx0.637\)`),
        P(R`A particle has velocity \(v(t)=t-2\) m/s for \(0\le t\le4\). Find its displacement and total distance traveled.`, [
          R`Displacement \(=\displaystyle\int_0^4(t-2)\,dt=\left[\tfrac{t^2}2-2t\right]_0^4=8-8=0\).`,
          R`Distance uses \(|v|\). \(v<0\) on \([0,2)\), \(v>0\) on \((2,4]\).`,
          R`\(\displaystyle\int_0^2(2-t)\,dt=2\) and \(\displaystyle\int_2^4(t-2)\,dt=2\).`,
          R`Total distance \(=2+2=4\).`,
        ], R`Displacement \(0\) m; distance \(4\) m`),
      // ---- even more practice ----
      P(R`Evaluate \(\displaystyle\int_{-1}^{1}(-3x-3)\,dx\).`, [
        R`Antiderivative: \(F(x)=-\tfrac{3}{2}x^{2}-3x\).`,
        R`\(F(1)=-\dfrac{9}{2}\), \(F(-1)=\dfrac{3}{2}\).`,
        R`Subtract: \(-6\).`,
      ], R`\(-6\)`),
      P(R`Evaluate \(\displaystyle\int_{1}^{2}(-6x+2)\,dx\).`, [
        R`Antiderivative: \(F(x)=-3x^{2}+2x\).`,
        R`\(F(2)=-8\), \(F(1)=-1\).`,
        R`Subtract: \(-7\).`,
      ], R`\(-7\)`),
      P(R`Evaluate \(\displaystyle\int_{0}^{1}(-2x+5)\,dx\).`, [
        R`Antiderivative: \(F(x)=-x^{2}+5x\).`,
        R`\(F(1)=4\), \(F(0)=0\).`,
        R`Subtract: \(4\).`,
      ], R`\(4\)`),
      P(R`Evaluate \(\displaystyle\int_{1}^{2}(-x-6)\,dx\).`, [
        R`Antiderivative: \(F(x)=-\tfrac{1}{2}x^{2}-6x\).`,
        R`\(F(2)=-14\), \(F(1)=-\dfrac{13}{2}\).`,
        R`Subtract: \(-\dfrac{15}{2}\).`,
      ], R`\(-\dfrac{15}{2}\)`),
      P(R`Evaluate \(\displaystyle\int_{0}^{3}(3x^{2}+5)\,dx\).`, [
        R`Antiderivative: \(F(x)=x^{3}+5x\).`,
        R`\(F(3)=42\), \(F(0)=0\).`,
        R`\(F(3)-F(0)=42\).`,
      ], R`\(42\)`),
      P(R`Evaluate \(\displaystyle\int_{2}^{3}(-3x^{2}+3)\,dx\).`, [
        R`Antiderivative: \(F(x)=-x^{3}+3x\).`,
        R`\(F(3)=-18\), \(F(2)=-2\).`,
        R`\(F(3)-F(2)=-16\).`,
      ], R`\(-16\)`),
      P(R`Evaluate \(\displaystyle\int_{1}^{4}(x^{2}-5)\,dx\).`, [
        R`Antiderivative: \(F(x)=\tfrac{1}{3}x^{3}-5x\).`,
        R`\(F(4)=\dfrac{4}{3}\), \(F(1)=-\dfrac{14}{3}\).`,
        R`\(F(4)-F(1)=6\).`,
      ], R`\(6\)`),
      P(R`Evaluate \(\displaystyle\int_{2}^{5}(-2x^{2}-5)\,dx\).`, [
        R`Antiderivative: \(F(x)=-\tfrac{2}{3}x^{3}-5x\).`,
        R`\(F(5)=-\dfrac{325}{3}\), \(F(2)=-\dfrac{46}{3}\).`,
        R`\(F(5)-F(2)=-93\).`,
      ], R`\(-93\)`),
      P(R`Find the area between \(y=6x\) and \(y=x^2\).`, [
        R`Intersections: \(x^2=6x\Rightarrow x=0,\ 6\).`,
        R`Between them the line is on top (test a point).`,
        R`\(\displaystyle\int_0^{6}(6x-x^2)\,dx=\left[\tfrac{6}{2}x^2-\tfrac{x^3}{3}\right]_0^{6}=108-72\).`,
        R`\(=36\).`,
      ], R`\(36\)`),
      P(R`Find the area between \(y=2x\) and \(y=x^2\).`, [
        R`Intersections: \(x^2=2x\Rightarrow x=0,\ 2\).`,
        R`Between them the line is on top (test a point).`,
        R`\(\displaystyle\int_0^{2}(2x-x^2)\,dx=\left[\tfrac{2}{2}x^2-\tfrac{x^3}{3}\right]_0^{2}=4-\dfrac{8}{3}\).`,
        R`\(=\dfrac{4}{3}\).`,
      ], R`\(\dfrac{4}{3}\)`),
      P(R`Find the area between \(y=x\) and \(y=x^2\).`, [
        R`Intersections: \(x^2=x\Rightarrow x=0,\ 1\).`,
        R`Between them the line is on top (test a point).`,
        R`\(\displaystyle\int_0^{1}(x-x^2)\,dx=\left[\tfrac{1}{2}x^2-\tfrac{x^3}{3}\right]_0^{1}=\dfrac{1}{2}-\dfrac{1}{3}\).`,
        R`\(=\dfrac{1}{6}\).`,
      ], R`\(\dfrac{1}{6}\)`),
      P(R`Find the average value of \(f(x)=5x^2\) on \([0,3]\).`, [
        R`\(f_{\text{avg}}=\dfrac1{3}\displaystyle\int_0^{3}5x^2\,dx\).`,
        R`\(\int_0^{3}5x^2\,dx=\left[\dfrac{5}{3}x^3\right]_0^{3}=45\).`,
        R`Divide by \(3\): \(15\).`,
      ], R`\(15\)`),
      P(R`Find the average value of \(f(x)=2x^2\) on \([0,5]\).`, [
        R`\(f_{\text{avg}}=\dfrac1{5}\displaystyle\int_0^{5}2x^2\,dx\).`,
        R`\(\int_0^{5}2x^2\,dx=\left[\dfrac{2}{3}x^3\right]_0^{5}=\dfrac{250}{3}\).`,
        R`Divide by \(5\): \(\dfrac{50}{3}\).`,
      ], R`\(\dfrac{50}{3}\)`),
      P(R`Find the average value of \(f(x)=3x^2\) on \([0,6]\).`, [
        R`\(f_{\text{avg}}=\dfrac1{6}\displaystyle\int_0^{6}3x^2\,dx\).`,
        R`\(\int_0^{6}3x^2\,dx=\left[1x^3\right]_0^{6}=216\).`,
        R`Divide by \(6\): \(36\).`,
      ], R`\(36\)`),
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
      // ---- more practice ----
        P(R`Find \(\displaystyle\int(3x+1)^4\,dx\).`, [
          R`\(u=3x+1\), \(du=3\,dx\Rightarrow dx=\tfrac13du\).`,
          R`\(\tfrac13\int u^4\,du=\tfrac13\cdot\dfrac{u^5}5\).`,
        ], R`\(\dfrac{(3x+1)^5}{15}+C\)`),
        P(R`Find \(\displaystyle\int x\sqrt{x^2+1}\,dx\).`, [
          R`\(u=x^2+1\), \(du=2x\,dx\Rightarrow x\,dx=\tfrac12du\).`,
          R`\(\tfrac12\int u^{1/2}\,du=\tfrac12\cdot\tfrac23u^{3/2}=\tfrac13u^{3/2}\).`,
        ], R`\(\tfrac13(x^2+1)^{3/2}+C\)`),
        P(R`Find \(\displaystyle\int\sin x\cos x\,dx\).`, [
          R`\(u=\sin x\), \(du=\cos x\,dx\).`,
          R`\(\int u\,du=\dfrac{u^2}2\).`,
        ], R`\(\dfrac{\sin^2x}2+C\)`),
        P(R`Find \(\displaystyle\int xe^{x^2}\,dx\).`, [
          R`\(u=x^2\), \(du=2x\,dx\Rightarrow x\,dx=\tfrac12du\).`,
          R`\(\tfrac12\int e^u\,du=\tfrac12e^u\).`,
        ], R`\(\tfrac12e^{x^2}+C\)`),
        P(R`Find \(\displaystyle\int\cos(3x)\,dx\).`, [
          R`\(u=3x\), \(dx=\tfrac13du\).`,
          R`\(\tfrac13\int\cos u\,du=\tfrac13\sin u\).`,
        ], R`\(\tfrac13\sin(3x)+C\)`),
        P(R`Find \(\displaystyle\int\sec^2(5x)\,dx\).`, [
          R`\(u=5x\), \(dx=\tfrac15du\).`,
          R`\(\tfrac15\tan u\).`,
        ], R`\(\tfrac15\tan(5x)+C\)`),
        P(R`Find \(\displaystyle\int\frac{1}{2x+3}\,dx\).`, [
          R`\(u=2x+3\), \(dx=\tfrac12du\).`,
          R`\(\tfrac12\int\dfrac1u\,du=\tfrac12\ln|u|\).`,
        ], R`\(\tfrac12\ln|2x+3|+C\)`),
        P(R`Find \(\displaystyle\int\frac{e^x}{1+e^x}\,dx\).`, [
          R`\(u=1+e^x\), \(du=e^x\,dx\).`,
          R`\(\int\dfrac{du}u=\ln|u|\). Since \(1+e^x>0\), no absolute value needed.`,
        ], R`\(\ln(1+e^x)+C\)`),
        P(R`Find \(\displaystyle\int x^2(x^3+5)^4\,dx\).`, [
          R`\(u=x^3+5\), \(du=3x^2\,dx\Rightarrow x^2\,dx=\tfrac13du\).`,
          R`\(\tfrac13\int u^4\,du=\tfrac1{15}u^5\).`,
        ], R`\(\dfrac{(x^3+5)^5}{15}+C\)`),
        P(R`Find \(\displaystyle\int\frac{x}{\sqrt{1-x^2}}\,dx\).`, [
          R`\(u=1-x^2\), \(du=-2x\,dx\Rightarrow x\,dx=-\tfrac12du\).`,
          R`\(-\tfrac12\int u^{-1/2}\,du=-\tfrac12\cdot2u^{1/2}=-\sqrt u\).`,
        ], R`\(-\sqrt{1-x^2}+C\)`),
        P(R`Find \(\displaystyle\int\frac{1}{x\ln x}\,dx\).`, [
          R`\(u=\ln x\), \(du=\dfrac1x\,dx\).`,
          R`\(\int\dfrac1u\,du=\ln|u|\).`,
        ], R`\(\ln|\ln x|+C\)`),
        P(R`Find \(\displaystyle\int x(x-1)^5\,dx\).`, [
          R`\(u=x-1\), \(du=dx\). But there's an extra \(x\)! Solve: \(x=u+1\).`,
          R`\(\int(u+1)u^5\,du=\int(u^6+u^5)\,du=\dfrac{u^7}7+\dfrac{u^6}6\).`,
          R`Substitute back \(u=x-1\).`,
        ], R`\(\dfrac{(x-1)^7}{7}+\dfrac{(x-1)^6}{6}+C\)`),
        P(R`Evaluate \(\displaystyle\int_0^{\pi/2}\cos^2x\sin x\,dx\).`, [
          R`\(u=\cos x\), \(du=-\sin x\,dx\).`,
          R`Limits: \(x=0\Rightarrow u=1\); \(x=\tfrac\pi2\Rightarrow u=0\).`,
          R`\(\displaystyle-\int_1^0u^2\,du=\int_0^1u^2\,du=\left[\frac{u^3}3\right]_0^1=\frac13\).`,
        ], R`\(\dfrac13\)`),
        P(R`Evaluate \(\displaystyle\int_0^1e^{3x}\,dx\).`, [
          R`\(u=3x\), limits \(0\to3\), \(dx=\tfrac13du\).`,
          R`\(\tfrac13\int_0^3e^u\,du=\tfrac13(e^3-1)\).`,
        ], R`\(\dfrac{e^3-1}{3}\approx6.36\)`),
        P(R`Evaluate \(\displaystyle\int_1^2\frac{x}{x^2+1}\,dx\).`, [
          R`\(u=x^2+1\), \(x\,dx=\tfrac12du\). Limits: \(x=1\to u=2\), \(x=2\to u=5\).`,
          R`\(\tfrac12\int_2^5\dfrac1u\,du=\tfrac12(\ln5-\ln2)\).`,
        ], R`\(\tfrac12\ln\tfrac52\approx0.458\)`),
      // ---- even more practice ----
      P(R`Find \(\displaystyle\int(2x+9)^{5}\,dx\).`, [
        R`\(u=2x+9\), \(du=2\,dx\Rightarrow dx=\tfrac1{2}du\).`,
        R`\(\tfrac1{2}\int u^{5}\,du=\tfrac1{2}\cdot\dfrac{u^{6}}{6}\).`,
      ], R`\(\dfrac{(2x+9)^{6}}{12}+C\)`),
      P(R`Find \(\displaystyle\int(7x-4)^{4}\,dx\).`, [
        R`\(u=7x-4\), \(du=7\,dx\Rightarrow dx=\tfrac1{7}du\).`,
        R`\(\tfrac1{7}\int u^{4}\,du=\tfrac1{7}\cdot\dfrac{u^{5}}{5}\).`,
      ], R`\(\dfrac{(7x-4)^{5}}{35}+C\)`),
      P(R`Find \(\displaystyle\int(6x-6)^{8}\,dx\).`, [
        R`\(u=6x-6\), \(du=6\,dx\Rightarrow dx=\tfrac1{6}du\).`,
        R`\(\tfrac1{6}\int u^{8}\,du=\tfrac1{6}\cdot\dfrac{u^{9}}{9}\).`,
      ], R`\(\dfrac{(6x-6)^{9}}{54}+C\)`),
      P(R`Find \(\displaystyle\int(6x-4)^{4}\,dx\).`, [
        R`\(u=6x-4\), \(du=6\,dx\Rightarrow dx=\tfrac1{6}du\).`,
        R`\(\tfrac1{6}\int u^{4}\,du=\tfrac1{6}\cdot\dfrac{u^{5}}{5}\).`,
      ], R`\(\dfrac{(6x-4)^{5}}{30}+C\)`),
      P(R`Find \(\displaystyle\int x(x^{2}+5)^{5}\,dx\).`, [
        R`\(u=x^{2}+5\), \(du=2x\,dx\Rightarrow x\,dx=\tfrac12du\).`,
        R`\(\tfrac12\int u^{5}\,du=\dfrac{u^{6}}{12}\).`,
      ], R`\(\dfrac{(x^{2}+5)^{6}}{12}+C\)`),
      P(R`Find \(\displaystyle\int x(x^{2}-8)^{7}\,dx\).`, [
        R`\(u=x^{2}-8\), \(du=2x\,dx\Rightarrow x\,dx=\tfrac12du\).`,
        R`\(\tfrac12\int u^{7}\,du=\dfrac{u^{8}}{16}\).`,
      ], R`\(\dfrac{(x^{2}-8)^{8}}{16}+C\)`),
      P(R`Find \(\displaystyle\int x(x^{2}+5)^{2}\,dx\).`, [
        R`\(u=x^{2}+5\), \(du=2x\,dx\Rightarrow x\,dx=\tfrac12du\).`,
        R`\(\tfrac12\int u^{2}\,du=\dfrac{u^{3}}{6}\).`,
      ], R`\(\dfrac{(x^{2}+5)^{3}}{6}+C\)`),
      P(R`Find \(\displaystyle\int \cos(3x)\,dx\).`, [
        R`\(u=3x\), \(dx=\tfrac1{3}du\).`,
        R`Integrate with respect to \(u\), then put \(3x\) back in.`,
      ], R`\(\dfrac{\sin(3x)}{3}+C\)`),
      P(R`Find \(\displaystyle\int e^{2x}\,dx\).`, [
        R`\(u=2x\), \(dx=\tfrac1{2}du\).`,
        R`Integrate with respect to \(u\), then put \(2x\) back in.`,
      ], R`\(\dfrac{e^{2x}}{2}+C\)`),
      P(R`Find \(\displaystyle\int e^{5x}\,dx\).`, [
        R`\(u=5x\), \(dx=\tfrac1{5}du\).`,
        R`Integrate with respect to \(u\), then put \(5x\) back in.`,
      ], R`\(\dfrac{e^{5x}}{5}+C\)`),
      P(R`Evaluate \(\displaystyle\int_0^1x(x^2+1)^{3}\,dx\).`, [
        R`\(u=x^2+1\), \(x\,dx=\tfrac12du\). Limits: \(x=0\to u=1\), \(x=1\to u=2\).`,
        R`\(\tfrac12\int_1^2u^{3}\,du=\tfrac12\left[\dfrac{u^{4}}{4}\right]_1^2=\dfrac{16-1}{8}\).`,
      ], R`\(\dfrac{15}{8}\)`),
      P(R`Evaluate \(\displaystyle\int_0^1x(x^2+1)^{4}\,dx\).`, [
        R`\(u=x^2+1\), \(x\,dx=\tfrac12du\). Limits: \(x=0\to u=1\), \(x=1\to u=2\).`,
        R`\(\tfrac12\int_1^2u^{4}\,du=\tfrac12\left[\dfrac{u^{5}}{5}\right]_1^2=\dfrac{32-1}{10}\).`,
      ], R`\(\dfrac{31}{10}\)`),
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
