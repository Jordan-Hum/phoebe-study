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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`Evaluate \(\displaystyle\lim_{x\to 5}\frac{x^{2}+3x-40}{x-5}\).`, [
        R`Plug in \(x=5\): you get \(\tfrac00\), so factor.`,
        R`\(x^{2}+3x-40=(x-5)(x+8)\).`,
        R`Cancel \((x-5)\), leaving \(x+8\).`,
        R`Plug in: \(5+8=13\).`,
      ], R`\(13\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{-5x^{2}+4x+4}{x^{2}+3}\).`, [
        R`Same degree (2) on top and bottom.`,
        R`Divide every term by \(x^2\); the terms with \(x\) in a denominator go to 0.`,
        R`Ratio of leading coefficients: \(\dfrac{-5}{1}\).`,
      ], R`\(-5\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sin(9x)}{12x}\).`, [
        R`Rewrite: \(\dfrac{9}{12}\cdot\dfrac{\sin(9x)}{9x}\).`,
        R`\(\dfrac{\sin(9x)}{9x}\to1\).`,
      ], R`\(\dfrac{3}{4}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sqrt{x+64}-8}{x}\).`, [
        R`\(\tfrac00\); multiply top and bottom by \(\sqrt{x+64}+8\).`,
        R`Top becomes \(x\): \(\dfrac{1}{\sqrt{x+64}+8}\).`,
        R`Plug in \(x=0\): \(\dfrac{1}{16}\).`,
      ], R`\(\dfrac{1}{16}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{7x-1}{9x^{2}+7}\).`, [
        R`Degree of top (1) < degree of bottom (2).`,
        R`Divide by \(x^2\): top \(\to0\), bottom \(\to9\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{x^{3}-9}{9x^{2}+5}\).`, [
        R`Degree of top (3) > degree of bottom (2), so it blows up.`,
        R`Divide by \(x^2\): \(\dfrac{x-9/x^2}{9+5/x^2}\) behaves like \(\dfrac{1}{9}x\).`,
        R`\(\dfrac{1}{9}\) is positive, so the limit is \(+\infty\).`,
      ], R`\(+\infty\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 3}\frac{x^3-27}{x-3}\).`, [
        R`\(\tfrac00\). Use the cube factoring formula: \(x^3-(3)^3=(x-3)(x^{2}+3x+9)\).`,
        R`Cancel: \(x^{2}+3x+9\).`,
        R`Plug in: \(9+9+9=27\).`,
      ], R`\(27\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to -2}\frac{x^{2}+2x+5}{x+5}\).`, [
        R`Try plugging in first! Bottom: \(-2+5=3\neq0\), so direct substitution works.`,
        R`Top: \(4-4+5=5\).`,
        R`\(\dfrac{5}{3}=\dfrac{5}{3}\).`,
      ], R`\(\dfrac{5}{3}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 5^+}\frac{5}{x-5}\).`, [
        R`Top \(\to5\), bottom \(\to0\): vertical asymptote.`,
        R`From the right, \(x-5\) is a tiny positive number.`,
        R`Positive divided by tiny positive gives \(+\infty\).`,
      ], R`\(+\infty\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\tan(8x)}{10x}\).`, [
        R`\(\tan(8x)=\dfrac{\sin(8x)}{\cos(8x)}\).`,
        R`\(\dfrac{8}{10}\cdot\dfrac{\sin(8x)}{8x}\cdot\dfrac{1}{\cos(8x)}\to\dfrac{8}{10}\cdot1\cdot1\).`,
      ], R`\(\dfrac{4}{5}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{x}{\sin(4x)}\).`, [
        R`Flip the special limit: \(\dfrac{x}{\sin(4x)}=\dfrac{1}{4}\cdot\dfrac{4x}{\sin(4x)}\).`,
        R`\(\dfrac{4x}{\sin(4x)}\to1\).`,
      ], R`\(\dfrac{1}{4}\)`),
      P(R`Evaluate \(\displaystyle\lim_{h\to 0}\frac{(-8+h)^2-64}{h}\).`, [
        R`Expand: \((-8+h)^2=64-16h+h^2\).`,
        R`Subtract 64 and divide by \(h\): \(-16+h\).`,
        R`\(h\to0\): \(-16\).`,
      ], R`\(-16\)`),
      P(R`Let \(f(x)=\begin{cases}x^{2}-2 & x<2\\ 3x-5 & x\ge 2\end{cases}\). Find \(\lim_{x\to 2}f(x)\).`, [
        R`Left: \((2)^2-2=2\).`,
        R`Right: \(3(2)-5=1\).`,
        R`They don't match.`,
      ], R`Does not exist (left \(2\), right \(1\))`),
      P(R`Evaluate \(\displaystyle\lim_{x\to -2}\frac{x^{2}-5x-14}{x+2}\).`, [
        R`Plug in \(x=-2\): you get \(\tfrac00\), so factor.`,
        R`\(x^{2}-5x-14=(x+2)(x-7)\).`,
        R`Cancel \((x+2)\), leaving \(x-7\).`,
        R`Plug in: \(-2-7=-9\).`,
      ], R`\(-9\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{-8x^{2}+3x+6}{7x^{2}+7}\).`, [
        R`Same degree (2) on top and bottom.`,
        R`Divide every term by \(x^2\); the terms with \(x\) in a denominator go to 0.`,
        R`Ratio of leading coefficients: \(\dfrac{-8}{7}\).`,
      ], R`\(-\dfrac{8}{7}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sin(11x)}{10x}\).`, [
        R`Rewrite: \(\dfrac{11}{10}\cdot\dfrac{\sin(11x)}{11x}\).`,
        R`\(\dfrac{\sin(11x)}{11x}\to1\).`,
      ], R`\(\dfrac{11}{10}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sqrt{x+4}-2}{x}\).`, [
        R`\(\tfrac00\); multiply top and bottom by \(\sqrt{x+4}+2\).`,
        R`Top becomes \(x\): \(\dfrac{1}{\sqrt{x+4}+2}\).`,
        R`Plug in \(x=0\): \(\dfrac{1}{4}\).`,
      ], R`\(\dfrac{1}{4}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{-4x+1}{9x^{2}+3}\).`, [
        R`Degree of top (1) < degree of bottom (2).`,
        R`Divide by \(x^2\): top \(\to0\), bottom \(\to9\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{x^{3}+5}{-7x^{2}+4}\).`, [
        R`Degree of top (3) > degree of bottom (2), so it blows up.`,
        R`Divide by \(x^2\): \(\dfrac{x+5/x^2}{-7+4/x^2}\) behaves like \(\dfrac{1}{-7}x\).`,
        R`\(\dfrac{1}{-7}\) is negative, so the limit is \(-\infty\).`,
      ], R`\(-\infty\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 5}\frac{x^3-125}{x-5}\).`, [
        R`\(\tfrac00\). Use the cube factoring formula: \(x^3-(5)^3=(x-5)(x^{2}+5x+25)\).`,
        R`Cancel: \(x^{2}+5x+25\).`,
        R`Plug in: \(25+25+25=75\).`,
      ], R`\(75\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 3}\frac{x^{2}+5x-1}{x+1}\).`, [
        R`Try plugging in first! Bottom: \(3+1=4\neq0\), so direct substitution works.`,
        R`Top: \(9+15-1=23\).`,
        R`\(\dfrac{23}{4}=\dfrac{23}{4}\).`,
      ], R`\(\dfrac{23}{4}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 4^-}\frac{9}{x-4}\).`, [
        R`Top \(\to9\), bottom \(\to0\): vertical asymptote.`,
        R`From the left, \(x-4\) is a tiny negative number.`,
        R`Positive divided by tiny negative gives \(-\infty\).`,
      ], R`\(-\infty\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\tan(6x)}{4x}\).`, [
        R`\(\tan(6x)=\dfrac{\sin(6x)}{\cos(6x)}\).`,
        R`\(\dfrac{6}{4}\cdot\dfrac{\sin(6x)}{6x}\cdot\dfrac{1}{\cos(6x)}\to\dfrac{6}{4}\cdot1\cdot1\).`,
      ], R`\(\dfrac{3}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{x}{\sin(6x)}\).`, [
        R`Flip the special limit: \(\dfrac{x}{\sin(6x)}=\dfrac{1}{6}\cdot\dfrac{6x}{\sin(6x)}\).`,
        R`\(\dfrac{6x}{\sin(6x)}\to1\).`,
      ], R`\(\dfrac{1}{6}\)`),
      P(R`Evaluate \(\displaystyle\lim_{h\to 0}\frac{(-10+h)^2-100}{h}\).`, [
        R`Expand: \((-10+h)^2=100-20h+h^2\).`,
        R`Subtract 100 and divide by \(h\): \(-20+h\).`,
        R`\(h\to0\): \(-20\).`,
      ], R`\(-20\)`),
      P(R`Let \(f(x)=\begin{cases}x^{2}+3 & x<2\\ -4x+16 & x\ge 2\end{cases}\). Find \(\lim_{x\to 2}f(x)\).`, [
        R`Left: \((2)^2+3=7\).`,
        R`Right: \(-4(2)+16=8\).`,
        R`They don't match.`,
      ], R`Does not exist (left \(7\), right \(8\))`),
      P(R`Evaluate \(\displaystyle\lim_{x\to -6}\frac{x^{2}+13x+42}{x+6}\).`, [
        R`Plug in \(x=-6\): you get \(\tfrac00\), so factor.`,
        R`\(x^{2}+13x+42=(x+6)(x+7)\).`,
        R`Cancel \((x+6)\), leaving \(x+7\).`,
        R`Plug in: \(-6+7=1\).`,
      ], R`\(1\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{-4x^{2}-5x-4}{9x^{2}+5}\).`, [
        R`Same degree (2) on top and bottom.`,
        R`Divide every term by \(x^2\); the terms with \(x\) in a denominator go to 0.`,
        R`Ratio of leading coefficients: \(\dfrac{-4}{9}\).`,
      ], R`\(-\dfrac{4}{9}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sin(12x)}{4x}\).`, [
        R`Rewrite: \(\dfrac{12}{4}\cdot\dfrac{\sin(12x)}{12x}\).`,
        R`\(\dfrac{\sin(12x)}{12x}\to1\).`,
      ], R`\(3\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sqrt{x+9}-3}{x}\).`, [
        R`\(\tfrac00\); multiply top and bottom by \(\sqrt{x+9}+3\).`,
        R`Top becomes \(x\): \(\dfrac{1}{\sqrt{x+9}+3}\).`,
        R`Plug in \(x=0\): \(\dfrac{1}{6}\).`,
      ], R`\(\dfrac{1}{6}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{3x-3}{5x^{2}+3}\).`, [
        R`Degree of top (1) < degree of bottom (2).`,
        R`Divide by \(x^2\): top \(\to0\), bottom \(\to5\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{-x^{3}-7}{-8x^{2}+9}\).`, [
        R`Degree of top (3) > degree of bottom (2), so it blows up.`,
        R`Divide by \(x^2\): \(\dfrac{-x-7/x^2}{-8+9/x^2}\) behaves like \(\dfrac{-1}{-8}x\).`,
        R`\(\dfrac{-1}{-8}\) is positive, so the limit is \(+\infty\).`,
      ], R`\(+\infty\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 1}\frac{x^3-1}{x-1}\).`, [
        R`\(\tfrac00\). Use the cube factoring formula: \(x^3-(1)^3=(x-1)(x^{2}+x+1)\).`,
        R`Cancel: \(x^{2}+x+1\).`,
        R`Plug in: \(1+1+1=3\).`,
      ], R`\(3\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 1}\frac{x^{2}+8x-1}{x+8}\).`, [
        R`Try plugging in first! Bottom: \(1+8=9\neq0\), so direct substitution works.`,
        R`Top: \(1+8-1=8\).`,
        R`\(\dfrac{8}{9}=\dfrac{8}{9}\).`,
      ], R`\(\dfrac{8}{9}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to -5^-}\frac{4}{x+5}\).`, [
        R`Top \(\to4\), bottom \(\to0\): vertical asymptote.`,
        R`From the left, \(x+5\) is a tiny negative number.`,
        R`Positive divided by tiny negative gives \(-\infty\).`,
      ], R`\(-\infty\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\tan(12x)}{6x}\).`, [
        R`\(\tan(12x)=\dfrac{\sin(12x)}{\cos(12x)}\).`,
        R`\(\dfrac{12}{6}\cdot\dfrac{\sin(12x)}{12x}\cdot\dfrac{1}{\cos(12x)}\to\dfrac{12}{6}\cdot1\cdot1\).`,
      ], R`\(2\)`),
      P(R`Evaluate \(\displaystyle\lim_{h\to 0}\frac{(-2+h)^2-4}{h}\).`, [
        R`Expand: \((-2+h)^2=4-4h+h^2\).`,
        R`Subtract 4 and divide by \(h\): \(-4+h\).`,
        R`\(h\to0\): \(-4\).`,
      ], R`\(-4\)`),
      P(R`Let \(f(x)=\begin{cases}x^{2}-6 & x<-2\\ 3x & x\ge -2\end{cases}\). Find \(\lim_{x\to -2}f(x)\).`, [
        R`Left: \((-2)^2-6=-2\).`,
        R`Right: \(3(-2)+0=-6\).`,
        R`They don't match.`,
      ], R`Does not exist (left \(-2\), right \(-6\))`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{-7x^{2}-2x-6}{x^{2}+5}\).`, [
        R`Same degree (2) on top and bottom.`,
        R`Divide every term by \(x^2\); the terms with \(x\) in a denominator go to 0.`,
        R`Ratio of leading coefficients: \(\dfrac{-7}{1}\).`,
      ], R`\(-7\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sin(10x)}{3x}\).`, [
        R`Rewrite: \(\dfrac{10}{3}\cdot\dfrac{\sin(10x)}{10x}\).`,
        R`\(\dfrac{\sin(10x)}{10x}\to1\).`,
      ], R`\(\dfrac{10}{3}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sqrt{x+100}-10}{x}\).`, [
        R`\(\tfrac00\); multiply top and bottom by \(\sqrt{x+100}+10\).`,
        R`Top becomes \(x\): \(\dfrac{1}{\sqrt{x+100}+10}\).`,
        R`Plug in \(x=0\): \(\dfrac{1}{20}\).`,
      ], R`\(\dfrac{1}{20}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{-3x-6}{9x^{2}+2}\).`, [
        R`Degree of top (1) < degree of bottom (2).`,
        R`Divide by \(x^2\): top \(\to0\), bottom \(\to9\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{-4x^{3}-9}{-5x^{2}+5}\).`, [
        R`Degree of top (3) > degree of bottom (2), so it blows up.`,
        R`Divide by \(x^2\): \(\dfrac{-4x-9/x^2}{-5+5/x^2}\) behaves like \(\dfrac{-4}{-5}x\).`,
        R`\(\dfrac{-4}{-5}\) is positive, so the limit is \(+\infty\).`,
      ], R`\(+\infty\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to -3}\frac{x^3+27}{x+3}\).`, [
        R`\(\tfrac00\). Use the cube factoring formula: \(x^3-(-3)^3=(x+3)(x^{2}-3x+9)\).`,
        R`Cancel: \(x^{2}-3x+9\).`,
        R`Plug in: \(9+9+9=27\).`,
      ], R`\(27\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 1}\frac{x^{2}+4x-3}{x-9}\).`, [
        R`Try plugging in first! Bottom: \(1-9=-8\neq0\), so direct substitution works.`,
        R`Top: \(1+4-3=2\).`,
        R`\(\dfrac{2}{-8}=-\dfrac{1}{4}\).`,
      ], R`\(-\dfrac{1}{4}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 6^-}\frac{5}{x-6}\).`, [
        R`Top \(\to5\), bottom \(\to0\): vertical asymptote.`,
        R`From the left, \(x-6\) is a tiny negative number.`,
        R`Positive divided by tiny negative gives \(-\infty\).`,
      ], R`\(-\infty\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\tan(5x)}{8x}\).`, [
        R`\(\tan(5x)=\dfrac{\sin(5x)}{\cos(5x)}\).`,
        R`\(\dfrac{5}{8}\cdot\dfrac{\sin(5x)}{5x}\cdot\dfrac{1}{\cos(5x)}\to\dfrac{5}{8}\cdot1\cdot1\).`,
      ], R`\(\dfrac{5}{8}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{x}{\sin(8x)}\).`, [
        R`Flip the special limit: \(\dfrac{x}{\sin(8x)}=\dfrac{1}{8}\cdot\dfrac{8x}{\sin(8x)}\).`,
        R`\(\dfrac{8x}{\sin(8x)}\to1\).`,
      ], R`\(\dfrac{1}{8}\)`),
      P(R`Evaluate \(\displaystyle\lim_{h\to 0}\frac{(-12+h)^2-144}{h}\).`, [
        R`Expand: \((-12+h)^2=144-24h+h^2\).`,
        R`Subtract 144 and divide by \(h\): \(-24+h\).`,
        R`\(h\to0\): \(-24\).`,
      ], R`\(-24\)`),
      P(R`Let \(f(x)=\begin{cases}x^{2}-6 & x<3\\ -4x+15 & x\ge 3\end{cases}\). Find \(\lim_{x\to 3}f(x)\).`, [
        R`Left: \((3)^2-6=3\).`,
        R`Right: \(-4(3)+15=3\).`,
        R`They match.`,
      ], R`\(3\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 1}\frac{x^{2}+3x-4}{x-1}\).`, [
        R`Plug in \(x=1\): you get \(\tfrac00\), so factor.`,
        R`\(x^{2}+3x-4=(x-1)(x+4)\).`,
        R`Cancel \((x-1)\), leaving \(x+4\).`,
        R`Plug in: \(1+4=5\).`,
      ], R`\(5\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{-3x^{2}+7x-5}{2x^{2}+7}\).`, [
        R`Same degree (2) on top and bottom.`,
        R`Divide every term by \(x^2\); the terms with \(x\) in a denominator go to 0.`,
        R`Ratio of leading coefficients: \(\dfrac{-3}{2}\).`,
      ], R`\(-\dfrac{3}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sqrt{x+81}-9}{x}\).`, [
        R`\(\tfrac00\); multiply top and bottom by \(\sqrt{x+81}+9\).`,
        R`Top becomes \(x\): \(\dfrac{1}{\sqrt{x+81}+9}\).`,
        R`Plug in \(x=0\): \(\dfrac{1}{18}\).`,
      ], R`\(\dfrac{1}{18}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{x-9}{4x^{2}+4}\).`, [
        R`Degree of top (1) < degree of bottom (2).`,
        R`Divide by \(x^2\): top \(\to0\), bottom \(\to4\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{-x^{3}+1}{4x^{2}+1}\).`, [
        R`Degree of top (3) > degree of bottom (2), so it blows up.`,
        R`Divide by \(x^2\): \(\dfrac{-x+/x^2}{4+/x^2}\) behaves like \(\dfrac{-1}{4}x\).`,
        R`\(\dfrac{-1}{4}\) is negative, so the limit is \(-\infty\).`,
      ], R`\(-\infty\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to -5}\frac{x^3+125}{x+5}\).`, [
        R`\(\tfrac00\). Use the cube factoring formula: \(x^3-(-5)^3=(x+5)(x^{2}-5x+25)\).`,
        R`Cancel: \(x^{2}-5x+25\).`,
        R`Plug in: \(25+25+25=75\).`,
      ], R`\(75\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to -6^+}\frac{3}{x+6}\).`, [
        R`Top \(\to3\), bottom \(\to0\): vertical asymptote.`,
        R`From the right, \(x+6\) is a tiny positive number.`,
        R`Positive divided by tiny positive gives \(+\infty\).`,
      ], R`\(+\infty\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\tan(9x)}{10x}\).`, [
        R`\(\tan(9x)=\dfrac{\sin(9x)}{\cos(9x)}\).`,
        R`\(\dfrac{9}{10}\cdot\dfrac{\sin(9x)}{9x}\cdot\dfrac{1}{\cos(9x)}\to\dfrac{9}{10}\cdot1\cdot1\).`,
      ], R`\(\dfrac{9}{10}\)`),
      P(R`Evaluate \(\displaystyle\lim_{h\to 0}\frac{(3+h)^2-9}{h}\).`, [
        R`Expand: \((3+h)^2=9+6h+h^2\).`,
        R`Subtract 9 and divide by \(h\): \(6+h\).`,
        R`\(h\to0\): \(6\).`,
      ], R`\(6\)`),
      P(R`Let \(f(x)=\begin{cases}x^{2}-1 & x<-3\\ 3x+21 & x\ge -3\end{cases}\). Find \(\lim_{x\to -3}f(x)\).`, [
        R`Left: \((-3)^2-1=8\).`,
        R`Right: \(3(-3)+21=12\).`,
        R`They don't match.`,
      ], R`Does not exist (left \(8\), right \(12\))`),
      P(R`Evaluate \(\displaystyle\lim_{x\to -5}\frac{x^{2}-3x-40}{x+5}\).`, [
        R`Plug in \(x=-5\): you get \(\tfrac00\), so factor.`,
        R`\(x^{2}-3x-40=(x+5)(x-8)\).`,
        R`Cancel \((x+5)\), leaving \(x-8\).`,
        R`Plug in: \(-5-8=-13\).`,
      ], R`\(-13\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to-\infty}\frac{8x^{2}-8x+4}{x^{2}+7}\).`, [
        R`Same degree (2) on top and bottom.`,
        R`Divide every term by \(x^2\); the terms with \(x\) in a denominator go to 0.`,
        R`Ratio of leading coefficients: \(\dfrac{8}{1}\).`,
      ], R`\(8\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sin(10x)}{12x}\).`, [
        R`Rewrite: \(\dfrac{10}{12}\cdot\dfrac{\sin(10x)}{10x}\).`,
        R`\(\dfrac{\sin(10x)}{10x}\to1\).`,
      ], R`\(\dfrac{5}{6}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\sqrt{x+16}-4}{x}\).`, [
        R`\(\tfrac00\); multiply top and bottom by \(\sqrt{x+16}+4\).`,
        R`Top becomes \(x\): \(\dfrac{1}{\sqrt{x+16}+4}\).`,
        R`Plug in \(x=0\): \(\dfrac{1}{8}\).`,
      ], R`\(\dfrac{1}{8}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{-5x-1}{x^{2}+1}\).`, [
        R`Degree of top (1) < degree of bottom (2).`,
        R`Divide by \(x^2\): top \(\to0\), bottom \(\to1\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{-5x^{3}-7}{7x^{2}+5}\).`, [
        R`Degree of top (3) > degree of bottom (2), so it blows up.`,
        R`Divide by \(x^2\): \(\dfrac{-5x-7/x^2}{7+5/x^2}\) behaves like \(\dfrac{-5}{7}x\).`,
        R`\(\dfrac{-5}{7}\) is negative, so the limit is \(-\infty\).`,
      ], R`\(-\infty\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to -1}\frac{x^{2}-4x-7}{x+2}\).`, [
        R`Try plugging in first! Bottom: \(-1+2=1\neq0\), so direct substitution works.`,
        R`Top: \(1+4-7=-2\).`,
        R`\(\dfrac{-2}{1}=-2\).`,
      ], R`\(-2\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 5^-}\frac{-8}{x-5}\).`, [
        R`Top \(\to-8\), bottom \(\to0\): vertical asymptote.`,
        R`From the left, \(x-5\) is a tiny negative number.`,
        R`Negative divided by tiny negative gives \(+\infty\).`,
      ], R`\(+\infty\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{\tan(3x)}{12x}\).`, [
        R`\(\tan(3x)=\dfrac{\sin(3x)}{\cos(3x)}\).`,
        R`\(\dfrac{3}{12}\cdot\dfrac{\sin(3x)}{3x}\cdot\dfrac{1}{\cos(3x)}\to\dfrac{3}{12}\cdot1\cdot1\).`,
      ], R`\(\dfrac{1}{4}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{x}{\sin(5x)}\).`, [
        R`Flip the special limit: \(\dfrac{x}{\sin(5x)}=\dfrac{1}{5}\cdot\dfrac{5x}{\sin(5x)}\).`,
        R`\(\dfrac{5x}{\sin(5x)}\to1\).`,
      ], R`\(\dfrac{1}{5}\)`),
      P(R`Evaluate \(\displaystyle\lim_{h\to 0}\frac{(6+h)^2-36}{h}\).`, [
        R`Expand: \((6+h)^2=36+12h+h^2\).`,
        R`Subtract 36 and divide by \(h\): \(12+h\).`,
        R`\(h\to0\): \(12\).`,
      ], R`\(12\)`),
      P(R`Let \(f(x)=\begin{cases}x^{2}-5 & x<1\\ -4x & x\ge 1\end{cases}\). Find \(\lim_{x\to 1}f(x)\).`, [
        R`Left: \((1)^2-5=-4\).`,
        R`Right: \(-4(1)+0=-4\).`,
        R`They match.`,
      ], R`\(-4\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to -7}\frac{x^{2}+4x-21}{x+7}\).`, [
        R`Plug in \(x=-7\): you get \(\tfrac00\), so factor.`,
        R`\(x^{2}+4x-21=(x+7)(x-3)\).`,
        R`Cancel \((x+7)\), leaving \(x-3\).`,
        R`Plug in: \(-7-3=-10\).`,
      ], R`\(-10\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to-\infty}\frac{-5x^{2}+8x+8}{3x^{2}+9}\).`, [
        R`Same degree (2) on top and bottom.`,
        R`Divide every term by \(x^2\); the terms with \(x\) in a denominator go to 0.`,
        R`Ratio of leading coefficients: \(\dfrac{-5}{3}\).`,
      ], R`\(-\dfrac{5}{3}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{2x-5}{9x^{2}+8}\).`, [
        R`Degree of top (1) < degree of bottom (2).`,
        R`Divide by \(x^2\): top \(\to0\), bottom \(\to9\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{-3x^{3}-4}{-9x^{2}+9}\).`, [
        R`Degree of top (3) > degree of bottom (2), so it blows up.`,
        R`Divide by \(x^2\): \(\dfrac{-3x-4/x^2}{-9+9/x^2}\) behaves like \(\dfrac{-3}{-9}x\).`,
        R`\(\dfrac{-3}{-9}\) is positive, so the limit is \(+\infty\).`,
      ], R`\(+\infty\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 2}\frac{x^3-8}{x-2}\).`, [
        R`\(\tfrac00\). Use the cube factoring formula: \(x^3-(2)^3=(x-2)(x^{2}+2x+4)\).`,
        R`Cancel: \(x^{2}+2x+4\).`,
        R`Plug in: \(4+4+4=12\).`,
      ], R`\(12\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 2}\frac{x^{2}-2x+1}{x+7}\).`, [
        R`Try plugging in first! Bottom: \(2+7=9\neq0\), so direct substitution works.`,
        R`Top: \(4-4+1=1\).`,
        R`\(\dfrac{1}{9}=\dfrac{1}{9}\).`,
      ], R`\(\dfrac{1}{9}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to -6^-}\frac{-8}{x+6}\).`, [
        R`Top \(\to-8\), bottom \(\to0\): vertical asymptote.`,
        R`From the left, \(x+6\) is a tiny negative number.`,
        R`Negative divided by tiny negative gives \(+\infty\).`,
      ], R`\(+\infty\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to 0}\frac{x}{\sin(10x)}\).`, [
        R`Flip the special limit: \(\dfrac{x}{\sin(10x)}=\dfrac{1}{10}\cdot\dfrac{10x}{\sin(10x)}\).`,
        R`\(\dfrac{10x}{\sin(10x)}\to1\).`,
      ], R`\(\dfrac{1}{10}\)`),
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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx & x<-1\\ x^{2}+7 & x\ge -1\end{cases}\) is continuous.`, [
        R`Only the break point \(x=-1\) matters.`,
        R`Left: \(-1k\). Right: \(1+7=8\).`,
        R`\(-1k=8\Rightarrow k=-8\).`,
      ], R`\(k=-8\)`),
      P(R`\(f(x)=\dfrac{x^{2}+2x-3}{x+3}\) is undefined at \(x=-3\). What value of \(f(-3)\) makes \(f\) continuous?`, [
        R`Factor: \((x+3)(x-1)\); cancel to get \(x-1\).`,
        R`\(\lim_{x\to-3}=-3-1=-4\).`,
      ], R`\(f(-3)=-4\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx^2 & x<-3\\ x+3 & x\ge -3\end{cases}\) is continuous.`, [
        R`Left at \(x=-3\): \(9k\). Right: \(1(-3)+3=0\).`,
        R`\(9k=0\Rightarrow k=0\).`,
      ], R`\(k=0\)`),
      P(R`Find and classify the discontinuities of \(f(x)=\dfrac{x^{2}+3x-10}{x^{2}-7x+10}\).`, [
        R`Factor: \(\dfrac{(x-2)(x+5)}{(x-2)(x-5)}\). Undefined at \(x=2\) and \(x=5\).`,
        R`At \(x=2\) the factor cancels: limit \(=\dfrac{2+5}{2-5}=-\dfrac{7}{3}\) &rArr; removable.`,
        R`At \(x=5\) the factor doesn't cancel &rArr; infinite (vertical asymptote).`,
      ], R`Removable at \(x=2\); infinite at \(x=5\)`),
      P(R`Is \(f(x)=\begin{cases}\dfrac{x^2-1}{x+1} & x\neq-1\\ -4 & x=-1\end{cases}\) continuous at \(x=-1\)?`, [
        R`\(f(-1)=-4\) is defined.`,
        R`\(\lim_{x\to-1}\dfrac{(x+1)(x-1)}{x+1}=-1-1=-2\).`,
        R`\(-2\neq-4\) ✗.`,
      ], R`No (removable: limit \(-2\), but \(f(-1)=-4\))`),
      P(R`Where is \(f(x)=\dfrac{\sqrt{x-3}}{x-4}\) continuous?`, [
        R`Root needs \(x-3\ge0\) &rArr; \(x\ge3\).`,
        R`Denominator: \(x\neq4\).`,
      ], R`\([3,4)\cup(4,\infty)\)`),
      P(R`Where is \(f(x)=\dfrac{1}{x^2-36}\) continuous?`, [
        R`Denominator \(=0\) when \(x=\pm6\).`,
        R`Rational functions are continuous everywhere else.`,
      ], R`\((-\infty,-6)\cup(-6,6)\cup(6,\infty)\)`),
      P(R`Show that \(f(x)=x^{2}+3x\) takes the value \(7\) somewhere in \([1,2]\).`, [
        R`\(f\) is a polynomial, so it's continuous on \([1,2]\).`,
        R`\(f(1)=4\), \(f(2)=10\).`,
        R`\(7\) is between them, so by the IVT \(f(c)=7\) for some \(c\) in \((1,2)\).`,
      ], R`True by the IVT.`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx-2 & x<2\\ x^{2}-7 & x\ge 2\end{cases}\) is continuous.`, [
        R`Only the break point \(x=2\) matters.`,
        R`Left: \(2k-2\). Right: \(4-7=-3\).`,
        R`\(2k=-1\Rightarrow k=-\dfrac{1}{2}\).`,
      ], R`\(k=-\dfrac{1}{2}\)`),
      P(R`\(f(x)=\dfrac{x^{2}+2x-15}{x-3}\) is undefined at \(x=3\). What value of \(f(3)\) makes \(f\) continuous?`, [
        R`Factor: \((x-3)(x+5)\); cancel to get \(x+5\).`,
        R`\(\lim_{x\to3}=3+5=8\).`,
      ], R`\(f(3)=8\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx^2 & x<-3\\ 2x+9 & x\ge -3\end{cases}\) is continuous.`, [
        R`Left at \(x=-3\): \(9k\). Right: \(2(-3)+9=3\).`,
        R`\(9k=3\Rightarrow k=\dfrac{1}{3}\).`,
      ], R`\(k=\dfrac{1}{3}\)`),
      P(R`Is \(f(x)=\begin{cases}\dfrac{x^2-1}{x-1} & x\neq1\\ 4 & x=1\end{cases}\) continuous at \(x=1\)?`, [
        R`\(f(1)=4\) is defined.`,
        R`\(\lim_{x\to1}\dfrac{(x-1)(x+1)}{x-1}=1+1=2\).`,
        R`\(2\neq4\) ✗.`,
      ], R`No (removable: limit \(2\), but \(f(1)=4\))`),
      P(R`Where is \(f(x)=\dfrac{\sqrt{x+4}}{x}\) continuous?`, [
        R`Root needs \(x+4\ge0\) &rArr; \(x\ge-4\).`,
        R`Denominator: \(x\neq0\).`,
      ], R`\([-4,0)\cup(0,\infty)\)`),
      P(R`Where is \(f(x)=\dfrac{1}{x^2-64}\) continuous?`, [
        R`Denominator \(=0\) when \(x=\pm8\).`,
        R`Rational functions are continuous everywhere else.`,
      ], R`\((-\infty,-8)\cup(-8,8)\cup(8,\infty)\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx+4 & x<4\\ x^{2}+5 & x\ge 4\end{cases}\) is continuous.`, [
        R`Only the break point \(x=4\) matters.`,
        R`Left: \(4k+4\). Right: \(16+5=21\).`,
        R`\(4k=17\Rightarrow k=\dfrac{17}{4}\).`,
      ], R`\(k=\dfrac{17}{4}\)`),
      P(R`\(f(x)=\dfrac{x^{2}-36}{x+6}\) is undefined at \(x=-6\). What value of \(f(-6)\) makes \(f\) continuous?`, [
        R`Factor: \((x+6)(x-6)\); cancel to get \(x-6\).`,
        R`\(\lim_{x\to-6}=-6-6=-12\).`,
      ], R`\(f(-6)=-12\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx^2 & x<-1\\ -5x-7 & x\ge -1\end{cases}\) is continuous.`, [
        R`Left at \(x=-1\): \(1k\). Right: \(-5(-1)-7=-2\).`,
        R`\(1k=-2\Rightarrow k=-2\).`,
      ], R`\(k=-2\)`),
      P(R`Is \(f(x)=\begin{cases}\dfrac{x^2-36}{x-6} & x\neq6\\ 12 & x=6\end{cases}\) continuous at \(x=6\)?`, [
        R`\(f(6)=12\) is defined.`,
        R`\(\lim_{x\to6}\dfrac{(x-6)(x+6)}{x-6}=6+6=12\).`,
        R`Limit equals \(f(6)\) ✓.`,
      ], R`Yes`),
      P(R`Where is \(f(x)=\dfrac{\sqrt{x+1}}{x-5}\) continuous?`, [
        R`Root needs \(x+1\ge0\) &rArr; \(x\ge-1\).`,
        R`Denominator: \(x\neq5\).`,
      ], R`\([-1,5)\cup(5,\infty)\)`),
      P(R`Where is \(f(x)=\dfrac{1}{x^2-16}\) continuous?`, [
        R`Denominator \(=0\) when \(x=\pm4\).`,
        R`Rational functions are continuous everywhere else.`,
      ], R`\((-\infty,-4)\cup(-4,4)\cup(4,\infty)\)`),
      P(R`Show that \(f(x)=x^{2}+4x\) takes the value \(6\) somewhere in \([1,4]\).`, [
        R`\(f\) is a polynomial, so it's continuous on \([1,4]\).`,
        R`\(f(1)=5\), \(f(4)=32\).`,
        R`\(6\) is between them, so by the IVT \(f(c)=6\) for some \(c\) in \((1,4)\).`,
      ], R`True by the IVT.`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx-6 & x<-3\\ x^{2}-6 & x\ge -3\end{cases}\) is continuous.`, [
        R`Only the break point \(x=-3\) matters.`,
        R`Left: \(-3k-6\). Right: \(9-6=3\).`,
        R`\(-3k=9\Rightarrow k=-3\).`,
      ], R`\(k=-3\)`),
      P(R`\(f(x)=\dfrac{x^{2}-6x+5}{x-1}\) is undefined at \(x=1\). What value of \(f(1)\) makes \(f\) continuous?`, [
        R`Factor: \((x-1)(x-5)\); cancel to get \(x-5\).`,
        R`\(\lim_{x\to1}=1-5=-4\).`,
      ], R`\(f(1)=-4\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx^2 & x<1\\ -4x+5 & x\ge 1\end{cases}\) is continuous.`, [
        R`Left at \(x=1\): \(1k\). Right: \(-4(1)+5=1\).`,
        R`\(1k=1\Rightarrow k=1\).`,
      ], R`\(k=1\)`),
      P(R`Find and classify the discontinuities of \(f(x)=\dfrac{x^{2}-4x+3}{x^{2}-8x+15}\).`, [
        R`Factor: \(\dfrac{(x-3)(x-1)}{(x-3)(x-5)}\). Undefined at \(x=3\) and \(x=5\).`,
        R`At \(x=3\) the factor cancels: limit \(=\dfrac{3-1}{3-5}=-1\) &rArr; removable.`,
        R`At \(x=5\) the factor doesn't cancel &rArr; infinite (vertical asymptote).`,
      ], R`Removable at \(x=3\); infinite at \(x=5\)`),
      P(R`Is \(f(x)=\begin{cases}\dfrac{x^2-4}{x-2} & x\neq2\\ 4 & x=2\end{cases}\) continuous at \(x=2\)?`, [
        R`\(f(2)=4\) is defined.`,
        R`\(\lim_{x\to2}\dfrac{(x-2)(x+2)}{x-2}=2+2=4\).`,
        R`Limit equals \(f(2)\) ✓.`,
      ], R`Yes`),
      P(R`Where is \(f(x)=\dfrac{\sqrt{x+2}}{x+1}\) continuous?`, [
        R`Root needs \(x+2\ge0\) &rArr; \(x\ge-2\).`,
        R`Denominator: \(x\neq-1\).`,
      ], R`\([-2,-1)\cup(-1,\infty)\)`),
      P(R`Where is \(f(x)=\dfrac{1}{x^2-81}\) continuous?`, [
        R`Denominator \(=0\) when \(x=\pm9\).`,
        R`Rational functions are continuous everywhere else.`,
      ], R`\((-\infty,-9)\cup(-9,9)\cup(9,\infty)\)`),
      P(R`Show that \(f(x)=x^{2}-3x\) takes the value \(-1\) somewhere in \([2,3]\).`, [
        R`\(f\) is a polynomial, so it's continuous on \([2,3]\).`,
        R`\(f(2)=-2\), \(f(3)=0\).`,
        R`\(-1\) is between them, so by the IVT \(f(c)=-1\) for some \(c\) in \((2,3)\).`,
      ], R`True by the IVT.`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx+7 & x<4\\ x^{2}-3 & x\ge 4\end{cases}\) is continuous.`, [
        R`Only the break point \(x=4\) matters.`,
        R`Left: \(4k+7\). Right: \(16-3=13\).`,
        R`\(4k=6\Rightarrow k=\dfrac{3}{2}\).`,
      ], R`\(k=\dfrac{3}{2}\)`),
      P(R`\(f(x)=\dfrac{x^{2}-4}{x-2}\) is undefined at \(x=2\). What value of \(f(2)\) makes \(f\) continuous?`, [
        R`Factor: \((x-2)(x+2)\); cancel to get \(x+2\).`,
        R`\(\lim_{x\to2}=2+2=4\).`,
      ], R`\(f(2)=4\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx^2 & x<3\\ -x-1 & x\ge 3\end{cases}\) is continuous.`, [
        R`Left at \(x=3\): \(9k\). Right: \(-1(3)-1=-4\).`,
        R`\(9k=-4\Rightarrow k=-\dfrac{4}{9}\).`,
      ], R`\(k=-\dfrac{4}{9}\)`),
      P(R`Is \(f(x)=\begin{cases}\dfrac{x^2-16}{x+4} & x\neq-4\\ -8 & x=-4\end{cases}\) continuous at \(x=-4\)?`, [
        R`\(f(-4)=-8\) is defined.`,
        R`\(\lim_{x\to-4}\dfrac{(x+4)(x-4)}{x+4}=-4-4=-8\).`,
        R`Limit equals \(f(-4)\) ✓.`,
      ], R`Yes`),
      P(R`Where is \(f(x)=\dfrac{\sqrt{x+3}}{x-3}\) continuous?`, [
        R`Root needs \(x+3\ge0\) &rArr; \(x\ge-3\).`,
        R`Denominator: \(x\neq3\).`,
      ], R`\([-3,3)\cup(3,\infty)\)`),
      P(R`Where is \(f(x)=\dfrac{1}{x^2-1}\) continuous?`, [
        R`Denominator \(=0\) when \(x=\pm1\).`,
        R`Rational functions are continuous everywhere else.`,
      ], R`\((-\infty,-1)\cup(-1,1)\cup(1,\infty)\)`),
      P(R`Show that \(f(x)=x^{2}-3x\) takes the value \(1\) somewhere in \([3,4]\).`, [
        R`\(f\) is a polynomial, so it's continuous on \([3,4]\).`,
        R`\(f(3)=0\), \(f(4)=4\).`,
        R`\(1\) is between them, so by the IVT \(f(c)=1\) for some \(c\) in \((3,4)\).`,
      ], R`True by the IVT.`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx-6 & x<1\\ x^{2}-6 & x\ge 1\end{cases}\) is continuous.`, [
        R`Only the break point \(x=1\) matters.`,
        R`Left: \(1k-6\). Right: \(1-6=-5\).`,
        R`\(1k=1\Rightarrow k=1\).`,
      ], R`\(k=1\)`),
      P(R`\(f(x)=\dfrac{x^{2}+4x-5}{x+5}\) is undefined at \(x=-5\). What value of \(f(-5)\) makes \(f\) continuous?`, [
        R`Factor: \((x+5)(x-1)\); cancel to get \(x-1\).`,
        R`\(\lim_{x\to-5}=-5-1=-6\).`,
      ], R`\(f(-5)=-6\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx^2 & x<2\\ 2x+5 & x\ge 2\end{cases}\) is continuous.`, [
        R`Left at \(x=2\): \(4k\). Right: \(2(2)+5=9\).`,
        R`\(4k=9\Rightarrow k=\dfrac{9}{4}\).`,
      ], R`\(k=\dfrac{9}{4}\)`),
      P(R`Find and classify the discontinuities of \(f(x)=\dfrac{x^{2}-9}{x^{2}-7x+12}\).`, [
        R`Factor: \(\dfrac{(x-3)(x+3)}{(x-3)(x-4)}\). Undefined at \(x=3\) and \(x=4\).`,
        R`At \(x=3\) the factor cancels: limit \(=\dfrac{3+3}{3-4}=-6\) &rArr; removable.`,
        R`At \(x=4\) the factor doesn't cancel &rArr; infinite (vertical asymptote).`,
      ], R`Removable at \(x=3\); infinite at \(x=4\)`),
      P(R`Where is \(f(x)=\dfrac{\sqrt{x-5}}{x-10}\) continuous?`, [
        R`Root needs \(x-5\ge0\) &rArr; \(x\ge5\).`,
        R`Denominator: \(x\neq10\).`,
      ], R`\([5,10)\cup(10,\infty)\)`),
      P(R`Show that \(f(x)=x^{2}-2x\) takes the value \(4\) somewhere in \([2,4]\).`, [
        R`\(f\) is a polynomial, so it's continuous on \([2,4]\).`,
        R`\(f(2)=0\), \(f(4)=8\).`,
        R`\(4\) is between them, so by the IVT \(f(c)=4\) for some \(c\) in \((2,4)\).`,
      ], R`True by the IVT.`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx & x<-2\\ x^{2}-7 & x\ge -2\end{cases}\) is continuous.`, [
        R`Only the break point \(x=-2\) matters.`,
        R`Left: \(-2k\). Right: \(4-7=-3\).`,
        R`\(-2k=-3\Rightarrow k=\dfrac{3}{2}\).`,
      ], R`\(k=\dfrac{3}{2}\)`),
      P(R`\(f(x)=\dfrac{x^{2}-x-2}{x+1}\) is undefined at \(x=-1\). What value of \(f(-1)\) makes \(f\) continuous?`, [
        R`Factor: \((x+1)(x-2)\); cancel to get \(x-2\).`,
        R`\(\lim_{x\to-1}=-1-2=-3\).`,
      ], R`\(f(-1)=-3\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx^2 & x<2\\ x+8 & x\ge 2\end{cases}\) is continuous.`, [
        R`Left at \(x=2\): \(4k\). Right: \(1(2)+8=10\).`,
        R`\(4k=10\Rightarrow k=\dfrac{5}{2}\).`,
      ], R`\(k=\dfrac{5}{2}\)`),
      P(R`Find and classify the discontinuities of \(f(x)=\dfrac{x^{2}+2x-8}{x^{2}+3x-4}\).`, [
        R`Factor: \(\dfrac{(x+4)(x-2)}{(x+4)(x-1)}\). Undefined at \(x=-4\) and \(x=1\).`,
        R`At \(x=-4\) the factor cancels: limit \(=\dfrac{-4-2}{-4-1}=\dfrac{6}{5}\) &rArr; removable.`,
        R`At \(x=1\) the factor doesn't cancel &rArr; infinite (vertical asymptote).`,
      ], R`Removable at \(x=-4\); infinite at \(x=1\)`),
      P(R`Is \(f(x)=\begin{cases}\dfrac{x^2-1}{x+1} & x\neq-1\\ -2 & x=-1\end{cases}\) continuous at \(x=-1\)?`, [
        R`\(f(-1)=-2\) is defined.`,
        R`\(\lim_{x\to-1}\dfrac{(x+1)(x-1)}{x+1}=-1-1=-2\).`,
        R`Limit equals \(f(-1)\) ✓.`,
      ], R`Yes`),
      P(R`Where is \(f(x)=\dfrac{\sqrt{x}}{x-5}\) continuous?`, [
        R`Root needs \(x+0\ge0\) &rArr; \(x\ge0\).`,
        R`Denominator: \(x\neq5\).`,
      ], R`\([0,5)\cup(5,\infty)\)`),
      P(R`Where is \(f(x)=\dfrac{1}{x^2-49}\) continuous?`, [
        R`Denominator \(=0\) when \(x=\pm7\).`,
        R`Rational functions are continuous everywhere else.`,
      ], R`\((-\infty,-7)\cup(-7,7)\cup(7,\infty)\)`),
      P(R`Show that \(f(x)=x^{2}\) takes the value \(9\) somewhere in \([2,4]\).`, [
        R`\(f\) is a polynomial, so it's continuous on \([2,4]\).`,
        R`\(f(2)=4\), \(f(4)=16\).`,
        R`\(9\) is between them, so by the IVT \(f(c)=9\) for some \(c\) in \((2,4)\).`,
      ], R`True by the IVT.`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx-1 & x<-2\\ x^{2}-2 & x\ge -2\end{cases}\) is continuous.`, [
        R`Only the break point \(x=-2\) matters.`,
        R`Left: \(-2k-1\). Right: \(4-2=2\).`,
        R`\(-2k=3\Rightarrow k=-\dfrac{3}{2}\).`,
      ], R`\(k=-\dfrac{3}{2}\)`),
      P(R`\(f(x)=\dfrac{x^{2}+7x+12}{x+4}\) is undefined at \(x=-4\). What value of \(f(-4)\) makes \(f\) continuous?`, [
        R`Factor: \((x+4)(x+3)\); cancel to get \(x+3\).`,
        R`\(\lim_{x\to-4}=-4+3=-1\).`,
      ], R`\(f(-4)=-1\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx^2 & x<-1\\ -4x-2 & x\ge -1\end{cases}\) is continuous.`, [
        R`Left at \(x=-1\): \(1k\). Right: \(-4(-1)-2=2\).`,
        R`\(1k=2\Rightarrow k=2\).`,
      ], R`\(k=2\)`),
      P(R`Is \(f(x)=\begin{cases}\dfrac{x^2-25}{x+5} & x\neq-5\\ -9 & x=-5\end{cases}\) continuous at \(x=-5\)?`, [
        R`\(f(-5)=-9\) is defined.`,
        R`\(\lim_{x\to-5}\dfrac{(x+5)(x-5)}{x+5}=-5-5=-10\).`,
        R`\(-10\neq-9\) ✗.`,
      ], R`No (removable: limit \(-10\), but \(f(-5)=-9\))`),
      P(R`Where is \(f(x)=\dfrac{\sqrt{x+2}}{x}\) continuous?`, [
        R`Root needs \(x+2\ge0\) &rArr; \(x\ge-2\).`,
        R`Denominator: \(x\neq0\).`,
      ], R`\([-2,0)\cup(0,\infty)\)`),
      P(R`Where is \(f(x)=\dfrac{1}{x^2-9}\) continuous?`, [
        R`Denominator \(=0\) when \(x=\pm3\).`,
        R`Rational functions are continuous everywhere else.`,
      ], R`\((-\infty,-3)\cup(-3,3)\cup(3,\infty)\)`),
      P(R`Show that \(f(x)=x^{2}-3x\) takes the value \(3\) somewhere in \([1,4]\).`, [
        R`\(f\) is a polynomial, so it's continuous on \([1,4]\).`,
        R`\(f(1)=-2\), \(f(4)=4\).`,
        R`\(3\) is between them, so by the IVT \(f(c)=3\) for some \(c\) in \((1,4)\).`,
      ], R`True by the IVT.`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx+4 & x<-3\\ x^{2}+8 & x\ge -3\end{cases}\) is continuous.`, [
        R`Only the break point \(x=-3\) matters.`,
        R`Left: \(-3k+4\). Right: \(9+8=17\).`,
        R`\(-3k=13\Rightarrow k=-\dfrac{13}{3}\).`,
      ], R`\(k=-\dfrac{13}{3}\)`),
      P(R`\(f(x)=\dfrac{x^{2}-7x+6}{x-1}\) is undefined at \(x=1\). What value of \(f(1)\) makes \(f\) continuous?`, [
        R`Factor: \((x-1)(x-6)\); cancel to get \(x-6\).`,
        R`\(\lim_{x\to1}=1-6=-5\).`,
      ], R`\(f(1)=-5\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx^2 & x<2\\ x+4 & x\ge 2\end{cases}\) is continuous.`, [
        R`Left at \(x=2\): \(4k\). Right: \(1(2)+4=6\).`,
        R`\(4k=6\Rightarrow k=\dfrac{3}{2}\).`,
      ], R`\(k=\dfrac{3}{2}\)`),
      P(R`Find and classify the discontinuities of \(f(x)=\dfrac{x^{2}+6x+5}{x^{2}+4x+3}\).`, [
        R`Factor: \(\dfrac{(x+1)(x+5)}{(x+1)(x+3)}\). Undefined at \(x=-1\) and \(x=-3\).`,
        R`At \(x=-1\) the factor cancels: limit \(=\dfrac{-1+5}{-1+3}=2\) &rArr; removable.`,
        R`At \(x=-3\) the factor doesn't cancel &rArr; infinite (vertical asymptote).`,
      ], R`Removable at \(x=-1\); infinite at \(x=-3\)`),
      P(R`Is \(f(x)=\begin{cases}\dfrac{x^2-9}{x+3} & x\neq-3\\ -9 & x=-3\end{cases}\) continuous at \(x=-3\)?`, [
        R`\(f(-3)=-9\) is defined.`,
        R`\(\lim_{x\to-3}\dfrac{(x+3)(x-3)}{x+3}=-3-3=-6\).`,
        R`\(-6\neq-9\) ✗.`,
      ], R`No (removable: limit \(-6\), but \(f(-3)=-9\))`),
      P(R`Where is \(f(x)=\dfrac{\sqrt{x+5}}{x}\) continuous?`, [
        R`Root needs \(x+5\ge0\) &rArr; \(x\ge-5\).`,
        R`Denominator: \(x\neq0\).`,
      ], R`\([-5,0)\cup(0,\infty)\)`),
      P(R`Show that \(f(x)=x^{2}-x\) takes the value \(18\) somewhere in \([2,5]\).`, [
        R`\(f\) is a polynomial, so it's continuous on \([2,5]\).`,
        R`\(f(2)=2\), \(f(5)=20\).`,
        R`\(18\) is between them, so by the IVT \(f(c)=18\) for some \(c\) in \((2,5)\).`,
      ], R`True by the IVT.`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx & x<-1\\ x^{2}+1 & x\ge -1\end{cases}\) is continuous.`, [
        R`Only the break point \(x=-1\) matters.`,
        R`Left: \(-1k\). Right: \(1+1=2\).`,
        R`\(-1k=2\Rightarrow k=-2\).`,
      ], R`\(k=-2\)`),
      P(R`\(f(x)=\dfrac{x^{2}-11x+30}{x-6}\) is undefined at \(x=6\). What value of \(f(6)\) makes \(f\) continuous?`, [
        R`Factor: \((x-6)(x-5)\); cancel to get \(x-5\).`,
        R`\(\lim_{x\to6}=6-5=1\).`,
      ], R`\(f(6)=1\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx^2 & x<1\\ 4x & x\ge 1\end{cases}\) is continuous.`, [
        R`Left at \(x=1\): \(1k\). Right: \(4(1)+0=4\).`,
        R`\(1k=4\Rightarrow k=4\).`,
      ], R`\(k=4\)`),
      P(R`Is \(f(x)=\begin{cases}\dfrac{x^2-9}{x+3} & x\neq-3\\ -8 & x=-3\end{cases}\) continuous at \(x=-3\)?`, [
        R`\(f(-3)=-8\) is defined.`,
        R`\(\lim_{x\to-3}\dfrac{(x+3)(x-3)}{x+3}=-3-3=-6\).`,
        R`\(-6\neq-8\) ✗.`,
      ], R`No (removable: limit \(-6\), but \(f(-3)=-8\))`),
      P(R`Where is \(f(x)=\dfrac{\sqrt{x-3}}{x-9}\) continuous?`, [
        R`Root needs \(x-3\ge0\) &rArr; \(x\ge3\).`,
        R`Denominator: \(x\neq9\).`,
      ], R`\([3,9)\cup(9,\infty)\)`),
      P(R`Show that \(f(x)=x^{2}+4x\) takes the value \(18\) somewhere in \([0,3]\).`, [
        R`\(f\) is a polynomial, so it's continuous on \([0,3]\).`,
        R`\(f(0)=0\), \(f(3)=21\).`,
        R`\(18\) is between them, so by the IVT \(f(c)=18\) for some \(c\) in \((0,3)\).`,
      ], R`True by the IVT.`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx+4 & x<4\\ x^{2}+7 & x\ge 4\end{cases}\) is continuous.`, [
        R`Only the break point \(x=4\) matters.`,
        R`Left: \(4k+4\). Right: \(16+7=23\).`,
        R`\(4k=19\Rightarrow k=\dfrac{19}{4}\).`,
      ], R`\(k=\dfrac{19}{4}\)`),
      P(R`\(f(x)=\dfrac{x^{2}+7x+6}{x+6}\) is undefined at \(x=-6\). What value of \(f(-6)\) makes \(f\) continuous?`, [
        R`Factor: \((x+6)(x+1)\); cancel to get \(x+1\).`,
        R`\(\lim_{x\to-6}=-6+1=-5\).`,
      ], R`\(f(-6)=-5\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx^2 & x<-1\\ -6x-5 & x\ge -1\end{cases}\) is continuous.`, [
        R`Left at \(x=-1\): \(1k\). Right: \(-6(-1)-5=1\).`,
        R`\(1k=1\Rightarrow k=1\).`,
      ], R`\(k=1\)`),
      P(R`Find and classify the discontinuities of \(f(x)=\dfrac{x^{2}+7x+10}{x^{2}-2x-8}\).`, [
        R`Factor: \(\dfrac{(x+2)(x+5)}{(x+2)(x-4)}\). Undefined at \(x=-2\) and \(x=4\).`,
        R`At \(x=-2\) the factor cancels: limit \(=\dfrac{-2+5}{-2-4}=-\dfrac{1}{2}\) &rArr; removable.`,
        R`At \(x=4\) the factor doesn't cancel &rArr; infinite (vertical asymptote).`,
      ], R`Removable at \(x=-2\); infinite at \(x=4\)`),
      P(R`Is \(f(x)=\begin{cases}\dfrac{x^2-16}{x-4} & x\neq4\\ 6 & x=4\end{cases}\) continuous at \(x=4\)?`, [
        R`\(f(4)=6\) is defined.`,
        R`\(\lim_{x\to4}\dfrac{(x-4)(x+4)}{x-4}=4+4=8\).`,
        R`\(8\neq6\) ✗.`,
      ], R`No (removable: limit \(8\), but \(f(4)=6\))`),
      P(R`Where is \(f(x)=\dfrac{\sqrt{x}}{x-1}\) continuous?`, [
        R`Root needs \(x+0\ge0\) &rArr; \(x\ge0\).`,
        R`Denominator: \(x\neq1\).`,
      ], R`\([0,1)\cup(1,\infty)\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx+4 & x<-2\\ x^{2}-4 & x\ge -2\end{cases}\) is continuous.`, [
        R`Only the break point \(x=-2\) matters.`,
        R`Left: \(-2k+4\). Right: \(4-4=0\).`,
        R`\(-2k=-4\Rightarrow k=2\).`,
      ], R`\(k=2\)`),
      P(R`\(f(x)=\dfrac{x^{2}+3x-4}{x+4}\) is undefined at \(x=-4\). What value of \(f(-4)\) makes \(f\) continuous?`, [
        R`Factor: \((x+4)(x-1)\); cancel to get \(x-1\).`,
        R`\(\lim_{x\to-4}=-4-1=-5\).`,
      ], R`\(f(-4)=-5\)`),
      P(R`Use the IVT to show \(x^{3}+6x+11=0\) has a solution in \((-2,-1)\).`, [
        R`\(f(x)=x^{3}+6x+11\) is a polynomial, so continuous.`,
        R`\(f(-2)=-9\) and \(f(-1)=4\): opposite signs.`,
        R`By the IVT, \(f(c)=0\) for some \(c\) in \((-2,-1)\).`,
      ], R`Proved by the IVT.`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx^2 & x<-2\\ 3x-4 & x\ge -2\end{cases}\) is continuous.`, [
        R`Left at \(x=-2\): \(4k\). Right: \(3(-2)-4=-10\).`,
        R`\(4k=-10\Rightarrow k=-\dfrac{5}{2}\).`,
      ], R`\(k=-\dfrac{5}{2}\)`),
      P(R`Find and classify the discontinuities of \(f(x)=\dfrac{x^{2}+x-12}{x^{2}-x-6}\).`, [
        R`Factor: \(\dfrac{(x-3)(x+4)}{(x-3)(x+2)}\). Undefined at \(x=3\) and \(x=-2\).`,
        R`At \(x=3\) the factor cancels: limit \(=\dfrac{3+4}{3+2}=\dfrac{7}{5}\) &rArr; removable.`,
        R`At \(x=-2\) the factor doesn't cancel &rArr; infinite (vertical asymptote).`,
      ], R`Removable at \(x=3\); infinite at \(x=-2\)`),
      P(R`Is \(f(x)=\begin{cases}\dfrac{x^2-9}{x-3} & x\neq3\\ 7 & x=3\end{cases}\) continuous at \(x=3\)?`, [
        R`\(f(3)=7\) is defined.`,
        R`\(\lim_{x\to3}\dfrac{(x-3)(x+3)}{x-3}=3+3=6\).`,
        R`\(6\neq7\) ✗.`,
      ], R`No (removable: limit \(6\), but \(f(3)=7\))`),
      P(R`Where is \(f(x)=\dfrac{\sqrt{x+2}}{x-1}\) continuous?`, [
        R`Root needs \(x+2\ge0\) &rArr; \(x\ge-2\).`,
        R`Denominator: \(x\neq1\).`,
      ], R`\([-2,1)\cup(1,\infty)\)`),
      P(R`Show that \(f(x)=x^{2}+3x\) takes the value \(19\) somewhere in \([3,5]\).`, [
        R`\(f\) is a polynomial, so it's continuous on \([3,5]\).`,
        R`\(f(3)=18\), \(f(5)=40\).`,
        R`\(19\) is between them, so by the IVT \(f(c)=19\) for some \(c\) in \((3,5)\).`,
      ], R`True by the IVT.`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx & x<-3\\ x^{2}+4 & x\ge -3\end{cases}\) is continuous.`, [
        R`Only the break point \(x=-3\) matters.`,
        R`Left: \(-3k\). Right: \(9+4=13\).`,
        R`\(-3k=13\Rightarrow k=-\dfrac{13}{3}\).`,
      ], R`\(k=-\dfrac{13}{3}\)`),
      P(R`\(f(x)=\dfrac{x^{2}+x-20}{x-4}\) is undefined at \(x=4\). What value of \(f(4)\) makes \(f\) continuous?`, [
        R`Factor: \((x-4)(x+5)\); cancel to get \(x+5\).`,
        R`\(\lim_{x\to4}=4+5=9\).`,
      ], R`\(f(4)=9\)`),
      P(R`Find \(k\) so that \(f(x)=\begin{cases}kx^2 & x<-2\\ 6x-1 & x\ge -2\end{cases}\) is continuous.`, [
        R`Left at \(x=-2\): \(4k\). Right: \(6(-2)-1=-13\).`,
        R`\(4k=-13\Rightarrow k=-\dfrac{13}{4}\).`,
      ], R`\(k=-\dfrac{13}{4}\)`),
      P(R`Is \(f(x)=\begin{cases}\dfrac{x^2-4}{x-2} & x\neq2\\ 6 & x=2\end{cases}\) continuous at \(x=2\)?`, [
        R`\(f(2)=6\) is defined.`,
        R`\(\lim_{x\to2}\dfrac{(x-2)(x+2)}{x-2}=2+2=4\).`,
        R`\(4\neq6\) ✗.`,
      ], R`No (removable: limit \(4\), but \(f(2)=6\))`),
      P(R`Where is \(f(x)=\dfrac{\sqrt{x-3}}{x-6}\) continuous?`, [
        R`Root needs \(x-3\ge0\) &rArr; \(x\ge3\).`,
        R`Denominator: \(x\neq6\).`,
      ], R`\([3,6)\cup(6,\infty)\)`),
      P(R`Where is \(f(x)=\dfrac{1}{x^2-4}\) continuous?`, [
        R`Denominator \(=0\) when \(x=\pm2\).`,
        R`Rational functions are continuous everywhere else.`,
      ], R`\((-\infty,-2)\cup(-2,2)\cup(2,\infty)\)`),
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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=5x^{2}-6x-6\).`, [
        R`\(f(x+h)=5(x+h)^2-6(x+h)-6\).`,
        R`Expand and subtract \(f(x)\): \(f(x+h)-f(x)=10xh+5h^2-6h\).`,
        R`Divide by \(h\): \(10x+5h-6\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=10x-6\)`),
      P(R`Find the tangent line to \(y=-4x^{2}-8x-2\) at \(x=2\).`, [
        R`Point: \((2,-34)\).`,
        R`\(y'=-8x-8\), slope \(m=-24\).`,
        R`\(y-(-34)=-24(x-2)\).`,
      ], R`\(y=-24x+14\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=-x+12\).`, [
        R`\(f(x+h)-f(x)=-(x+h)+12-(-x+12)=-h\).`,
        R`Divide by \(h\): \(-1\). No \(h\) left, so that's the limit.`,
      ], R`\(f'(x)=-1\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\dfrac{5}{x-5}\).`, [
        R`\(\dfrac{1}{h}\left[\dfrac{5}{x+h-5}-\dfrac{5}{x-5}\right]\).`,
        R`Common denominator: top becomes \(5(x-5)-5(x+h-5)=-5h\).`,
        R`Divide by \(h\): \(\dfrac{-5}{(x-5)(x+h-5)}\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=\dfrac{-5}{(x-5)^2}\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\sqrt{x+5}\).`, [
        R`\(\dfrac{\sqrt{x+h+5}-\sqrt{x+5}}{h}\); multiply by the conjugate.`,
        R`Top becomes \((x+h+5)-(x+5)=h\): \(\dfrac{1}{\sqrt{x+h+5}+\sqrt{x+5}}\).`,
        R`\(h\to0\): \(\dfrac{1}{2\sqrt{x+5}}\).`,
      ], R`\(f'(x)=\dfrac{1}{2\sqrt{x+5}}\)`),
      P(R`Find the tangent line to \(y=x^{3}+6x-7\) at \(x=2\).`, [
        R`Point: \(y(2)=13\).`,
        R`\(y'=3x^{2}+6\), slope \(=18\).`,
        R`\(y-13=18(x-2)\).`,
      ], R`\(y=18x-23\)`),
      P(R`Find the average rate of change of \(f(x)=-3x^{2}+2x-9\) on \([-2,1]\).`, [
        R`\(f(1)=-10\), \(f(-2)=-25\).`,
        R`\(\dfrac{-10-(-25)}{1-(-2)}\).`,
      ], R`\(5\)`),
      P(R`Evaluate \(\displaystyle\lim_{h\to0}\frac{(5+h)^{2}-25}{h}\) by recognizing it as a derivative.`, [
        R`It's \(f'(a)\) for \(f(x)=x^{2}\) at \(a=5\) (check: \(5^{2}=25\)).`,
        R`\(f'(x)=2x\), so \(f'(5)=10\).`,
      ], R`\(10\)`),
      P(R`Find the tangent line to \(y=\sqrt x\) at \(x=4\).`, [
        R`Point: \((4,2)\).`,
        R`\(y'=\dfrac{1}{2\sqrt x}=\dfrac{1}{4}\).`,
        R`\(y-2=\dfrac{1}{4}(x-4)\).`,
      ], R`\(y=\tfrac{1}{4}x+1\)`),
      P(R`Find the tangent line to \(y=\dfrac{-1}{x}\) at \(x=-3\).`, [
        R`Point: \(\left(-3,\dfrac{1}{3}\right)\).`,
        R`\(y'=-\dfrac{-1}{x^2}\) &rArr; slope \(\dfrac{1}{9}\).`,
        R`Point-slope, then simplify.`,
      ], R`\(y=\tfrac{1}{9}x+\tfrac{2}{3}\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=-x^{2}+7x-1\).`, [
        R`\(f(x+h)=-(x+h)^2+7(x+h)-1\).`,
        R`Expand and subtract \(f(x)\): \(f(x+h)-f(x)=-2xh-h^2+7h\).`,
        R`Divide by \(h\): \(-2x-h+7\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=-2x+7\)`),
      P(R`Find the tangent line to \(y=3x^{2}-x+7\) at \(x=1\).`, [
        R`Point: \((1,9)\).`,
        R`\(y'=6x-1\), slope \(m=5\).`,
        R`\(y-9=5(x-1)\).`,
      ], R`\(y=5x+4\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=8x+9\).`, [
        R`\(f(x+h)-f(x)=8(x+h)+9-(8x+9)=8h\).`,
        R`Divide by \(h\): \(8\). No \(h\) left, so that's the limit.`,
      ], R`\(f'(x)=8\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\dfrac{-4}{x-1}\).`, [
        R`\(\dfrac{1}{h}\left[\dfrac{-4}{x+h-1}-\dfrac{-4}{x-1}\right]\).`,
        R`Common denominator: top becomes \(-4(x-1)-(-4)(x+h-1)=4h\).`,
        R`Divide by \(h\): \(\dfrac{4}{(x-1)(x+h-1)}\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=\dfrac{4}{(x-1)^2}\)`),
      P(R`Find the tangent line to \(y=x^{3}+6x-9\) at \(x=-2\).`, [
        R`Point: \(y(-2)=-29\).`,
        R`\(y'=3x^{2}+6\), slope \(=18\).`,
        R`\(y-(-29)=18(x-(-2))\).`,
      ], R`\(y=18x+7\)`),
      P(R`Find the average rate of change of \(f(x)=x^{2}+9x-5\) on \([-3,1]\).`, [
        R`\(f(1)=5\), \(f(-3)=-23\).`,
        R`\(\dfrac{5-(-23)}{1-(-3)}\).`,
      ], R`\(7\)`),
      P(R`Evaluate \(\displaystyle\lim_{h\to0}\frac{(3+h)^{5}-243}{h}\) by recognizing it as a derivative.`, [
        R`It's \(f'(a)\) for \(f(x)=x^{5}\) at \(a=3\) (check: \(3^{5}=243\)).`,
        R`\(f'(x)=5x^{4}\), so \(f'(3)=405\).`,
      ], R`\(405\)`),
      P(R`Find the tangent line to \(y=\sqrt x\) at \(x=25\).`, [
        R`Point: \((25,5)\).`,
        R`\(y'=\dfrac{1}{2\sqrt x}=\dfrac{1}{10}\).`,
        R`\(y-5=\dfrac{1}{10}(x-25)\).`,
      ], R`\(y=\tfrac{1}{10}x+\tfrac{5}{2}\)`),
      P(R`Find the tangent line to \(y=\dfrac{-2}{x}\) at \(x=-3\).`, [
        R`Point: \(\left(-3,\dfrac{2}{3}\right)\).`,
        R`\(y'=-\dfrac{-2}{x^2}\) &rArr; slope \(\dfrac{2}{9}\).`,
        R`Point-slope, then simplify.`,
      ], R`\(y=\tfrac{2}{9}x+\tfrac{4}{3}\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=x^{2}+4x+4\).`, [
        R`\(f(x+h)=(x+h)^2+4(x+h)+4\).`,
        R`Expand and subtract \(f(x)\): \(f(x+h)-f(x)=2xh+h^2+4h\).`,
        R`Divide by \(h\): \(2x+h+4\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=2x+4\)`),
      P(R`Find the tangent line to \(y=3x^{2}+x-6\) at \(x=-2\).`, [
        R`Point: \((-2,4)\).`,
        R`\(y'=6x+1\), slope \(m=-11\).`,
        R`\(y-4=-11(x-(-2))\).`,
      ], R`\(y=-11x-18\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=10x-11\).`, [
        R`\(f(x+h)-f(x)=10(x+h)-11-(10x-11)=10h\).`,
        R`Divide by \(h\): \(10\). No \(h\) left, so that's the limit.`,
      ], R`\(f'(x)=10\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\dfrac{7}{x-6}\).`, [
        R`\(\dfrac{1}{h}\left[\dfrac{7}{x+h-6}-\dfrac{7}{x-6}\right]\).`,
        R`Common denominator: top becomes \(7(x-6)-7(x+h-6)=-7h\).`,
        R`Divide by \(h\): \(\dfrac{-7}{(x-6)(x+h-6)}\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=\dfrac{-7}{(x-6)^2}\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\sqrt{x-3}\).`, [
        R`\(\dfrac{\sqrt{x+h-3}-\sqrt{x-3}}{h}\); multiply by the conjugate.`,
        R`Top becomes \((x+h-3)-(x-3)=h\): \(\dfrac{1}{\sqrt{x+h-3}+\sqrt{x-3}}\).`,
        R`\(h\to0\): \(\dfrac{1}{2\sqrt{x-3}}\).`,
      ], R`\(f'(x)=\dfrac{1}{2\sqrt{x-3}}\)`),
      P(R`Find the tangent line to \(y=x^{3}+x-6\) at \(x=-3\).`, [
        R`Point: \(y(-3)=-36\).`,
        R`\(y'=3x^{2}+1\), slope \(=28\).`,
        R`\(y-(-36)=28(x-(-3))\).`,
      ], R`\(y=28x+48\)`),
      P(R`Find the average rate of change of \(f(x)=2x^{2}-7\) on \([-3,0]\).`, [
        R`\(f(0)=-7\), \(f(-3)=11\).`,
        R`\(\dfrac{-7-11}{0-(-3)}\).`,
      ], R`\(-6\)`),
      P(R`Find the tangent line to \(y=\dfrac{-7}{x}\) at \(x=5\).`, [
        R`Point: \(\left(5,-\dfrac{7}{5}\right)\).`,
        R`\(y'=-\dfrac{-7}{x^2}\) &rArr; slope \(\dfrac{7}{25}\).`,
        R`Point-slope, then simplify.`,
      ], R`\(y=\tfrac{7}{25}x-\tfrac{14}{5}\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=2x^{2}-8\).`, [
        R`\(f(x+h)=2(x+h)^2-8\).`,
        R`Expand and subtract \(f(x)\): \(f(x+h)-f(x)=4xh+2h^2\).`,
        R`Divide by \(h\): \(4x+2h\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=4x\)`),
      P(R`Find the tangent line to \(y=4x^{2}+7x-7\) at \(x=2\).`, [
        R`Point: \((2,23)\).`,
        R`\(y'=8x+7\), slope \(m=23\).`,
        R`\(y-23=23(x-2)\).`,
      ], R`\(y=23x-23\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=3x+5\).`, [
        R`\(f(x+h)-f(x)=3(x+h)+5-(3x+5)=3h\).`,
        R`Divide by \(h\): \(3\). No \(h\) left, so that's the limit.`,
      ], R`\(f'(x)=3\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\dfrac{-4}{x-3}\).`, [
        R`\(\dfrac{1}{h}\left[\dfrac{-4}{x+h-3}-\dfrac{-4}{x-3}\right]\).`,
        R`Common denominator: top becomes \(-4(x-3)-(-4)(x+h-3)=4h\).`,
        R`Divide by \(h\): \(\dfrac{4}{(x-3)(x+h-3)}\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=\dfrac{4}{(x-3)^2}\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\sqrt{x+6}\).`, [
        R`\(\dfrac{\sqrt{x+h+6}-\sqrt{x+6}}{h}\); multiply by the conjugate.`,
        R`Top becomes \((x+h+6)-(x+6)=h\): \(\dfrac{1}{\sqrt{x+h+6}+\sqrt{x+6}}\).`,
        R`\(h\to0\): \(\dfrac{1}{2\sqrt{x+6}}\).`,
      ], R`\(f'(x)=\dfrac{1}{2\sqrt{x+6}}\)`),
      P(R`Find the tangent line to \(y=x^{3}+x+3\) at \(x=-1\).`, [
        R`Point: \(y(-1)=1\).`,
        R`\(y'=3x^{2}+1\), slope \(=4\).`,
        R`\(y-1=4(x-(-1))\).`,
      ], R`\(y=4x+5\)`),
      P(R`Find the average rate of change of \(f(x)=5x^{2}+4x+1\) on \([1,4]\).`, [
        R`\(f(4)=97\), \(f(1)=10\).`,
        R`\(\dfrac{97-10}{4-1}\).`,
      ], R`\(29\)`),
      P(R`Evaluate \(\displaystyle\lim_{h\to0}\frac{(1+h)^{3}-1}{h}\) by recognizing it as a derivative.`, [
        R`It's \(f'(a)\) for \(f(x)=x^{3}\) at \(a=1\) (check: \(1^{3}=1\)).`,
        R`\(f'(x)=3x^{2}\), so \(f'(1)=3\).`,
      ], R`\(3\)`),
      P(R`Find the tangent line to \(y=\dfrac{8}{x}\) at \(x=5\).`, [
        R`Point: \(\left(5,\dfrac{8}{5}\right)\).`,
        R`\(y'=-\dfrac{8}{x^2}\) &rArr; slope \(-\dfrac{8}{25}\).`,
        R`Point-slope, then simplify.`,
      ], R`\(y=-\tfrac{8}{25}x+\tfrac{16}{5}\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=2x^{2}+7x+7\).`, [
        R`\(f(x+h)=2(x+h)^2+7(x+h)+7\).`,
        R`Expand and subtract \(f(x)\): \(f(x+h)-f(x)=4xh+2h^2+7h\).`,
        R`Divide by \(h\): \(4x+2h+7\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=4x+7\)`),
      P(R`Find the tangent line to \(y=-3x^{2}+4\) at \(x=1\).`, [
        R`Point: \((1,1)\).`,
        R`\(y'=-6x\), slope \(m=-6\).`,
        R`\(y-1=-6(x-1)\).`,
      ], R`\(y=-6x+7\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=-8x-3\).`, [
        R`\(f(x+h)-f(x)=-8(x+h)-3-(-8x-3)=-8h\).`,
        R`Divide by \(h\): \(-8\). No \(h\) left, so that's the limit.`,
      ], R`\(f'(x)=-8\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\dfrac{4}{x-3}\).`, [
        R`\(\dfrac{1}{h}\left[\dfrac{4}{x+h-3}-\dfrac{4}{x-3}\right]\).`,
        R`Common denominator: top becomes \(4(x-3)-4(x+h-3)=-4h\).`,
        R`Divide by \(h\): \(\dfrac{-4}{(x-3)(x+h-3)}\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=\dfrac{-4}{(x-3)^2}\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\sqrt{x-4}\).`, [
        R`\(\dfrac{\sqrt{x+h-4}-\sqrt{x-4}}{h}\); multiply by the conjugate.`,
        R`Top becomes \((x+h-4)-(x-4)=h\): \(\dfrac{1}{\sqrt{x+h-4}+\sqrt{x-4}}\).`,
        R`\(h\to0\): \(\dfrac{1}{2\sqrt{x-4}}\).`,
      ], R`\(f'(x)=\dfrac{1}{2\sqrt{x-4}}\)`),
      P(R`Find the tangent line to \(y=x^{3}-2\) at \(x=-1\).`, [
        R`Point: \(y(-1)=-3\).`,
        R`\(y'=3x^{2}\), slope \(=3\).`,
        R`\(y-(-3)=3(x-(-1))\).`,
      ], R`\(y=3x\)`),
      P(R`Find the average rate of change of \(f(x)=-5x^{2}-7x-2\) on \([3,4]\).`, [
        R`\(f(4)=-110\), \(f(3)=-68\).`,
        R`\(\dfrac{-110-(-68)}{4-3}\).`,
      ], R`\(-42\)`),
      P(R`Evaluate \(\displaystyle\lim_{h\to0}\frac{(2+h)^{2}-4}{h}\) by recognizing it as a derivative.`, [
        R`It's \(f'(a)\) for \(f(x)=x^{2}\) at \(a=2\) (check: \(2^{2}=4\)).`,
        R`\(f'(x)=2x\), so \(f'(2)=4\).`,
      ], R`\(4\)`),
      P(R`Find the tangent line to \(y=\sqrt x\) at \(x=81\).`, [
        R`Point: \((81,9)\).`,
        R`\(y'=\dfrac{1}{2\sqrt x}=\dfrac{1}{18}\).`,
        R`\(y-9=\dfrac{1}{18}(x-81)\).`,
      ], R`\(y=\tfrac{1}{18}x+\tfrac{9}{2}\)`),
      P(R`Find the tangent line to \(y=\dfrac{-6}{x}\) at \(x=-4\).`, [
        R`Point: \(\left(-4,\dfrac{3}{2}\right)\).`,
        R`\(y'=-\dfrac{-6}{x^2}\) &rArr; slope \(\dfrac{3}{8}\).`,
        R`Point-slope, then simplify.`,
      ], R`\(y=\tfrac{3}{8}x+3\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=x^{2}-4x-9\).`, [
        R`\(f(x+h)=(x+h)^2-4(x+h)-9\).`,
        R`Expand and subtract \(f(x)\): \(f(x+h)-f(x)=2xh+h^2-4h\).`,
        R`Divide by \(h\): \(2x+h-4\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=2x-4\)`),
      P(R`Find the tangent line to \(y=3x^{2}-x\) at \(x=-1\).`, [
        R`Point: \((-1,4)\).`,
        R`\(y'=6x-1\), slope \(m=-7\).`,
        R`\(y-4=-7(x-(-1))\).`,
      ], R`\(y=-7x-3\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=-6x-8\).`, [
        R`\(f(x+h)-f(x)=-6(x+h)-8-(-6x-8)=-6h\).`,
        R`Divide by \(h\): \(-6\). No \(h\) left, so that's the limit.`,
      ], R`\(f'(x)=-6\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\dfrac{-2}{x-3}\).`, [
        R`\(\dfrac{1}{h}\left[\dfrac{-2}{x+h-3}-\dfrac{-2}{x-3}\right]\).`,
        R`Common denominator: top becomes \(-2(x-3)-(-2)(x+h-3)=2h\).`,
        R`Divide by \(h\): \(\dfrac{2}{(x-3)(x+h-3)}\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=\dfrac{2}{(x-3)^2}\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\sqrt{x+7}\).`, [
        R`\(\dfrac{\sqrt{x+h+7}-\sqrt{x+7}}{h}\); multiply by the conjugate.`,
        R`Top becomes \((x+h+7)-(x+7)=h\): \(\dfrac{1}{\sqrt{x+h+7}+\sqrt{x+7}}\).`,
        R`\(h\to0\): \(\dfrac{1}{2\sqrt{x+7}}\).`,
      ], R`\(f'(x)=\dfrac{1}{2\sqrt{x+7}}\)`),
      P(R`Find the tangent line to \(y=x^{3}+4x-2\) at \(x=-1\).`, [
        R`Point: \(y(-1)=-7\).`,
        R`\(y'=3x^{2}+4\), slope \(=7\).`,
        R`\(y-(-7)=7(x-(-1))\).`,
      ], R`\(y=7x\)`),
      P(R`Find the average rate of change of \(f(x)=4x^{2}-9x-7\) on \([0,5]\).`, [
        R`\(f(5)=48\), \(f(0)=-7\).`,
        R`\(\dfrac{48-(-7)}{5-0}\).`,
      ], R`\(11\)`),
      P(R`Evaluate \(\displaystyle\lim_{h\to0}\frac{(3+h)^{2}-9}{h}\) by recognizing it as a derivative.`, [
        R`It's \(f'(a)\) for \(f(x)=x^{2}\) at \(a=3\) (check: \(3^{2}=9\)).`,
        R`\(f'(x)=2x\), so \(f'(3)=6\).`,
      ], R`\(6\)`),
      P(R`Find the tangent line to \(y=\sqrt x\) at \(x=121\).`, [
        R`Point: \((121,11)\).`,
        R`\(y'=\dfrac{1}{2\sqrt x}=\dfrac{1}{22}\).`,
        R`\(y-11=\dfrac{1}{22}(x-121)\).`,
      ], R`\(y=\tfrac{1}{22}x+\tfrac{11}{2}\)`),
      P(R`Find the tangent line to \(y=\dfrac{-8}{x}\) at \(x=1\).`, [
        R`Point: \(\left(1,-8\right)\).`,
        R`\(y'=-\dfrac{-8}{x^2}\) &rArr; slope \(8\).`,
        R`Point-slope, then simplify.`,
      ], R`\(y=8x-16\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=-2x^{2}+2x+6\).`, [
        R`\(f(x+h)=-2(x+h)^2+2(x+h)+6\).`,
        R`Expand and subtract \(f(x)\): \(f(x+h)-f(x)=-4xh-2h^2+2h\).`,
        R`Divide by \(h\): \(-4x-2h+2\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=-4x+2\)`),
      P(R`Find the tangent line to \(y=-4x^{2}+8x+6\) at \(x=-4\).`, [
        R`Point: \((-4,-90)\).`,
        R`\(y'=-8x+8\), slope \(m=40\).`,
        R`\(y-(-90)=40(x-(-4))\).`,
      ], R`\(y=40x+70\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=-11x-3\).`, [
        R`\(f(x+h)-f(x)=-11(x+h)-3-(-11x-3)=-11h\).`,
        R`Divide by \(h\): \(-11\). No \(h\) left, so that's the limit.`,
      ], R`\(f'(x)=-11\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\dfrac{1}{x-5}\).`, [
        R`\(\dfrac{1}{h}\left[\dfrac{1}{x+h-5}-\dfrac{1}{x-5}\right]\).`,
        R`Common denominator: top becomes \(1(x-5)-1(x+h-5)=-h\).`,
        R`Divide by \(h\): \(\dfrac{-1}{(x-5)(x+h-5)}\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=\dfrac{-1}{(x-5)^2}\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\sqrt{x+9}\).`, [
        R`\(\dfrac{\sqrt{x+h+9}-\sqrt{x+9}}{h}\); multiply by the conjugate.`,
        R`Top becomes \((x+h+9)-(x+9)=h\): \(\dfrac{1}{\sqrt{x+h+9}+\sqrt{x+9}}\).`,
        R`\(h\to0\): \(\dfrac{1}{2\sqrt{x+9}}\).`,
      ], R`\(f'(x)=\dfrac{1}{2\sqrt{x+9}}\)`),
      P(R`Find the tangent line to \(y=x^{3}+4x-2\) at \(x=1\).`, [
        R`Point: \(y(1)=3\).`,
        R`\(y'=3x^{2}+4\), slope \(=7\).`,
        R`\(y-3=7(x-1)\).`,
      ], R`\(y=7x-4\)`),
      P(R`Find the average rate of change of \(f(x)=3x^{2}+8x-8\) on \([-1,2]\).`, [
        R`\(f(2)=20\), \(f(-1)=-13\).`,
        R`\(\dfrac{20-(-13)}{2-(-1)}\).`,
      ], R`\(11\)`),
      P(R`Evaluate \(\displaystyle\lim_{h\to0}\frac{(1+h)^{2}-1}{h}\) by recognizing it as a derivative.`, [
        R`It's \(f'(a)\) for \(f(x)=x^{2}\) at \(a=1\) (check: \(1^{2}=1\)).`,
        R`\(f'(x)=2x\), so \(f'(1)=2\).`,
      ], R`\(2\)`),
      P(R`Find the tangent line to \(y=\dfrac{-1}{x}\) at \(x=-1\).`, [
        R`Point: \(\left(-1,1\right)\).`,
        R`\(y'=-\dfrac{-1}{x^2}\) &rArr; slope \(1\).`,
        R`Point-slope, then simplify.`,
      ], R`\(y=x+2\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=5x^{2}+7x+5\).`, [
        R`\(f(x+h)=5(x+h)^2+7(x+h)+5\).`,
        R`Expand and subtract \(f(x)\): \(f(x+h)-f(x)=10xh+5h^2+7h\).`,
        R`Divide by \(h\): \(10x+5h+7\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=10x+7\)`),
      P(R`Find the tangent line to \(y=2x^{2}-2x+2\) at \(x=4\).`, [
        R`Point: \((4,26)\).`,
        R`\(y'=4x-2\), slope \(m=14\).`,
        R`\(y-26=14(x-4)\).`,
      ], R`\(y=14x-30\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=-6x\).`, [
        R`\(f(x+h)-f(x)=-6(x+h)-(-6x)=-6h\).`,
        R`Divide by \(h\): \(-6\). No \(h\) left, so that's the limit.`,
      ], R`\(f'(x)=-6\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\dfrac{9}{x+4}\).`, [
        R`\(\dfrac{1}{h}\left[\dfrac{9}{x+h+4}-\dfrac{9}{x+4}\right]\).`,
        R`Common denominator: top becomes \(9(x+4)-9(x+h+4)=-9h\).`,
        R`Divide by \(h\): \(\dfrac{-9}{(x+4)(x+h+4)}\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=\dfrac{-9}{(x+4)^2}\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\sqrt{x}\).`, [
        R`\(\dfrac{\sqrt{x+h}-\sqrt{x}}{h}\); multiply by the conjugate.`,
        R`Top becomes \((x+h)-(x)=h\): \(\dfrac{1}{\sqrt{x+h}+\sqrt{x}}\).`,
        R`\(h\to0\): \(\dfrac{1}{2\sqrt{x}}\).`,
      ], R`\(f'(x)=\dfrac{1}{2\sqrt{x}}\)`),
      P(R`Find the tangent line to \(y=x^{3}+2x-8\) at \(x=3\).`, [
        R`Point: \(y(3)=25\).`,
        R`\(y'=3x^{2}+2\), slope \(=29\).`,
        R`\(y-25=29(x-3)\).`,
      ], R`\(y=29x-62\)`),
      P(R`Find the average rate of change of \(f(x)=3x^{2}-7x-1\) on \([3,5]\).`, [
        R`\(f(5)=39\), \(f(3)=5\).`,
        R`\(\dfrac{39-5}{5-3}\).`,
      ], R`\(17\)`),
      P(R`Evaluate \(\displaystyle\lim_{h\to0}\frac{(3+h)^{4}-81}{h}\) by recognizing it as a derivative.`, [
        R`It's \(f'(a)\) for \(f(x)=x^{4}\) at \(a=3\) (check: \(3^{4}=81\)).`,
        R`\(f'(x)=4x^{3}\), so \(f'(3)=108\).`,
      ], R`\(108\)`),
      P(R`Find the tangent line to \(y=\sqrt x\) at \(x=36\).`, [
        R`Point: \((36,6)\).`,
        R`\(y'=\dfrac{1}{2\sqrt x}=\dfrac{1}{12}\).`,
        R`\(y-6=\dfrac{1}{12}(x-36)\).`,
      ], R`\(y=\tfrac{1}{12}x+3\)`),
      P(R`Find the tangent line to \(y=\dfrac{-7}{x}\) at \(x=4\).`, [
        R`Point: \(\left(4,-\dfrac{7}{4}\right)\).`,
        R`\(y'=-\dfrac{-7}{x^2}\) &rArr; slope \(\dfrac{7}{16}\).`,
        R`Point-slope, then simplify.`,
      ], R`\(y=\tfrac{7}{16}x-\tfrac{7}{2}\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=-2x^{2}+4x-7\).`, [
        R`\(f(x+h)=-2(x+h)^2+4(x+h)-7\).`,
        R`Expand and subtract \(f(x)\): \(f(x+h)-f(x)=-4xh-2h^2+4h\).`,
        R`Divide by \(h\): \(-4x-2h+4\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=-4x+4\)`),
      P(R`Find the tangent line to \(y=-3x^{2}+6x-2\) at \(x=1\).`, [
        R`Point: \((1,1)\).`,
        R`\(y'=-6x+6\), slope \(m=0\).`,
        R`\(y-1=0(x-1)\).`,
      ], R`\(y=1\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=x-4\).`, [
        R`\(f(x+h)-f(x)=(x+h)-4-(x-4)=h\).`,
        R`Divide by \(h\): \(1\). No \(h\) left, so that's the limit.`,
      ], R`\(f'(x)=1\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\dfrac{-9}{x+5}\).`, [
        R`\(\dfrac{1}{h}\left[\dfrac{-9}{x+h+5}-\dfrac{-9}{x+5}\right]\).`,
        R`Common denominator: top becomes \(-9(x+5)-(-9)(x+h+5)=9h\).`,
        R`Divide by \(h\): \(\dfrac{9}{(x+5)(x+h+5)}\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=\dfrac{9}{(x+5)^2}\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=\sqrt{x-1}\).`, [
        R`\(\dfrac{\sqrt{x+h-1}-\sqrt{x-1}}{h}\); multiply by the conjugate.`,
        R`Top becomes \((x+h-1)-(x-1)=h\): \(\dfrac{1}{\sqrt{x+h-1}+\sqrt{x-1}}\).`,
        R`\(h\to0\): \(\dfrac{1}{2\sqrt{x-1}}\).`,
      ], R`\(f'(x)=\dfrac{1}{2\sqrt{x-1}}\)`),
      P(R`Find the tangent line to \(y=x^{3}-x-4\) at \(x=3\).`, [
        R`Point: \(y(3)=20\).`,
        R`\(y'=3x^{2}-1\), slope \(=26\).`,
        R`\(y-20=26(x-3)\).`,
      ], R`\(y=26x-58\)`),
      P(R`Find the average rate of change of \(f(x)=5x^{2}-6\) on \([-1,1]\).`, [
        R`\(f(1)=-1\), \(f(-1)=-1\).`,
        R`\(\dfrac{-1-(-1)}{1-(-1)}\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{h\to0}\frac{(5+h)^{5}-3125}{h}\) by recognizing it as a derivative.`, [
        R`It's \(f'(a)\) for \(f(x)=x^{5}\) at \(a=5\) (check: \(5^{5}=3125\)).`,
        R`\(f'(x)=5x^{4}\), so \(f'(5)=3125\).`,
      ], R`\(3125\)`),
      P(R`Find the tangent line to \(y=\sqrt x\) at \(x=49\).`, [
        R`Point: \((49,7)\).`,
        R`\(y'=\dfrac{1}{2\sqrt x}=\dfrac{1}{14}\).`,
        R`\(y-7=\dfrac{1}{14}(x-49)\).`,
      ], R`\(y=\tfrac{1}{14}x+\tfrac{7}{2}\)`),
      P(R`Find the tangent line to \(y=\dfrac{-7}{x}\) at \(x=-1\).`, [
        R`Point: \(\left(-1,7\right)\).`,
        R`\(y'=-\dfrac{-7}{x^2}\) &rArr; slope \(7\).`,
        R`Point-slope, then simplify.`,
      ], R`\(y=7x+14\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=x^{2}-2x-1\).`, [
        R`\(f(x+h)=(x+h)^2-2(x+h)-1\).`,
        R`Expand and subtract \(f(x)\): \(f(x+h)-f(x)=2xh+h^2-2h\).`,
        R`Divide by \(h\): \(2x+h-2\).`,
        R`\(h\to0\).`,
      ], R`\(f'(x)=2x-2\)`),
      P(R`Find the tangent line to \(y=-x^{2}+2x+7\) at \(x=1\).`, [
        R`Point: \((1,8)\).`,
        R`\(y'=-2x+2\), slope \(m=0\).`,
        R`\(y-8=0(x-1)\).`,
      ], R`\(y=8\)`),
      P(R`Use the limit definition to find \(f'(x)\) for \(f(x)=-3x+2\).`, [
        R`\(f(x+h)-f(x)=-3(x+h)+2-(-3x+2)=-3h\).`,
        R`Divide by \(h\): \(-3\). No \(h\) left, so that's the limit.`,
      ], R`\(f'(x)=-3\)`),
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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`Differentiate \(f(x)=3x^{8}+8x^{3}+10x-12\).`, [
        R`Power rule term by term; the constant becomes 0.`,
      ], R`\(f'(x)=24x^{7}+24x^{2}+10\)`),
      P(R`Use the product rule on \(f(x)=(6x-6)(5x^{2}-5)\).`, [
        R`\(f'=6(5x^{2}-5)+(6x-6)(10x)\).`,
        R`Expand and combine.`,
      ], R`\(f'(x)=90x^{2}-60x-30\)`),
      P(R`Use the quotient rule on \(f(x)=\dfrac{-3x+4}{x+3}\).`, [
        R`\(f'=\dfrac{-3(x+3)-(-3x+4)(1)}{(x+3)^2}\).`,
        R`The \(x\) terms cancel on top: \(-9-4=-13\).`,
      ], R`\(f'(x)=\dfrac{-13}{(x+3)^2}\)`),
      P(R`Differentiate \(f(x)=2\sqrt x+\dfrac{6}{x}\).`, [
        R`Rewrite: \(2x^{1/2}+6x^{-1}\).`,
        R`Power rule: \(x^{-1/2}-6x^{-2}\).`,
      ], R`\(f'(x)=\dfrac{1}{\sqrt x}-\dfrac{6}{x^{2}}\)`),
      P(R`Differentiate \(f(x)=x^{2}\cos x\).`, [
        R`Product rule: \((x^{2})'=2x\), \((\cos x)'=-\sin x\).`,
        R`\(f'=2x\cdot \cos x+x^{2}\cdot(-\sin x)\).`,
      ], R`\(f'(x)=2x\cos x-x^{2}\sin x\)`),
      P(R`Differentiate \(f(x)=\dfrac{3x+2}{x^2+6}\).`, [
        R`\(f'=\dfrac{3(x^2+6)-(3x+2)(2x)}{(x^2+6)^2}\).`,
        R`Top: \(3x^{2}+18-(6x^{2}+4x)\).`,
      ], R`\(f'(x)=\dfrac{-3x^{2}-4x+18}{(x^2+6)^2}\)`),
      P(R`Find the points where \(y=x^{3}-48x-1\) has a horizontal tangent.`, [
        R`\(y'=3x^2-48=0\Rightarrow x^2=16\Rightarrow x=\pm4\).`,
        R`\(y(4)=-129\), \(y(-4)=127\).`,
      ], R`\((4,-129)\) and \((-4,127)\)`),
      P(R`Find \(f''(x)\) for \(f(x)=5x^{3}-6x^{2}+4x\).`, [
        R`\(f'(x)=15x^{2}-12x+4\).`,
        R`Differentiate again.`,
      ], R`\(f''(x)=30x-12\)`),
      P(R`If \(f(x)=4x^{3}-6x^{2}+x\), find \(f'(3)\).`, [
        R`\(f'(x)=12x^{2}-12x+1\).`,
        R`Plug in \(x=3\).`,
      ], R`\(73\)`),
      P(R`Differentiate \(f(x)=\dfrac{x^{2}}{e^x}\).`, [
        R`\(f'=\dfrac{2xe^x-x^{2}e^x}{(e^x)^2}\).`,
        R`Cancel one \(e^x\): \(\dfrac{2x-x^{2}}{e^x}\).`,
      ], R`\(f'(x)=\dfrac{x(2-x)}{e^x}\)`),
      P(R`Differentiate \(f(x)=3x^{4}+12x^{2}-10x+3\).`, [
        R`Power rule term by term; the constant becomes 0.`,
      ], R`\(f'(x)=12x^{3}+24x-10\)`),
      P(R`Use the product rule on \(f(x)=(2x+7)(-4x^{2}-7)\).`, [
        R`\(f'=2(-4x^{2}-7)+(2x+7)(-8x)\).`,
        R`Expand and combine.`,
      ], R`\(f'(x)=-24x^{2}-56x-14\)`),
      P(R`Use the quotient rule on \(f(x)=\dfrac{-4x-9}{5x+1}\).`, [
        R`\(f'=\dfrac{-4(5x+1)-(-4x-9)(5)}{(5x+1)^2}\).`,
        R`The \(x\) terms cancel on top: \(-4-(-45)=41\).`,
      ], R`\(f'(x)=\dfrac{41}{(5x+1)^2}\)`),
      P(R`Differentiate \(f(x)=-8\sqrt x-\dfrac{4}{x^{2}}\).`, [
        R`Rewrite: \(-8x^{1/2}-4x^{-2}\).`,
        R`Power rule: \(-4x^{-1/2}+8x^{-3}\).`,
      ], R`\(f'(x)=-\dfrac{4}{\sqrt x}+\dfrac{8}{x^{3}}\)`),
      P(R`Differentiate \(f(x)=x^{5}\sin x\).`, [
        R`Product rule: \((x^{5})'=5x^{4}\), \((\sin x)'=\cos x\).`,
        R`\(f'=5x^{4}\cdot \sin x+x^{5}\cdot\cos x\).`,
      ], R`\(f'(x)=5x^{4}\sin x+x^{5}\cos x\)`),
      P(R`Differentiate \(f(x)=\dfrac{3x+8}{x^2+3}\).`, [
        R`\(f'=\dfrac{3(x^2+3)-(3x+8)(2x)}{(x^2+3)^2}\).`,
        R`Top: \(3x^{2}+9-(6x^{2}+16x)\).`,
      ], R`\(f'(x)=\dfrac{-3x^{2}-16x+9}{(x^2+3)^2}\)`),
      P(R`Find the points where \(y=x^{3}-48x+8\) has a horizontal tangent.`, [
        R`\(y'=3x^2-48=0\Rightarrow x^2=16\Rightarrow x=\pm4\).`,
        R`\(y(4)=-120\), \(y(-4)=136\).`,
      ], R`\((4,-120)\) and \((-4,136)\)`),
      P(R`Find \(f''(x)\) for \(f(x)=4x^{6}+x^{5}+6x\).`, [
        R`\(f'(x)=24x^{5}+5x^{4}+6\).`,
        R`Differentiate again.`,
      ], R`\(f''(x)=120x^{4}+20x^{3}\)`),
      P(R`If \(f(x)=4x^{3}-x^{2}-4x\), find \(f'(1)\).`, [
        R`\(f'(x)=12x^{2}-2x-4\).`,
        R`Plug in \(x=1\).`,
      ], R`\(6\)`),
      P(R`Differentiate \(f(x)=\dfrac{x^{7}}{e^x}\).`, [
        R`\(f'=\dfrac{7x^{6}e^x-x^{7}e^x}{(e^x)^2}\).`,
        R`Cancel one \(e^x\): \(\dfrac{7x^{6}-x^{7}}{e^x}\).`,
      ], R`\(f'(x)=\dfrac{x^{6}(7-x)}{e^x}\)`),
      P(R`Differentiate \(f(x)=-8x^{5}+8x^{2}+9x+4\).`, [
        R`Power rule term by term; the constant becomes 0.`,
      ], R`\(f'(x)=-40x^{4}+16x+9\)`),
      P(R`Use the product rule on \(f(x)=(-5x+8)(-4x^{2}+8)\).`, [
        R`\(f'=-5(-4x^{2}+8)+(-5x+8)(-8x)\).`,
        R`Expand and combine.`,
      ], R`\(f'(x)=60x^{2}-64x-40\)`),
      P(R`Use the quotient rule on \(f(x)=\dfrac{5x+8}{5x-3}\).`, [
        R`\(f'=\dfrac{5(5x-3)-(5x+8)(5)}{(5x-3)^2}\).`,
        R`The \(x\) terms cancel on top: \(-15-40=-55\).`,
      ], R`\(f'(x)=\dfrac{-55}{(5x-3)^2}\)`),
      P(R`Differentiate \(f(x)=6\sqrt x-\dfrac{8}{x^{4}}\).`, [
        R`Rewrite: \(6x^{1/2}-8x^{-4}\).`,
        R`Power rule: \(3x^{-1/2}+32x^{-5}\).`,
      ], R`\(f'(x)=\dfrac{3}{\sqrt x}+\dfrac{32}{x^{5}}\)`),
      P(R`Differentiate \(f(x)=x^{4}\sin x\).`, [
        R`Product rule: \((x^{4})'=4x^{3}\), \((\sin x)'=\cos x\).`,
        R`\(f'=4x^{3}\cdot \sin x+x^{4}\cdot\cos x\).`,
      ], R`\(f'(x)=4x^{3}\sin x+x^{4}\cos x\)`),
      P(R`Differentiate \(f(x)=\dfrac{-x-1}{x^2+3}\).`, [
        R`\(f'=\dfrac{-1(x^2+3)-(-x-1)(2x)}{(x^2+3)^2}\).`,
        R`Top: \(-x^{2}-3-(-2x^{2}-2x)\).`,
      ], R`\(f'(x)=\dfrac{x^{2}+2x-3}{(x^2+3)^2}\)`),
      P(R`Find the points where \(y=x^{3}-75x-4\) has a horizontal tangent.`, [
        R`\(y'=3x^2-75=0\Rightarrow x^2=25\Rightarrow x=\pm5\).`,
        R`\(y(5)=-254\), \(y(-5)=246\).`,
      ], R`\((5,-254)\) and \((-5,246)\)`),
      P(R`Find \(f''(x)\) for \(f(x)=x^{5}+8x^{2}+3x\).`, [
        R`\(f'(x)=5x^{4}+16x+3\).`,
        R`Differentiate again.`,
      ], R`\(f''(x)=20x^{3}+16\)`),
      P(R`If \(f(x)=4x^{4}-5x^{2}-8x\), find \(f'(-3)\).`, [
        R`\(f'(x)=16x^{3}-10x-8\).`,
        R`Plug in \(x=-3\).`,
      ], R`\(-410\)`),
      P(R`Differentiate \(f(x)=\dfrac{x^{5}}{e^x}\).`, [
        R`\(f'=\dfrac{5x^{4}e^x-x^{5}e^x}{(e^x)^2}\).`,
        R`Cancel one \(e^x\): \(\dfrac{5x^{4}-x^{5}}{e^x}\).`,
      ], R`\(f'(x)=\dfrac{x^{4}(5-x)}{e^x}\)`),
      P(R`Differentiate \(f(x)=-3x^{9}+x^{2}-5x-5\).`, [
        R`Power rule term by term; the constant becomes 0.`,
      ], R`\(f'(x)=-27x^{8}+2x-5\)`),
      P(R`Use the product rule on \(f(x)=(x+4)(-4x^{2}-6)\).`, [
        R`\(f'=1(-4x^{2}-6)+(x+4)(-8x)\).`,
        R`Expand and combine.`,
      ], R`\(f'(x)=-12x^{2}-32x-6\)`),
      P(R`Use the quotient rule on \(f(x)=\dfrac{-4x-5}{x-1}\).`, [
        R`\(f'=\dfrac{-4(x-1)-(-4x-5)(1)}{(x-1)^2}\).`,
        R`The \(x\) terms cancel on top: \(4-(-5)=9\).`,
      ], R`\(f'(x)=\dfrac{9}{(x-1)^2}\)`),
      P(R`Differentiate \(f(x)=-\sqrt x+\dfrac{3}{x^{3}}\).`, [
        R`Rewrite: \(-x^{1/2}+3x^{-3}\).`,
        R`Power rule: \(-\tfrac{1}{2}x^{-1/2}-9x^{-4}\).`,
      ], R`\(f'(x)=-\dfrac{1}{2\sqrt x}-\dfrac{9}{x^{4}}\)`),
      P(R`Differentiate \(f(x)=x^{6}\cos x\).`, [
        R`Product rule: \((x^{6})'=6x^{5}\), \((\cos x)'=-\sin x\).`,
        R`\(f'=6x^{5}\cdot \cos x+x^{6}\cdot(-\sin x)\).`,
      ], R`\(f'(x)=6x^{5}\cos x-x^{6}\sin x\)`),
      P(R`Differentiate \(f(x)=\dfrac{-5x+1}{x^2+5}\).`, [
        R`\(f'=\dfrac{-5(x^2+5)-(-5x+1)(2x)}{(x^2+5)^2}\).`,
        R`Top: \(-5x^{2}-25-(-10x^{2}+2x)\).`,
      ], R`\(f'(x)=\dfrac{5x^{2}-2x-25}{(x^2+5)^2}\)`),
      P(R`Find the points where \(y=x^{3}-27x+6\) has a horizontal tangent.`, [
        R`\(y'=3x^2-27=0\Rightarrow x^2=9\Rightarrow x=\pm3\).`,
        R`\(y(3)=-48\), \(y(-3)=60\).`,
      ], R`\((3,-48)\) and \((-3,60)\)`),
      P(R`Find \(f''(x)\) for \(f(x)=-x^{7}-8x^{6}+x\).`, [
        R`\(f'(x)=-7x^{6}-48x^{5}+1\).`,
        R`Differentiate again.`,
      ], R`\(f''(x)=-42x^{5}-240x^{4}\)`),
      P(R`If \(f(x)=2x^{4}-3x^{2}+3x\), find \(f'(3)\).`, [
        R`\(f'(x)=8x^{3}-6x+3\).`,
        R`Plug in \(x=3\).`,
      ], R`\(201\)`),
      P(R`Differentiate \(f(x)=\dfrac{x^{6}}{e^x}\).`, [
        R`\(f'=\dfrac{6x^{5}e^x-x^{6}e^x}{(e^x)^2}\).`,
        R`Cancel one \(e^x\): \(\dfrac{6x^{5}-x^{6}}{e^x}\).`,
      ], R`\(f'(x)=\dfrac{x^{5}(6-x)}{e^x}\)`),
      P(R`Differentiate \(f(x)=-2x^{4}+4x^{2}+4x-4\).`, [
        R`Power rule term by term; the constant becomes 0.`,
      ], R`\(f'(x)=-8x^{3}+8x+4\)`),
      P(R`Use the product rule on \(f(x)=(-x-7)(-x^{2}+6)\).`, [
        R`\(f'=-1(-x^{2}+6)+(-x-7)(-2x)\).`,
        R`Expand and combine.`,
      ], R`\(f'(x)=3x^{2}+14x-6\)`),
      P(R`Use the quotient rule on \(f(x)=\dfrac{-3x+5}{2x-2}\).`, [
        R`\(f'=\dfrac{-3(2x-2)-(-3x+5)(2)}{(2x-2)^2}\).`,
        R`The \(x\) terms cancel on top: \(6-10=-4\).`,
      ], R`\(f'(x)=\dfrac{-4}{(2x-2)^2}\)`),
      P(R`Differentiate \(f(x)=-5\sqrt x-\dfrac{1}{x^{3}}\).`, [
        R`Rewrite: \(-5x^{1/2}-x^{-3}\).`,
        R`Power rule: \(-\tfrac{5}{2}x^{-1/2}+3x^{-4}\).`,
      ], R`\(f'(x)=-\dfrac{5}{2\sqrt x}+\dfrac{3}{x^{4}}\)`),
      P(R`Differentiate \(f(x)=x^{3}\ln x\).`, [
        R`Product rule: \((x^{3})'=3x^{2}\), \((\ln x)'=\tfrac1x\).`,
        R`\(f'=3x^{2}\cdot \ln x+x^{3}\cdot\tfrac1x\).`,
      ], R`\(f'(x)=3x^{2}\ln x+x^{2}\)`),
      P(R`Differentiate \(f(x)=\dfrac{6x-9}{x^2+5}\).`, [
        R`\(f'=\dfrac{6(x^2+5)-(6x-9)(2x)}{(x^2+5)^2}\).`,
        R`Top: \(6x^{2}+30-(12x^{2}-18x)\).`,
      ], R`\(f'(x)=\dfrac{-6x^{2}+18x+30}{(x^2+5)^2}\)`),
      P(R`Find the points where \(y=x^{3}-27x+2\) has a horizontal tangent.`, [
        R`\(y'=3x^2-27=0\Rightarrow x^2=9\Rightarrow x=\pm3\).`,
        R`\(y(3)=-52\), \(y(-3)=56\).`,
      ], R`\((3,-52)\) and \((-3,56)\)`),
      P(R`Find \(f''(x)\) for \(f(x)=6x^{3}-6x^{2}-6x\).`, [
        R`\(f'(x)=18x^{2}-12x-6\).`,
        R`Differentiate again.`,
      ], R`\(f''(x)=36x-12\)`),
      P(R`If \(f(x)=5x^{3}+x^{2}+9x\), find \(f'(-1)\).`, [
        R`\(f'(x)=15x^{2}+2x+9\).`,
        R`Plug in \(x=-1\).`,
      ], R`\(22\)`),
      P(R`Differentiate \(f(x)=\dfrac{x^{3}}{e^x}\).`, [
        R`\(f'=\dfrac{3x^{2}e^x-x^{3}e^x}{(e^x)^2}\).`,
        R`Cancel one \(e^x\): \(\dfrac{3x^{2}-x^{3}}{e^x}\).`,
      ], R`\(f'(x)=\dfrac{x^{2}(3-x)}{e^x}\)`),
      P(R`Differentiate \(f(x)=-8x^{8}-2x^{2}+2x+2\).`, [
        R`Power rule term by term; the constant becomes 0.`,
      ], R`\(f'(x)=-64x^{7}-4x+2\)`),
      P(R`Use the product rule on \(f(x)=(-x-7)(5x^{2}-5)\).`, [
        R`\(f'=-1(5x^{2}-5)+(-x-7)(10x)\).`,
        R`Expand and combine.`,
      ], R`\(f'(x)=-15x^{2}-70x+5\)`),
      P(R`Use the quotient rule on \(f(x)=\dfrac{2x+4}{5x+8}\).`, [
        R`\(f'=\dfrac{2(5x+8)-(2x+4)(5)}{(5x+8)^2}\).`,
        R`The \(x\) terms cancel on top: \(16-20=-4\).`,
      ], R`\(f'(x)=\dfrac{-4}{(5x+8)^2}\)`),
      P(R`Differentiate \(f(x)=2\sqrt x+\dfrac{2}{x^{4}}\).`, [
        R`Rewrite: \(2x^{1/2}+2x^{-4}\).`,
        R`Power rule: \(x^{-1/2}-8x^{-5}\).`,
      ], R`\(f'(x)=\dfrac{1}{\sqrt x}-\dfrac{8}{x^{5}}\)`),
      P(R`Differentiate \(f(x)=x^{6}\ln x\).`, [
        R`Product rule: \((x^{6})'=6x^{5}\), \((\ln x)'=\tfrac1x\).`,
        R`\(f'=6x^{5}\cdot \ln x+x^{6}\cdot\tfrac1x\).`,
      ], R`\(f'(x)=6x^{5}\ln x+x^{5}\)`),
      P(R`Differentiate \(f(x)=\dfrac{-5x+2}{x^2+7}\).`, [
        R`\(f'=\dfrac{-5(x^2+7)-(-5x+2)(2x)}{(x^2+7)^2}\).`,
        R`Top: \(-5x^{2}-35-(-10x^{2}+4x)\).`,
      ], R`\(f'(x)=\dfrac{5x^{2}-4x-35}{(x^2+7)^2}\)`),
      P(R`Find the points where \(y=x^{3}-3x-9\) has a horizontal tangent.`, [
        R`\(y'=3x^2-3=0\Rightarrow x^2=1\Rightarrow x=\pm1\).`,
        R`\(y(1)=-11\), \(y(-1)=-7\).`,
      ], R`\((1,-11)\) and \((-1,-7)\)`),
      P(R`Find \(f''(x)\) for \(f(x)=-7x^{3}-x^{2}-8x\).`, [
        R`\(f'(x)=-21x^{2}-2x-8\).`,
        R`Differentiate again.`,
      ], R`\(f''(x)=-42x-2\)`),
      P(R`If \(f(x)=2x^{3}-3x^{2}-8x\), find \(f'(1)\).`, [
        R`\(f'(x)=6x^{2}-6x-8\).`,
        R`Plug in \(x=1\).`,
      ], R`\(-8\)`),
      P(R`Differentiate \(f(x)=-2x^{7}+11x^{3}+12x+1\).`, [
        R`Power rule term by term; the constant becomes 0.`,
      ], R`\(f'(x)=-14x^{6}+33x^{2}+12\)`),
      P(R`Use the product rule on \(f(x)=(6x+7)(-5x^{2}+5)\).`, [
        R`\(f'=6(-5x^{2}+5)+(6x+7)(-10x)\).`,
        R`Expand and combine.`,
      ], R`\(f'(x)=-90x^{2}-70x+30\)`),
      P(R`Use the quotient rule on \(f(x)=\dfrac{-5x+9}{4x+4}\).`, [
        R`\(f'=\dfrac{-5(4x+4)-(-5x+9)(4)}{(4x+4)^2}\).`,
        R`The \(x\) terms cancel on top: \(-20-36=-56\).`,
      ], R`\(f'(x)=\dfrac{-56}{(4x+4)^2}\)`),
      P(R`Differentiate \(f(x)=8\sqrt x+\dfrac{9}{x^{2}}\).`, [
        R`Rewrite: \(8x^{1/2}+9x^{-2}\).`,
        R`Power rule: \(4x^{-1/2}-18x^{-3}\).`,
      ], R`\(f'(x)=\dfrac{4}{\sqrt x}-\dfrac{18}{x^{3}}\)`),
      P(R`Differentiate \(f(x)=x^{6}e^x\).`, [
        R`Product rule: \((x^{6})'=6x^{5}\), \((e^x)'=e^x\).`,
        R`\(f'=6x^{5}\cdot e^x+x^{6}\cdote^x\).`,
      ], R`\(f'(x)=6x^{5}e^x+x^{6}e^x\)`),
      P(R`Differentiate \(f(x)=\dfrac{-3x+9}{x^2+3}\).`, [
        R`\(f'=\dfrac{-3(x^2+3)-(-3x+9)(2x)}{(x^2+3)^2}\).`,
        R`Top: \(-3x^{2}-9-(-6x^{2}+18x)\).`,
      ], R`\(f'(x)=\dfrac{3x^{2}-18x-9}{(x^2+3)^2}\)`),
      P(R`Find the points where \(y=x^{3}-3x-7\) has a horizontal tangent.`, [
        R`\(y'=3x^2-3=0\Rightarrow x^2=1\Rightarrow x=\pm1\).`,
        R`\(y(1)=-9\), \(y(-1)=-5\).`,
      ], R`\((1,-9)\) and \((-1,-5)\)`),
      P(R`Find \(f''(x)\) for \(f(x)=-4x^{3}+3x^{2}+3x\).`, [
        R`\(f'(x)=-12x^{2}+6x+3\).`,
        R`Differentiate again.`,
      ], R`\(f''(x)=-24x+6\)`),
      P(R`If \(f(x)=2x^{3}-4x^{2}-6x\), find \(f'(3)\).`, [
        R`\(f'(x)=6x^{2}-8x-6\).`,
        R`Plug in \(x=3\).`,
      ], R`\(24\)`),
      P(R`Differentiate \(f(x)=11x^{4}+10x^{3}-9x-3\).`, [
        R`Power rule term by term; the constant becomes 0.`,
      ], R`\(f'(x)=44x^{3}+30x^{2}-9\)`),
      P(R`Use the product rule on \(f(x)=(2x-5)(-5x^{2}-3)\).`, [
        R`\(f'=2(-5x^{2}-3)+(2x-5)(-10x)\).`,
        R`Expand and combine.`,
      ], R`\(f'(x)=-30x^{2}+50x-6\)`),
      P(R`Use the quotient rule on \(f(x)=\dfrac{5x-3}{3x-2}\).`, [
        R`\(f'=\dfrac{5(3x-2)-(5x-3)(3)}{(3x-2)^2}\).`,
        R`The \(x\) terms cancel on top: \(-10-(-9)=-1\).`,
      ], R`\(f'(x)=\dfrac{-1}{(3x-2)^2}\)`),
      P(R`Differentiate \(f(x)=-5\sqrt x-\dfrac{3}{x^{3}}\).`, [
        R`Rewrite: \(-5x^{1/2}-3x^{-3}\).`,
        R`Power rule: \(-\tfrac{5}{2}x^{-1/2}+9x^{-4}\).`,
      ], R`\(f'(x)=-\dfrac{5}{2\sqrt x}+\dfrac{9}{x^{4}}\)`),
      P(R`Differentiate \(f(x)=\dfrac{-5x+3}{x^2+2}\).`, [
        R`\(f'=\dfrac{-5(x^2+2)-(-5x+3)(2x)}{(x^2+2)^2}\).`,
        R`Top: \(-5x^{2}-10-(-10x^{2}+6x)\).`,
      ], R`\(f'(x)=\dfrac{5x^{2}-6x-10}{(x^2+2)^2}\)`),
      P(R`Find the points where \(y=x^{3}-3x+5\) has a horizontal tangent.`, [
        R`\(y'=3x^2-3=0\Rightarrow x^2=1\Rightarrow x=\pm1\).`,
        R`\(y(1)=3\), \(y(-1)=7\).`,
      ], R`\((1,3)\) and \((-1,7)\)`),
      P(R`Find \(f''(x)\) for \(f(x)=8x^{3}+7x^{2}-4x\).`, [
        R`\(f'(x)=24x^{2}+14x-4\).`,
        R`Differentiate again.`,
      ], R`\(f''(x)=48x+14\)`),
      P(R`If \(f(x)=-x^{4}+5x^{2}-x\), find \(f'(-2)\).`, [
        R`\(f'(x)=-4x^{3}+10x-1\).`,
        R`Plug in \(x=-2\).`,
      ], R`\(11\)`),
      P(R`Differentiate \(f(x)=6x^{8}-12x^{2}+4x+7\).`, [
        R`Power rule term by term; the constant becomes 0.`,
      ], R`\(f'(x)=48x^{7}-24x+4\)`),
      P(R`Use the product rule on \(f(x)=(5x-3)(2x^{2}+5)\).`, [
        R`\(f'=5(2x^{2}+5)+(5x-3)(4x)\).`,
        R`Expand and combine.`,
      ], R`\(f'(x)=30x^{2}-12x+25\)`),
      P(R`Use the quotient rule on \(f(x)=\dfrac{5x-1}{6x+4}\).`, [
        R`\(f'=\dfrac{5(6x+4)-(5x-1)(6)}{(6x+4)^2}\).`,
        R`The \(x\) terms cancel on top: \(20-(-6)=26\).`,
      ], R`\(f'(x)=\dfrac{26}{(6x+4)^2}\)`),
      P(R`Differentiate \(f(x)=-9\sqrt x-\dfrac{2}{x^{3}}\).`, [
        R`Rewrite: \(-9x^{1/2}-2x^{-3}\).`,
        R`Power rule: \(-\tfrac{9}{2}x^{-1/2}+6x^{-4}\).`,
      ], R`\(f'(x)=-\dfrac{9}{2\sqrt x}+\dfrac{6}{x^{4}}\)`),
      P(R`Differentiate \(f(x)=\dfrac{-x-7}{x^2+4}\).`, [
        R`\(f'=\dfrac{-1(x^2+4)-(-x-7)(2x)}{(x^2+4)^2}\).`,
        R`Top: \(-x^{2}-4-(-2x^{2}-14x)\).`,
      ], R`\(f'(x)=\dfrac{x^{2}+14x-4}{(x^2+4)^2}\)`),
      P(R`Find the points where \(y=x^{3}-3x+4\) has a horizontal tangent.`, [
        R`\(y'=3x^2-3=0\Rightarrow x^2=1\Rightarrow x=\pm1\).`,
        R`\(y(1)=2\), \(y(-1)=6\).`,
      ], R`\((1,2)\) and \((-1,6)\)`),
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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`Differentiate \(f(x)=(-7x-6)^{11}\).`, [
        R`Outside: \(11(-7x-6)^{10}\); inside derivative \(-7\).`,
      ], R`\(f'(x)=-77(-7x-6)^{10}\)`),
      P(R`Differentiate \(f(x)=\sin(9x^{5})\).`, [
        R`Outside: \(\cos(9x^{5})\). Inside: \(45x^{4}\).`,
      ], R`\(f'(x)=45x^{4}\cos(9x^{5})\)`),
      P(R`Differentiate \(f(x)=e^{-4x^{2}+1}\).`, [
        R`\(e^u\cdot u'\) with \(u'=-8x\).`,
      ], R`\(f'(x)=-8x\,e^{-4x^{2}+1}\)`),
      P(R`Differentiate \(f(x)=\ln(3x^{2}+11)\).`, [
        R`\(\dfrac{u'}{u}\) with \(u'=6x\).`,
      ], R`\(f'(x)=\dfrac{6x}{3x^{2}+11}\)`),
      P(R`Differentiate \(f(x)=\sqrt{9x+7}\).`, [
        R`\((9x+7)^{1/2}\to\tfrac12(9x+7)^{-1/2}\cdot9\).`,
      ], R`\(f'(x)=\dfrac{9}{2\sqrt{9x+7}}\)`),
      P(R`Differentiate \(f(x)=\tan(5x+9)\).`, [
        R`\(\sec^2(5x+9)\) times inside derivative \(5\).`,
      ], R`\(f'(x)=5\sec^2(5x+9)\)`),
      P(R`Differentiate \(f(x)=\sin^{6}x\).`, [
        R`Rewrite as \((\sin x)^{6}\).`,
        R`\(6(\sin x)^{5}\) times \(\cos x\).`,
      ], R`\(f'(x)=6\sin^{5}x\cos x\)`),
      P(R`Differentiate \(f(x)=e^{4x}\sin(5x)\).`, [
        R`Product rule: \((e^{4x})'=4e^{4x}\), \((\sin 5x)'=5\cos(5x)\).`,
        R`\(f'=4e^{4x}\sin(5x)+5e^{4x}\cos(5x)\).`,
      ], R`\(f'(x)=e^{4x}\big(4\sin(5x)+5\cos(5x)\big)\)`),
      P(R`Differentiate \(f(x)=(x^2-6)^{2}\).`, [
        R`\(2(x^2-6)^{1}\cdot2x\).`,
      ], R`\(f'(x)=4x(x^2-6)^{1}\)`),
      P(R`Differentiate \(f(x)=9^{-5x}\).`, [
        R`\(\dfrac{d}{dx}a^u=a^u\ln a\cdot u'\) with \(u'=-5\).`,
      ], R`\(f'(x)=-5(\ln 9)\,9^{-5x}\)`),
      P(R`Differentiate \(f(x)=\ln(5x+6)\).`, [
        R`\(\dfrac{u'}{u}\) with \(u'=5\).`,
      ], R`\(f'(x)=\dfrac{5}{5x+6}\)`),
      P(R`Differentiate \(f(x)=\arctan(9x)\).`, [
        R`\(\dfrac{u'}{1+u^2}\) with \(u=9x\).`,
      ], R`\(f'(x)=\dfrac{9}{1+81x^2}\)`),
      P(R`Differentiate \(f(x)=\cos(e^{x})\).`, [
        R`Outside: \(-\sin(e^{x})\). Inside: \(e^{x}\).`,
      ], R`\(f'(x)=-e^{x}\sin(e^{x})\)`),
      P(R`Differentiate \(f(x)=(4x+3)^{9}\).`, [
        R`Outside: \(9(4x+3)^{8}\); inside derivative \(4\).`,
      ], R`\(f'(x)=36(4x+3)^{8}\)`),
      P(R`Differentiate \(f(x)=\cos(6x^{5})\).`, [
        R`Outside: \(-\sin(6x^{5})\). Inside: \(30x^{4}\).`,
      ], R`\(f'(x)=-30x^{4}\sin(6x^{5})\)`),
      P(R`Differentiate \(f(x)=e^{-6x^{2}-8}\).`, [
        R`\(e^u\cdot u'\) with \(u'=-12x\).`,
      ], R`\(f'(x)=-12x\,e^{-6x^{2}-8}\)`),
      P(R`Differentiate \(f(x)=\ln(8x^{2}+7)\).`, [
        R`\(\dfrac{u'}{u}\) with \(u'=16x\).`,
      ], R`\(f'(x)=\dfrac{16x}{8x^{2}+7}\)`),
      P(R`Differentiate \(f(x)=\sqrt{-9x-9}\).`, [
        R`\((-9x-9)^{1/2}\to\tfrac12(-9x-9)^{-1/2}\cdot(-9)\).`,
      ], R`\(f'(x)=-\dfrac{9}{2\sqrt{-9x-9}}\)`),
      P(R`Differentiate \(f(x)=\tan(-7x-3)\).`, [
        R`\(\sec^2(-7x-3)\) times inside derivative \(-7\).`,
      ], R`\(f'(x)=-7\sec^2(-7x-3)\)`),
      P(R`Differentiate \(f(x)=\sin^{5}x\).`, [
        R`Rewrite as \((\sin x)^{5}\).`,
        R`\(5(\sin x)^{4}\) times \(\cos x\).`,
      ], R`\(f'(x)=5\sin^{4}x\cos x\)`),
      P(R`Differentiate \(f(x)=e^{-2x}\sin(7x)\).`, [
        R`Product rule: \((e^{-2x})'=-2e^{-2x}\), \((\sin 7x)'=7\cos(7x)\).`,
        R`\(f'=-2e^{-2x}\sin(7x)+7e^{-2x}\cos(7x)\).`,
      ], R`\(f'(x)=e^{-2x}\big(-2\sin(7x)+7\cos(7x)\big)\)`),
      P(R`Differentiate \(f(x)=(x^2-7)^{5}\).`, [
        R`\(5(x^2-7)^{4}\cdot2x\).`,
      ], R`\(f'(x)=10x(x^2-7)^{4}\)`),
      P(R`Differentiate \(f(x)=3^{-2x}\).`, [
        R`\(\dfrac{d}{dx}a^u=a^u\ln a\cdot u'\) with \(u'=-2\).`,
      ], R`\(f'(x)=-2(\ln 3)\,3^{-2x}\)`),
      P(R`Differentiate \(f(x)=\ln(-4x+3)\).`, [
        R`\(\dfrac{u'}{u}\) with \(u'=-4\).`,
      ], R`\(f'(x)=\dfrac{-4}{-4x+3}\)`),
      P(R`Differentiate \(f(x)=\arctan(11x)\).`, [
        R`\(\dfrac{u'}{1+u^2}\) with \(u=11x\).`,
      ], R`\(f'(x)=\dfrac{11}{1+121x^2}\)`),
      P(R`Differentiate \(f(x)=\cos(e^{4x})\).`, [
        R`Outside: \(-\sin(e^{4x})\). Inside: \(4e^{4x}\).`,
      ], R`\(f'(x)=-4e^{4x}\sin(e^{4x})\)`),
      P(R`Differentiate \(f(x)=(7x-8)^{6}\).`, [
        R`Outside: \(6(7x-8)^{5}\); inside derivative \(7\).`,
      ], R`\(f'(x)=42(7x-8)^{5}\)`),
      P(R`Differentiate \(f(x)=\sin(5x^{5})\).`, [
        R`Outside: \(\cos(5x^{5})\). Inside: \(25x^{4}\).`,
      ], R`\(f'(x)=25x^{4}\cos(5x^{5})\)`),
      P(R`Differentiate \(f(x)=e^{2x^{2}+2}\).`, [
        R`\(e^u\cdot u'\) with \(u'=4x\).`,
      ], R`\(f'(x)=4x\,e^{2x^{2}+2}\)`),
      P(R`Differentiate \(f(x)=\ln(8x^{2}+9)\).`, [
        R`\(\dfrac{u'}{u}\) with \(u'=16x\).`,
      ], R`\(f'(x)=\dfrac{16x}{8x^{2}+9}\)`),
      P(R`Differentiate \(f(x)=\sqrt{x-8}\).`, [
        R`\((x-8)^{1/2}\to\tfrac12(x-8)^{-1/2}\cdot1\).`,
      ], R`\(f'(x)=\dfrac{1}{2\sqrt{x-8}}\)`),
      P(R`Differentiate \(f(x)=\tan(-3x+7)\).`, [
        R`\(\sec^2(-3x+7)\) times inside derivative \(-3\).`,
      ], R`\(f'(x)=-3\sec^2(-3x+7)\)`),
      P(R`Differentiate \(f(x)=\sin^{7}x\).`, [
        R`Rewrite as \((\sin x)^{7}\).`,
        R`\(7(\sin x)^{6}\) times \(\cos x\).`,
      ], R`\(f'(x)=7\sin^{6}x\cos x\)`),
      P(R`Differentiate \(f(x)=e^{-2x}\sin(6x)\).`, [
        R`Product rule: \((e^{-2x})'=-2e^{-2x}\), \((\sin 6x)'=6\cos(6x)\).`,
        R`\(f'=-2e^{-2x}\sin(6x)+6e^{-2x}\cos(6x)\).`,
      ], R`\(f'(x)=e^{-2x}\big(-2\sin(6x)+6\cos(6x)\big)\)`),
      P(R`Differentiate \(f(x)=(x^2+9)^{8}\).`, [
        R`\(8(x^2+9)^{7}\cdot2x\).`,
      ], R`\(f'(x)=16x(x^2+9)^{7}\)`),
      P(R`Differentiate \(f(x)=8^{2x}\).`, [
        R`\(\dfrac{d}{dx}a^u=a^u\ln a\cdot u'\) with \(u'=2\).`,
      ], R`\(f'(x)=2(\ln 8)\,8^{2x}\)`),
      P(R`Differentiate \(f(x)=\ln(-4x+6)\).`, [
        R`\(\dfrac{u'}{u}\) with \(u'=-4\).`,
      ], R`\(f'(x)=\dfrac{-4}{-4x+6}\)`),
      P(R`Differentiate \(f(x)=\arctan(5x)\).`, [
        R`\(\dfrac{u'}{1+u^2}\) with \(u=5x\).`,
      ], R`\(f'(x)=\dfrac{5}{1+25x^2}\)`),
      P(R`Differentiate \(f(x)=\cos(e^{-6x})\).`, [
        R`Outside: \(-\sin(e^{-6x})\). Inside: \(-6e^{-6x}\).`,
      ], R`\(f'(x)=6e^{-6x}\sin(e^{-6x})\)`),
      P(R`Differentiate \(f(x)=(4x-6)^{8}\).`, [
        R`Outside: \(8(4x-6)^{7}\); inside derivative \(4\).`,
      ], R`\(f'(x)=32(4x-6)^{7}\)`),
      P(R`Differentiate \(f(x)=\cos(7x^{2})\).`, [
        R`Outside: \(-\sin(7x^{2})\). Inside: \(14x\).`,
      ], R`\(f'(x)=-14x\sin(7x^{2})\)`),
      P(R`Differentiate \(f(x)=e^{6x^{2}+1}\).`, [
        R`\(e^u\cdot u'\) with \(u'=12x\).`,
      ], R`\(f'(x)=12x\,e^{6x^{2}+1}\)`),
      P(R`Differentiate \(f(x)=\ln(3x^{2}+8)\).`, [
        R`\(\dfrac{u'}{u}\) with \(u'=6x\).`,
      ], R`\(f'(x)=\dfrac{6x}{3x^{2}+8}\)`),
      P(R`Differentiate \(f(x)=\sqrt{8x+7}\).`, [
        R`\((8x+7)^{1/2}\to\tfrac12(8x+7)^{-1/2}\cdot8\).`,
      ], R`\(f'(x)=\dfrac{4}{\sqrt{8x+7}}\)`),
      P(R`Differentiate \(f(x)=\tan(x+6)\).`, [
        R`\(\sec^2(x+6)\) times inside derivative \(1\).`,
      ], R`\(f'(x)=\sec^2(x+6)\)`),
      P(R`Differentiate \(f(x)=\cos^{2}x\).`, [
        R`Rewrite as \((\cos x)^{2}\).`,
        R`\(2(\cos x)^{1}\) times \(-\sin x\).`,
      ], R`\(f'(x)=-2\cosx\sin x\)`),
      P(R`Differentiate \(f(x)=e^{-3x}\sin(4x)\).`, [
        R`Product rule: \((e^{-3x})'=-3e^{-3x}\), \((\sin 4x)'=4\cos(4x)\).`,
        R`\(f'=-3e^{-3x}\sin(4x)+4e^{-3x}\cos(4x)\).`,
      ], R`\(f'(x)=e^{-3x}\big(-3\sin(4x)+4\cos(4x)\big)\)`),
      P(R`Differentiate \(f(x)=(x^2+7)^{7}\).`, [
        R`\(7(x^2+7)^{6}\cdot2x\).`,
      ], R`\(f'(x)=14x(x^2+7)^{6}\)`),
      P(R`Differentiate \(f(x)=7^{-2x}\).`, [
        R`\(\dfrac{d}{dx}a^u=a^u\ln a\cdot u'\) with \(u'=-2\).`,
      ], R`\(f'(x)=-2(\ln 7)\,7^{-2x}\)`),
      P(R`Differentiate \(f(x)=\ln(5x-9)\).`, [
        R`\(\dfrac{u'}{u}\) with \(u'=5\).`,
      ], R`\(f'(x)=\dfrac{5}{5x-9}\)`),
      P(R`Differentiate \(f(x)=\arctan(10x)\).`, [
        R`\(\dfrac{u'}{1+u^2}\) with \(u=10x\).`,
      ], R`\(f'(x)=\dfrac{10}{1+100x^2}\)`),
      P(R`Differentiate \(f(x)=\cos(e^{-2x})\).`, [
        R`Outside: \(-\sin(e^{-2x})\). Inside: \(-2e^{-2x}\).`,
      ], R`\(f'(x)=2e^{-2x}\sin(e^{-2x})\)`),
      P(R`Differentiate \(f(x)=(6x+3)^{11}\).`, [
        R`Outside: \(11(6x+3)^{10}\); inside derivative \(6\).`,
      ], R`\(f'(x)=66(6x+3)^{10}\)`),
      P(R`Differentiate \(f(x)=\cos(8x^{3})\).`, [
        R`Outside: \(-\sin(8x^{3})\). Inside: \(24x^{2}\).`,
      ], R`\(f'(x)=-24x^{2}\sin(8x^{3})\)`),
      P(R`Differentiate \(f(x)=e^{-x^{2}-9}\).`, [
        R`\(e^u\cdot u'\) with \(u'=-2x\).`,
      ], R`\(f'(x)=-2x\,e^{-x^{2}-9}\)`),
      P(R`Differentiate \(f(x)=\ln(6x^{2}+8)\).`, [
        R`\(\dfrac{u'}{u}\) with \(u'=12x\).`,
      ], R`\(f'(x)=\dfrac{12x}{6x^{2}+8}\)`),
      P(R`Differentiate \(f(x)=\sqrt{3x-7}\).`, [
        R`\((3x-7)^{1/2}\to\tfrac12(3x-7)^{-1/2}\cdot3\).`,
      ], R`\(f'(x)=\dfrac{3}{2\sqrt{3x-7}}\)`),
      P(R`Differentiate \(f(x)=\tan(-6x-8)\).`, [
        R`\(\sec^2(-6x-8)\) times inside derivative \(-6\).`,
      ], R`\(f'(x)=-6\sec^2(-6x-8)\)`),
      P(R`Differentiate \(f(x)=e^{x}\sin(3x)\).`, [
        R`Product rule: \((e^{x})'=e^{x}\), \((\sin 3x)'=3\cos(3x)\).`,
        R`\(f'=e^{x}\sin(3x)+3e^{x}\cos(3x)\).`,
      ], R`\(f'(x)=e^{x}\big(\sin(3x)+3\cos(3x)\big)\)`),
      P(R`Differentiate \(f(x)=(x^2+3)^{3}\).`, [
        R`\(3(x^2+3)^{2}\cdot2x\).`,
      ], R`\(f'(x)=6x(x^2+3)^{2}\)`),
      P(R`Differentiate \(f(x)=9^{-2x}\).`, [
        R`\(\dfrac{d}{dx}a^u=a^u\ln a\cdot u'\) with \(u'=-2\).`,
      ], R`\(f'(x)=-2(\ln 9)\,9^{-2x}\)`),
      P(R`Differentiate \(f(x)=(-6x+4)^{3}\).`, [
        R`Outside: \(3(-6x+4)^{2}\); inside derivative \(-6\).`,
      ], R`\(f'(x)=-18(-6x+4)^{2}\)`),
      P(R`Differentiate \(f(x)=\cos(7x^{4})\).`, [
        R`Outside: \(-\sin(7x^{4})\). Inside: \(28x^{3}\).`,
      ], R`\(f'(x)=-28x^{3}\sin(7x^{4})\)`),
      P(R`Differentiate \(f(x)=e^{-3x^{2}-3}\).`, [
        R`\(e^u\cdot u'\) with \(u'=-6x\).`,
      ], R`\(f'(x)=-6x\,e^{-3x^{2}-3}\)`),
      P(R`Differentiate \(f(x)=\ln(3x^{2}+5)\).`, [
        R`\(\dfrac{u'}{u}\) with \(u'=6x\).`,
      ], R`\(f'(x)=\dfrac{6x}{3x^{2}+5}\)`),
      P(R`Differentiate \(f(x)=\sqrt{-8x+5}\).`, [
        R`\((-8x+5)^{1/2}\to\tfrac12(-8x+5)^{-1/2}\cdot(-8)\).`,
      ], R`\(f'(x)=-\dfrac{4}{\sqrt{-8x+5}}\)`),
      P(R`Differentiate \(f(x)=\tan(x-9)\).`, [
        R`\(\sec^2(x-9)\) times inside derivative \(1\).`,
      ], R`\(f'(x)=\sec^2(x-9)\)`),
      P(R`Differentiate \(f(x)=\cos^{6}x\).`, [
        R`Rewrite as \((\cos x)^{6}\).`,
        R`\(6(\cos x)^{5}\) times \(-\sin x\).`,
      ], R`\(f'(x)=-6\cos^{5}x\sin x\)`),
      P(R`Differentiate \(f(x)=e^{2x}\sin(3x)\).`, [
        R`Product rule: \((e^{2x})'=2e^{2x}\), \((\sin 3x)'=3\cos(3x)\).`,
        R`\(f'=2e^{2x}\sin(3x)+3e^{2x}\cos(3x)\).`,
      ], R`\(f'(x)=e^{2x}\big(2\sin(3x)+3\cos(3x)\big)\)`),
      P(R`Differentiate \(f(x)=(x^2+5)^{8}\).`, [
        R`\(8(x^2+5)^{7}\cdot2x\).`,
      ], R`\(f'(x)=16x(x^2+5)^{7}\)`),
      P(R`Differentiate \(f(x)=10^{x}\).`, [
        R`\(\dfrac{d}{dx}a^u=a^u\ln a\cdot u'\) with \(u'=1\).`,
      ], R`\(f'(x)=(\ln 10)\,10^{x}\)`),
      P(R`Differentiate \(f(x)=\ln(-2x-3)\).`, [
        R`\(\dfrac{u'}{u}\) with \(u'=-2\).`,
      ], R`\(f'(x)=\dfrac{-2}{-2x-3}\)`),
      P(R`Differentiate \(f(x)=\cos(e^{-x})\).`, [
        R`Outside: \(-\sin(e^{-x})\). Inside: \(-e^{-x}\).`,
      ], R`\(f'(x)=e^{-x}\sin(e^{-x})\)`),
      P(R`Differentiate \(f(x)=(2x-1)^{5}\).`, [
        R`Outside: \(5(2x-1)^{4}\); inside derivative \(2\).`,
      ], R`\(f'(x)=10(2x-1)^{4}\)`),
      P(R`Differentiate \(f(x)=\sin(6x^{4})\).`, [
        R`Outside: \(\cos(6x^{4})\). Inside: \(24x^{3}\).`,
      ], R`\(f'(x)=24x^{3}\cos(6x^{4})\)`),
      P(R`Differentiate \(f(x)=e^{-6x^{2}-5}\).`, [
        R`\(e^u\cdot u'\) with \(u'=-12x\).`,
      ], R`\(f'(x)=-12x\,e^{-6x^{2}-5}\)`),
      P(R`Differentiate \(f(x)=\ln(4x^{2}+3)\).`, [
        R`\(\dfrac{u'}{u}\) with \(u'=8x\).`,
      ], R`\(f'(x)=\dfrac{8x}{4x^{2}+3}\)`),
      P(R`Differentiate \(f(x)=\sqrt{2x-8}\).`, [
        R`\((2x-8)^{1/2}\to\tfrac12(2x-8)^{-1/2}\cdot2\).`,
      ], R`\(f'(x)=\dfrac{1}{\sqrt{2x-8}}\)`),
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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`Find \(\dfrac{dy}{dx}\) for \(3x^2+5y^2=57\) and the slope at \((2,3)\).`, [
        R`\(6x+10y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{3x}{5y}\).`,
        R`At the point: \(-\dfrac{2}{5}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{3x}{5y}\); slope \(-\dfrac{2}{5}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2-3xy+y^2=-9\) and the slope at \((3,3)\).`, [
        R`\(2x+(-3)\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x-3y}{-3x+2y}\).`,
        R`Plug in: \(-\dfrac{-3}{-3}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x-3y}{-3x+2y}\); slope \(-1\)`),
      P(R`Find the slope of \(xy=2\) at \((-2,-1)\).`, [
        R`\(y+x\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac yx\).`,
        R`\(-\dfrac{-1}{-2}\).`,
      ], R`\(-\dfrac{1}{2}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(y^2=x^3+25\) and the slope at \((0,5)\).`, [
        R`\(2y\dfrac{dy}{dx}=3x^2\).`,
        R`\(\dfrac{dy}{dx}=\dfrac{3x^2}{2y}\); plug in.`,
      ], R`\(\dfrac{3x^2}{2y}\); slope \(0\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^3+y^3=-65\) and the slope at \((-4,-1)\).`, [
        R`\(3x^2+3y^2\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac{x^2}{y^2}\).`,
        R`Plug in.`,
      ], R`\(-\dfrac{x^2}{y^2}\); slope \(-16\)`),
      P(R`Find the tangent line to \(x^2-y^2=-27\) at \((3,-6)\).`, [
        R`\(2x-2y\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=\dfrac xy\).`,
        R`Slope \(-\dfrac{1}{2}\); \(y-(-6)=-\dfrac{1}{2}(x-3)\).`,
      ], R`\(y=-\tfrac{1}{2}x-\tfrac{9}{2}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2y=-4\) and the slope at \((-2,-1)\).`, [
        R`\(2xy+x^2\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2xy}{x^2}=-\dfrac{2y}{x}\).`,
      ], R`\(-\dfrac{2y}{x}\); slope \(-1\)`),
      P(R`Find the equation of the tangent line to \(4x^2+y^2=5\) at \((-1,-1)\).`, [
        R`\(\dfrac{dy}{dx}=-\dfrac{4x}{y}\) &rArr; slope \(-4\).`,
        R`\(y-(-1)=-4(x-(-1))\).`,
      ], R`\(y=-4x-5\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2+5y^2=70\) and the slope at \((5,3)\).`, [
        R`\(2x+10y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{x}{5y}\).`,
        R`At the point: \(-\dfrac{1}{3}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{x}{5y}\); slope \(-\dfrac{1}{3}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2+4xy+y^2=-11\) and the slope at \((-3,2)\).`, [
        R`\(2x+4\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x+4y}{4x+2y}\).`,
        R`Plug in: \(-\dfrac{2}{-8}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x+4y}{4x+2y}\); slope \(\dfrac{1}{4}\)`),
      P(R`Find the slope of \(xy=7\) at \((7,1)\).`, [
        R`\(y+x\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac yx\).`,
        R`\(-\dfrac{1}{7}\).`,
      ], R`\(-\dfrac{1}{7}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(y^2=x^3-2\) and the slope at \((3,-5)\).`, [
        R`\(2y\dfrac{dy}{dx}=3x^2\).`,
        R`\(\dfrac{dy}{dx}=\dfrac{3x^2}{2y}\); plug in.`,
      ], R`\(\dfrac{3x^2}{2y}\); slope \(-\dfrac{27}{10}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^3+y^3=7\) and the slope at \((-1,2)\).`, [
        R`\(3x^2+3y^2\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac{x^2}{y^2}\).`,
        R`Plug in.`,
      ], R`\(-\dfrac{x^2}{y^2}\); slope \(-\dfrac{1}{4}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2y=80\) and the slope at \((4,5)\).`, [
        R`\(2xy+x^2\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2xy}{x^2}=-\dfrac{2y}{x}\).`,
      ], R`\(-\dfrac{2y}{x}\); slope \(-\dfrac{5}{2}\)`),
      P(R`Find the equation of the tangent line to \(5x^2+5y^2=160\) at \((-4,-4)\).`, [
        R`\(\dfrac{dy}{dx}=-\dfrac{5x}{5y}\) &rArr; slope \(-1\).`,
        R`\(y-(-4)=-1(x-(-4))\).`,
      ], R`\(y=-x-8\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2+6y^2=22\) and the slope at \((4,1)\).`, [
        R`\(2x+12y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{x}{6y}\).`,
        R`At the point: \(-\dfrac{2}{3}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{x}{6y}\); slope \(-\dfrac{2}{3}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2+2xy+y^2=25\) and the slope at \((2,3)\).`, [
        R`\(2x+2\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x+2y}{2x+2y}\).`,
        R`Plug in: \(-\dfrac{10}{10}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x+2y}{2x+2y}\); slope \(-1\)`),
      P(R`Find the slope of \(xy=-10\) at \((5,-2)\).`, [
        R`\(y+x\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac yx\).`,
        R`\(-\dfrac{-2}{5}\).`,
      ], R`\(\dfrac{2}{5}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(y^2=x^3+10\) and the slope at \((-1,-3)\).`, [
        R`\(2y\dfrac{dy}{dx}=3x^2\).`,
        R`\(\dfrac{dy}{dx}=\dfrac{3x^2}{2y}\); plug in.`,
      ], R`\(\dfrac{3x^2}{2y}\); slope \(-\dfrac{1}{2}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^3+y^3=-9\) and the slope at \((-1,-2)\).`, [
        R`\(3x^2+3y^2\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac{x^2}{y^2}\).`,
        R`Plug in.`,
      ], R`\(-\dfrac{x^2}{y^2}\); slope \(-\dfrac{1}{4}\)`),
      P(R`Find the tangent line to \(x^2-y^2=45\) at \((9,-6)\).`, [
        R`\(2x-2y\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=\dfrac xy\).`,
        R`Slope \(-\dfrac{3}{2}\); \(y-(-6)=-\dfrac{3}{2}(x-9)\).`,
      ], R`\(y=-\tfrac{3}{2}x+\tfrac{15}{2}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2y=-32\) and the slope at \((-4,-2)\).`, [
        R`\(2xy+x^2\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2xy}{x^2}=-\dfrac{2y}{x}\).`,
      ], R`\(-\dfrac{2y}{x}\); slope \(-1\)`),
      P(R`Find the equation of the tangent line to \(2x^2+3y^2=29\) at \((-1,3)\).`, [
        R`\(\dfrac{dy}{dx}=-\dfrac{2x}{3y}\) &rArr; slope \(\dfrac{2}{9}\).`,
        R`\(y-3=\dfrac{2}{9}(x-(-1))\).`,
      ], R`\(y=\tfrac{2}{9}x+\tfrac{29}{9}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(4x^2+2y^2=96\) and the slope at \((4,-4)\).`, [
        R`\(8x+4y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x}{y}\).`,
        R`At the point: \(2\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x}{y}\); slope \(2\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2-2xy+y^2=16\) and the slope at \((1,-3)\).`, [
        R`\(2x+(-2)\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x-2y}{-2x+2y}\).`,
        R`Plug in: \(-\dfrac{8}{-8}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x-2y}{-2x+2y}\); slope \(1\)`),
      P(R`Find the slope of \(xy=-8\) at \((-8,1)\).`, [
        R`\(y+x\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac yx\).`,
        R`\(-\dfrac{1}{-8}\).`,
      ], R`\(\dfrac{1}{8}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(y^2=x^3-7\) and the slope at \((2,-1)\).`, [
        R`\(2y\dfrac{dy}{dx}=3x^2\).`,
        R`\(\dfrac{dy}{dx}=\dfrac{3x^2}{2y}\); plug in.`,
      ], R`\(\dfrac{3x^2}{2y}\); slope \(-6\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^3+y^3=-26\) and the slope at \((-3,1)\).`, [
        R`\(3x^2+3y^2\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac{x^2}{y^2}\).`,
        R`Plug in.`,
      ], R`\(-\dfrac{x^2}{y^2}\); slope \(-9\)`),
      P(R`Find the tangent line to \(x^2-y^2=77\) at \((-9,-2)\).`, [
        R`\(2x-2y\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=\dfrac xy\).`,
        R`Slope \(\dfrac{9}{2}\); \(y-(-2)=\dfrac{9}{2}(x-(-9))\).`,
      ], R`\(y=\tfrac{9}{2}x+\tfrac{77}{2}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2y=80\) and the slope at \((-4,5)\).`, [
        R`\(2xy+x^2\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2xy}{x^2}=-\dfrac{2y}{x}\).`,
      ], R`\(-\dfrac{2y}{x}\); slope \(\dfrac{5}{2}\)`),
      P(R`Find the equation of the tangent line to \(x^2+5y^2=24\) at \((-2,-2)\).`, [
        R`\(\dfrac{dy}{dx}=-\dfrac{x}{5y}\) &rArr; slope \(-\dfrac{1}{5}\).`,
        R`\(y-(-2)=-\dfrac{1}{5}(x-(-2))\).`,
      ], R`\(y=-\tfrac{1}{5}x-\tfrac{12}{5}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(2x^2+4y^2=150\) and the slope at \((-5,-5)\).`, [
        R`\(4x+8y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{x}{2y}\).`,
        R`At the point: \(-\dfrac{1}{2}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{x}{2y}\); slope \(-\dfrac{1}{2}\)`),
      P(R`Find the slope of \(xy=-18\) at \((-9,2)\).`, [
        R`\(y+x\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac yx\).`,
        R`\(-\dfrac{2}{-9}\).`,
      ], R`\(\dfrac{2}{9}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(y^2=x^3+37\) and the slope at \((-1,6)\).`, [
        R`\(2y\dfrac{dy}{dx}=3x^2\).`,
        R`\(\dfrac{dy}{dx}=\dfrac{3x^2}{2y}\); plug in.`,
      ], R`\(\dfrac{3x^2}{2y}\); slope \(\dfrac{1}{4}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^3+y^3=-35\) and the slope at \((-2,-3)\).`, [
        R`\(3x^2+3y^2\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac{x^2}{y^2}\).`,
        R`Plug in.`,
      ], R`\(-\dfrac{x^2}{y^2}\); slope \(-\dfrac{4}{9}\)`),
      P(R`Find the tangent line to \(x^2-y^2=-20\) at \((4,6)\).`, [
        R`\(2x-2y\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=\dfrac xy\).`,
        R`Slope \(\dfrac{2}{3}\); \(y-6=\dfrac{2}{3}(x-4)\).`,
      ], R`\(y=\tfrac{2}{3}x+\tfrac{10}{3}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2y=-25\) and the slope at \((-5,-1)\).`, [
        R`\(2xy+x^2\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2xy}{x^2}=-\dfrac{2y}{x}\).`,
      ], R`\(-\dfrac{2y}{x}\); slope \(-\dfrac{2}{5}\)`),
      P(R`Find the equation of the tangent line to \(5x^2+y^2=21\) at \((-1,-4)\).`, [
        R`\(\dfrac{dy}{dx}=-\dfrac{5x}{y}\) &rArr; slope \(-\dfrac{5}{4}\).`,
        R`\(y-(-4)=-\dfrac{5}{4}(x-(-1))\).`,
      ], R`\(y=-\tfrac{5}{4}x-\tfrac{21}{4}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(3x^2+2y^2=83\) and the slope at \((-5,-2)\).`, [
        R`\(6x+4y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{3x}{2y}\).`,
        R`At the point: \(-\dfrac{15}{4}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{3x}{2y}\); slope \(-\dfrac{15}{4}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2-4xy+y^2=54\) and the slope at \((3,-3)\).`, [
        R`\(2x+(-4)\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x-4y}{-4x+2y}\).`,
        R`Plug in: \(-\dfrac{18}{-18}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x-4y}{-4x+2y}\); slope \(1\)`),
      P(R`Find the slope of \(xy=-6\) at \((2,-3)\).`, [
        R`\(y+x\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac yx\).`,
        R`\(-\dfrac{-3}{2}\).`,
      ], R`\(\dfrac{3}{2}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^3+y^3=-35\) and the slope at \((-3,-2)\).`, [
        R`\(3x^2+3y^2\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac{x^2}{y^2}\).`,
        R`Plug in.`,
      ], R`\(-\dfrac{x^2}{y^2}\); slope \(-\dfrac{9}{4}\)`),
      P(R`Find the tangent line to \(x^2-y^2=-80\) at \((-1,9)\).`, [
        R`\(2x-2y\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=\dfrac xy\).`,
        R`Slope \(-\dfrac{1}{9}\); \(y-9=-\dfrac{1}{9}(x-(-1))\).`,
      ], R`\(y=-\tfrac{1}{9}x+\tfrac{80}{9}\)`),
      P(R`Find the equation of the tangent line to \(x^2+2y^2=18\) at \((4,-1)\).`, [
        R`\(\dfrac{dy}{dx}=-\dfrac{x}{2y}\) &rArr; slope \(2\).`,
        R`\(y-(-1)=2(x-4)\).`,
      ], R`\(y=2x-9\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2+5y^2=30\) and the slope at \((-5,1)\).`, [
        R`\(2x+10y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{x}{5y}\).`,
        R`At the point: \(1\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{x}{5y}\); slope \(1\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2+3xy+y^2=-4\) and the slope at \((2,-2)\).`, [
        R`\(2x+3\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x+3y}{3x+2y}\).`,
        R`Plug in: \(-\dfrac{-2}{2}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x+3y}{3x+2y}\); slope \(1\)`),
      P(R`Find the slope of \(xy=-2\) at \((-1,2)\).`, [
        R`\(y+x\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac yx\).`,
        R`\(-\dfrac{2}{-1}\).`,
      ], R`\(2\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(y^2=x^3+43\) and the slope at \((-3,4)\).`, [
        R`\(2y\dfrac{dy}{dx}=3x^2\).`,
        R`\(\dfrac{dy}{dx}=\dfrac{3x^2}{2y}\); plug in.`,
      ], R`\(\dfrac{3x^2}{2y}\); slope \(\dfrac{27}{8}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^3+y^3=-72\) and the slope at \((-4,-2)\).`, [
        R`\(3x^2+3y^2\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac{x^2}{y^2}\).`,
        R`Plug in.`,
      ], R`\(-\dfrac{x^2}{y^2}\); slope \(-4\)`),
      P(R`Find the tangent line to \(x^2-y^2=-13\) at \((6,7)\).`, [
        R`\(2x-2y\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=\dfrac xy\).`,
        R`Slope \(\dfrac{6}{7}\); \(y-7=\dfrac{6}{7}(x-6)\).`,
      ], R`\(y=\tfrac{6}{7}x+\tfrac{13}{7}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2y=-9\) and the slope at \((3,-1)\).`, [
        R`\(2xy+x^2\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2xy}{x^2}=-\dfrac{2y}{x}\).`,
      ], R`\(-\dfrac{2y}{x}\); slope \(\dfrac{2}{3}\)`),
      P(R`Find the equation of the tangent line to \(2x^2+3y^2=21\) at \((-3,1)\).`, [
        R`\(\dfrac{dy}{dx}=-\dfrac{2x}{3y}\) &rArr; slope \(2\).`,
        R`\(y-1=2(x-(-3))\).`,
      ], R`\(y=2x+7\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(3x^2+y^2=37\) and the slope at \((2,5)\).`, [
        R`\(6x+2y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{3x}{y}\).`,
        R`At the point: \(-\dfrac{6}{5}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{3x}{y}\); slope \(-\dfrac{6}{5}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(y^2=x^3+1\) and the slope at \((2,-3)\).`, [
        R`\(2y\dfrac{dy}{dx}=3x^2\).`,
        R`\(\dfrac{dy}{dx}=\dfrac{3x^2}{2y}\); plug in.`,
      ], R`\(\dfrac{3x^2}{2y}\); slope \(-2\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^3+y^3=-91\) and the slope at \((-3,-4)\).`, [
        R`\(3x^2+3y^2\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac{x^2}{y^2}\).`,
        R`Plug in.`,
      ], R`\(-\dfrac{x^2}{y^2}\); slope \(-\dfrac{9}{16}\)`),
      P(R`Find the tangent line to \(x^2-y^2=-65\) at \((-4,-9)\).`, [
        R`\(2x-2y\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=\dfrac xy\).`,
        R`Slope \(\dfrac{4}{9}\); \(y-(-9)=\dfrac{4}{9}(x-(-4))\).`,
      ], R`\(y=\tfrac{4}{9}x-\tfrac{65}{9}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2y=-48\) and the slope at \((4,-3)\).`, [
        R`\(2xy+x^2\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2xy}{x^2}=-\dfrac{2y}{x}\).`,
      ], R`\(-\dfrac{2y}{x}\); slope \(\dfrac{3}{2}\)`),
      P(R`Find the equation of the tangent line to \(5x^2+2y^2=52\) at \((-2,-4)\).`, [
        R`\(\dfrac{dy}{dx}=-\dfrac{5x}{2y}\) &rArr; slope \(-\dfrac{5}{4}\).`,
        R`\(y-(-4)=-\dfrac{5}{4}(x-(-2))\).`,
      ], R`\(y=-\tfrac{5}{4}x-\tfrac{13}{2}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(6x^2+5y^2=155\) and the slope at \((5,-1)\).`, [
        R`\(12x+10y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{6x}{5y}\).`,
        R`At the point: \(6\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{6x}{5y}\); slope \(6\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2+2xy+y^2=9\) and the slope at \((-1,4)\).`, [
        R`\(2x+2\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x+2y}{2x+2y}\).`,
        R`Plug in: \(-\dfrac{6}{6}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x+2y}{2x+2y}\); slope \(-1\)`),
      P(R`Find the slope of \(xy=6\) at \((3,2)\).`, [
        R`\(y+x\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac yx\).`,
        R`\(-\dfrac{2}{3}\).`,
      ], R`\(-\dfrac{2}{3}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(y^2=x^3+9\) and the slope at \((0,3)\).`, [
        R`\(2y\dfrac{dy}{dx}=3x^2\).`,
        R`\(\dfrac{dy}{dx}=\dfrac{3x^2}{2y}\); plug in.`,
      ], R`\(\dfrac{3x^2}{2y}\); slope \(0\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^3+y^3=0\) and the slope at \((1,-1)\).`, [
        R`\(3x^2+3y^2\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac{x^2}{y^2}\).`,
        R`Plug in.`,
      ], R`\(-\dfrac{x^2}{y^2}\); slope \(-1\)`),
      P(R`Find the tangent line to \(x^2-y^2=-33\) at \((-4,-7)\).`, [
        R`\(2x-2y\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=\dfrac xy\).`,
        R`Slope \(\dfrac{4}{7}\); \(y-(-7)=\dfrac{4}{7}(x-(-4))\).`,
      ], R`\(y=\tfrac{4}{7}x-\tfrac{33}{7}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2y=32\) and the slope at \((4,2)\).`, [
        R`\(2xy+x^2\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2xy}{x^2}=-\dfrac{2y}{x}\).`,
      ], R`\(-\dfrac{2y}{x}\); slope \(-1\)`),
      P(R`Find the equation of the tangent line to \(2x^2+y^2=27\) at \((-3,3)\).`, [
        R`\(\dfrac{dy}{dx}=-\dfrac{2x}{y}\) &rArr; slope \(2\).`,
        R`\(y-3=2(x-(-3))\).`,
      ], R`\(y=2x+9\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(5x^2+y^2=105\) and the slope at \((-4,5)\).`, [
        R`\(10x+2y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{5x}{y}\).`,
        R`At the point: \(4\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{5x}{y}\); slope \(4\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2-4xy+y^2=24\) and the slope at \((2,-2)\).`, [
        R`\(2x+(-4)\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x-4y}{-4x+2y}\).`,
        R`Plug in: \(-\dfrac{12}{-12}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x-4y}{-4x+2y}\); slope \(1\)`),
      P(R`Find the slope of \(xy=-14\) at \((7,-2)\).`, [
        R`\(y+x\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac yx\).`,
        R`\(-\dfrac{-2}{7}\).`,
      ], R`\(\dfrac{2}{7}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(y^2=x^3+24\) and the slope at \((1,-5)\).`, [
        R`\(2y\dfrac{dy}{dx}=3x^2\).`,
        R`\(\dfrac{dy}{dx}=\dfrac{3x^2}{2y}\); plug in.`,
      ], R`\(\dfrac{3x^2}{2y}\); slope \(-\dfrac{3}{10}\)`),
      P(R`Find the tangent line to \(x^2-y^2=32\) at \((-6,2)\).`, [
        R`\(2x-2y\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=\dfrac xy\).`,
        R`Slope \(-3\); \(y-2=-3(x-(-6))\).`,
      ], R`\(y=-3x-16\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2y=-32\) and the slope at \((4,-2)\).`, [
        R`\(2xy+x^2\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2xy}{x^2}=-\dfrac{2y}{x}\).`,
      ], R`\(-\dfrac{2y}{x}\); slope \(1\)`),
      P(R`Find the equation of the tangent line to \(3x^2+4y^2=48\) at \((-2,-3)\).`, [
        R`\(\dfrac{dy}{dx}=-\dfrac{3x}{4y}\) &rArr; slope \(-\dfrac{1}{2}\).`,
        R`\(y-(-3)=-\dfrac{1}{2}(x-(-2))\).`,
      ], R`\(y=-\tfrac{1}{2}x-4\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2+4y^2=32\) and the slope at \((-4,2)\).`, [
        R`\(2x+8y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{x}{4y}\).`,
        R`At the point: \(\dfrac{1}{2}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{x}{4y}\); slope \(\dfrac{1}{2}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2+3xy+y^2=5\) and the slope at \((-4,1)\).`, [
        R`\(2x+3\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x+3y}{3x+2y}\).`,
        R`Plug in: \(-\dfrac{-5}{-10}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x+3y}{3x+2y}\); slope \(-\dfrac{1}{2}\)`),
      P(R`Find the slope of \(xy=-72\) at \((-9,8)\).`, [
        R`\(y+x\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac yx\).`,
        R`\(-\dfrac{8}{-9}\).`,
      ], R`\(\dfrac{8}{9}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(y^2=x^3+17\) and the slope at \((-1,4)\).`, [
        R`\(2y\dfrac{dy}{dx}=3x^2\).`,
        R`\(\dfrac{dy}{dx}=\dfrac{3x^2}{2y}\); plug in.`,
      ], R`\(\dfrac{3x^2}{2y}\); slope \(\dfrac{3}{8}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^3+y^3=-63\) and the slope at \((-4,1)\).`, [
        R`\(3x^2+3y^2\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac{x^2}{y^2}\).`,
        R`Plug in.`,
      ], R`\(-\dfrac{x^2}{y^2}\); slope \(-16\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2y=5\) and the slope at \((1,5)\).`, [
        R`\(2xy+x^2\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2xy}{x^2}=-\dfrac{2y}{x}\).`,
      ], R`\(-\dfrac{2y}{x}\); slope \(-10\)`),
      P(R`Find the equation of the tangent line to \(2x^2+3y^2=20\) at \((-2,2)\).`, [
        R`\(\dfrac{dy}{dx}=-\dfrac{2x}{3y}\) &rArr; slope \(\dfrac{2}{3}\).`,
        R`\(y-2=\dfrac{2}{3}(x-(-2))\).`,
      ], R`\(y=\tfrac{2}{3}x+\tfrac{10}{3}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(4x^2+4y^2=164\) and the slope at \((5,4)\).`, [
        R`\(8x+8y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{x}{y}\).`,
        R`At the point: \(-\dfrac{5}{4}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{x}{y}\); slope \(-\dfrac{5}{4}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2-4xy+y^2=13\) and the slope at \((1,-2)\).`, [
        R`\(2x+(-4)\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2x-4y}{-4x+2y}\).`,
        R`Plug in: \(-\dfrac{10}{-8}\).`,
      ], R`\(\dfrac{dy}{dx}=-\dfrac{2x-4y}{-4x+2y}\); slope \(\dfrac{5}{4}\)`),
      P(R`Find the slope of \(xy=-36\) at \((9,-4)\).`, [
        R`\(y+x\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac yx\).`,
        R`\(-\dfrac{-4}{9}\).`,
      ], R`\(\dfrac{4}{9}\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^3+y^3=0\) and the slope at \((3,-3)\).`, [
        R`\(3x^2+3y^2\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=-\dfrac{x^2}{y^2}\).`,
        R`Plug in.`,
      ], R`\(-\dfrac{x^2}{y^2}\); slope \(-1\)`),
      P(R`Find the tangent line to \(x^2-y^2=48\) at \((-7,1)\).`, [
        R`\(2x-2y\dfrac{dy}{dx}=0\Rightarrow\dfrac{dy}{dx}=\dfrac xy\).`,
        R`Slope \(-7\); \(y-1=-7(x-(-7))\).`,
      ], R`\(y=-7x-48\)`),
      P(R`Find \(\dfrac{dy}{dx}\) for \(x^2y=27\) and the slope at \((3,3)\).`, [
        R`\(2xy+x^2\dfrac{dy}{dx}=0\).`,
        R`\(\dfrac{dy}{dx}=-\dfrac{2xy}{x^2}=-\dfrac{2y}{x}\).`,
      ], R`\(-\dfrac{2y}{x}\); slope \(-2\)`),
      P(R`Find the equation of the tangent line to \(2x^2+3y^2=45\) at \((-3,-3)\).`, [
        R`\(\dfrac{dy}{dx}=-\dfrac{2x}{3y}\) &rArr; slope \(-\dfrac{2}{3}\).`,
        R`\(y-(-3)=-\dfrac{2}{3}(x-(-3))\).`,
      ], R`\(y=-\tfrac{2}{3}x-5\)`),
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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`A circle's radius increases at 6 cm/s. How fast is its area increasing when \(r=26\) cm?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\).`,
        R`\(2\pi(26)(6)\).`,
      ], R`\(312\pi\) cm²/s`),
      P(R`Air fills a spherical balloon at 20 cm³/s. How fast is the radius growing when \(r=6\) cm?`, [
        R`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(20=144\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{5}{36\pi}\approx0.0442\) cm/s`),
      P(R`A 20 ft ladder slides down a wall; its bottom moves away at 3 ft/s. How fast is the top falling when the bottom is 16 ft from the wall?`, [
        R`\(x^2+y^2=400\); at \(x=16\), \(y=12\).`,
        R`\(x\dfrac{dx}{dt}+y\dfrac{dy}{dt}=0\): \(16(3)+12\dfrac{dy}{dt}=0\).`,
        R`\(\dfrac{dy}{dt}=-4\).`,
      ], R`Falling at \(4\) ft/s`),
      P(R`A square's side grows at 3 in/min. How fast is the area growing when the side is 7 in?`, [
        R`\(\dfrac{dA}{dt}=2s\dfrac{ds}{dt}\).`,
      ], R`\(42\) in²/min`),
      P(R`A cube's edges grow at 3 cm/s. How fast is the volume growing when an edge is 4 cm?`, [
        R`\(V=s^3\Rightarrow\dfrac{dV}{dt}=3s^2\dfrac{ds}{dt}\).`,
        R`\(3(4)^2(3)\).`,
      ], R`\(144\) cm³/s`),
      P(R`A sphere's radius grows at 1 mm/s. How fast is its volume growing when \(r=6\) mm?`, [
        R`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(4\pi(6)^2(1)\).`,
      ], R`\(144\pi\) mm³/s`),
      P(R`A cone-shaped tank (point down) is 12 ft tall with top radius 4 ft. Water flows in at 2 ft³/min. How fast is the water rising when it is 5 ft deep?`, [
        R`Similar triangles: \(r=\dfrac{1}{3}h\).`,
        R`\(V=\tfrac13\pi r^2h=\dfrac{16\pi}{432}h^3\).`,
        R`\(\dfrac{dV}{dt}=\dfrac{16\pi}{144}h^2\dfrac{dh}{dt}\).`,
        R`\(2=\dfrac{16\pi(25)}{144}\dfrac{dh}{dt}\Rightarrow\dfrac{dh}{dt}=\dfrac{18}{25\pi}\).`,
      ], R`\(\dfrac{18}{25\pi}\approx0.2292\) ft/min`),
      P(R`Water pours into a cylindrical tank of radius 1 m at 7 m³/min. How fast does the level rise?`, [
        R`\(V=\pi(1)^2h\) &rArr; \(\dfrac{dV}{dt}=1\pi\dfrac{dh}{dt}\).`,
      ], R`\(\dfrac{7}{\pi}\approx2.2282\) m/min`),
      P(R`Car A is 4 mi north of an intersection heading north at 55 mph; car B is 3 mi east heading east at 70 mph. How fast is the distance between them changing?`, [
        R`\(x^2+y^2=z^2\); now \(z=5\).`,
        R`\(z\dfrac{dz}{dt}=x\dfrac{dx}{dt}+y\dfrac{dy}{dt}\): \(5\dfrac{dz}{dt}=3(70)+4(55)=430\).`,
      ], R`\(86\) mph`),
      P(R`A 5 ft person walks away from a 15 ft lamppost at 4 ft/s. How fast is the shadow lengthening?`, [
        R`\(\dfrac{15}{x+s}=\dfrac{5}{s}\Rightarrow 10s=5x\Rightarrow s=\dfrac{1}{2}x\).`,
        R`\(\dfrac{ds}{dt}=\dfrac{1}{2}(4)\).`,
      ], R`\(2\) ft/s`),
      P(R`A rectangle's length changes at 6 cm/s and its width at -2 cm/s. How fast is the area changing when it is 8 cm by 18 cm?`, [
        R`\(A=lw\Rightarrow\dfrac{dA}{dt}=\dfrac{dl}{dt}w+l\dfrac{dw}{dt}\).`,
        R`\((6)(18)+(8)(-2)\).`,
      ], R`\(92\) cm²/s`),
      P(R`A circle's area grows at 8 m²/s. How fast is the radius growing when \(r=6\) m?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\): \(8=12\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{2}{3\pi}\) m/s`),
      P(R`A circle's radius increases at 4 cm/s. How fast is its area increasing when \(r=15\) cm?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\).`,
        R`\(2\pi(15)(4)\).`,
      ], R`\(120\pi\) cm²/s`),
      P(R`Air fills a spherical balloon at 200 cm³/s. How fast is the radius growing when \(r=3\) cm?`, [
        R`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(200=36\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{50}{9\pi}\approx1.7684\) cm/s`),
      P(R`A 15 ft ladder slides down a wall; its bottom moves away at 2 ft/s. How fast is the top falling when the bottom is 9 ft from the wall?`, [
        R`\(x^2+y^2=225\); at \(x=9\), \(y=12\).`,
        R`\(x\dfrac{dx}{dt}+y\dfrac{dy}{dt}=0\): \(9(2)+12\dfrac{dy}{dt}=0\).`,
        R`\(\dfrac{dy}{dt}=-\dfrac{3}{2}\).`,
      ], R`Falling at \(\dfrac{3}{2}\) ft/s`),
      P(R`A square's side grows at 2 in/min. How fast is the area growing when the side is 11 in?`, [
        R`\(\dfrac{dA}{dt}=2s\dfrac{ds}{dt}\).`,
      ], R`\(44\) in²/min`),
      P(R`A cube's edges grow at 2 cm/s. How fast is the volume growing when an edge is 7 cm?`, [
        R`\(V=s^3\Rightarrow\dfrac{dV}{dt}=3s^2\dfrac{ds}{dt}\).`,
        R`\(3(7)^2(2)\).`,
      ], R`\(294\) cm³/s`),
      P(R`A sphere's radius grows at 5 mm/s. How fast is its volume growing when \(r=5\) mm?`, [
        R`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(4\pi(5)^2(5)\).`,
      ], R`\(500\pi\) mm³/s`),
      P(R`A cone-shaped tank (point down) is 12 ft tall with top radius 6 ft. Water flows in at 6 ft³/min. How fast is the water rising when it is 5 ft deep?`, [
        R`Similar triangles: \(r=\dfrac{1}{2}h\).`,
        R`\(V=\tfrac13\pi r^2h=\dfrac{36\pi}{432}h^3\).`,
        R`\(\dfrac{dV}{dt}=\dfrac{36\pi}{144}h^2\dfrac{dh}{dt}\).`,
        R`\(6=\dfrac{36\pi(25)}{144}\dfrac{dh}{dt}\Rightarrow\dfrac{dh}{dt}=\dfrac{24}{25\pi}\).`,
      ], R`\(\dfrac{24}{25\pi}\approx0.3056\) ft/min`),
      P(R`Water pours into a cylindrical tank of radius 3 m at 2 m³/min. How fast does the level rise?`, [
        R`\(V=\pi(3)^2h\) &rArr; \(\dfrac{dV}{dt}=9\pi\dfrac{dh}{dt}\).`,
      ], R`\(\dfrac{2}{9\pi}\approx0.0707\) m/min`),
      P(R`Car A is 12 mi north of an intersection heading north at 25 mph; car B is 5 mi east heading east at 70 mph. How fast is the distance between them changing?`, [
        R`\(x^2+y^2=z^2\); now \(z=13\).`,
        R`\(z\dfrac{dz}{dt}=x\dfrac{dx}{dt}+y\dfrac{dy}{dt}\): \(13\dfrac{dz}{dt}=5(70)+12(25)=650\).`,
      ], R`\(50\) mph`),
      P(R`A 5 ft person walks away from a 24 ft lamppost at 4 ft/s. How fast is the shadow lengthening?`, [
        R`\(\dfrac{24}{x+s}=\dfrac{5}{s}\Rightarrow 19s=5x\Rightarrow s=\dfrac{5}{19}x\).`,
        R`\(\dfrac{ds}{dt}=\dfrac{5}{19}(4)\).`,
      ], R`\(\dfrac{20}{19}\) ft/s`),
      P(R`A rectangle's length changes at 3 cm/s and its width at -3 cm/s. How fast is the area changing when it is 4 cm by 5 cm?`, [
        R`\(A=lw\Rightarrow\dfrac{dA}{dt}=\dfrac{dl}{dt}w+l\dfrac{dw}{dt}\).`,
        R`\((3)(5)+(4)(-3)\).`,
      ], R`\(3\) cm²/s`),
      P(R`A circle's area grows at 13 m²/s. How fast is the radius growing when \(r=3\) m?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\): \(13=6\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{13}{6\pi}\) m/s`),
      P(R`A circle's radius increases at 2 cm/s. How fast is its area increasing when \(r=15\) cm?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\).`,
        R`\(2\pi(15)(2)\).`,
      ], R`\(60\pi\) cm²/s`),
      P(R`Air fills a spherical balloon at 20 cm³/s. How fast is the radius growing when \(r=14\) cm?`, [
        R`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(20=784\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{5}{196\pi}\approx0.0081\) cm/s`),
      P(R`A 5 ft ladder slides down a wall; its bottom moves away at 4 ft/s. How fast is the top falling when the bottom is 3 ft from the wall?`, [
        R`\(x^2+y^2=25\); at \(x=3\), \(y=4\).`,
        R`\(x\dfrac{dx}{dt}+y\dfrac{dy}{dt}=0\): \(3(4)+4\dfrac{dy}{dt}=0\).`,
        R`\(\dfrac{dy}{dt}=-3\).`,
      ], R`Falling at \(3\) ft/s`),
      P(R`A square's side grows at 5 in/min. How fast is the area growing when the side is 10 in?`, [
        R`\(\dfrac{dA}{dt}=2s\dfrac{ds}{dt}\).`,
      ], R`\(100\) in²/min`),
      P(R`A cube's edges grow at 2 cm/s. How fast is the volume growing when an edge is 8 cm?`, [
        R`\(V=s^3\Rightarrow\dfrac{dV}{dt}=3s^2\dfrac{ds}{dt}\).`,
        R`\(3(8)^2(2)\).`,
      ], R`\(384\) cm³/s`),
      P(R`A sphere's radius grows at 4 mm/s. How fast is its volume growing when \(r=5\) mm?`, [
        R`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(4\pi(5)^2(4)\).`,
      ], R`\(400\pi\) mm³/s`),
      P(R`A cone-shaped tank (point down) is 12 ft tall with top radius 4 ft. Water flows in at 5 ft³/min. How fast is the water rising when it is 8 ft deep?`, [
        R`Similar triangles: \(r=\dfrac{1}{3}h\).`,
        R`\(V=\tfrac13\pi r^2h=\dfrac{16\pi}{432}h^3\).`,
        R`\(\dfrac{dV}{dt}=\dfrac{16\pi}{144}h^2\dfrac{dh}{dt}\).`,
        R`\(5=\dfrac{16\pi(64)}{144}\dfrac{dh}{dt}\Rightarrow\dfrac{dh}{dt}=\dfrac{45}{64\pi}\).`,
      ], R`\(\dfrac{45}{64\pi}\approx0.2238\) ft/min`),
      P(R`Water pours into a cylindrical tank of radius 3 m at 5 m³/min. How fast does the level rise?`, [
        R`\(V=\pi(3)^2h\) &rArr; \(\dfrac{dV}{dt}=9\pi\dfrac{dh}{dt}\).`,
      ], R`\(\dfrac{5}{9\pi}\approx0.1768\) m/min`),
      P(R`Car A is 15 mi north of an intersection heading north at 45 mph; car B is 8 mi east heading east at 45 mph. How fast is the distance between them changing?`, [
        R`\(x^2+y^2=z^2\); now \(z=17\).`,
        R`\(z\dfrac{dz}{dt}=x\dfrac{dx}{dt}+y\dfrac{dy}{dt}\): \(17\dfrac{dz}{dt}=8(45)+15(45)=1035\).`,
      ], R`\(\dfrac{1035}{17}\) mph`),
      P(R`A 6 ft person walks away from a 15 ft lamppost at 4 ft/s. How fast is the shadow lengthening?`, [
        R`\(\dfrac{15}{x+s}=\dfrac{6}{s}\Rightarrow 9s=6x\Rightarrow s=\dfrac{2}{3}x\).`,
        R`\(\dfrac{ds}{dt}=\dfrac{2}{3}(4)\).`,
      ], R`\(\dfrac{8}{3}\) ft/s`),
      P(R`A rectangle's length changes at 6 cm/s and its width at -4 cm/s. How fast is the area changing when it is 12 cm by 12 cm?`, [
        R`\(A=lw\Rightarrow\dfrac{dA}{dt}=\dfrac{dl}{dt}w+l\dfrac{dw}{dt}\).`,
        R`\((6)(12)+(12)(-4)\).`,
      ], R`\(24\) cm²/s`),
      P(R`A circle's area grows at 3 m²/s. How fast is the radius growing when \(r=3\) m?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\): \(3=6\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{1}{2\pi}\) m/s`),
      P(R`A circle's radius increases at 9 cm/s. How fast is its area increasing when \(r=28\) cm?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\).`,
        R`\(2\pi(28)(9)\).`,
      ], R`\(504\pi\) cm²/s`),
      P(R`Air fills a spherical balloon at 60 cm³/s. How fast is the radius growing when \(r=5\) cm?`, [
        R`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(60=100\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{3}{5\pi}\approx0.191\) cm/s`),
      P(R`A 10 ft ladder slides down a wall; its bottom moves away at 1 ft/s. How fast is the top falling when the bottom is 6 ft from the wall?`, [
        R`\(x^2+y^2=100\); at \(x=6\), \(y=8\).`,
        R`\(x\dfrac{dx}{dt}+y\dfrac{dy}{dt}=0\): \(6(1)+8\dfrac{dy}{dt}=0\).`,
        R`\(\dfrac{dy}{dt}=-\dfrac{3}{4}\).`,
      ], R`Falling at \(\dfrac{3}{4}\) ft/s`),
      P(R`A square's side grows at 2 in/min. How fast is the area growing when the side is 15 in?`, [
        R`\(\dfrac{dA}{dt}=2s\dfrac{ds}{dt}\).`,
      ], R`\(60\) in²/min`),
      P(R`A cube's edges grow at 4 cm/s. How fast is the volume growing when an edge is 7 cm?`, [
        R`\(V=s^3\Rightarrow\dfrac{dV}{dt}=3s^2\dfrac{ds}{dt}\).`,
        R`\(3(7)^2(4)\).`,
      ], R`\(588\) cm³/s`),
      P(R`A sphere's radius grows at 5 mm/s. How fast is its volume growing when \(r=10\) mm?`, [
        R`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(4\pi(10)^2(5)\).`,
      ], R`\(2000\pi\) mm³/s`),
      P(R`A cone-shaped tank (point down) is 8 ft tall with top radius 4 ft. Water flows in at 10 ft³/min. How fast is the water rising when it is 6 ft deep?`, [
        R`Similar triangles: \(r=\dfrac{1}{2}h\).`,
        R`\(V=\tfrac13\pi r^2h=\dfrac{16\pi}{192}h^3\).`,
        R`\(\dfrac{dV}{dt}=\dfrac{16\pi}{64}h^2\dfrac{dh}{dt}\).`,
        R`\(10=\dfrac{16\pi(36)}{64}\dfrac{dh}{dt}\Rightarrow\dfrac{dh}{dt}=\dfrac{10}{9\pi}\).`,
      ], R`\(\dfrac{10}{9\pi}\approx0.3537\) ft/min`),
      P(R`Water pours into a cylindrical tank of radius 9 m at 8 m³/min. How fast does the level rise?`, [
        R`\(V=\pi(9)^2h\) &rArr; \(\dfrac{dV}{dt}=81\pi\dfrac{dh}{dt}\).`,
      ], R`\(\dfrac{8}{81\pi}\approx0.0314\) m/min`),
      P(R`Car A is 20 mi north of an intersection heading north at 55 mph; car B is 15 mi east heading east at 35 mph. How fast is the distance between them changing?`, [
        R`\(x^2+y^2=z^2\); now \(z=25\).`,
        R`\(z\dfrac{dz}{dt}=x\dfrac{dx}{dt}+y\dfrac{dy}{dt}\): \(25\dfrac{dz}{dt}=15(35)+20(55)=1625\).`,
      ], R`\(65\) mph`),
      P(R`A 6 ft person walks away from a 18 ft lamppost at 2 ft/s. How fast is the shadow lengthening?`, [
        R`\(\dfrac{18}{x+s}=\dfrac{6}{s}\Rightarrow 12s=6x\Rightarrow s=\dfrac{1}{2}x\).`,
        R`\(\dfrac{ds}{dt}=\dfrac{1}{2}(2)\).`,
      ], R`\(1\) ft/s`),
      P(R`A rectangle's length changes at 6 cm/s and its width at -4 cm/s. How fast is the area changing when it is 6 cm by 19 cm?`, [
        R`\(A=lw\Rightarrow\dfrac{dA}{dt}=\dfrac{dl}{dt}w+l\dfrac{dw}{dt}\).`,
        R`\((6)(19)+(6)(-4)\).`,
      ], R`\(90\) cm²/s`),
      P(R`A circle's area grows at 11 m²/s. How fast is the radius growing when \(r=3\) m?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\): \(11=6\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{11}{6\pi}\) m/s`),
      P(R`A circle's radius increases at 7 cm/s. How fast is its area increasing when \(r=30\) cm?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\).`,
        R`\(2\pi(30)(7)\).`,
      ], R`\(420\pi\) cm²/s`),
      P(R`Air fills a spherical balloon at 100 cm³/s. How fast is the radius growing when \(r=2\) cm?`, [
        R`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(100=16\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{25}{4\pi}\approx1.9894\) cm/s`),
      P(R`A 15 ft ladder slides down a wall; its bottom moves away at 1 ft/s. How fast is the top falling when the bottom is 12 ft from the wall?`, [
        R`\(x^2+y^2=225\); at \(x=12\), \(y=9\).`,
        R`\(x\dfrac{dx}{dt}+y\dfrac{dy}{dt}=0\): \(12(1)+9\dfrac{dy}{dt}=0\).`,
        R`\(\dfrac{dy}{dt}=-\dfrac{4}{3}\).`,
      ], R`Falling at \(\dfrac{4}{3}\) ft/s`),
      P(R`A square's side grows at 2 in/min. How fast is the area growing when the side is 10 in?`, [
        R`\(\dfrac{dA}{dt}=2s\dfrac{ds}{dt}\).`,
      ], R`\(40\) in²/min`),
      P(R`A cube's edges grow at 3 cm/s. How fast is the volume growing when an edge is 11 cm?`, [
        R`\(V=s^3\Rightarrow\dfrac{dV}{dt}=3s^2\dfrac{ds}{dt}\).`,
        R`\(3(11)^2(3)\).`,
      ], R`\(1089\) cm³/s`),
      P(R`A sphere's radius grows at 4 mm/s. How fast is its volume growing when \(r=7\) mm?`, [
        R`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(4\pi(7)^2(4)\).`,
      ], R`\(784\pi\) mm³/s`),
      P(R`A cone-shaped tank (point down) is 8 ft tall with top radius 4 ft. Water flows in at 4 ft³/min. How fast is the water rising when it is 4 ft deep?`, [
        R`Similar triangles: \(r=\dfrac{1}{2}h\).`,
        R`\(V=\tfrac13\pi r^2h=\dfrac{16\pi}{192}h^3\).`,
        R`\(\dfrac{dV}{dt}=\dfrac{16\pi}{64}h^2\dfrac{dh}{dt}\).`,
        R`\(4=\dfrac{16\pi(16)}{64}\dfrac{dh}{dt}\Rightarrow\dfrac{dh}{dt}=\dfrac{1}{\pi}\).`,
      ], R`\(\dfrac{1}{\pi}\approx0.3183\) ft/min`),
      P(R`Water pours into a cylindrical tank of radius 5 m at 4 m³/min. How fast does the level rise?`, [
        R`\(V=\pi(5)^2h\) &rArr; \(\dfrac{dV}{dt}=25\pi\dfrac{dh}{dt}\).`,
      ], R`\(\dfrac{4}{25\pi}\approx0.0509\) m/min`),
      P(R`Car A is 40 mi north of an intersection heading north at 50 mph; car B is 30 mi east heading east at 25 mph. How fast is the distance between them changing?`, [
        R`\(x^2+y^2=z^2\); now \(z=50\).`,
        R`\(z\dfrac{dz}{dt}=x\dfrac{dx}{dt}+y\dfrac{dy}{dt}\): \(50\dfrac{dz}{dt}=30(25)+40(50)=2750\).`,
      ], R`\(55\) mph`),
      P(R`A 6 ft person walks away from a 20 ft lamppost at 3 ft/s. How fast is the shadow lengthening?`, [
        R`\(\dfrac{20}{x+s}=\dfrac{6}{s}\Rightarrow 14s=6x\Rightarrow s=\dfrac{3}{7}x\).`,
        R`\(\dfrac{ds}{dt}=\dfrac{3}{7}(3)\).`,
      ], R`\(\dfrac{9}{7}\) ft/s`),
      P(R`A rectangle's length changes at -3 cm/s and its width at 2 cm/s. How fast is the area changing when it is 12 cm by 3 cm?`, [
        R`\(A=lw\Rightarrow\dfrac{dA}{dt}=\dfrac{dl}{dt}w+l\dfrac{dw}{dt}\).`,
        R`\((-3)(3)+(12)(2)\).`,
      ], R`\(15\) cm²/s`),
      P(R`A circle's area grows at 18 m²/s. How fast is the radius growing when \(r=4\) m?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\): \(18=8\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{9}{4\pi}\) m/s`),
      P(R`A circle's radius increases at 2 cm/s. How fast is its area increasing when \(r=22\) cm?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\).`,
        R`\(2\pi(22)(2)\).`,
      ], R`\(88\pi\) cm²/s`),
      P(R`Air fills a spherical balloon at 20 cm³/s. How fast is the radius growing when \(r=7\) cm?`, [
        R`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(20=196\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{5}{49\pi}\approx0.0325\) cm/s`),
      P(R`A 17 ft ladder slides down a wall; its bottom moves away at 3 ft/s. How fast is the top falling when the bottom is 15 ft from the wall?`, [
        R`\(x^2+y^2=289\); at \(x=15\), \(y=8\).`,
        R`\(x\dfrac{dx}{dt}+y\dfrac{dy}{dt}=0\): \(15(3)+8\dfrac{dy}{dt}=0\).`,
        R`\(\dfrac{dy}{dt}=-\dfrac{45}{8}\).`,
      ], R`Falling at \(\dfrac{45}{8}\) ft/s`),
      P(R`A square's side grows at 3 in/min. How fast is the area growing when the side is 4 in?`, [
        R`\(\dfrac{dA}{dt}=2s\dfrac{ds}{dt}\).`,
      ], R`\(24\) in²/min`),
      P(R`A cube's edges grow at 1 cm/s. How fast is the volume growing when an edge is 10 cm?`, [
        R`\(V=s^3\Rightarrow\dfrac{dV}{dt}=3s^2\dfrac{ds}{dt}\).`,
        R`\(3(10)^2(1)\).`,
      ], R`\(300\) cm³/s`),
      P(R`A sphere's radius grows at 2 mm/s. How fast is its volume growing when \(r=7\) mm?`, [
        R`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(4\pi(7)^2(2)\).`,
      ], R`\(392\pi\) mm³/s`),
      P(R`A cone-shaped tank (point down) is 6 ft tall with top radius 2 ft. Water flows in at 1 ft³/min. How fast is the water rising when it is 2 ft deep?`, [
        R`Similar triangles: \(r=\dfrac{1}{3}h\).`,
        R`\(V=\tfrac13\pi r^2h=\dfrac{4\pi}{108}h^3\).`,
        R`\(\dfrac{dV}{dt}=\dfrac{4\pi}{36}h^2\dfrac{dh}{dt}\).`,
        R`\(1=\dfrac{4\pi(4)}{36}\dfrac{dh}{dt}\Rightarrow\dfrac{dh}{dt}=\dfrac{9}{4\pi}\).`,
      ], R`\(\dfrac{9}{4\pi}\approx0.7162\) ft/min`),
      P(R`Water pours into a cylindrical tank of radius 1 m at 14 m³/min. How fast does the level rise?`, [
        R`\(V=\pi(1)^2h\) &rArr; \(\dfrac{dV}{dt}=1\pi\dfrac{dh}{dt}\).`,
      ], R`\(\dfrac{14}{\pi}\approx4.4563\) m/min`),
      P(R`Car A is 20 mi north of an intersection heading north at 65 mph; car B is 15 mi east heading east at 30 mph. How fast is the distance between them changing?`, [
        R`\(x^2+y^2=z^2\); now \(z=25\).`,
        R`\(z\dfrac{dz}{dt}=x\dfrac{dx}{dt}+y\dfrac{dy}{dt}\): \(25\dfrac{dz}{dt}=15(30)+20(65)=1750\).`,
      ], R`\(70\) mph`),
      P(R`A 5 ft person walks away from a 20 ft lamppost at 7 ft/s. How fast is the shadow lengthening?`, [
        R`\(\dfrac{20}{x+s}=\dfrac{5}{s}\Rightarrow 15s=5x\Rightarrow s=\dfrac{1}{3}x\).`,
        R`\(\dfrac{ds}{dt}=\dfrac{1}{3}(7)\).`,
      ], R`\(\dfrac{7}{3}\) ft/s`),
      P(R`A rectangle's length changes at -4 cm/s and its width at -1 cm/s. How fast is the area changing when it is 17 cm by 20 cm?`, [
        R`\(A=lw\Rightarrow\dfrac{dA}{dt}=\dfrac{dl}{dt}w+l\dfrac{dw}{dt}\).`,
        R`\((-4)(20)+(17)(-1)\).`,
      ], R`\(-97\) cm²/s`),
      P(R`A circle's area grows at 10 m²/s. How fast is the radius growing when \(r=7\) m?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\): \(10=14\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{5}{7\pi}\) m/s`),
      P(R`A circle's radius increases at 8 cm/s. How fast is its area increasing when \(r=28\) cm?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\).`,
        R`\(2\pi(28)(8)\).`,
      ], R`\(448\pi\) cm²/s`),
      P(R`Air fills a spherical balloon at 20 cm³/s. How fast is the radius growing when \(r=2\) cm?`, [
        R`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(20=16\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{5}{4\pi}\approx0.3979\) cm/s`),
      P(R`A 25 ft ladder slides down a wall; its bottom moves away at 4 ft/s. How fast is the top falling when the bottom is 15 ft from the wall?`, [
        R`\(x^2+y^2=625\); at \(x=15\), \(y=20\).`,
        R`\(x\dfrac{dx}{dt}+y\dfrac{dy}{dt}=0\): \(15(4)+20\dfrac{dy}{dt}=0\).`,
        R`\(\dfrac{dy}{dt}=-3\).`,
      ], R`Falling at \(3\) ft/s`),
      P(R`A square's side grows at 6 in/min. How fast is the area growing when the side is 19 in?`, [
        R`\(\dfrac{dA}{dt}=2s\dfrac{ds}{dt}\).`,
      ], R`\(228\) in²/min`),
      P(R`A cube's edges grow at 0.5 cm/s. How fast is the volume growing when an edge is 10 cm?`, [
        R`\(V=s^3\Rightarrow\dfrac{dV}{dt}=3s^2\dfrac{ds}{dt}\).`,
        R`\(3(10)^2(0.5)\).`,
      ], R`\(150\) cm³/s`),
      P(R`A cone-shaped tank (point down) is 9 ft tall with top radius 3 ft. Water flows in at 2 ft³/min. How fast is the water rising when it is 6 ft deep?`, [
        R`Similar triangles: \(r=\dfrac{1}{3}h\).`,
        R`\(V=\tfrac13\pi r^2h=\dfrac{9\pi}{243}h^3\).`,
        R`\(\dfrac{dV}{dt}=\dfrac{9\pi}{81}h^2\dfrac{dh}{dt}\).`,
        R`\(2=\dfrac{9\pi(36)}{81}\dfrac{dh}{dt}\Rightarrow\dfrac{dh}{dt}=\dfrac{1}{2\pi}\).`,
      ], R`\(\dfrac{1}{2\pi}\approx0.1592\) ft/min`),
      P(R`Water pours into a cylindrical tank of radius 5 m at 17 m³/min. How fast does the level rise?`, [
        R`\(V=\pi(5)^2h\) &rArr; \(\dfrac{dV}{dt}=25\pi\dfrac{dh}{dt}\).`,
      ], R`\(\dfrac{17}{25\pi}\approx0.2165\) m/min`),
      P(R`Car A is 20 mi north of an intersection heading north at 25 mph; car B is 15 mi east heading east at 30 mph. How fast is the distance between them changing?`, [
        R`\(x^2+y^2=z^2\); now \(z=25\).`,
        R`\(z\dfrac{dz}{dt}=x\dfrac{dx}{dt}+y\dfrac{dy}{dt}\): \(25\dfrac{dz}{dt}=15(30)+20(25)=950\).`,
      ], R`\(38\) mph`),
      P(R`A 6 ft person walks away from a 16 ft lamppost at 6 ft/s. How fast is the shadow lengthening?`, [
        R`\(\dfrac{16}{x+s}=\dfrac{6}{s}\Rightarrow 10s=6x\Rightarrow s=\dfrac{3}{5}x\).`,
        R`\(\dfrac{ds}{dt}=\dfrac{3}{5}(6)\).`,
      ], R`\(\dfrac{18}{5}\) ft/s`),
      P(R`A rectangle's length changes at -1 cm/s and its width at 1 cm/s. How fast is the area changing when it is 18 cm by 20 cm?`, [
        R`\(A=lw\Rightarrow\dfrac{dA}{dt}=\dfrac{dl}{dt}w+l\dfrac{dw}{dt}\).`,
        R`\((-1)(20)+(18)(1)\).`,
      ], R`\(-2\) cm²/s`),
      P(R`A circle's area grows at 6 m²/s. How fast is the radius growing when \(r=4\) m?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\): \(6=8\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{3}{4\pi}\) m/s`),
      P(R`A circle's radius increases at 4 cm/s. How fast is its area increasing when \(r=23\) cm?`, [
        R`\(\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}\).`,
        R`\(2\pi(23)(4)\).`,
      ], R`\(184\pi\) cm²/s`),
      P(R`Air fills a spherical balloon at 200 cm³/s. How fast is the radius growing when \(r=7\) cm?`, [
        R`\(\dfrac{dV}{dt}=4\pi r^2\dfrac{dr}{dt}\).`,
        R`\(200=196\pi\dfrac{dr}{dt}\).`,
      ], R`\(\dfrac{50}{49\pi}\approx0.3248\) cm/s`),
      P(R`A 13 ft ladder slides down a wall; its bottom moves away at 2 ft/s. How fast is the top falling when the bottom is 5 ft from the wall?`, [
        R`\(x^2+y^2=169\); at \(x=5\), \(y=12\).`,
        R`\(x\dfrac{dx}{dt}+y\dfrac{dy}{dt}=0\): \(5(2)+12\dfrac{dy}{dt}=0\).`,
        R`\(\dfrac{dy}{dt}=-\dfrac{5}{6}\).`,
      ], R`Falling at \(\dfrac{5}{6}\) ft/s`),
      P(R`A square's side grows at 5 in/min. How fast is the area growing when the side is 3 in?`, [
        R`\(\dfrac{dA}{dt}=2s\dfrac{ds}{dt}\).`,
      ], R`\(30\) in²/min`),
      P(R`A cube's edges grow at 1 cm/s. How fast is the volume growing when an edge is 11 cm?`, [
        R`\(V=s^3\Rightarrow\dfrac{dV}{dt}=3s^2\dfrac{ds}{dt}\).`,
        R`\(3(11)^2(1)\).`,
      ], R`\(363\) cm³/s`),
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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`Use linear approximation to estimate \(\sqrt{169.9}\).`, [
        R`\(f=\sqrt x\), \(a=169\), \(f(a)=13\), \(f'(a)=\tfrac{1}{26}\).`,
        R`\(L=13+\tfrac{1}{26}(0.9)\).`,
      ], R`\(\approx13.0346\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{26.6}\).`, [
        R`\(f=x^{1/3}\), \(a=27\), \(f'(a)=\tfrac{1}{3(3)^2}=\tfrac1{27}\).`,
        R`\(L=3+\tfrac{-0.4}{27}\).`,
      ], R`\(\approx2.9852\)`),
      P(R`Use linear approximation to estimate \((0.97)^{10}\).`, [
        R`\(f=x^{10}\), \(a=1\): \(f(1)=1\), \(f'(1)=10\).`,
        R`\(L=1+10(-0.03)\). (Actual: \(0.7374\).)`,
      ], R`\(\approx0.7\)`),
      P(R`Use linear approximation to estimate \(\dfrac{1}{8.2}\).`, [
        R`\(f=\tfrac1x\), \(a=8\): \(f(a)=\tfrac1{8}\), \(f'(a)=-\tfrac1{64}\).`,
        R`\(L=\tfrac1{8}-\tfrac{1}{64}(0.2)\).`,
      ], R`\(\approx0.1219\)`),
      P(R`Use linear approximation to estimate \(e^{0.08}\).`, [
        R`Linearize at \(a=0\): \(L(x)=1+x\).`,
        R`Plug in.`,
      ], R`\(\approx1.08\)`),
      P(R`A square side is measured as 7 cm with possible error 0.05 cm. Use differentials to estimate the error in the area.`, [
        R`\(A=s^2\) &rArr; \(dA=2s\,ds\).`,
        R`Plug in 7 and 0.05.`,
      ], R`\(\approx0.7\)`),
      P(R`Find the linearization of \(f(x)=x^{2}+4x\) at \(a=3\).`, [
        R`\(f(3)=21\), \(f'(x)=2x+4\Rightarrow f'(3)=10\).`,
        R`\(L(x)=21+10(x-3)\).`,
      ], R`\(L(x)=10x-9\)`),
      P(R`Use linear approximation to estimate \((3.05)^2\).`, [
        R`\(f=x^2\), \(a=3\): \(f(a)=9\), \(f'(a)=6\).`,
        R`\(L=9+6(0.05)\).`,
      ], R`\(\approx9.3\)`),
      P(R`Use linear approximation to estimate \(\sqrt{24.4}\).`, [
        R`\(f=\sqrt x\), \(a=25\), \(f(a)=5\), \(f'(a)=\tfrac{1}{10}\).`,
        R`\(L=5+\tfrac{1}{10}(-0.6)\).`,
      ], R`\(\approx4.94\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{7.6}\).`, [
        R`\(f=x^{1/3}\), \(a=8\), \(f'(a)=\tfrac{1}{3(2)^2}=\tfrac1{12}\).`,
        R`\(L=2+\tfrac{-0.4}{12}\).`,
      ], R`\(\approx1.9667\)`),
      P(R`Use linear approximation to estimate \((1.03)^{9}\).`, [
        R`\(f=x^{9}\), \(a=1\): \(f(1)=1\), \(f'(1)=9\).`,
        R`\(L=1+9(0.03)\). (Actual: \(1.3048\).)`,
      ], R`\(\approx1.27\)`),
      P(R`Use linear approximation to estimate \(\dfrac{1}{5.8}\).`, [
        R`\(f=\tfrac1x\), \(a=6\): \(f(a)=\tfrac1{6}\), \(f'(a)=-\tfrac1{36}\).`,
        R`\(L=\tfrac1{6}-\tfrac{1}{36}(-0.2)\).`,
      ], R`\(\approx0.1722\)`),
      P(R`Use linear approximation to estimate \(e^{0.04}\).`, [
        R`Linearize at \(a=0\): \(L(x)=1+x\).`,
        R`Plug in.`,
      ], R`\(\approx1.04\)`),
      P(R`A square side is measured as 14 cm with possible error 0.01 cm. Use differentials to estimate the error in the area.`, [
        R`\(A=s^2\) &rArr; \(dA=2s\,ds\).`,
        R`Plug in 14 and 0.01.`,
      ], R`\(\approx0.28\)`),
      P(R`Find the linearization of \(f(x)=x^{2}-7x\) at \(a=2\).`, [
        R`\(f(2)=-10\), \(f'(x)=2x-7\Rightarrow f'(2)=-3\).`,
        R`\(L(x)=-10-3(x-2)\).`,
      ], R`\(L(x)=-3x-4\)`),
      P(R`Use linear approximation to estimate \((13.02)^2\).`, [
        R`\(f=x^2\), \(a=13\): \(f(a)=169\), \(f'(a)=26\).`,
        R`\(L=169+26(0.02)\).`,
      ], R`\(\approx169.52\)`),
      P(R`Use linear approximation to estimate \(\sqrt{4.6}\).`, [
        R`\(f=\sqrt x\), \(a=4\), \(f(a)=2\), \(f'(a)=\tfrac{1}{4}\).`,
        R`\(L=2+\tfrac{1}{4}(0.6)\).`,
      ], R`\(\approx2.15\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{216.3}\).`, [
        R`\(f=x^{1/3}\), \(a=216\), \(f'(a)=\tfrac{1}{3(6)^2}=\tfrac1{108}\).`,
        R`\(L=6+\tfrac{0.3}{108}\).`,
      ], R`\(\approx6.0028\)`),
      P(R`Use linear approximation to estimate \((0.96)^{6}\).`, [
        R`\(f=x^{6}\), \(a=1\): \(f(1)=1\), \(f'(1)=6\).`,
        R`\(L=1+6(-0.04)\). (Actual: \(0.7828\).)`,
      ], R`\(\approx0.76\)`),
      P(R`Use linear approximation to estimate \(\dfrac{1}{5.3}\).`, [
        R`\(f=\tfrac1x\), \(a=5\): \(f(a)=\tfrac1{5}\), \(f'(a)=-\tfrac1{25}\).`,
        R`\(L=\tfrac1{5}-\tfrac{1}{25}(0.3)\).`,
      ], R`\(\approx0.188\)`),
      P(R`A square side is measured as 11 cm with possible error 0.01 cm. Use differentials to estimate the error in the area.`, [
        R`\(A=s^2\) &rArr; \(dA=2s\,ds\).`,
        R`Plug in 11 and 0.01.`,
      ], R`\(\approx0.22\)`),
      P(R`Find the linearization of \(f(x)=x^{2}-2x\) at \(a=4\).`, [
        R`\(f(4)=8\), \(f'(x)=2x-2\Rightarrow f'(4)=6\).`,
        R`\(L(x)=8+6(x-4)\).`,
      ], R`\(L(x)=6x-16\)`),
      P(R`Use linear approximation to estimate \((5.03)^2\).`, [
        R`\(f=x^2\), \(a=5\): \(f(a)=25\), \(f'(a)=10\).`,
        R`\(L=25+10(0.03)\).`,
      ], R`\(\approx25.3\)`),
      P(R`Use linear approximation to estimate \(\sqrt{24.1}\).`, [
        R`\(f=\sqrt x\), \(a=25\), \(f(a)=5\), \(f'(a)=\tfrac{1}{10}\).`,
        R`\(L=5+\tfrac{1}{10}(-0.9)\).`,
      ], R`\(\approx4.91\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{7.5}\).`, [
        R`\(f=x^{1/3}\), \(a=8\), \(f'(a)=\tfrac{1}{3(2)^2}=\tfrac1{12}\).`,
        R`\(L=2+\tfrac{-0.5}{12}\).`,
      ], R`\(\approx1.9583\)`),
      P(R`Use linear approximation to estimate \((0.96)^{2}\).`, [
        R`\(f=x^{2}\), \(a=1\): \(f(1)=1\), \(f'(1)=2\).`,
        R`\(L=1+2(-0.04)\). (Actual: \(0.9216\).)`,
      ], R`\(\approx0.92\)`),
      P(R`Use linear approximation to estimate \(\dfrac{1}{8.1}\).`, [
        R`\(f=\tfrac1x\), \(a=8\): \(f(a)=\tfrac1{8}\), \(f'(a)=-\tfrac1{64}\).`,
        R`\(L=\tfrac1{8}-\tfrac{1}{64}(0.1)\).`,
      ], R`\(\approx0.1234\)`),
      P(R`Use linear approximation to estimate \(\tan(0.03)\).`, [
        R`Linearize at \(a=0\): \(L(x)=x\).`,
        R`Plug in.`,
      ], R`\(\approx0.03\)`),
      P(R`A square side is measured as 18 cm with possible error 0.2 cm. Use differentials to estimate the error in the area.`, [
        R`\(A=s^2\) &rArr; \(dA=2s\,ds\).`,
        R`Plug in 18 and 0.2.`,
      ], R`\(\approx7.2\)`),
      P(R`Find the linearization of \(f(x)=x^{2}+8x\) at \(a=-5\).`, [
        R`\(f(-5)=-15\), \(f'(x)=2x+8\Rightarrow f'(-5)=-2\).`,
        R`\(L(x)=-15-2(x+5)\).`,
      ], R`\(L(x)=-2x-25\)`),
      P(R`Use linear approximation to estimate \((14.03)^2\).`, [
        R`\(f=x^2\), \(a=14\): \(f(a)=196\), \(f'(a)=28\).`,
        R`\(L=196+28(0.03)\).`,
      ], R`\(\approx196.84\)`),
      P(R`Use linear approximation to estimate \(\sqrt{63.6}\).`, [
        R`\(f=\sqrt x\), \(a=64\), \(f(a)=8\), \(f'(a)=\tfrac{1}{16}\).`,
        R`\(L=8+\tfrac{1}{16}(-0.4)\).`,
      ], R`\(\approx7.975\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{27.6}\).`, [
        R`\(f=x^{1/3}\), \(a=27\), \(f'(a)=\tfrac{1}{3(3)^2}=\tfrac1{27}\).`,
        R`\(L=3+\tfrac{0.6}{27}\).`,
      ], R`\(\approx3.0222\)`),
      P(R`Use linear approximation to estimate \((1.03)^{12}\).`, [
        R`\(f=x^{12}\), \(a=1\): \(f(1)=1\), \(f'(1)=12\).`,
        R`\(L=1+12(0.03)\). (Actual: \(1.4258\).)`,
      ], R`\(\approx1.36\)`),
      P(R`Use linear approximation to estimate \(\dfrac{1}{6.7}\).`, [
        R`\(f=\tfrac1x\), \(a=7\): \(f(a)=\tfrac1{7}\), \(f'(a)=-\tfrac1{49}\).`,
        R`\(L=\tfrac1{7}-\tfrac{1}{49}(-0.3)\).`,
      ], R`\(\approx0.149\)`),
      P(R`Use linear approximation to estimate \(\tan(0.08)\).`, [
        R`Linearize at \(a=0\): \(L(x)=x\).`,
        R`Plug in.`,
      ], R`\(\approx0.08\)`),
      P(R`A square side is measured as 15 cm with possible error 0.05 cm. Use differentials to estimate the error in the area.`, [
        R`\(A=s^2\) &rArr; \(dA=2s\,ds\).`,
        R`Plug in 15 and 0.05.`,
      ], R`\(\approx1.5\)`),
      P(R`Find the linearization of \(f(x)=x^{2}+9x\) at \(a=-4\).`, [
        R`\(f(-4)=-20\), \(f'(x)=2x+9\Rightarrow f'(-4)=1\).`,
        R`\(L(x)=-20+(x+4)\).`,
      ], R`\(L(x)=x-16\)`),
      P(R`Use linear approximation to estimate \((13.95)^2\).`, [
        R`\(f=x^2\), \(a=14\): \(f(a)=196\), \(f'(a)=28\).`,
        R`\(L=196+28(-0.05)\).`,
      ], R`\(\approx194.6\)`),
      P(R`Use linear approximation to estimate \(\sqrt{16.2}\).`, [
        R`\(f=\sqrt x\), \(a=16\), \(f(a)=4\), \(f'(a)=\tfrac{1}{8}\).`,
        R`\(L=4+\tfrac{1}{8}(0.2)\).`,
      ], R`\(\approx4.025\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{63.6}\).`, [
        R`\(f=x^{1/3}\), \(a=64\), \(f'(a)=\tfrac{1}{3(4)^2}=\tfrac1{48}\).`,
        R`\(L=4+\tfrac{-0.4}{48}\).`,
      ], R`\(\approx3.9917\)`),
      P(R`Use linear approximation to estimate \((1.03)^{7}\).`, [
        R`\(f=x^{7}\), \(a=1\): \(f(1)=1\), \(f'(1)=7\).`,
        R`\(L=1+7(0.03)\). (Actual: \(1.2299\).)`,
      ], R`\(\approx1.21\)`),
      P(R`Use linear approximation to estimate \(\dfrac{1}{9.8}\).`, [
        R`\(f=\tfrac1x\), \(a=10\): \(f(a)=\tfrac1{10}\), \(f'(a)=-\tfrac1{100}\).`,
        R`\(L=\tfrac1{10}-\tfrac{1}{100}(-0.2)\).`,
      ], R`\(\approx0.102\)`),
      P(R`Use linear approximation to estimate \(\ln(1.08)\).`, [
        R`Linearize at \(a=1\): \(L(x)=x-1\).`,
        R`Plug in.`,
      ], R`\(\approx0.08\)`),
      P(R`A square side is measured as 5 cm with possible error 0.01 cm. Use differentials to estimate the error in the area.`, [
        R`\(A=s^2\) &rArr; \(dA=2s\,ds\).`,
        R`Plug in 5 and 0.01.`,
      ], R`\(\approx0.1\)`),
      P(R`Find the linearization of \(f(x)=x^{2}-9x\) at \(a=5\).`, [
        R`\(f(5)=-20\), \(f'(x)=2x-9\Rightarrow f'(5)=1\).`,
        R`\(L(x)=-20+(x-5)\).`,
      ], R`\(L(x)=x-25\)`),
      P(R`Use linear approximation to estimate \((10.01)^2\).`, [
        R`\(f=x^2\), \(a=10\): \(f(a)=100\), \(f'(a)=20\).`,
        R`\(L=100+20(0.01)\).`,
      ], R`\(\approx100.2\)`),
      P(R`Use linear approximation to estimate \(\sqrt{81.6}\).`, [
        R`\(f=\sqrt x\), \(a=81\), \(f(a)=9\), \(f'(a)=\tfrac{1}{18}\).`,
        R`\(L=9+\tfrac{1}{18}(0.6)\).`,
      ], R`\(\approx9.0333\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{8.3}\).`, [
        R`\(f=x^{1/3}\), \(a=8\), \(f'(a)=\tfrac{1}{3(2)^2}=\tfrac1{12}\).`,
        R`\(L=2+\tfrac{0.3}{12}\).`,
      ], R`\(\approx2.025\)`),
      P(R`Use linear approximation to estimate \((0.95)^{2}\).`, [
        R`\(f=x^{2}\), \(a=1\): \(f(1)=1\), \(f'(1)=2\).`,
        R`\(L=1+2(-0.05)\). (Actual: \(0.9025\).)`,
      ], R`\(\approx0.9\)`),
      P(R`Use linear approximation to estimate \(\dfrac{1}{2.3}\).`, [
        R`\(f=\tfrac1x\), \(a=2\): \(f(a)=\tfrac1{2}\), \(f'(a)=-\tfrac1{4}\).`,
        R`\(L=\tfrac1{2}-\tfrac{1}{4}(0.3)\).`,
      ], R`\(\approx0.425\)`),
      P(R`Use linear approximation to estimate \(\sqrt{0.91}\).`, [
        R`Linearize at \(a=1\): \(L(x)=1+\tfrac12(x-1)\).`,
        R`Plug in.`,
      ], R`\(\approx0.955\)`),
      P(R`A sphere radius is measured as 20 cm with possible error 0.01 cm. Use differentials to estimate the error in the volume.`, [
        R`\(V=\tfrac43\pi r^3\) &rArr; \(dV=4\pi r^2\,dr\).`,
        R`Plug in 20 and 0.01.`,
      ], R`\(\approx16\pi\)`),
      P(R`Find the linearization of \(f(x)=x^{2}-5x\) at \(a=2\).`, [
        R`\(f(2)=-6\), \(f'(x)=2x-5\Rightarrow f'(2)=-1\).`,
        R`\(L(x)=-6-(x-2)\).`,
      ], R`\(L(x)=-x-4\)`),
      P(R`Use linear approximation to estimate \((11.96)^2\).`, [
        R`\(f=x^2\), \(a=12\): \(f(a)=144\), \(f'(a)=24\).`,
        R`\(L=144+24(-0.04)\).`,
      ], R`\(\approx143.04\)`),
      P(R`Use linear approximation to estimate \(\sqrt{16.8}\).`, [
        R`\(f=\sqrt x\), \(a=16\), \(f(a)=4\), \(f'(a)=\tfrac{1}{8}\).`,
        R`\(L=4+\tfrac{1}{8}(0.8)\).`,
      ], R`\(\approx4.1\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{64.7}\).`, [
        R`\(f=x^{1/3}\), \(a=64\), \(f'(a)=\tfrac{1}{3(4)^2}=\tfrac1{48}\).`,
        R`\(L=4+\tfrac{0.7}{48}\).`,
      ], R`\(\approx4.0146\)`),
      P(R`Use linear approximation to estimate \((1.01)^{11}\).`, [
        R`\(f=x^{11}\), \(a=1\): \(f(1)=1\), \(f'(1)=11\).`,
        R`\(L=1+11(0.01)\). (Actual: \(1.1157\).)`,
      ], R`\(\approx1.11\)`),
      P(R`Use linear approximation to estimate \(\dfrac{1}{4.2}\).`, [
        R`\(f=\tfrac1x\), \(a=4\): \(f(a)=\tfrac1{4}\), \(f'(a)=-\tfrac1{16}\).`,
        R`\(L=\tfrac1{4}-\tfrac{1}{16}(0.2)\).`,
      ], R`\(\approx0.2375\)`),
      P(R`Use linear approximation to estimate \(\sin(-0.07)\).`, [
        R`Linearize at \(a=0\): \(L(x)=x\).`,
        R`Plug in.`,
      ], R`\(\approx-0.07\)`),
      P(R`A sphere radius is measured as 9 cm with possible error 0.1 cm. Use differentials to estimate the error in the volume.`, [
        R`\(V=\tfrac43\pi r^3\) &rArr; \(dV=4\pi r^2\,dr\).`,
        R`Plug in 9 and 0.1.`,
      ], R`\(\approx32.4\pi\)`),
      P(R`Find the linearization of \(f(x)=x^{2}-7x\) at \(a=-2\).`, [
        R`\(f(-2)=18\), \(f'(x)=2x-7\Rightarrow f'(-2)=-11\).`,
        R`\(L(x)=18-11(x+2)\).`,
      ], R`\(L(x)=-11x-4\)`),
      P(R`Use linear approximation to estimate \((2.05)^2\).`, [
        R`\(f=x^2\), \(a=2\): \(f(a)=4\), \(f'(a)=4\).`,
        R`\(L=4+4(0.05)\).`,
      ], R`\(\approx4.2\)`),
      P(R`Use linear approximation to estimate \(\sqrt{48.1}\).`, [
        R`\(f=\sqrt x\), \(a=49\), \(f(a)=7\), \(f'(a)=\tfrac{1}{14}\).`,
        R`\(L=7+\tfrac{1}{14}(-0.9)\).`,
      ], R`\(\approx6.9357\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{124.4}\).`, [
        R`\(f=x^{1/3}\), \(a=125\), \(f'(a)=\tfrac{1}{3(5)^2}=\tfrac1{75}\).`,
        R`\(L=5+\tfrac{-0.6}{75}\).`,
      ], R`\(\approx4.992\)`),
      P(R`Use linear approximation to estimate \((0.97)^{9}\).`, [
        R`\(f=x^{9}\), \(a=1\): \(f(1)=1\), \(f'(1)=9\).`,
        R`\(L=1+9(-0.03)\). (Actual: \(0.7602\).)`,
      ], R`\(\approx0.73\)`),
      P(R`Use linear approximation to estimate \(\dfrac{1}{3.7}\).`, [
        R`\(f=\tfrac1x\), \(a=4\): \(f(a)=\tfrac1{4}\), \(f'(a)=-\tfrac1{16}\).`,
        R`\(L=\tfrac1{4}-\tfrac{1}{16}(-0.3)\).`,
      ], R`\(\approx0.2688\)`),
      P(R`Use linear approximation to estimate \(\tan(-0.03)\).`, [
        R`Linearize at \(a=0\): \(L(x)=x\).`,
        R`Plug in.`,
      ], R`\(\approx-0.03\)`),
      P(R`A circle radius is measured as 12 cm with possible error 0.02 cm. Use differentials to estimate the error in the area.`, [
        R`\(A=\pi r^2\) &rArr; \(dA=2\pi r\,dr\).`,
        R`Plug in 12 and 0.02.`,
      ], R`\(\approx0.48\pi\)`),
      P(R`Use linear approximation to estimate \((11.95)^2\).`, [
        R`\(f=x^2\), \(a=12\): \(f(a)=144\), \(f'(a)=24\).`,
        R`\(L=144+24(-0.05)\).`,
      ], R`\(\approx142.8\)`),
      P(R`Use linear approximation to estimate \(\sqrt{80.4}\).`, [
        R`\(f=\sqrt x\), \(a=81\), \(f(a)=9\), \(f'(a)=\tfrac{1}{18}\).`,
        R`\(L=9+\tfrac{1}{18}(-0.6)\).`,
      ], R`\(\approx8.9667\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{64.6}\).`, [
        R`\(f=x^{1/3}\), \(a=64\), \(f'(a)=\tfrac{1}{3(4)^2}=\tfrac1{48}\).`,
        R`\(L=4+\tfrac{0.6}{48}\).`,
      ], R`\(\approx4.0125\)`),
      P(R`Use linear approximation to estimate \((1.02)^{10}\).`, [
        R`\(f=x^{10}\), \(a=1\): \(f(1)=1\), \(f'(1)=10\).`,
        R`\(L=1+10(0.02)\). (Actual: \(1.219\).)`,
      ], R`\(\approx1.2\)`),
      P(R`Use linear approximation to estimate \(\dfrac{1}{3.9}\).`, [
        R`\(f=\tfrac1x\), \(a=4\): \(f(a)=\tfrac1{4}\), \(f'(a)=-\tfrac1{16}\).`,
        R`\(L=\tfrac1{4}-\tfrac{1}{16}(-0.1)\).`,
      ], R`\(\approx0.2563\)`),
      P(R`Use linear approximation to estimate \(\ln(1.03)\).`, [
        R`Linearize at \(a=1\): \(L(x)=x-1\).`,
        R`Plug in.`,
      ], R`\(\approx0.03\)`),
      P(R`A circle radius is measured as 4 cm with possible error 0.02 cm. Use differentials to estimate the error in the area.`, [
        R`\(A=\pi r^2\) &rArr; \(dA=2\pi r\,dr\).`,
        R`Plug in 4 and 0.02.`,
      ], R`\(\approx0.16\pi\)`),
      P(R`Find the linearization of \(f(x)=x^{2}\) at \(a=5\).`, [
        R`\(f(5)=25\), \(f'(x)=2x\Rightarrow f'(5)=10\).`,
        R`\(L(x)=25+10(x-5)\).`,
      ], R`\(L(x)=10x-25\)`),
      P(R`Use linear approximation to estimate \((9.96)^2\).`, [
        R`\(f=x^2\), \(a=10\): \(f(a)=100\), \(f'(a)=20\).`,
        R`\(L=100+20(-0.04)\).`,
      ], R`\(\approx99.2\)`),
      P(R`Use linear approximation to estimate \(\sqrt{120.9}\).`, [
        R`\(f=\sqrt x\), \(a=121\), \(f(a)=11\), \(f'(a)=\tfrac{1}{22}\).`,
        R`\(L=11+\tfrac{1}{22}(-0.1)\).`,
      ], R`\(\approx10.9955\)`),
      P(R`Use linear approximation to estimate \(\sqrt[3]{215.1}\).`, [
        R`\(f=x^{1/3}\), \(a=216\), \(f'(a)=\tfrac{1}{3(6)^2}=\tfrac1{108}\).`,
        R`\(L=6+\tfrac{-0.9}{108}\).`,
      ], R`\(\approx5.9917\)`),
      P(R`Use linear approximation to estimate \((1.03)^{2}\).`, [
        R`\(f=x^{2}\), \(a=1\): \(f(1)=1\), \(f'(1)=2\).`,
        R`\(L=1+2(0.03)\). (Actual: \(1.0609\).)`,
      ], R`\(\approx1.06\)`),
      P(R`Use linear approximation to estimate \(\dfrac{1}{5.7}\).`, [
        R`\(f=\tfrac1x\), \(a=6\): \(f(a)=\tfrac1{6}\), \(f'(a)=-\tfrac1{36}\).`,
        R`\(L=\tfrac1{6}-\tfrac{1}{36}(-0.3)\).`,
      ], R`\(\approx0.175\)`),
      P(R`Use linear approximation to estimate \(\sin(0.03)\).`, [
        R`Linearize at \(a=0\): \(L(x)=x\).`,
        R`Plug in.`,
      ], R`\(\approx0.03\)`),
      P(R`A sphere radius is measured as 6 cm with possible error 0.02 cm. Use differentials to estimate the error in the volume.`, [
        R`\(V=\tfrac43\pi r^3\) &rArr; \(dV=4\pi r^2\,dr\).`,
        R`Plug in 6 and 0.02.`,
      ], R`\(\approx2.88\pi\)`),
      P(R`Find the linearization of \(f(x)=x^{2}+4x\) at \(a=1\).`, [
        R`\(f(1)=5\), \(f'(x)=2x+4\Rightarrow f'(1)=6\).`,
        R`\(L(x)=5+6(x-1)\).`,
      ], R`\(L(x)=6x-1\)`),
      P(R`Use linear approximation to estimate \((11.03)^2\).`, [
        R`\(f=x^2\), \(a=11\): \(f(a)=121\), \(f'(a)=22\).`,
        R`\(L=121+22(0.03)\).`,
      ], R`\(\approx121.66\)`),
      P(R`Use linear approximation to estimate \(\sqrt{9.6}\).`, [
        R`\(f=\sqrt x\), \(a=9\), \(f(a)=3\), \(f'(a)=\tfrac{1}{6}\).`,
        R`\(L=3+\tfrac{1}{6}(0.6)\).`,
      ], R`\(\approx3.1\)`),
      P(R`Use linear approximation to estimate \((1.04)^{4}\).`, [
        R`\(f=x^{4}\), \(a=1\): \(f(1)=1\), \(f'(1)=4\).`,
        R`\(L=1+4(0.04)\). (Actual: \(1.1699\).)`,
      ], R`\(\approx1.16\)`),
      P(R`Use linear approximation to estimate \(\dfrac{1}{4.3}\).`, [
        R`\(f=\tfrac1x\), \(a=4\): \(f(a)=\tfrac1{4}\), \(f'(a)=-\tfrac1{16}\).`,
        R`\(L=\tfrac1{4}-\tfrac{1}{16}(0.3)\).`,
      ], R`\(\approx0.2313\)`),
      P(R`Use linear approximation to estimate \(e^{-0.08}\).`, [
        R`Linearize at \(a=0\): \(L(x)=1+x\).`,
        R`Plug in.`,
      ], R`\(\approx0.92\)`),
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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`For \(f(x)=x^{3}-6x^{2}-8\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}-12x=3(x)(x-4)\).`,
        R`\(+,-,+\) pattern: max at \(x=0\), min at \(x=4\).`,
        R`\(f''=6x-12=0\Rightarrow x=2\).`,
      ], R`Max \((0,-8)\), min \((4,-40)\), inflection \((2,-24)\)`),
      P(R`Where is \(f(x)=x^{3}-12x^{2}+36x-2\) increasing and decreasing?`, [
        R`\(f'(x)=3(x-2)(x-6)\); critical numbers \(2,\ 6\).`,
        R`Test points: positive outside, negative between.`,
      ], R`Increasing on \((-\infty,2)\cup(6,\infty)\); decreasing on \((2,6)\)`),
      P(R`Find where \(f(x)=x^{3}-9x^{2}+15x-5\) is concave up and concave down.`, [
        R`\(f''(x)=6x-18\), zero at \(x=3\).`,
        R`Negative to the left, positive to the right.`,
      ], R`Down on \((-\infty,3)\), up on \((3,\infty)\); inflection at \(x=3\)`),
      P(R`Use the Second Derivative Test to classify the critical numbers of \(f(x)=x^{3}+12x^{2}+45x-9\).`, [
        R`CPs: \(x=-5,\ -3\). \(f''(x)=6x+24\).`,
        R`\(f''(-5)=-6<0\) &rArr; max; \(f''(-3)=6>0\) &rArr; min.`,
      ], R`Local max at \(x=-5\), local min at \(x=-3\)`),
      P(R`Find the absolute max and min of \(f(x)=-x^{2}+4\) on \([-3,4]\).`, [
        R`\(f'=-2x=0\Rightarrow x=0\).`,
        R`\(f(-3)=-5\), \(f(0)=4\), \(f(4)=-12\).`,
      ], R`Max \(4\) at \(x=0\); min \(-12\) at \(x=4\)`),
      P(R`Find the absolute max and min of \(f(x)=x^{3}-48x-10\) on \([-3,5]\).`, [
        R`\(f'=3x^2-48=0\Rightarrow x=\pm4\); keep the ones inside the interval.`,
        R`\(f(-3)=107\), \(f(5)=-125\), \(f(4)=-138\).`,
      ], R`Max \(107\) at \(x=-3\); min \(-138\) at \(x=4\)`),
      P(R`Find the local extrema of \(f(x)=x^{4}-18x^{2}+2\).`, [
        R`\(f'=4x^3-36x=4x(x-3)(x+3)\); CPs \(0,\pm3\).`,
        R`Signs: \(-,+,-,+\).`,
      ], R`Local max \((0,2)\); local mins \((\pm3,-79)\)`),
      P(R`If \(f'(x)=(x+1)(x-1)^2\), where does \(f\) have local extrema?`, [
        R`\((x-1)^2\ge0\), so the sign of \(f'\) comes from \((x+1)\).`,
        R`Sign changes at \(x=-1\) only (− to +); none at \(x=1\).`,
      ], R`Local min at \(x=-1\); no extremum at \(x=1\)`),
      P(R`Find the absolute max and min of \(f(x)=x+\dfrac{4}{x}\) on \([1,5]\).`, [
        R`\(f'=1-\dfrac{4}{x^2}=0\Rightarrow x=2\).`,
        R`\(f(1)=5\), \(f(2)=4\), \(f(5)=\dfrac{29}{5}\).`,
      ], R`Min \(4\) at \(x=2\); max \(\dfrac{29}{5}\) at \(x=5\)`),
      P(R`For \(f(x)=x^{3}-3x^{2}-9x-1\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}-6x-9=3(x+1)(x-3)\).`,
        R`\(+,-,+\) pattern: max at \(x=-1\), min at \(x=3\).`,
        R`\(f''=6x-6=0\Rightarrow x=1\).`,
      ], R`Max \((-1,4)\), min \((3,-28)\), inflection \((1,-12)\)`),
      P(R`Where is \(f(x)=x^{3}-3x^{2}-9x-1\) increasing and decreasing?`, [
        R`\(f'(x)=3(x+1)(x-3)\); critical numbers \(-1,\ 3\).`,
        R`Test points: positive outside, negative between.`,
      ], R`Increasing on \((-\infty,-1)\cup(3,\infty)\); decreasing on \((-1,3)\)`),
      P(R`Find where \(f(x)=x^{3}-12x^{2}+45x-7\) is concave up and concave down.`, [
        R`\(f''(x)=6x-24\), zero at \(x=4\).`,
        R`Negative to the left, positive to the right.`,
      ], R`Down on \((-\infty,4)\), up on \((4,\infty)\); inflection at \(x=4\)`),
      P(R`Use the Second Derivative Test to classify the critical numbers of \(f(x)=x^{3}+3x^{2}-9x-6\).`, [
        R`CPs: \(x=-3,\ 1\). \(f''(x)=6x+6\).`,
        R`\(f''(-3)=-12<0\) &rArr; max; \(f''(1)=12>0\) &rArr; min.`,
      ], R`Local max at \(x=-3\), local min at \(x=1\)`),
      P(R`Find the absolute max and min of \(f(x)=3x^{2}+12x+3\) on \([-6,2]\).`, [
        R`\(f'=6x+12=0\Rightarrow x=-2\).`,
        R`\(f(-6)=39\), \(f(-2)=-9\), \(f(2)=39\).`,
      ], R`Max \(39\) at \(x=-6 and 2\); min \(-9\) at \(x=-2\)`),
      P(R`Find the absolute max and min of \(f(x)=x^{3}-12x-19\) on \([-4,2]\).`, [
        R`\(f'=3x^2-12=0\Rightarrow x=\pm2\); keep the ones inside the interval.`,
        R`\(f(-4)=-35\), \(f(2)=-35\), \(f(-2)=-3\).`,
      ], R`Max \(-3\) at \(x=-2\); min \(-35\) at \(x=-4 and 2\)`),
      P(R`Find the local extrema of \(f(x)=x^{4}-18x^{2}+6\).`, [
        R`\(f'=4x^3-36x=4x(x-3)(x+3)\); CPs \(0,\pm3\).`,
        R`Signs: \(-,+,-,+\).`,
      ], R`Local max \((0,6)\); local mins \((\pm3,-75)\)`),
      P(R`If \(f'(x)=-(x+3)(x+1)^2\), where does \(f\) have local extrema?`, [
        R`\((x+1)^2\ge0\), so the sign of \(f'\) comes from \(-(x+3)\).`,
        R`Sign changes at \(x=-3\) only (+ to −); none at \(x=-1\).`,
      ], R`Local max at \(x=-3\); no extremum at \(x=-1\)`),
      P(R`Find the absolute max and min of \(f(x)=x+\dfrac{25}{x}\) on \([1,9]\).`, [
        R`\(f'=1-\dfrac{25}{x^2}=0\Rightarrow x=5\).`,
        R`\(f(1)=26\), \(f(5)=10\), \(f(9)=\dfrac{106}{9}\).`,
      ], R`Min \(10\) at \(x=5\); max \(26\) at \(x=1\)`),
      P(R`For \(f(x)=x^{3}-9x^{2}+24x+2\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}-18x+24=3(x-2)(x-4)\).`,
        R`\(+,-,+\) pattern: max at \(x=2\), min at \(x=4\).`,
        R`\(f''=6x-18=0\Rightarrow x=3\).`,
      ], R`Max \((2,22)\), min \((4,18)\), inflection \((3,20)\)`),
      P(R`Where is \(f(x)=x^{3}+6x^{2}-15x-7\) increasing and decreasing?`, [
        R`\(f'(x)=3(x+5)(x-1)\); critical numbers \(-5,\ 1\).`,
        R`Test points: positive outside, negative between.`,
      ], R`Increasing on \((-\infty,-5)\cup(1,\infty)\); decreasing on \((-5,1)\)`),
      P(R`Find where \(f(x)=x^{3}-15x^{2}+63x-6\) is concave up and concave down.`, [
        R`\(f''(x)=6x-30\), zero at \(x=5\).`,
        R`Negative to the left, positive to the right.`,
      ], R`Down on \((-\infty,5)\), up on \((5,\infty)\); inflection at \(x=5\)`),
      P(R`Use the Second Derivative Test to classify the critical numbers of \(f(x)=x^{3}+3x^{2}-9x+5\).`, [
        R`CPs: \(x=-3,\ 1\). \(f''(x)=6x+6\).`,
        R`\(f''(-3)=-12<0\) &rArr; max; \(f''(1)=12>0\) &rArr; min.`,
      ], R`Local max at \(x=-3\), local min at \(x=1\)`),
      P(R`Find the absolute max and min of \(f(x)=3x^{2}+18x-9\) on \([-5,-2]\).`, [
        R`\(f'=6x+18=0\Rightarrow x=-3\).`,
        R`\(f(-5)=-24\), \(f(-3)=-36\), \(f(-2)=-33\).`,
      ], R`Max \(-24\) at \(x=-5\); min \(-36\) at \(x=-3\)`),
      P(R`Find the absolute max and min of \(f(x)=x^{3}-48x+5\) on \([-1,7]\).`, [
        R`\(f'=3x^2-48=0\Rightarrow x=\pm4\); keep the ones inside the interval.`,
        R`\(f(-1)=52\), \(f(7)=12\), \(f(4)=-123\).`,
      ], R`Max \(52\) at \(x=-1\); min \(-123\) at \(x=4\)`),
      P(R`Find the local extrema of \(f(x)=x^{4}-18x^{2}\).`, [
        R`\(f'=4x^3-36x=4x(x-3)(x+3)\); CPs \(0,\pm3\).`,
        R`Signs: \(-,+,-,+\).`,
      ], R`Local max \((0,0)\); local mins \((\pm3,-81)\)`),
      P(R`If \(f'(x)=(x-3)(x-5)^2\), where does \(f\) have local extrema?`, [
        R`\((x-5)^2\ge0\), so the sign of \(f'\) comes from \((x-3)\).`,
        R`Sign changes at \(x=3\) only (− to +); none at \(x=5\).`,
      ], R`Local min at \(x=3\); no extremum at \(x=5\)`),
      P(R`Find the absolute max and min of \(f(x)=x+\dfrac{16}{x}\) on \([3,7]\).`, [
        R`\(f'=1-\dfrac{16}{x^2}=0\Rightarrow x=4\).`,
        R`\(f(3)=\dfrac{25}{3}\), \(f(4)=8\), \(f(7)=\dfrac{65}{7}\).`,
      ], R`Min \(8\) at \(x=4\); max \(\dfrac{65}{7}\) at \(x=7\)`),
      P(R`For \(f(x)=x^{3}-18x^{2}+81x-1\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}-36x+81=3(x-3)(x-9)\).`,
        R`\(+,-,+\) pattern: max at \(x=3\), min at \(x=9\).`,
        R`\(f''=6x-36=0\Rightarrow x=6\).`,
      ], R`Max \((3,107)\), min \((9,-1)\), inflection \((6,53)\)`),
      P(R`Where is \(f(x)=x^{3}-6x^{2}+9x+9\) increasing and decreasing?`, [
        R`\(f'(x)=3(x-1)(x-3)\); critical numbers \(1,\ 3\).`,
        R`Test points: positive outside, negative between.`,
      ], R`Increasing on \((-\infty,1)\cup(3,\infty)\); decreasing on \((1,3)\)`),
      P(R`Find where \(f(x)=x^{3}-15x^{2}+48x-9\) is concave up and concave down.`, [
        R`\(f''(x)=6x-30\), zero at \(x=5\).`,
        R`Negative to the left, positive to the right.`,
      ], R`Down on \((-\infty,5)\), up on \((5,\infty)\); inflection at \(x=5\)`),
      P(R`Use the Second Derivative Test to classify the critical numbers of \(f(x)=x^{3}-9x^{2}-2\).`, [
        R`CPs: \(x=0,\ 6\). \(f''(x)=6x-18\).`,
        R`\(f''(0)=-18<0\) &rArr; max; \(f''(6)=18>0\) &rArr; min.`,
      ], R`Local max at \(x=0\), local min at \(x=6\)`),
      P(R`Find the absolute max and min of \(f(x)=-3x^{2}+4\) on \([-1,1]\).`, [
        R`\(f'=-6x=0\Rightarrow x=0\).`,
        R`\(f(-1)=1\), \(f(0)=4\), \(f(1)=1\).`,
      ], R`Max \(4\) at \(x=0\); min \(1\) at \(x=-1 and 1\)`),
      P(R`Find the absolute max and min of \(f(x)=x^{3}-48x+11\) on \([-4,5]\).`, [
        R`\(f'=3x^2-48=0\Rightarrow x=\pm4\); keep the ones inside the interval.`,
        R`\(f(-4)=139\), \(f(5)=-104\), \(f(4)=-117\).`,
      ], R`Max \(139\) at \(x=-4\); min \(-117\) at \(x=4\)`),
      P(R`Find the local extrema of \(f(x)=x^{4}-2x^{2}+6\).`, [
        R`\(f'=4x^3-4x=4x(x-1)(x+1)\); CPs \(0,\pm1\).`,
        R`Signs: \(-,+,-,+\).`,
      ], R`Local max \((0,6)\); local mins \((\pm1,5)\)`),
      P(R`If \(f'(x)=-(x-1)(x+1)^2\), where does \(f\) have local extrema?`, [
        R`\((x+1)^2\ge0\), so the sign of \(f'\) comes from \(-(x-1)\).`,
        R`Sign changes at \(x=1\) only (+ to −); none at \(x=-1\).`,
      ], R`Local max at \(x=1\); no extremum at \(x=-1\)`),
      P(R`For \(f(x)=x^{3}+3x^{2}-24x-7\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}+6x-24=3(x+4)(x-2)\).`,
        R`\(+,-,+\) pattern: max at \(x=-4\), min at \(x=2\).`,
        R`\(f''=6x+6=0\Rightarrow x=-1\).`,
      ], R`Max \((-4,73)\), min \((2,-35)\), inflection \((-1,19)\)`),
      P(R`Where is \(f(x)=x^{3}-3x^{2}-9x\) increasing and decreasing?`, [
        R`\(f'(x)=3(x+1)(x-3)\); critical numbers \(-1,\ 3\).`,
        R`Test points: positive outside, negative between.`,
      ], R`Increasing on \((-\infty,-1)\cup(3,\infty)\); decreasing on \((-1,3)\)`),
      P(R`Find where \(f(x)=x^{3}-9x^{2}+24x-5\) is concave up and concave down.`, [
        R`\(f''(x)=6x-18\), zero at \(x=3\).`,
        R`Negative to the left, positive to the right.`,
      ], R`Down on \((-\infty,3)\), up on \((3,\infty)\); inflection at \(x=3\)`),
      P(R`Use the Second Derivative Test to classify the critical numbers of \(f(x)=x^{3}-9x^{2}+24x-7\).`, [
        R`CPs: \(x=2,\ 4\). \(f''(x)=6x-18\).`,
        R`\(f''(2)=-6<0\) &rArr; max; \(f''(4)=6>0\) &rArr; min.`,
      ], R`Local max at \(x=2\), local min at \(x=4\)`),
      P(R`Find the absolute max and min of \(f(x)=-3x^{2}-12x+5\) on \([-5,2]\).`, [
        R`\(f'=-6x-12=0\Rightarrow x=-2\).`,
        R`\(f(-5)=-10\), \(f(-2)=17\), \(f(2)=-31\).`,
      ], R`Max \(17\) at \(x=-2\); min \(-31\) at \(x=2\)`),
      P(R`Find the absolute max and min of \(f(x)=x^{3}-3x-15\) on \([-3,3]\).`, [
        R`\(f'=3x^2-3=0\Rightarrow x=\pm1\); keep the ones inside the interval.`,
        R`\(f(-3)=-33\), \(f(3)=3\), \(f(1)=-17\), \(f(-1)=-13\).`,
      ], R`Max \(3\) at \(x=3\); min \(-33\) at \(x=-3\)`),
      P(R`Find the local extrema of \(f(x)=x^{4}-32x^{2}-4\).`, [
        R`\(f'=4x^3-64x=4x(x-4)(x+4)\); CPs \(0,\pm4\).`,
        R`Signs: \(-,+,-,+\).`,
      ], R`Local max \((0,-4)\); local mins \((\pm4,-260)\)`),
      P(R`If \(f'(x)=(x+2)(x-2)^2\), where does \(f\) have local extrema?`, [
        R`\((x-2)^2\ge0\), so the sign of \(f'\) comes from \((x+2)\).`,
        R`Sign changes at \(x=-2\) only (− to +); none at \(x=2\).`,
      ], R`Local min at \(x=-2\); no extremum at \(x=2\)`),
      P(R`Find the absolute max and min of \(f(x)=x+\dfrac{36}{x}\) on \([5,10]\).`, [
        R`\(f'=1-\dfrac{36}{x^2}=0\Rightarrow x=6\).`,
        R`\(f(5)=\dfrac{61}{5}\), \(f(6)=12\), \(f(10)=\dfrac{68}{5}\).`,
      ], R`Min \(12\) at \(x=6\); max \(\dfrac{68}{5}\) at \(x=10\)`),
      P(R`For \(f(x)=x^{3}-15x^{2}+63x+6\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}-30x+63=3(x-3)(x-7)\).`,
        R`\(+,-,+\) pattern: max at \(x=3\), min at \(x=7\).`,
        R`\(f''=6x-30=0\Rightarrow x=5\).`,
      ], R`Max \((3,87)\), min \((7,55)\), inflection \((5,71)\)`),
      P(R`Where is \(f(x)=x^{3}-6x^{2}+4\) increasing and decreasing?`, [
        R`\(f'(x)=3(x)(x-4)\); critical numbers \(0,\ 4\).`,
        R`Test points: positive outside, negative between.`,
      ], R`Increasing on \((-\infty,0)\cup(4,\infty)\); decreasing on \((0,4)\)`),
      P(R`Find where \(f(x)=x^{3}+6x^{2}+9x+5\) is concave up and concave down.`, [
        R`\(f''(x)=6x+12\), zero at \(x=-2\).`,
        R`Negative to the left, positive to the right.`,
      ], R`Down on \((-\infty,-2)\), up on \((-2,\infty)\); inflection at \(x=-2\)`),
      P(R`Use the Second Derivative Test to classify the critical numbers of \(f(x)=x^{3}+6x^{2}-15x+4\).`, [
        R`CPs: \(x=-5,\ 1\). \(f''(x)=6x+12\).`,
        R`\(f''(-5)=-18<0\) &rArr; max; \(f''(1)=18>0\) &rArr; min.`,
      ], R`Local max at \(x=-5\), local min at \(x=1\)`),
      P(R`Find the absolute max and min of \(f(x)=-3x^{2}+18x+8\) on \([2,5]\).`, [
        R`\(f'=-6x+18=0\Rightarrow x=3\).`,
        R`\(f(2)=32\), \(f(3)=35\), \(f(5)=23\).`,
      ], R`Max \(35\) at \(x=3\); min \(23\) at \(x=5\)`),
      P(R`Find the absolute max and min of \(f(x)=x^{3}-48x+11\) on \([-5,5]\).`, [
        R`\(f'=3x^2-48=0\Rightarrow x=\pm4\); keep the ones inside the interval.`,
        R`\(f(-5)=126\), \(f(5)=-104\), \(f(4)=-117\), \(f(-4)=139\).`,
      ], R`Max \(139\) at \(x=-4\); min \(-117\) at \(x=4\)`),
      P(R`Find the local extrema of \(f(x)=x^{4}-32x^{2}+7\).`, [
        R`\(f'=4x^3-64x=4x(x-4)(x+4)\); CPs \(0,\pm4\).`,
        R`Signs: \(-,+,-,+\).`,
      ], R`Local max \((0,7)\); local mins \((\pm4,-249)\)`),
      P(R`Find the absolute max and min of \(f(x)=x+\dfrac{36}{x}\) on \([4,10]\).`, [
        R`\(f'=1-\dfrac{36}{x^2}=0\Rightarrow x=6\).`,
        R`\(f(4)=13\), \(f(6)=12\), \(f(10)=\dfrac{68}{5}\).`,
      ], R`Min \(12\) at \(x=6\); max \(\dfrac{68}{5}\) at \(x=10\)`),
      P(R`For \(f(x)=x^{3}-9x^{2}+24x+5\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}-18x+24=3(x-2)(x-4)\).`,
        R`\(+,-,+\) pattern: max at \(x=2\), min at \(x=4\).`,
        R`\(f''=6x-18=0\Rightarrow x=3\).`,
      ], R`Max \((2,25)\), min \((4,21)\), inflection \((3,23)\)`),
      P(R`Where is \(f(x)=x^{3}-27x-1\) increasing and decreasing?`, [
        R`\(f'(x)=3(x+3)(x-3)\); critical numbers \(-3,\ 3\).`,
        R`Test points: positive outside, negative between.`,
      ], R`Increasing on \((-\infty,-3)\cup(3,\infty)\); decreasing on \((-3,3)\)`),
      P(R`Find where \(f(x)=x^{3}+6x^{2}+9x+7\) is concave up and concave down.`, [
        R`\(f''(x)=6x+12\), zero at \(x=-2\).`,
        R`Negative to the left, positive to the right.`,
      ], R`Down on \((-\infty,-2)\), up on \((-2,\infty)\); inflection at \(x=-2\)`),
      P(R`Use the Second Derivative Test to classify the critical numbers of \(f(x)=x^{3}-3x^{2}-9x+4\).`, [
        R`CPs: \(x=-1,\ 3\). \(f''(x)=6x-6\).`,
        R`\(f''(-1)=-12<0\) &rArr; max; \(f''(3)=12>0\) &rArr; min.`,
      ], R`Local max at \(x=-1\), local min at \(x=3\)`),
      P(R`Find the absolute max and min of \(f(x)=-x^{2}-6x\) on \([-4,1]\).`, [
        R`\(f'=-2x-6=0\Rightarrow x=-3\).`,
        R`\(f(-4)=8\), \(f(-3)=9\), \(f(1)=-7\).`,
      ], R`Max \(9\) at \(x=-3\); min \(-7\) at \(x=1\)`),
      P(R`Find the absolute max and min of \(f(x)=x^{3}-12x+13\) on \([-4,2]\).`, [
        R`\(f'=3x^2-12=0\Rightarrow x=\pm2\); keep the ones inside the interval.`,
        R`\(f(-4)=-3\), \(f(2)=-3\), \(f(-2)=29\).`,
      ], R`Max \(29\) at \(x=-2\); min \(-3\) at \(x=-4 and 2\)`),
      P(R`Find the local extrema of \(f(x)=x^{4}-18x^{2}-4\).`, [
        R`\(f'=4x^3-36x=4x(x-3)(x+3)\); CPs \(0,\pm3\).`,
        R`Signs: \(-,+,-,+\).`,
      ], R`Local max \((0,-4)\); local mins \((\pm3,-85)\)`),
      P(R`If \(f'(x)=(x-2)(x+4)^2\), where does \(f\) have local extrema?`, [
        R`\((x+4)^2\ge0\), so the sign of \(f'\) comes from \((x-2)\).`,
        R`Sign changes at \(x=2\) only (− to +); none at \(x=-4\).`,
      ], R`Local min at \(x=2\); no extremum at \(x=-4\)`),
      P(R`Find the absolute max and min of \(f(x)=x+\dfrac{16}{x}\) on \([1,5]\).`, [
        R`\(f'=1-\dfrac{16}{x^2}=0\Rightarrow x=4\).`,
        R`\(f(1)=17\), \(f(4)=8\), \(f(5)=\dfrac{41}{5}\).`,
      ], R`Min \(8\) at \(x=4\); max \(17\) at \(x=1\)`),
      P(R`For \(f(x)=x^{3}-3x-7\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}-3=3(x+1)(x-1)\).`,
        R`\(+,-,+\) pattern: max at \(x=-1\), min at \(x=1\).`,
        R`\(f''=6x+0=0\Rightarrow x=0\).`,
      ], R`Max \((-1,-5)\), min \((1,-9)\), inflection \((0,-7)\)`),
      P(R`Where is \(f(x)=x^{3}+6x^{2}+9x-7\) increasing and decreasing?`, [
        R`\(f'(x)=3(x+3)(x+1)\); critical numbers \(-3,\ -1\).`,
        R`Test points: positive outside, negative between.`,
      ], R`Increasing on \((-\infty,-3)\cup(-1,\infty)\); decreasing on \((-3,-1)\)`),
      P(R`Find where \(f(x)=x^{3}+9x^{2}+15x-4\) is concave up and concave down.`, [
        R`\(f''(x)=6x+18\), zero at \(x=-3\).`,
        R`Negative to the left, positive to the right.`,
      ], R`Down on \((-\infty,-3)\), up on \((-3,\infty)\); inflection at \(x=-3\)`),
      P(R`Use the Second Derivative Test to classify the critical numbers of \(f(x)=x^{3}-9x^{2}+24x+3\).`, [
        R`CPs: \(x=2,\ 4\). \(f''(x)=6x-18\).`,
        R`\(f''(2)=-6<0\) &rArr; max; \(f''(4)=6>0\) &rArr; min.`,
      ], R`Local max at \(x=2\), local min at \(x=4\)`),
      P(R`Find the absolute max and min of \(f(x)=-2x^{2}+8x+3\) on \([0,6]\).`, [
        R`\(f'=-4x+8=0\Rightarrow x=2\).`,
        R`\(f(0)=3\), \(f(2)=11\), \(f(6)=-21\).`,
      ], R`Max \(11\) at \(x=2\); min \(-21\) at \(x=6\)`),
      P(R`Find the absolute max and min of \(f(x)=x^{3}-3x-18\) on \([0,4]\).`, [
        R`\(f'=3x^2-3=0\Rightarrow x=\pm1\); keep the ones inside the interval.`,
        R`\(f(0)=-18\), \(f(4)=34\), \(f(1)=-20\).`,
      ], R`Max \(34\) at \(x=4\); min \(-20\) at \(x=1\)`),
      P(R`Find the local extrema of \(f(x)=x^{4}-32x^{2}+6\).`, [
        R`\(f'=4x^3-64x=4x(x-4)(x+4)\); CPs \(0,\pm4\).`,
        R`Signs: \(-,+,-,+\).`,
      ], R`Local max \((0,6)\); local mins \((\pm4,-250)\)`),
      P(R`If \(f'(x)=-(x+5)(x-4)^2\), where does \(f\) have local extrema?`, [
        R`\((x-4)^2\ge0\), so the sign of \(f'\) comes from \(-(x+5)\).`,
        R`Sign changes at \(x=-5\) only (+ to −); none at \(x=4\).`,
      ], R`Local max at \(x=-5\); no extremum at \(x=4\)`),
      P(R`Find the absolute max and min of \(f(x)=x+\dfrac{9}{x}\) on \([2,4]\).`, [
        R`\(f'=1-\dfrac{9}{x^2}=0\Rightarrow x=3\).`,
        R`\(f(2)=\dfrac{13}{2}\), \(f(3)=6\), \(f(4)=\dfrac{25}{4}\).`,
      ], R`Min \(6\) at \(x=3\); max \(\dfrac{13}{2}\) at \(x=2\)`),
      P(R`For \(f(x)=x^{3}-12x^{2}+36x-6\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}-24x+36=3(x-2)(x-6)\).`,
        R`\(+,-,+\) pattern: max at \(x=2\), min at \(x=6\).`,
        R`\(f''=6x-24=0\Rightarrow x=4\).`,
      ], R`Max \((2,26)\), min \((6,-6)\), inflection \((4,10)\)`),
      P(R`Where is \(f(x)=x^{3}+6x^{2}-4\) increasing and decreasing?`, [
        R`\(f'(x)=3(x+4)(x)\); critical numbers \(-4,\ 0\).`,
        R`Test points: positive outside, negative between.`,
      ], R`Increasing on \((-\infty,-4)\cup(0,\infty)\); decreasing on \((-4,0)\)`),
      P(R`Find where \(f(x)=x^{3}-18x^{2}+81x-8\) is concave up and concave down.`, [
        R`\(f''(x)=6x-36\), zero at \(x=6\).`,
        R`Negative to the left, positive to the right.`,
      ], R`Down on \((-\infty,6)\), up on \((6,\infty)\); inflection at \(x=6\)`),
      P(R`Use the Second Derivative Test to classify the critical numbers of \(f(x)=x^{3}+6x^{2}-15x-2\).`, [
        R`CPs: \(x=-5,\ 1\). \(f''(x)=6x+12\).`,
        R`\(f''(-5)=-18<0\) &rArr; max; \(f''(1)=18>0\) &rArr; min.`,
      ], R`Local max at \(x=-5\), local min at \(x=1\)`),
      P(R`Find the absolute max and min of \(f(x)=-x^{2}+8x-6\) on \([0,7]\).`, [
        R`\(f'=-2x+8=0\Rightarrow x=4\).`,
        R`\(f(0)=-6\), \(f(4)=10\), \(f(7)=1\).`,
      ], R`Max \(10\) at \(x=4\); min \(-6\) at \(x=0\)`),
      P(R`Find the absolute max and min of \(f(x)=x^{3}-3x-10\) on \([0,1]\).`, [
        R`\(f'=3x^2-3=0\Rightarrow x=\pm1\); keep the ones inside the interval.`,
        R`\(f(0)=-10\), \(f(1)=-12\).`,
      ], R`Max \(-10\) at \(x=0\); min \(-12\) at \(x=1\)`),
      P(R`Find the local extrema of \(f(x)=x^{4}-32x^{2}-7\).`, [
        R`\(f'=4x^3-64x=4x(x-4)(x+4)\); CPs \(0,\pm4\).`,
        R`Signs: \(-,+,-,+\).`,
      ], R`Local max \((0,-7)\); local mins \((\pm4,-263)\)`),
      P(R`If \(f'(x)=(x-3)(x-2)^2\), where does \(f\) have local extrema?`, [
        R`\((x-2)^2\ge0\), so the sign of \(f'\) comes from \((x-3)\).`,
        R`Sign changes at \(x=3\) only (− to +); none at \(x=2\).`,
      ], R`Local min at \(x=3\); no extremum at \(x=2\)`),
      P(R`Find the absolute max and min of \(f(x)=x+\dfrac{16}{x}\) on \([2,5]\).`, [
        R`\(f'=1-\dfrac{16}{x^2}=0\Rightarrow x=4\).`,
        R`\(f(2)=10\), \(f(4)=8\), \(f(5)=\dfrac{41}{5}\).`,
      ], R`Min \(8\) at \(x=4\); max \(10\) at \(x=2\)`),
      P(R`For \(f(x)=x^{3}+12x^{2}+45x+1\), find the local extrema and the inflection point.`, [
        R`\(f'(x)=3x^{2}+24x+45=3(x+5)(x+3)\).`,
        R`\(+,-,+\) pattern: max at \(x=-5\), min at \(x=-3\).`,
        R`\(f''=6x+24=0\Rightarrow x=-4\).`,
      ], R`Max \((-5,-49)\), min \((-3,-53)\), inflection \((-4,-51)\)`),
      P(R`Where is \(f(x)=x^{3}-9x^{2}+2\) increasing and decreasing?`, [
        R`\(f'(x)=3(x)(x-6)\); critical numbers \(0,\ 6\).`,
        R`Test points: positive outside, negative between.`,
      ], R`Increasing on \((-\infty,0)\cup(6,\infty)\); decreasing on \((0,6)\)`),
      P(R`Find where \(f(x)=x^{3}-12x+7\) is concave up and concave down.`, [
        R`\(f''(x)=6x+0\), zero at \(x=0\).`,
        R`Negative to the left, positive to the right.`,
      ], R`Down on \((-\infty,0)\), up on \((0,\infty)\); inflection at \(x=0\)`),
      P(R`Use the Second Derivative Test to classify the critical numbers of \(f(x)=x^{3}-3x^{2}-3\).`, [
        R`CPs: \(x=0,\ 2\). \(f''(x)=6x-6\).`,
        R`\(f''(0)=-6<0\) &rArr; max; \(f''(2)=6>0\) &rArr; min.`,
      ], R`Local max at \(x=0\), local min at \(x=2\)`),
      P(R`Find the absolute max and min of \(f(x)=-3x^{2}+24x+5\) on \([1,7]\).`, [
        R`\(f'=-6x+24=0\Rightarrow x=4\).`,
        R`\(f(1)=26\), \(f(4)=53\), \(f(7)=26\).`,
      ], R`Max \(53\) at \(x=4\); min \(26\) at \(x=1 and 7\)`),
      P(R`Find the absolute max and min of \(f(x)=x^{3}-27x+14\) on \([0,1]\).`, [
        R`\(f'=3x^2-27=0\Rightarrow x=\pm3\); keep the ones inside the interval.`,
        R`\(f(0)=14\), \(f(1)=-12\).`,
      ], R`Max \(14\) at \(x=0\); min \(-12\) at \(x=1\)`),
      P(R`Find the local extrema of \(f(x)=x^{4}-2x^{2}-2\).`, [
        R`\(f'=4x^3-4x=4x(x-1)(x+1)\); CPs \(0,\pm1\).`,
        R`Signs: \(-,+,-,+\).`,
      ], R`Local max \((0,-2)\); local mins \((\pm1,-3)\)`),
      P(R`If \(f'(x)=(x)(x+4)^2\), where does \(f\) have local extrema?`, [
        R`\((x+4)^2\ge0\), so the sign of \(f'\) comes from \((x)\).`,
        R`Sign changes at \(x=0\) only (− to +); none at \(x=-4\).`,
      ], R`Local min at \(x=0\); no extremum at \(x=-4\)`),
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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`Find \(c\) satisfying the MVT for \(f(x)=-3x^{2}-2x+6\) on \([3,4]\).`, [
        R`Average slope \(=\dfrac{-50-(-27)}{1}=-23\).`,
        R`\(-6c-2=-23\).`,
      ], R`\(c=\dfrac{7}{2}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,11]\).`, [
        R`Average slope \(=121\); \(3c^2=121\).`,
      ], R`\(c=\dfrac{11}{\sqrt3}\approx6.351\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\sqrt x\) on \([0,49]\).`, [
        R`Average slope \(=\dfrac{7-0}{49}=\dfrac1{7}\).`,
        R`\(\dfrac{1}{2\sqrt c}=\dfrac1{7}\Rightarrow\sqrt c=\dfrac{7}{2}\).`,
      ], R`\(c=\dfrac{49}{4}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\dfrac1x\) on \([1,9]\).`, [
        R`Average slope \(=\dfrac{\frac1{9}-\frac1{1}}{8}=-\dfrac{1}{9}\).`,
        R`\(-\dfrac1{c^2}=-\dfrac1{9}\Rightarrow c^2=9\).`,
      ], R`\(c=3\)`),
      P(R`Verify Rolle's Theorem for \(f(x)=2x^{2}-24x+57\) on \([3,9]\) and find \(c\).`, [
        R`\(f(3)=3\) and \(f(9)=3\): equal ✓.`,
        R`\(f'(c)=4c-24=0\).`,
      ], R`\(c=6\)`),
      P(R`If \(f(0)=-7\) and \(f'(x)\ge3\) for all \(x\), what is the smallest possible value of \(f(6)\)?`, [
        R`MVT: \(f(6)-f(0)=f'(c)(6)\).`,
        R`\(f(6)\ge-7+3(6)\).`,
      ], R`\(11\)`),
      P(R`A car travels 420 miles in 6 hours. Explain why it was going exactly 70 mph at some moment.`, [
        R`Average speed \(=\dfrac{420}{6}=70\).`,
        R`Position is differentiable, so by the MVT, \(s'(c)=70\) for some \(c\).`,
      ], R`By the MVT, at some instant the speed equaled the average, 70 mph.`),
      P(R`Find all \(c\) satisfying the MVT for \(f(x)=x^3-4x\) on \([-4,4]\).`, [
        R`Average slope: \(\dfrac{f(4)-f(-4)}{8}=12\).`,
        R`\(3c^2-4=12\Rightarrow c^2=\dfrac{16}{3}\).`,
      ], R`\(c=\pm\dfrac{4}{\sqrt3}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=5x^{2}+2x-3\) on \([0,6]\).`, [
        R`Average slope \(=\dfrac{189-(-3)}{6}=32\).`,
        R`\(10c+2=32\).`,
      ], R`\(c=3\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,12]\).`, [
        R`Average slope \(=144\); \(3c^2=144\).`,
      ], R`\(c=\dfrac{12}{\sqrt3}\approx6.928\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\dfrac1x\) on \([3,27]\).`, [
        R`Average slope \(=\dfrac{\frac1{27}-\frac1{3}}{24}=-\dfrac{1}{81}\).`,
        R`\(-\dfrac1{c^2}=-\dfrac1{81}\Rightarrow c^2=81\).`,
      ], R`\(c=9\)`),
      P(R`Verify Rolle's Theorem for \(f(x)=-4x^{2}-4x+14\) on \([-2,1]\) and find \(c\).`, [
        R`\(f(-2)=6\) and \(f(1)=6\): equal ✓.`,
        R`\(f'(c)=-8c-4=0\).`,
      ], R`\(c=-\dfrac{1}{2}\)`),
      P(R`If \(f(1)=-1\) and \(f'(x)\le6\) for all \(x\), what is the largest possible value of \(f(4)\)?`, [
        R`MVT: \(f(4)-f(1)=f'(c)(3)\).`,
        R`\(f(4)\le-1+6(3)\).`,
      ], R`\(17\)`),
      P(R`A car travels 275 miles in 5 hours. Explain why it was going exactly 55 mph at some moment.`, [
        R`Average speed \(=\dfrac{275}{5}=55\).`,
        R`Position is differentiable, so by the MVT, \(s'(c)=55\) for some \(c\).`,
      ], R`By the MVT, at some instant the speed equaled the average, 55 mph.`),
      P(R`Find all \(c\) satisfying the MVT for \(f(x)=x^3-15x\) on \([-5,5]\).`, [
        R`Average slope: \(\dfrac{f(5)-f(-5)}{10}=10\).`,
        R`\(3c^2-15=10\Rightarrow c^2=\dfrac{25}{3}\).`,
      ], R`\(c=\pm\dfrac{5}{\sqrt3}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=-x^{2}-8x-6\) on \([0,6]\).`, [
        R`Average slope \(=\dfrac{-90-(-6)}{6}=-14\).`,
        R`\(-2c-8=-14\).`,
      ], R`\(c=3\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,8]\).`, [
        R`Average slope \(=64\); \(3c^2=64\).`,
      ], R`\(c=\dfrac{8}{\sqrt3}\approx4.619\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\sqrt x\) on \([0,4]\).`, [
        R`Average slope \(=\dfrac{2-0}{4}=\dfrac1{2}\).`,
        R`\(\dfrac{1}{2\sqrt c}=\dfrac1{2}\Rightarrow\sqrt c=\dfrac{2}{2}\).`,
      ], R`\(c=1\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\dfrac1x\) on \([2,8]\).`, [
        R`Average slope \(=\dfrac{\frac1{8}-\frac1{2}}{6}=-\dfrac{1}{16}\).`,
        R`\(-\dfrac1{c^2}=-\dfrac1{16}\Rightarrow c^2=16\).`,
      ], R`\(c=4\)`),
      P(R`Verify Rolle's Theorem for \(f(x)=-3x^{2}+3x+1\) on \([0,1]\) and find \(c\).`, [
        R`\(f(0)=1\) and \(f(1)=1\): equal ✓.`,
        R`\(f'(c)=-6c+3=0\).`,
      ], R`\(c=\dfrac{1}{2}\)`),
      P(R`If \(f(2)=0\) and \(f'(x)\le-5\) for all \(x\), what is the largest possible value of \(f(3)\)?`, [
        R`MVT: \(f(3)-f(2)=f'(c)(1)\).`,
        R`\(f(3)\le0+(-5)(1)\).`,
      ], R`\(-5\)`),
      P(R`A car travels 80 miles in 2 hours. Explain why it was going exactly 40 mph at some moment.`, [
        R`Average speed \(=\dfrac{80}{2}=40\).`,
        R`Position is differentiable, so by the MVT, \(s'(c)=40\) for some \(c\).`,
      ], R`By the MVT, at some instant the speed equaled the average, 40 mph.`),
      P(R`Find all \(c\) satisfying the MVT for \(f(x)=x^3-11x\) on \([-4,4]\).`, [
        R`Average slope: \(\dfrac{f(4)-f(-4)}{8}=5\).`,
        R`\(3c^2-11=5\Rightarrow c^2=\dfrac{16}{3}\).`,
      ], R`\(c=\pm\dfrac{4}{\sqrt3}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^{2}+x-2\) on \([1,4]\).`, [
        R`Average slope \(=\dfrac{18-0}{3}=6\).`,
        R`\(2c+1=6\).`,
      ], R`\(c=\dfrac{5}{2}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,14]\).`, [
        R`Average slope \(=196\); \(3c^2=196\).`,
      ], R`\(c=\dfrac{14}{\sqrt3}\approx8.083\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\sqrt x\) on \([0,64]\).`, [
        R`Average slope \(=\dfrac{8-0}{64}=\dfrac1{8}\).`,
        R`\(\dfrac{1}{2\sqrt c}=\dfrac1{8}\Rightarrow\sqrt c=\dfrac{8}{2}\).`,
      ], R`\(c=16\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\dfrac1x\) on \([5,20]\).`, [
        R`Average slope \(=\dfrac{\frac1{20}-\frac1{5}}{15}=-\dfrac{1}{100}\).`,
        R`\(-\dfrac1{c^2}=-\dfrac1{100}\Rightarrow c^2=100\).`,
      ], R`\(c=10\)`),
      P(R`Verify Rolle's Theorem for \(f(x)=-4x^{2}+32x-19\) on \([1,7]\) and find \(c\).`, [
        R`\(f(1)=9\) and \(f(7)=9\): equal ✓.`,
        R`\(f'(c)=-8c+32=0\).`,
      ], R`\(c=4\)`),
      P(R`If \(f(2)=6\) and \(f'(x)\ge6\) for all \(x\), what is the smallest possible value of \(f(4)\)?`, [
        R`MVT: \(f(4)-f(2)=f'(c)(2)\).`,
        R`\(f(4)\ge6+6(2)\).`,
      ], R`\(18\)`),
      P(R`A car travels 200 miles in 5 hours. Explain why it was going exactly 40 mph at some moment.`, [
        R`Average speed \(=\dfrac{200}{5}=40\).`,
        R`Position is differentiable, so by the MVT, \(s'(c)=40\) for some \(c\).`,
      ], R`By the MVT, at some instant the speed equaled the average, 40 mph.`),
      P(R`Find all \(c\) satisfying the MVT for \(f(x)=x^3-10x\) on \([-4,4]\).`, [
        R`Average slope: \(\dfrac{f(4)-f(-4)}{8}=6\).`,
        R`\(3c^2-10=6\Rightarrow c^2=\dfrac{16}{3}\).`,
      ], R`\(c=\pm\dfrac{4}{\sqrt3}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=3x^{2}+5x+5\) on \([0,2]\).`, [
        R`Average slope \(=\dfrac{27-5}{2}=11\).`,
        R`\(6c+5=11\).`,
      ], R`\(c=1\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,6]\).`, [
        R`Average slope \(=36\); \(3c^2=36\).`,
      ], R`\(c=\dfrac{6}{\sqrt3}\approx3.464\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\sqrt x\) on \([0,144]\).`, [
        R`Average slope \(=\dfrac{12-0}{144}=\dfrac1{12}\).`,
        R`\(\dfrac{1}{2\sqrt c}=\dfrac1{12}\Rightarrow\sqrt c=\dfrac{12}{2}\).`,
      ], R`\(c=36\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\dfrac1x\) on \([4,9]\).`, [
        R`Average slope \(=\dfrac{\frac1{9}-\frac1{4}}{5}=-\dfrac{1}{36}\).`,
        R`\(-\dfrac1{c^2}=-\dfrac1{36}\Rightarrow c^2=36\).`,
      ], R`\(c=6\)`),
      P(R`Verify Rolle's Theorem for \(f(x)=4x^{2}+12x-14\) on \([-4,1]\) and find \(c\).`, [
        R`\(f(-4)=2\) and \(f(1)=2\): equal ✓.`,
        R`\(f'(c)=8c+12=0\).`,
      ], R`\(c=-\dfrac{3}{2}\)`),
      P(R`If \(f(1)=1\) and \(f'(x)\ge-1\) for all \(x\), what is the smallest possible value of \(f(6)\)?`, [
        R`MVT: \(f(6)-f(1)=f'(c)(5)\).`,
        R`\(f(6)\ge1+(-1)(5)\).`,
      ], R`\(-4\)`),
      P(R`A car travels 240 miles in 4 hours. Explain why it was going exactly 60 mph at some moment.`, [
        R`Average speed \(=\dfrac{240}{4}=60\).`,
        R`Position is differentiable, so by the MVT, \(s'(c)=60\) for some \(c\).`,
      ], R`By the MVT, at some instant the speed equaled the average, 60 mph.`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=5x^{2}+5x-7\) on \([1,2]\).`, [
        R`Average slope \(=\dfrac{23-3}{1}=20\).`,
        R`\(10c+5=20\).`,
      ], R`\(c=\dfrac{3}{2}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,9]\).`, [
        R`Average slope \(=81\); \(3c^2=81\).`,
      ], R`\(c=\dfrac{9}{\sqrt3}\approx5.196\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\sqrt x\) on \([0,9]\).`, [
        R`Average slope \(=\dfrac{3-0}{9}=\dfrac1{3}\).`,
        R`\(\dfrac{1}{2\sqrt c}=\dfrac1{3}\Rightarrow\sqrt c=\dfrac{3}{2}\).`,
      ], R`\(c=\dfrac{9}{4}\)`),
      P(R`Verify Rolle's Theorem for \(f(x)=3x^{2}-18x+12\) on \([1,5]\) and find \(c\).`, [
        R`\(f(1)=-3\) and \(f(5)=-3\): equal ✓.`,
        R`\(f'(c)=6c-18=0\).`,
      ], R`\(c=3\)`),
      P(R`If \(f(2)=1\) and \(f'(x)\ge5\) for all \(x\), what is the smallest possible value of \(f(7)\)?`, [
        R`MVT: \(f(7)-f(2)=f'(c)(5)\).`,
        R`\(f(7)\ge1+5(5)\).`,
      ], R`\(26\)`),
      P(R`A car travels 120 miles in 2 hours. Explain why it was going exactly 60 mph at some moment.`, [
        R`Average speed \(=\dfrac{120}{2}=60\).`,
        R`Position is differentiable, so by the MVT, \(s'(c)=60\) for some \(c\).`,
      ], R`By the MVT, at some instant the speed equaled the average, 60 mph.`),
      P(R`Find all \(c\) satisfying the MVT for \(f(x)=x^3-4x\) on \([-1,1]\).`, [
        R`Average slope: \(\dfrac{f(1)-f(-1)}{2}=-3\).`,
        R`\(3c^2-4=-3\Rightarrow c^2=\dfrac{1}{3}\).`,
      ], R`\(c=\pm\dfrac{1}{\sqrt3}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=4x^{2}-9x+1\) on \([2,5]\).`, [
        R`Average slope \(=\dfrac{56-(-1)}{3}=19\).`,
        R`\(8c-9=19\).`,
      ], R`\(c=\dfrac{7}{2}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,3]\).`, [
        R`Average slope \(=9\); \(3c^2=9\).`,
      ], R`\(c=\dfrac{3}{\sqrt3}\approx1.732\)`),
      P(R`Verify Rolle's Theorem for \(f(x)=-x^{2}+5x-6\) on \([1,4]\) and find \(c\).`, [
        R`\(f(1)=-2\) and \(f(4)=-2\): equal ✓.`,
        R`\(f'(c)=-2c+5=0\).`,
      ], R`\(c=\dfrac{5}{2}\)`),
      P(R`If \(f(4)=-2\) and \(f'(x)\le6\) for all \(x\), what is the largest possible value of \(f(5)\)?`, [
        R`MVT: \(f(5)-f(4)=f'(c)(1)\).`,
        R`\(f(5)\le-2+6(1)\).`,
      ], R`\(4\)`),
      P(R`A car travels 300 miles in 4 hours. Explain why it was going exactly 75 mph at some moment.`, [
        R`Average speed \(=\dfrac{300}{4}=75\).`,
        R`Position is differentiable, so by the MVT, \(s'(c)=75\) for some \(c\).`,
      ], R`By the MVT, at some instant the speed equaled the average, 75 mph.`),
      P(R`Find all \(c\) satisfying the MVT for \(f(x)=x^3-9x\) on \([-3,3]\).`, [
        R`Average slope: \(\dfrac{f(3)-f(-3)}{6}=0\).`,
        R`\(3c^2-9=0\Rightarrow c^2=3\).`,
      ], R`\(c=\pm\dfrac{3}{\sqrt3}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=-x^{2}-5x+3\) on \([-4,-1]\).`, [
        R`Average slope \(=\dfrac{7-7}{3}=0\).`,
        R`\(-2c-5=0\).`,
      ], R`\(c=-\dfrac{5}{2}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,15]\).`, [
        R`Average slope \(=225\); \(3c^2=225\).`,
      ], R`\(c=\dfrac{15}{\sqrt3}\approx8.66\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\dfrac1x\) on \([3,12]\).`, [
        R`Average slope \(=\dfrac{\frac1{12}-\frac1{3}}{9}=-\dfrac{1}{36}\).`,
        R`\(-\dfrac1{c^2}=-\dfrac1{36}\Rightarrow c^2=36\).`,
      ], R`\(c=6\)`),
      P(R`Verify Rolle's Theorem for \(f(x)=3x^{2}-24x+35\) on \([2,6]\) and find \(c\).`, [
        R`\(f(2)=-1\) and \(f(6)=-1\): equal ✓.`,
        R`\(f'(c)=6c-24=0\).`,
      ], R`\(c=4\)`),
      P(R`If \(f(4)=-3\) and \(f'(x)\le4\) for all \(x\), what is the largest possible value of \(f(7)\)?`, [
        R`MVT: \(f(7)-f(4)=f'(c)(3)\).`,
        R`\(f(7)\le-3+4(3)\).`,
      ], R`\(9\)`),
      P(R`A car travels 375 miles in 5 hours. Explain why it was going exactly 75 mph at some moment.`, [
        R`Average speed \(=\dfrac{375}{5}=75\).`,
        R`Position is differentiable, so by the MVT, \(s'(c)=75\) for some \(c\).`,
      ], R`By the MVT, at some instant the speed equaled the average, 75 mph.`),
      P(R`Find all \(c\) satisfying the MVT for \(f(x)=x^3-7x\) on \([-2,2]\).`, [
        R`Average slope: \(\dfrac{f(2)-f(-2)}{4}=-3\).`,
        R`\(3c^2-7=-3\Rightarrow c^2=\dfrac{4}{3}\).`,
      ], R`\(c=\pm\dfrac{2}{\sqrt3}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=4x^{2}-5x+5\) on \([2,4]\).`, [
        R`Average slope \(=\dfrac{49-11}{2}=19\).`,
        R`\(8c-5=19\).`,
      ], R`\(c=3\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,4]\).`, [
        R`Average slope \(=16\); \(3c^2=16\).`,
      ], R`\(c=\dfrac{4}{\sqrt3}\approx2.309\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\sqrt x\) on \([0,100]\).`, [
        R`Average slope \(=\dfrac{10-0}{100}=\dfrac1{10}\).`,
        R`\(\dfrac{1}{2\sqrt c}=\dfrac1{10}\Rightarrow\sqrt c=\dfrac{10}{2}\).`,
      ], R`\(c=25\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\dfrac1x\) on \([4,16]\).`, [
        R`Average slope \(=\dfrac{\frac1{16}-\frac1{4}}{12}=-\dfrac{1}{64}\).`,
        R`\(-\dfrac1{c^2}=-\dfrac1{64}\Rightarrow c^2=64\).`,
      ], R`\(c=8\)`),
      P(R`Verify Rolle's Theorem for \(f(x)=-4x^{2}+16x+26\) on \([-1,5]\) and find \(c\).`, [
        R`\(f(-1)=6\) and \(f(5)=6\): equal ✓.`,
        R`\(f'(c)=-8c+16=0\).`,
      ], R`\(c=2\)`),
      P(R`If \(f(1)=7\) and \(f'(x)\le3\) for all \(x\), what is the largest possible value of \(f(6)\)?`, [
        R`MVT: \(f(6)-f(1)=f'(c)(5)\).`,
        R`\(f(6)\le7+3(5)\).`,
      ], R`\(22\)`),
      P(R`A car travels 450 miles in 6 hours. Explain why it was going exactly 75 mph at some moment.`, [
        R`Average speed \(=\dfrac{450}{6}=75\).`,
        R`Position is differentiable, so by the MVT, \(s'(c)=75\) for some \(c\).`,
      ], R`By the MVT, at some instant the speed equaled the average, 75 mph.`),
      P(R`Find all \(c\) satisfying the MVT for \(f(x)=x^3-20x\) on \([-1,1]\).`, [
        R`Average slope: \(\dfrac{f(1)-f(-1)}{2}=-19\).`,
        R`\(3c^2-20=-19\Rightarrow c^2=\dfrac{1}{3}\).`,
      ], R`\(c=\pm\dfrac{1}{\sqrt3}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=-2x^{2}-2x\) on \([2,5]\).`, [
        R`Average slope \(=\dfrac{-60-(-12)}{3}=-16\).`,
        R`\(-4c-2=-16\).`,
      ], R`\(c=\dfrac{7}{2}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,7]\).`, [
        R`Average slope \(=49\); \(3c^2=49\).`,
      ], R`\(c=\dfrac{7}{\sqrt3}\approx4.041\)`),
      P(R`Verify Rolle's Theorem for \(f(x)=3x^{2}+27x+62\) on \([-5,-4]\) and find \(c\).`, [
        R`\(f(-5)=2\) and \(f(-4)=2\): equal ✓.`,
        R`\(f'(c)=6c+27=0\).`,
      ], R`\(c=-\dfrac{9}{2}\)`),
      P(R`If \(f(0)=-4\) and \(f'(x)\le-1\) for all \(x\), what is the largest possible value of \(f(6)\)?`, [
        R`MVT: \(f(6)-f(0)=f'(c)(6)\).`,
        R`\(f(6)\le-4+(-1)(6)\).`,
      ], R`\(-10\)`),
      P(R`A car travels 90 miles in 2 hours. Explain why it was going exactly 45 mph at some moment.`, [
        R`Average speed \(=\dfrac{90}{2}=45\).`,
        R`Position is differentiable, so by the MVT, \(s'(c)=45\) for some \(c\).`,
      ], R`By the MVT, at some instant the speed equaled the average, 45 mph.`),
      P(R`Find all \(c\) satisfying the MVT for \(f(x)=x^3-18x\) on \([-4,4]\).`, [
        R`Average slope: \(\dfrac{f(4)-f(-4)}{8}=-2\).`,
        R`\(3c^2-18=-2\Rightarrow c^2=\dfrac{16}{3}\).`,
      ], R`\(c=\pm\dfrac{4}{\sqrt3}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=-2x^{2}-9x-8\) on \([2,8]\).`, [
        R`Average slope \(=\dfrac{-208-(-34)}{6}=-29\).`,
        R`\(-4c-9=-29\).`,
      ], R`\(c=5\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=x^3\) on \([0,10]\).`, [
        R`Average slope \(=100\); \(3c^2=100\).`,
      ], R`\(c=\dfrac{10}{\sqrt3}\approx5.774\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\sqrt x\) on \([0,36]\).`, [
        R`Average slope \(=\dfrac{6-0}{36}=\dfrac1{6}\).`,
        R`\(\dfrac{1}{2\sqrt c}=\dfrac1{6}\Rightarrow\sqrt c=\dfrac{6}{2}\).`,
      ], R`\(c=9\)`),
      P(R`Verify Rolle's Theorem for \(f(x)=4x^{2}+28x+42\) on \([-5,-2]\) and find \(c\).`, [
        R`\(f(-5)=2\) and \(f(-2)=2\): equal ✓.`,
        R`\(f'(c)=8c+28=0\).`,
      ], R`\(c=-\dfrac{7}{2}\)`),
      P(R`If \(f(4)=2\) and \(f'(x)\ge-3\) for all \(x\), what is the smallest possible value of \(f(10)\)?`, [
        R`MVT: \(f(10)-f(4)=f'(c)(6)\).`,
        R`\(f(10)\ge2+(-3)(6)\).`,
      ], R`\(-16\)`),
      P(R`A car travels 225 miles in 3 hours. Explain why it was going exactly 75 mph at some moment.`, [
        R`Average speed \(=\dfrac{225}{3}=75\).`,
        R`Position is differentiable, so by the MVT, \(s'(c)=75\) for some \(c\).`,
      ], R`By the MVT, at some instant the speed equaled the average, 75 mph.`),
      P(R`Find all \(c\) satisfying the MVT for \(f(x)=x^3-14x\) on \([-3,3]\).`, [
        R`Average slope: \(\dfrac{f(3)-f(-3)}{6}=-5\).`,
        R`\(3c^2-14=-5\Rightarrow c^2=3\).`,
      ], R`\(c=\pm\dfrac{3}{\sqrt3}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=-5x^{2}+9x+8\) on \([2,8]\).`, [
        R`Average slope \(=\dfrac{-240-6}{6}=-41\).`,
        R`\(-10c+9=-41\).`,
      ], R`\(c=5\)`),
      P(R`Verify Rolle's Theorem for \(f(x)=2x^{2}+14x+26\) on \([-4,-3]\) and find \(c\).`, [
        R`\(f(-4)=2\) and \(f(-3)=2\): equal ✓.`,
        R`\(f'(c)=4c+14=0\).`,
      ], R`\(c=-\dfrac{7}{2}\)`),
      P(R`If \(f(3)=1\) and \(f'(x)\le-4\) for all \(x\), what is the largest possible value of \(f(6)\)?`, [
        R`MVT: \(f(6)-f(3)=f'(c)(3)\).`,
        R`\(f(6)\le1+(-4)(3)\).`,
      ], R`\(-11\)`),
      P(R`A car travels 240 miles in 6 hours. Explain why it was going exactly 40 mph at some moment.`, [
        R`Average speed \(=\dfrac{240}{6}=40\).`,
        R`Position is differentiable, so by the MVT, \(s'(c)=40\) for some \(c\).`,
      ], R`By the MVT, at some instant the speed equaled the average, 40 mph.`),
      P(R`Find all \(c\) satisfying the MVT for \(f(x)=x^3-12x\) on \([-6,6]\).`, [
        R`Average slope: \(\dfrac{f(6)-f(-6)}{12}=24\).`,
        R`\(3c^2-12=24\Rightarrow c^2=12\).`,
      ], R`\(c=\pm\dfrac{6}{\sqrt3}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=5x^{2}+9x+2\) on \([0,3]\).`, [
        R`Average slope \(=\dfrac{74-2}{3}=24\).`,
        R`\(10c+9=24\).`,
      ], R`\(c=\dfrac{3}{2}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=\sqrt x\) on \([0,81]\).`, [
        R`Average slope \(=\dfrac{9-0}{81}=\dfrac1{9}\).`,
        R`\(\dfrac{1}{2\sqrt c}=\dfrac1{9}\Rightarrow\sqrt c=\dfrac{9}{2}\).`,
      ], R`\(c=\dfrac{81}{4}\)`),
      P(R`Verify Rolle's Theorem for \(f(x)=2x^{2}-4x-12\) on \([-2,4]\) and find \(c\).`, [
        R`\(f(-2)=4\) and \(f(4)=4\): equal ✓.`,
        R`\(f'(c)=4c-4=0\).`,
      ], R`\(c=1\)`),
      P(R`If \(f(2)=-3\) and \(f'(x)\le-1\) for all \(x\), what is the largest possible value of \(f(7)\)?`, [
        R`MVT: \(f(7)-f(2)=f'(c)(5)\).`,
        R`\(f(7)\le-3+(-1)(5)\).`,
      ], R`\(-8\)`),
      P(R`A car travels 140 miles in 2 hours. Explain why it was going exactly 70 mph at some moment.`, [
        R`Average speed \(=\dfrac{140}{2}=70\).`,
        R`Position is differentiable, so by the MVT, \(s'(c)=70\) for some \(c\).`,
      ], R`By the MVT, at some instant the speed equaled the average, 70 mph.`),
      P(R`Find all \(c\) satisfying the MVT for \(f(x)=x^3-x\) on \([-3,3]\).`, [
        R`Average slope: \(\dfrac{f(3)-f(-3)}{6}=8\).`,
        R`\(3c^2-1=8\Rightarrow c^2=3\).`,
      ], R`\(c=\pm\dfrac{3}{\sqrt3}\)`),
      P(R`Find \(c\) satisfying the MVT for \(f(x)=4x^{2}+7x-3\) on \([-2,0]\).`, [
        R`Average slope \(=\dfrac{-3-(-1)}{2}=-1\).`,
        R`\(8c+7=-1\).`,
      ], R`\(c=-1\)`),
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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`2540 ft of fence encloses a rectangle along a river (no fence on the river side). Maximize the area.`, [
        R`\(y=2540-2x\), \(A=2540x-2x^2\).`,
        R`\(A'=2540-4x=0\Rightarrow x=635\).`,
      ], R`\(635\times1270\) ft; area \(806450\) ft²`),
      P(R`Find the largest area of a rectangle with perimeter 52.`, [
        R`\(A=x(26-x)\), \(A'=26-2x=0\).`,
      ], R`\(13\times13\), area \(169\)`),
      P(R`Two positive numbers have product 225. Minimize their sum.`, [
        R`\(S=x+\dfrac{225}x\), \(S'=1-\dfrac{225}{x^2}=0\).`,
      ], R`\(15\) and \(15\); sum \(30\)`),
      P(R`Two numbers sum to 50. Maximize their product.`, [
        R`\(P=x(50-x)\), \(P'=50-2x=0\).`,
      ], R`Both \(25\); product \(625\)`),
      P(R`An open box is made from a 6 in square sheet by cutting equal squares from the corners. What cut maximizes the volume?`, [
        R`\(V=x(6-2x)^2\), \(0<x<3\).`,
        R`\(V'=(6-2x)(6-6x)=0\Rightarrow x=1\).`,
        R`\(V(1)=1(4)^2=16\).`,
      ], R`Cut \(1\) in squares; \(16\) in³`),
      P(R`A 1536 ft² rectangular pen is split in half by a fence parallel to one side. Minimize the total fencing.`, [
        R`\(F=3x+2y\), \(y=\dfrac{1536}{x}\): \(F=3x+\dfrac{3072}{x}\).`,
        R`\(F'=3-\dfrac{3072}{x^2}=0\Rightarrow x=32\).`,
      ], R`\(32\times48\) ft; \(192\) ft of fence`),
      P(R`A rectangle sits on the \(x\)-axis with top corners on \(y=12-x^2\). Maximize its area.`, [
        R`\(A=2x(12-x^2)\), \(A'=24-6x^2=0\Rightarrow x=2\).`,
      ], R`Width \(4\), height \(8\), area \(32\)`),
      P(R`Demand is \(q=264-6p\). What price maximizes revenue?`, [
        R`\(R=p(264-6p)\), \(R'=264-12p=0\).`,
      ], R`\(p=\$22\); revenue \(\$2904\)`),
      P(R`Find the point on \(y=\sqrt x\) closest to \((3,0)\).`, [
        R`Minimize \(d^2=(x-3)^2+x\); derivative \(2x-5=0\).`,
      ], R`\(\left(\dfrac{5}{2},\sqrt{\dfrac{5}{2}}\right)\)`),
      P(R`An open-top box with a square base holds 256 cm³. Minimize the material.`, [
        R`\(S=x^2+\dfrac{1024}{x}\), \(S'=2x-\dfrac{1024}{x^2}=0\Rightarrow x^3=512\).`,
      ], R`Base \(8\times8\), height \(4\)`),
      P(R`A closed box with a square base holds 343 cm³. Minimize the surface area.`, [
        R`\(S=2x^2+\dfrac{1372}{x}\), \(S'=4x-\dfrac{1372}{x^2}=0\Rightarrow x=7\); height \(7\).`,
      ], R`A cube, \(7\) cm on a side; \(294\) cm²`),
      P(R`Two numbers sum to 96. Minimize the sum of their squares.`, [
        R`\(Q=x^2+(96-x)^2\), \(Q'=4x-192=0\).`,
      ], R`Both \(48\); minimum \(4608\)`),
      P(R`960 ft of fence encloses a rectangle along a river (no fence on the river side). Maximize the area.`, [
        R`\(y=960-2x\), \(A=960x-2x^2\).`,
        R`\(A'=960-4x=0\Rightarrow x=240\).`,
      ], R`\(240\times480\) ft; area \(115200\) ft²`),
      P(R`Find the largest area of a rectangle with perimeter 196.`, [
        R`\(A=x(98-x)\), \(A'=98-2x=0\).`,
      ], R`\(49\times49\), area \(2401\)`),
      P(R`Two positive numbers have product 1156. Minimize their sum.`, [
        R`\(S=x+\dfrac{1156}x\), \(S'=1-\dfrac{1156}{x^2}=0\).`,
      ], R`\(34\) and \(34\); sum \(68\)`),
      P(R`Two numbers sum to 200. Maximize their product.`, [
        R`\(P=x(200-x)\), \(P'=200-2x=0\).`,
      ], R`Both \(100\); product \(10000\)`),
      P(R`An open box is made from a 42 in square sheet by cutting equal squares from the corners. What cut maximizes the volume?`, [
        R`\(V=x(42-2x)^2\), \(0<x<21\).`,
        R`\(V'=(42-2x)(42-6x)=0\Rightarrow x=7\).`,
        R`\(V(7)=7(28)^2=5488\).`,
      ], R`Cut \(7\) in squares; \(5488\) in³`),
      P(R`A 150 ft² rectangular pen is split in half by a fence parallel to one side. Minimize the total fencing.`, [
        R`\(F=3x+2y\), \(y=\dfrac{150}{x}\): \(F=3x+\dfrac{300}{x}\).`,
        R`\(F'=3-\dfrac{300}{x^2}=0\Rightarrow x=10\).`,
      ], R`\(10\times15\) ft; \(60\) ft of fence`),
      P(R`Demand is \(q=1824-16p\). What price maximizes revenue?`, [
        R`\(R=p(1824-16p)\), \(R'=1824-32p=0\).`,
      ], R`\(p=\$57\); revenue \(\$51984\)`),
      P(R`Find the point on \(y=\sqrt x\) closest to \((1,0)\).`, [
        R`Minimize \(d^2=(x-1)^2+x\); derivative \(2x-1=0\).`,
      ], R`\(\left(\dfrac{1}{2},\sqrt{\dfrac{1}{2}}\right)\)`),
      P(R`An open-top box with a square base holds 8788 cm³. Minimize the material.`, [
        R`\(S=x^2+\dfrac{35152}{x}\), \(S'=2x-\dfrac{35152}{x^2}=0\Rightarrow x^3=17576\).`,
      ], R`Base \(26\times26\), height \(13\)`),
      P(R`A closed box with a square base holds 512 cm³. Minimize the surface area.`, [
        R`\(S=2x^2+\dfrac{2048}{x}\), \(S'=4x-\dfrac{2048}{x^2}=0\Rightarrow x=8\); height \(8\).`,
      ], R`A cube, \(8\) cm on a side; \(384\) cm²`),
      P(R`Two numbers sum to 16. Minimize the sum of their squares.`, [
        R`\(Q=x^2+(16-x)^2\), \(Q'=4x-32=0\).`,
      ], R`Both \(8\); minimum \(128\)`),
      P(R`396 ft of fence encloses a rectangle along a river (no fence on the river side). Maximize the area.`, [
        R`\(y=396-2x\), \(A=396x-2x^2\).`,
        R`\(A'=396-4x=0\Rightarrow x=99\).`,
      ], R`\(99\times198\) ft; area \(19602\) ft²`),
      P(R`Find the largest area of a rectangle with perimeter 340.`, [
        R`\(A=x(170-x)\), \(A'=170-2x=0\).`,
      ], R`\(85\times85\), area \(7225\)`),
      P(R`Two positive numbers have product 4. Minimize their sum.`, [
        R`\(S=x+\dfrac{4}x\), \(S'=1-\dfrac{4}{x^2}=0\).`,
      ], R`\(2\) and \(2\); sum \(4\)`),
      P(R`Two numbers sum to 18. Maximize their product.`, [
        R`\(P=x(18-x)\), \(P'=18-2x=0\).`,
      ], R`Both \(9\); product \(81\)`),
      P(R`An open box is made from a 48 in square sheet by cutting equal squares from the corners. What cut maximizes the volume?`, [
        R`\(V=x(48-2x)^2\), \(0<x<24\).`,
        R`\(V'=(48-2x)(48-6x)=0\Rightarrow x=8\).`,
        R`\(V(8)=8(32)^2=8192\).`,
      ], R`Cut \(8\) in squares; \(8192\) in³`),
      P(R`A 3174 ft² rectangular pen is split in half by a fence parallel to one side. Minimize the total fencing.`, [
        R`\(F=3x+2y\), \(y=\dfrac{3174}{x}\): \(F=3x+\dfrac{6348}{x}\).`,
        R`\(F'=3-\dfrac{6348}{x^2}=0\Rightarrow x=46\).`,
      ], R`\(46\times69\) ft; \(276\) ft of fence`),
      P(R`A rectangle sits on the \(x\)-axis with top corners on \(y=3-x^2\). Maximize its area.`, [
        R`\(A=2x(3-x^2)\), \(A'=6-6x^2=0\Rightarrow x=1\).`,
      ], R`Width \(2\), height \(2\), area \(4\)`),
      P(R`Demand is \(q=32-2p\). What price maximizes revenue?`, [
        R`\(R=p(32-2p)\), \(R'=32-4p=0\).`,
      ], R`\(p=\$8\); revenue \(\$128\)`),
      P(R`Find the point on \(y=\sqrt x\) closest to \((8,0)\).`, [
        R`Minimize \(d^2=(x-8)^2+x\); derivative \(2x-15=0\).`,
      ], R`\(\left(\dfrac{15}{2},\sqrt{\dfrac{15}{2}}\right)\)`),
      P(R`A closed box with a square base holds 27 cm³. Minimize the surface area.`, [
        R`\(S=2x^2+\dfrac{108}{x}\), \(S'=4x-\dfrac{108}{x^2}=0\Rightarrow x=3\); height \(3\).`,
      ], R`A cube, \(3\) cm on a side; \(54\) cm²`),
      P(R`Two numbers sum to 62. Minimize the sum of their squares.`, [
        R`\(Q=x^2+(62-x)^2\), \(Q'=4x-124=0\).`,
      ], R`Both \(31\); minimum \(1922\)`),
      P(R`1488 ft of fence encloses a rectangle along a river (no fence on the river side). Maximize the area.`, [
        R`\(y=1488-2x\), \(A=1488x-2x^2\).`,
        R`\(A'=1488-4x=0\Rightarrow x=372\).`,
      ], R`\(372\times744\) ft; area \(276768\) ft²`),
      P(R`Find the largest area of a rectangle with perimeter 124.`, [
        R`\(A=x(62-x)\), \(A'=62-2x=0\).`,
      ], R`\(31\times31\), area \(961\)`),
      P(R`Two positive numbers have product 1444. Minimize their sum.`, [
        R`\(S=x+\dfrac{1444}x\), \(S'=1-\dfrac{1444}{x^2}=0\).`,
      ], R`\(38\) and \(38\); sum \(76\)`),
      P(R`Two numbers sum to 192. Maximize their product.`, [
        R`\(P=x(192-x)\), \(P'=192-2x=0\).`,
      ], R`Both \(96\); product \(9216\)`),
      P(R`An open box is made from a 18 in square sheet by cutting equal squares from the corners. What cut maximizes the volume?`, [
        R`\(V=x(18-2x)^2\), \(0<x<9\).`,
        R`\(V'=(18-2x)(18-6x)=0\Rightarrow x=3\).`,
        R`\(V(3)=3(12)^2=432\).`,
      ], R`Cut \(3\) in squares; \(432\) in³`),
      P(R`A 4374 ft² rectangular pen is split in half by a fence parallel to one side. Minimize the total fencing.`, [
        R`\(F=3x+2y\), \(y=\dfrac{4374}{x}\): \(F=3x+\dfrac{8748}{x}\).`,
        R`\(F'=3-\dfrac{8748}{x^2}=0\Rightarrow x=54\).`,
      ], R`\(54\times81\) ft; \(324\) ft of fence`),
      P(R`A rectangle sits on the \(x\)-axis with top corners on \(y=75-x^2\). Maximize its area.`, [
        R`\(A=2x(75-x^2)\), \(A'=150-6x^2=0\Rightarrow x=5\).`,
      ], R`Width \(10\), height \(50\), area \(500\)`),
      P(R`Demand is \(q=360-18p\). What price maximizes revenue?`, [
        R`\(R=p(360-18p)\), \(R'=360-36p=0\).`,
      ], R`\(p=\$10\); revenue \(\$1800\)`),
      P(R`Find the point on \(y=\sqrt x\) closest to \((6,0)\).`, [
        R`Minimize \(d^2=(x-6)^2+x\); derivative \(2x-11=0\).`,
      ], R`\(\left(\dfrac{11}{2},\sqrt{\dfrac{11}{2}}\right)\)`),
      P(R`An open-top box with a square base holds 864 cm³. Minimize the material.`, [
        R`\(S=x^2+\dfrac{3456}{x}\), \(S'=2x-\dfrac{3456}{x^2}=0\Rightarrow x^3=1728\).`,
      ], R`Base \(12\times12\), height \(6\)`),
      P(R`A closed box with a square base holds 8000 cm³. Minimize the surface area.`, [
        R`\(S=2x^2+\dfrac{32000}{x}\), \(S'=4x-\dfrac{32000}{x^2}=0\Rightarrow x=20\); height \(20\).`,
      ], R`A cube, \(20\) cm on a side; \(2400\) cm²`),
      P(R`Two numbers sum to 100. Minimize the sum of their squares.`, [
        R`\(Q=x^2+(100-x)^2\), \(Q'=4x-200=0\).`,
      ], R`Both \(50\); minimum \(5000\)`),
      P(R`916 ft of fence encloses a rectangle along a river (no fence on the river side). Maximize the area.`, [
        R`\(y=916-2x\), \(A=916x-2x^2\).`,
        R`\(A'=916-4x=0\Rightarrow x=229\).`,
      ], R`\(229\times458\) ft; area \(104882\) ft²`),
      P(R`Find the largest area of a rectangle with perimeter 188.`, [
        R`\(A=x(94-x)\), \(A'=94-2x=0\).`,
      ], R`\(47\times47\), area \(2209\)`),
      P(R`Two positive numbers have product 49. Minimize their sum.`, [
        R`\(S=x+\dfrac{49}x\), \(S'=1-\dfrac{49}{x^2}=0\).`,
      ], R`\(7\) and \(7\); sum \(14\)`),
      P(R`Two numbers sum to 86. Maximize their product.`, [
        R`\(P=x(86-x)\), \(P'=86-2x=0\).`,
      ], R`Both \(43\); product \(1849\)`),
      P(R`An open box is made from a 36 in square sheet by cutting equal squares from the corners. What cut maximizes the volume?`, [
        R`\(V=x(36-2x)^2\), \(0<x<18\).`,
        R`\(V'=(36-2x)(36-6x)=0\Rightarrow x=6\).`,
        R`\(V(6)=6(24)^2=3456\).`,
      ], R`Cut \(6\) in squares; \(3456\) in³`),
      P(R`A 216 ft² rectangular pen is split in half by a fence parallel to one side. Minimize the total fencing.`, [
        R`\(F=3x+2y\), \(y=\dfrac{216}{x}\): \(F=3x+\dfrac{432}{x}\).`,
        R`\(F'=3-\dfrac{432}{x^2}=0\Rightarrow x=12\).`,
      ], R`\(12\times18\) ft; \(72\) ft of fence`),
      P(R`Demand is \(q=676-13p\). What price maximizes revenue?`, [
        R`\(R=p(676-13p)\), \(R'=676-26p=0\).`,
      ], R`\(p=\$26\); revenue \(\$8788\)`),
      P(R`Find the point on \(y=\sqrt x\) closest to \((11,0)\).`, [
        R`Minimize \(d^2=(x-11)^2+x\); derivative \(2x-21=0\).`,
      ], R`\(\left(\dfrac{21}{2},\sqrt{\dfrac{21}{2}}\right)\)`),
      P(R`An open-top box with a square base holds 13500 cm³. Minimize the material.`, [
        R`\(S=x^2+\dfrac{54000}{x}\), \(S'=2x-\dfrac{54000}{x^2}=0\Rightarrow x^3=27000\).`,
      ], R`Base \(30\times30\), height \(15\)`),
      P(R`A closed box with a square base holds 729 cm³. Minimize the surface area.`, [
        R`\(S=2x^2+\dfrac{2916}{x}\), \(S'=4x-\dfrac{2916}{x^2}=0\Rightarrow x=9\); height \(9\).`,
      ], R`A cube, \(9\) cm on a side; \(486\) cm²`),
      P(R`Two numbers sum to 42. Minimize the sum of their squares.`, [
        R`\(Q=x^2+(42-x)^2\), \(Q'=4x-84=0\).`,
      ], R`Both \(21\); minimum \(882\)`),
      P(R`1364 ft of fence encloses a rectangle along a river (no fence on the river side). Maximize the area.`, [
        R`\(y=1364-2x\), \(A=1364x-2x^2\).`,
        R`\(A'=1364-4x=0\Rightarrow x=341\).`,
      ], R`\(341\times682\) ft; area \(232562\) ft²`),
      P(R`Find the largest area of a rectangle with perimeter 252.`, [
        R`\(A=x(126-x)\), \(A'=126-2x=0\).`,
      ], R`\(63\times63\), area \(3969\)`),
      P(R`Two positive numbers have product 361. Minimize their sum.`, [
        R`\(S=x+\dfrac{361}x\), \(S'=1-\dfrac{361}{x^2}=0\).`,
      ], R`\(19\) and \(19\); sum \(38\)`),
      P(R`Two numbers sum to 96. Maximize their product.`, [
        R`\(P=x(96-x)\), \(P'=96-2x=0\).`,
      ], R`Both \(48\); product \(2304\)`),
      P(R`A 1734 ft² rectangular pen is split in half by a fence parallel to one side. Minimize the total fencing.`, [
        R`\(F=3x+2y\), \(y=\dfrac{1734}{x}\): \(F=3x+\dfrac{3468}{x}\).`,
        R`\(F'=3-\dfrac{3468}{x^2}=0\Rightarrow x=34\).`,
      ], R`\(34\times51\) ft; \(204\) ft of fence`),
      P(R`Demand is \(q=430-5p\). What price maximizes revenue?`, [
        R`\(R=p(430-5p)\), \(R'=430-10p=0\).`,
      ], R`\(p=\$43\); revenue \(\$9245\)`),
      P(R`Find the point on \(y=\sqrt x\) closest to \((5,0)\).`, [
        R`Minimize \(d^2=(x-5)^2+x\); derivative \(2x-9=0\).`,
      ], R`\(\left(\dfrac{9}{2},\sqrt{\dfrac{9}{2}}\right)\)`),
      P(R`A closed box with a square base holds 216 cm³. Minimize the surface area.`, [
        R`\(S=2x^2+\dfrac{864}{x}\), \(S'=4x-\dfrac{864}{x^2}=0\Rightarrow x=6\); height \(6\).`,
      ], R`A cube, \(6\) cm on a side; \(216\) cm²`),
      P(R`Two numbers sum to 20. Minimize the sum of their squares.`, [
        R`\(Q=x^2+(20-x)^2\), \(Q'=4x-40=0\).`,
      ], R`Both \(10\); minimum \(200\)`),
      P(R`1264 ft of fence encloses a rectangle along a river (no fence on the river side). Maximize the area.`, [
        R`\(y=1264-2x\), \(A=1264x-2x^2\).`,
        R`\(A'=1264-4x=0\Rightarrow x=316\).`,
      ], R`\(316\times632\) ft; area \(199712\) ft²`),
      P(R`Find the largest area of a rectangle with perimeter 28.`, [
        R`\(A=x(14-x)\), \(A'=14-2x=0\).`,
      ], R`\(7\times7\), area \(49\)`),
      P(R`Two numbers sum to 132. Maximize their product.`, [
        R`\(P=x(132-x)\), \(P'=132-2x=0\).`,
      ], R`Both \(66\); product \(4356\)`),
      P(R`A 96 ft² rectangular pen is split in half by a fence parallel to one side. Minimize the total fencing.`, [
        R`\(F=3x+2y\), \(y=\dfrac{96}{x}\): \(F=3x+\dfrac{192}{x}\).`,
        R`\(F'=3-\dfrac{192}{x^2}=0\Rightarrow x=8\).`,
      ], R`\(8\times12\) ft; \(48\) ft of fence`),
      P(R`Demand is \(q=784-7p\). What price maximizes revenue?`, [
        R`\(R=p(784-7p)\), \(R'=784-14p=0\).`,
      ], R`\(p=\$56\); revenue \(\$21952\)`),
      P(R`Find the point on \(y=\sqrt x\) closest to \((14,0)\).`, [
        R`Minimize \(d^2=(x-14)^2+x\); derivative \(2x-27=0\).`,
      ], R`\(\left(\dfrac{27}{2},\sqrt{\dfrac{27}{2}}\right)\)`),
      P(R`2388 ft of fence encloses a rectangle along a river (no fence on the river side). Maximize the area.`, [
        R`\(y=2388-2x\), \(A=2388x-2x^2\).`,
        R`\(A'=2388-4x=0\Rightarrow x=597\).`,
      ], R`\(597\times1194\) ft; area \(712818\) ft²`),
      P(R`Find the largest area of a rectangle with perimeter 88.`, [
        R`\(A=x(44-x)\), \(A'=44-2x=0\).`,
      ], R`\(22\times22\), area \(484\)`),
      P(R`Two positive numbers have product 25. Minimize their sum.`, [
        R`\(S=x+\dfrac{25}x\), \(S'=1-\dfrac{25}{x^2}=0\).`,
      ], R`\(5\) and \(5\); sum \(10\)`),
      P(R`Two numbers sum to 12. Maximize their product.`, [
        R`\(P=x(12-x)\), \(P'=12-2x=0\).`,
      ], R`Both \(6\); product \(36\)`),
      P(R`An open box is made from a 30 in square sheet by cutting equal squares from the corners. What cut maximizes the volume?`, [
        R`\(V=x(30-2x)^2\), \(0<x<15\).`,
        R`\(V'=(30-2x)(30-6x)=0\Rightarrow x=5\).`,
        R`\(V(5)=5(20)^2=2000\).`,
      ], R`Cut \(5\) in squares; \(2000\) in³`),
      P(R`A rectangle sits on the \(x\)-axis with top corners on \(y=108-x^2\). Maximize its area.`, [
        R`\(A=2x(108-x^2)\), \(A'=216-6x^2=0\Rightarrow x=6\).`,
      ], R`Width \(12\), height \(72\), area \(864\)`),
      P(R`Demand is \(q=1700-17p\). What price maximizes revenue?`, [
        R`\(R=p(1700-17p)\), \(R'=1700-34p=0\).`,
      ], R`\(p=\$50\); revenue \(\$42500\)`),
      P(R`Find the point on \(y=\sqrt x\) closest to \((13,0)\).`, [
        R`Minimize \(d^2=(x-13)^2+x\); derivative \(2x-25=0\).`,
      ], R`\(\left(\dfrac{25}{2},\sqrt{\dfrac{25}{2}}\right)\)`),
      P(R`An open-top box with a square base holds 2048 cm³. Minimize the material.`, [
        R`\(S=x^2+\dfrac{8192}{x}\), \(S'=2x-\dfrac{8192}{x^2}=0\Rightarrow x^3=4096\).`,
      ], R`Base \(16\times16\), height \(8\)`),
      P(R`Two numbers sum to 28. Minimize the sum of their squares.`, [
        R`\(Q=x^2+(28-x)^2\), \(Q'=4x-56=0\).`,
      ], R`Both \(14\); minimum \(392\)`),
      P(R`2064 ft of fence encloses a rectangle along a river (no fence on the river side). Maximize the area.`, [
        R`\(y=2064-2x\), \(A=2064x-2x^2\).`,
        R`\(A'=2064-4x=0\Rightarrow x=516\).`,
      ], R`\(516\times1032\) ft; area \(532512\) ft²`),
      P(R`Find the largest area of a rectangle with perimeter 360.`, [
        R`\(A=x(180-x)\), \(A'=180-2x=0\).`,
      ], R`\(90\times90\), area \(8100\)`),
      P(R`Two numbers sum to 150. Maximize their product.`, [
        R`\(P=x(150-x)\), \(P'=150-2x=0\).`,
      ], R`Both \(75\); product \(5625\)`),
      P(R`A rectangle sits on the \(x\)-axis with top corners on \(y=48-x^2\). Maximize its area.`, [
        R`\(A=2x(48-x^2)\), \(A'=96-6x^2=0\Rightarrow x=4\).`,
      ], R`Width \(8\), height \(32\), area \(256\)`),
      P(R`Demand is \(q=1944-18p\). What price maximizes revenue?`, [
        R`\(R=p(1944-18p)\), \(R'=1944-36p=0\).`,
      ], R`\(p=\$54\); revenue \(\$52488\)`),
      P(R`An open-top box with a square base holds 500 cm³. Minimize the material.`, [
        R`\(S=x^2+\dfrac{2000}{x}\), \(S'=2x-\dfrac{2000}{x^2}=0\Rightarrow x^3=1000\).`,
      ], R`Base \(10\times10\), height \(5\)`),
      P(R`A closed box with a square base holds 5832 cm³. Minimize the surface area.`, [
        R`\(S=2x^2+\dfrac{23328}{x}\), \(S'=4x-\dfrac{23328}{x^2}=0\Rightarrow x=18\); height \(18\).`,
      ], R`A cube, \(18\) cm on a side; \(1944\) cm²`),
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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{9x}-1}{6x}\).`, [
        R`\(\tfrac00\); derivatives give \(\dfrac{9e^{9x}}{6}\).`,
      ], R`\(\dfrac{3}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to4}\frac{x^{3}-64}{x-4}\).`, [
        R`\(\tfrac00\); \(\dfrac{3x^{2}}{1}\) at \(x=4\).`,
      ], R`\(48\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\ln(1+12x)}{11x}\).`, [
        R`\(\tfrac00\); \(\dfrac{12/(1+12x)}{11}\).`,
      ], R`\(\dfrac{12}{11}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\sin(8x)}{\sin(10x)}\).`, [
        R`\(\tfrac00\); \(\dfrac{8\cos(8x)}{10\cos(10x)}\to\dfrac{8}{10}\).`,
      ], R`\(\dfrac{4}{5}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{1-\cos(12x)}{x^2}\).`, [
        R`\(\tfrac00\): \(\dfrac{12\sin(12x)}{2x}\), still \(\tfrac00\).`,
        R`Again: \(\dfrac{144\cos(12x)}{2}\to\dfrac{144}{2}\).`,
      ], R`\(72\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{x^{3}}{e^{x}}\).`, [
        R`\(\tfrac\infty\infty\); apply L'Hôpital 3 times. The top becomes the constant \(3!\), the bottom still \(\to\infty\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{\ln x}{x^{6}}\).`, [
        R`\(\tfrac\infty\infty\); \(\dfrac{1/x}{6x^{5}}=\dfrac{1}{6x^{6}}\to0\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{5x}-1-5x}{x^2}\).`, [
        R`\(\tfrac00\): \(\dfrac{5e^{5x}-5}{2x}\), still \(\tfrac00\).`,
        R`\(\dfrac{25e^{5x}}{2}\to\dfrac{25}{2}\).`,
      ], R`\(\dfrac{25}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\left(1+\frac{6}{x}\right)^x\).`, [
        R`\(\ln y=\dfrac{\ln(1+6/x)}{1/x}\), form \(\tfrac00\).`,
        R`L'Hôpital: \(\dfrac{6}{1+6/x}\to6\). So \(y\to e^{6}\).`,
      ], R`\(e^{6}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\tan(2x)}{7x}\).`, [
        R`\(\tfrac00\); \(\dfrac{2\sec^2(2x)}{7}\to\dfrac{2}{7}\).`,
      ], R`\(\dfrac{2}{7}\)`),
      P(R`Use L'Hôpital's Rule on \(\displaystyle\lim_{x\to\infty}\frac{3x^{2}-x}{5x^{2}-8}\).`, [
        R`\(\tfrac\infty\infty\): \(\dfrac{6x-1}{10x}\), still \(\tfrac\infty\infty\).`,
        R`\(\dfrac{6}{10}\).`,
      ], R`\(\dfrac{3}{5}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to4}\frac{x^{5}-1024}{x-4}\).`, [
        R`\(\tfrac00\); \(\dfrac{5x^{4}}{1}\) at \(x=4\).`,
      ], R`\(1280\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\ln(1+4x)}{11x}\).`, [
        R`\(\tfrac00\); \(\dfrac{4/(1+4x)}{11}\).`,
      ], R`\(\dfrac{4}{11}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\sin(6x)}{\sin(11x)}\).`, [
        R`\(\tfrac00\); \(\dfrac{6\cos(6x)}{11\cos(11x)}\to\dfrac{6}{11}\).`,
      ], R`\(\dfrac{6}{11}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{1-\cos(9x)}{x^2}\).`, [
        R`\(\tfrac00\): \(\dfrac{9\sin(9x)}{2x}\), still \(\tfrac00\).`,
        R`Again: \(\dfrac{81\cos(9x)}{2}\to\dfrac{81}{2}\).`,
      ], R`\(\dfrac{81}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{x^{8}}{e^{3x}}\).`, [
        R`\(\tfrac\infty\infty\); apply L'Hôpital 8 times. The top becomes the constant \(8!\), the bottom still \(\to\infty\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{\ln x}{x^{5}}\).`, [
        R`\(\tfrac\infty\infty\); \(\dfrac{1/x}{5x^{4}}=\dfrac{1}{5x^{5}}\to0\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{2x}-1-2x}{x^2}\).`, [
        R`\(\tfrac00\): \(\dfrac{2e^{2x}-2}{2x}\), still \(\tfrac00\).`,
        R`\(\dfrac{4e^{2x}}{2}\to\dfrac{4}{2}\).`,
      ], R`\(2\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\left(1+\frac{5}{x}\right)^x\).`, [
        R`\(\ln y=\dfrac{\ln(1+5/x)}{1/x}\), form \(\tfrac00\).`,
        R`L'Hôpital: \(\dfrac{5}{1+5/x}\to5\). So \(y\to e^{5}\).`,
      ], R`\(e^{5}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\tan(5x)}{3x}\).`, [
        R`\(\tfrac00\); \(\dfrac{5\sec^2(5x)}{3}\to\dfrac{5}{3}\).`,
      ], R`\(\dfrac{5}{3}\)`),
      P(R`Use L'Hôpital's Rule on \(\displaystyle\lim_{x\to\infty}\frac{x^{2}+4x}{8x^{2}+9}\).`, [
        R`\(\tfrac\infty\infty\): \(\dfrac{2x+4}{16x}\), still \(\tfrac\infty\infty\).`,
        R`\(\dfrac{2}{16}\).`,
      ], R`\(\dfrac{1}{8}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{3x}-1}{6x}\).`, [
        R`\(\tfrac00\); derivatives give \(\dfrac{3e^{3x}}{6}\).`,
      ], R`\(\dfrac{1}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to1}\frac{x^{5}-1}{x-1}\).`, [
        R`\(\tfrac00\); \(\dfrac{5x^{4}}{1}\) at \(x=1\).`,
      ], R`\(5\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\ln(1+8x)}{6x}\).`, [
        R`\(\tfrac00\); \(\dfrac{8/(1+8x)}{6}\).`,
      ], R`\(\dfrac{4}{3}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\sin(5x)}{\sin(8x)}\).`, [
        R`\(\tfrac00\); \(\dfrac{5\cos(5x)}{8\cos(8x)}\to\dfrac{5}{8}\).`,
      ], R`\(\dfrac{5}{8}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{1-\cos(5x)}{x^2}\).`, [
        R`\(\tfrac00\): \(\dfrac{5\sin(5x)}{2x}\), still \(\tfrac00\).`,
        R`Again: \(\dfrac{25\cos(5x)}{2}\to\dfrac{25}{2}\).`,
      ], R`\(\dfrac{25}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{x^{7}}{e^{3x}}\).`, [
        R`\(\tfrac\infty\infty\); apply L'Hôpital 7 times. The top becomes the constant \(7!\), the bottom still \(\to\infty\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\left(1+\frac{4}{x}\right)^x\).`, [
        R`\(\ln y=\dfrac{\ln(1+4/x)}{1/x}\), form \(\tfrac00\).`,
        R`L'Hôpital: \(\dfrac{4}{1+4/x}\to4\). So \(y\to e^{4}\).`,
      ], R`\(e^{4}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\tan(8x)}{4x}\).`, [
        R`\(\tfrac00\); \(\dfrac{8\sec^2(8x)}{4}\to\dfrac{8}{4}\).`,
      ], R`\(2\)`),
      P(R`Use L'Hôpital's Rule on \(\displaystyle\lim_{x\to\infty}\frac{-7x^{2}-9x}{5x^{2}-6}\).`, [
        R`\(\tfrac\infty\infty\): \(\dfrac{-14x-9}{10x}\), still \(\tfrac\infty\infty\).`,
        R`\(\dfrac{-14}{10}\).`,
      ], R`\(-\dfrac{7}{5}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to3}\frac{x^{6}-729}{x-3}\).`, [
        R`\(\tfrac00\); \(\dfrac{6x^{5}}{1}\) at \(x=3\).`,
      ], R`\(1458\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\ln(1+11x)}{2x}\).`, [
        R`\(\tfrac00\); \(\dfrac{11/(1+11x)}{2}\).`,
      ], R`\(\dfrac{11}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\sin(3x)}{\sin(8x)}\).`, [
        R`\(\tfrac00\); \(\dfrac{3\cos(3x)}{8\cos(8x)}\to\dfrac{3}{8}\).`,
      ], R`\(\dfrac{3}{8}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{\ln x}{x^{2}}\).`, [
        R`\(\tfrac\infty\infty\); \(\dfrac{1/x}{2x}=\dfrac{1}{2x^{2}}\to0\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\left(1+\frac{9}{x}\right)^x\).`, [
        R`\(\ln y=\dfrac{\ln(1+9/x)}{1/x}\), form \(\tfrac00\).`,
        R`L'Hôpital: \(\dfrac{9}{1+9/x}\to9\). So \(y\to e^{9}\).`,
      ], R`\(e^{9}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\tan(6x)}{4x}\).`, [
        R`\(\tfrac00\); \(\dfrac{6\sec^2(6x)}{4}\to\dfrac{6}{4}\).`,
      ], R`\(\dfrac{3}{2}\)`),
      P(R`Use L'Hôpital's Rule on \(\displaystyle\lim_{x\to\infty}\frac{7x^{2}+x}{6x^{2}-1}\).`, [
        R`\(\tfrac\infty\infty\): \(\dfrac{14x+1}{12x}\), still \(\tfrac\infty\infty\).`,
        R`\(\dfrac{14}{12}\).`,
      ], R`\(\dfrac{7}{6}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{6x}-1}{4x}\).`, [
        R`\(\tfrac00\); derivatives give \(\dfrac{6e^{6x}}{4}\).`,
      ], R`\(\dfrac{3}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to3}\frac{x^{2}-9}{x-3}\).`, [
        R`\(\tfrac00\); \(\dfrac{2x}{1}\) at \(x=3\).`,
      ], R`\(6\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\ln(1+12x)}{5x}\).`, [
        R`\(\tfrac00\); \(\dfrac{12/(1+12x)}{5}\).`,
      ], R`\(\dfrac{12}{5}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\sin(8x)}{\sin(9x)}\).`, [
        R`\(\tfrac00\); \(\dfrac{8\cos(8x)}{9\cos(9x)}\to\dfrac{8}{9}\).`,
      ], R`\(\dfrac{8}{9}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{1-\cos(11x)}{x^2}\).`, [
        R`\(\tfrac00\): \(\dfrac{11\sin(11x)}{2x}\), still \(\tfrac00\).`,
        R`Again: \(\dfrac{121\cos(11x)}{2}\to\dfrac{121}{2}\).`,
      ], R`\(\dfrac{121}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{x^{5}}{e^{3x}}\).`, [
        R`\(\tfrac\infty\infty\); apply L'Hôpital 5 times. The top becomes the constant \(5!\), the bottom still \(\to\infty\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{4x}-1-4x}{x^2}\).`, [
        R`\(\tfrac00\): \(\dfrac{4e^{4x}-4}{2x}\), still \(\tfrac00\).`,
        R`\(\dfrac{16e^{4x}}{2}\to\dfrac{16}{2}\).`,
      ], R`\(8\)`),
      P(R`Use L'Hôpital's Rule on \(\displaystyle\lim_{x\to\infty}\frac{4x^{2}-2x}{7x^{2}-2}\).`, [
        R`\(\tfrac\infty\infty\): \(\dfrac{8x-2}{14x}\), still \(\tfrac\infty\infty\).`,
        R`\(\dfrac{8}{14}\).`,
      ], R`\(\dfrac{4}{7}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{11x}-1}{5x}\).`, [
        R`\(\tfrac00\); derivatives give \(\dfrac{11e^{11x}}{5}\).`,
      ], R`\(\dfrac{11}{5}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to4}\frac{x^{7}-16384}{x-4}\).`, [
        R`\(\tfrac00\); \(\dfrac{7x^{6}}{1}\) at \(x=4\).`,
      ], R`\(28672\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\ln(1+5x)}{8x}\).`, [
        R`\(\tfrac00\); \(\dfrac{5/(1+5x)}{8}\).`,
      ], R`\(\dfrac{5}{8}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\sin(12x)}{\sin(3x)}\).`, [
        R`\(\tfrac00\); \(\dfrac{12\cos(12x)}{3\cos(3x)}\to\dfrac{12}{3}\).`,
      ], R`\(4\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{1-\cos(6x)}{x^2}\).`, [
        R`\(\tfrac00\): \(\dfrac{6\sin(6x)}{2x}\), still \(\tfrac00\).`,
        R`Again: \(\dfrac{36\cos(6x)}{2}\to\dfrac{36}{2}\).`,
      ], R`\(18\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{x^{4}}{e^{3x}}\).`, [
        R`\(\tfrac\infty\infty\); apply L'Hôpital 4 times. The top becomes the constant \(4!\), the bottom still \(\to\infty\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{10x}-1-10x}{x^2}\).`, [
        R`\(\tfrac00\): \(\dfrac{10e^{10x}-10}{2x}\), still \(\tfrac00\).`,
        R`\(\dfrac{100e^{10x}}{2}\to\dfrac{100}{2}\).`,
      ], R`\(50\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\left(1+\frac{2}{x}\right)^x\).`, [
        R`\(\ln y=\dfrac{\ln(1+2/x)}{1/x}\), form \(\tfrac00\).`,
        R`L'Hôpital: \(\dfrac{2}{1+2/x}\to2\). So \(y\to e^{2}\).`,
      ], R`\(e^{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\tan(7x)}{9x}\).`, [
        R`\(\tfrac00\); \(\dfrac{7\sec^2(7x)}{9}\to\dfrac{7}{9}\).`,
      ], R`\(\dfrac{7}{9}\)`),
      P(R`Use L'Hôpital's Rule on \(\displaystyle\lim_{x\to\infty}\frac{-9x^{2}+6x}{4x^{2}-3}\).`, [
        R`\(\tfrac\infty\infty\): \(\dfrac{-18x+6}{8x}\), still \(\tfrac\infty\infty\).`,
        R`\(\dfrac{-18}{8}\).`,
      ], R`\(-\dfrac{9}{4}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{7x}-1}{11x}\).`, [
        R`\(\tfrac00\); derivatives give \(\dfrac{7e^{7x}}{11}\).`,
      ], R`\(\dfrac{7}{11}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to2}\frac{x^{3}-8}{x-2}\).`, [
        R`\(\tfrac00\); \(\dfrac{3x^{2}}{1}\) at \(x=2\).`,
      ], R`\(12\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\ln(1+7x)}{2x}\).`, [
        R`\(\tfrac00\); \(\dfrac{7/(1+7x)}{2}\).`,
      ], R`\(\dfrac{7}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{1-\cos(4x)}{x^2}\).`, [
        R`\(\tfrac00\): \(\dfrac{4\sin(4x)}{2x}\), still \(\tfrac00\).`,
        R`Again: \(\dfrac{16\cos(4x)}{2}\to\dfrac{16}{2}\).`,
      ], R`\(8\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{3x}-1-3x}{x^2}\).`, [
        R`\(\tfrac00\): \(\dfrac{3e^{3x}-3}{2x}\), still \(\tfrac00\).`,
        R`\(\dfrac{9e^{3x}}{2}\to\dfrac{9}{2}\).`,
      ], R`\(\dfrac{9}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\left(1-\frac{8}{x}\right)^x\).`, [
        R`\(\ln y=\dfrac{\ln(1-8/x)}{1/x}\), form \(\tfrac00\).`,
        R`L'Hôpital: \(\dfrac{-8}{1-8/x}\to-8\). So \(y\to e^{-8}\).`,
      ], R`\(e^{-8}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\tan(6x)}{2x}\).`, [
        R`\(\tfrac00\); \(\dfrac{6\sec^2(6x)}{2}\to\dfrac{6}{2}\).`,
      ], R`\(3\)`),
      P(R`Use L'Hôpital's Rule on \(\displaystyle\lim_{x\to\infty}\frac{-5x^{2}+8x}{4x^{2}-4}\).`, [
        R`\(\tfrac\infty\infty\): \(\dfrac{-10x+8}{8x}\), still \(\tfrac\infty\infty\).`,
        R`\(\dfrac{-10}{8}\).`,
      ], R`\(-\dfrac{5}{4}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{11x}-1}{2x}\).`, [
        R`\(\tfrac00\); derivatives give \(\dfrac{11e^{11x}}{2}\).`,
      ], R`\(\dfrac{11}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to3}\frac{x^{3}-27}{x-3}\).`, [
        R`\(\tfrac00\); \(\dfrac{3x^{2}}{1}\) at \(x=3\).`,
      ], R`\(27\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\ln(1+3x)}{4x}\).`, [
        R`\(\tfrac00\); \(\dfrac{3/(1+3x)}{4}\).`,
      ], R`\(\dfrac{3}{4}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\sin(3x)}{\sin(5x)}\).`, [
        R`\(\tfrac00\); \(\dfrac{3\cos(3x)}{5\cos(5x)}\to\dfrac{3}{5}\).`,
      ], R`\(\dfrac{3}{5}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{1-\cos(3x)}{x^2}\).`, [
        R`\(\tfrac00\): \(\dfrac{3\sin(3x)}{2x}\), still \(\tfrac00\).`,
        R`Again: \(\dfrac{9\cos(3x)}{2}\to\dfrac{9}{2}\).`,
      ], R`\(\dfrac{9}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{x^{7}}{e^{2x}}\).`, [
        R`\(\tfrac\infty\infty\); apply L'Hôpital 7 times. The top becomes the constant \(7!\), the bottom still \(\to\infty\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{\ln x}{x}\).`, [
        R`\(\tfrac\infty\infty\); \(\dfrac{1/x}{1}=\dfrac{1}{x}\to0\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\left(1+\frac{1}{x}\right)^x\).`, [
        R`\(\ln y=\dfrac{\ln(1+1/x)}{1/x}\), form \(\tfrac00\).`,
        R`L'Hôpital: \(\dfrac{1}{1+1/x}\to1\). So \(y\to e^{1}\).`,
      ], R`\(e^{1}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\tan(4x)}{12x}\).`, [
        R`\(\tfrac00\); \(\dfrac{4\sec^2(4x)}{12}\to\dfrac{4}{12}\).`,
      ], R`\(\dfrac{1}{3}\)`),
      P(R`Use L'Hôpital's Rule on \(\displaystyle\lim_{x\to\infty}\frac{6x^{2}+3x}{7x^{2}-5}\).`, [
        R`\(\tfrac\infty\infty\): \(\dfrac{12x+3}{14x}\), still \(\tfrac\infty\infty\).`,
        R`\(\dfrac{12}{14}\).`,
      ], R`\(\dfrac{6}{7}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{8x}-1}{5x}\).`, [
        R`\(\tfrac00\); derivatives give \(\dfrac{8e^{8x}}{5}\).`,
      ], R`\(\dfrac{8}{5}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\ln(1+4x)}{12x}\).`, [
        R`\(\tfrac00\); \(\dfrac{4/(1+4x)}{12}\).`,
      ], R`\(\dfrac{1}{3}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\left(1-\frac{9}{x}\right)^x\).`, [
        R`\(\ln y=\dfrac{\ln(1-9/x)}{1/x}\), form \(\tfrac00\).`,
        R`L'Hôpital: \(\dfrac{-9}{1-9/x}\to-9\). So \(y\to e^{-9}\).`,
      ], R`\(e^{-9}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\tan(10x)}{4x}\).`, [
        R`\(\tfrac00\); \(\dfrac{10\sec^2(10x)}{4}\to\dfrac{10}{4}\).`,
      ], R`\(\dfrac{5}{2}\)`),
      P(R`Use L'Hôpital's Rule on \(\displaystyle\lim_{x\to\infty}\frac{9x^{2}+8x}{6x^{2}+2}\).`, [
        R`\(\tfrac\infty\infty\): \(\dfrac{18x+8}{12x}\), still \(\tfrac\infty\infty\).`,
        R`\(\dfrac{18}{12}\).`,
      ], R`\(\dfrac{3}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to4}\frac{x^{6}-4096}{x-4}\).`, [
        R`\(\tfrac00\); \(\dfrac{6x^{5}}{1}\) at \(x=4\).`,
      ], R`\(6144\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\sin(4x)}{\sin(8x)}\).`, [
        R`\(\tfrac00\); \(\dfrac{4\cos(4x)}{8\cos(8x)}\to\dfrac{4}{8}\).`,
      ], R`\(\dfrac{1}{2}\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{x^{2}}{e^{2x}}\).`, [
        R`\(\tfrac\infty\infty\); apply L'Hôpital 2 times. The top becomes the constant \(2!\), the bottom still \(\to\infty\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{\ln x}{x^{4}}\).`, [
        R`\(\tfrac\infty\infty\); \(\dfrac{1/x}{4x^{3}}=\dfrac{1}{4x^{4}}\to0\).`,
      ], R`\(0\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{8x}-1-8x}{x^2}\).`, [
        R`\(\tfrac00\): \(\dfrac{8e^{8x}-8}{2x}\), still \(\tfrac00\).`,
        R`\(\dfrac{64e^{8x}}{2}\to\dfrac{64}{2}\).`,
      ], R`\(32\)`),
      P(R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\tan(4x)}{8x}\).`, [
        R`\(\tfrac00\); \(\dfrac{4\sec^2(4x)}{8}\to\dfrac{4}{8}\).`,
      ], R`\(\dfrac{1}{2}\)`),
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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`Find \(\displaystyle\int(-14x^{6}+8x-1)\,dx\).`, [
        R`Add 1 to each power and divide by the new power.`,
      ], R`\(-2x^{7}+4x^{2}-x+C\)`),
      P(R`Find \(f\) if \(f'(x)=4x-9\) and \(f(-3)=1\).`, [
        R`\(f=2x^{2}-9x+C\); plug in \(x=-3\): \(C=-44\).`,
      ], R`\(f(x)=2x^{2}-9x-44\)`),
      P(R`Find \(\displaystyle\int\left(\dfrac{-7}{x}-5e^x-6\cos x\right)dx\).`, [
        R`Use \(\int\tfrac1x=\ln|x|\), \(\int e^x=e^x\), \(\int\cos x=\sin x\).`,
      ], R`\(-7\ln|x|-5e^x-6\sin x+C\)`),
      P(R`Find \(\displaystyle\int\left(9\sqrt x-\dfrac{5}{x^2}\right)dx\).`, [
        R`Rewrite: \(9x^{1/2}-5x^{-2}\).`,
        R`\(9x^{1/2}\to6x^{3/2}\), \(-5x^{-2}\to5x^{-1}\).`,
      ], R`\(6x^{3/2}+\dfrac{5}{x}+C\)`),
      P(R`Find \(\displaystyle\int(-4\sin x+3\sec^2x)\,dx\).`, [
        R`\(\int\sin x=-\cos x\), \(\int\sec^2x=\tan x\).`,
      ], R`\(4\cos x+3\tan x+C\)`),
      P(R`Find \(\displaystyle\int(x-2)(x-2)\,dx\).`, [
        R`Multiply out: \(x^{2}-4x+4\).`,
      ], R`\(\tfrac{1}{3}x^{3}-2x^{2}+4x+C\)`),
      P(R`Find \(\displaystyle\int\frac{-8x^{2}-3x+8}{x}\,dx\).`, [
        R`Divide: \(-8x-3+8\tfrac1x\).`,
      ], R`\(-4x^2-3x+8\ln|x|+C\)`),
      P(R`Find \(f\) if \(f''(x)=7\), \(f'(0)=5\), \(f(0)=-9\).`, [
        R`\(f'=7x+C_1\), \(C_1=5\). \(f=\tfrac{7}{2}x^2+5x+C_2\), \(C_2=-9\).`,
      ], R`\(f(x)=\tfrac{7}{2}x^{2}+5x-9\)`),
      P(R`A ball is thrown up at 48 ft/s from 57 ft high (\(a=-32\) ft/s²). Find its maximum height.`, [
        R`\(v=-32t+48\), \(s=-16t^2+48t+57\).`,
        R`\(v=0\Rightarrow t=1.5\).`,
      ], R`\(93\) ft`),
      P(R`Find \(\displaystyle\int\left(\frac{1}{1+x^2}+\frac{4}{\sqrt{1-x^2}}\right)dx\).`, [
        R`Inverse trig formulas.`,
      ], R`\(\arctan x+4\arcsin x+C\)`),
      P(R`Find \(f\) if \(f'(x)=-5\sin x\) and \(f(0)=-8\).`, [
        R`\(f=5\cos x+C\); at 0: \(5+C=-8\).`,
      ], R`\(f(x)=5\cos x-13\)`),
      P(R`Find \(\displaystyle\int(-14x^{6}-12x-4)\,dx\).`, [
        R`Add 1 to each power and divide by the new power.`,
      ], R`\(-2x^{7}-6x^{2}-4x+C\)`),
      P(R`Find \(f\) if \(f'(x)=2x-8\) and \(f(0)=5\).`, [
        R`\(f=x^{2}-8x+C\); plug in \(x=0\): \(C=5\).`,
      ], R`\(f(x)=x^{2}-8x+5\)`),
      P(R`Find \(\displaystyle\int\left(\dfrac{9}{x}-4e^x+5\cos x\right)dx\).`, [
        R`Use \(\int\tfrac1x=\ln|x|\), \(\int e^x=e^x\), \(\int\cos x=\sin x\).`,
      ], R`\(9\ln|x|-4e^x+5\sin x+C\)`),
      P(R`Find \(\displaystyle\int\left(6\sqrt x-\dfrac{6}{x^2}\right)dx\).`, [
        R`Rewrite: \(6x^{1/2}-6x^{-2}\).`,
        R`\(6x^{1/2}\to4x^{3/2}\), \(-6x^{-2}\to6x^{-1}\).`,
      ], R`\(4x^{3/2}+\dfrac{6}{x}+C\)`),
      P(R`Find \(\displaystyle\int(5\sin x+7\sec^2x)\,dx\).`, [
        R`\(\int\sin x=-\cos x\), \(\int\sec^2x=\tan x\).`,
      ], R`\(-5\cos x+7\tan x+C\)`),
      P(R`Find \(\displaystyle\int(x+4)(x+3)\,dx\).`, [
        R`Multiply out: \(x^{2}+7x+12\).`,
      ], R`\(\tfrac{1}{3}x^{3}+\tfrac{7}{2}x^{2}+12x+C\)`),
      P(R`Find \(\displaystyle\int\frac{-7x^{2}+3x+9}{x}\,dx\).`, [
        R`Divide: \(-7x+3+9\tfrac1x\).`,
      ], R`\(-\tfrac{7}{2}x^2+3x+9\ln|x|+C\)`),
      P(R`Find \(f\) if \(f''(x)=-12\), \(f'(0)=-8\), \(f(0)=-6\).`, [
        R`\(f'=-12x+C_1\), \(C_1=-8\). \(f=-6x^2-8x+C_2\), \(C_2=-6\).`,
      ], R`\(f(x)=-6x^{2}-8x-6\)`),
      P(R`A ball is thrown up at 16 ft/s from 52 ft high (\(a=-32\) ft/s²). Find its maximum height.`, [
        R`\(v=-32t+16\), \(s=-16t^2+16t+52\).`,
        R`\(v=0\Rightarrow t=0.5\).`,
      ], R`\(56\) ft`),
      P(R`Find \(\displaystyle\int\left(\frac{3}{1+x^2}-\frac{2}{\sqrt{1-x^2}}\right)dx\).`, [
        R`Inverse trig formulas.`,
      ], R`\(3\arctan x-2\arcsin x+C\)`),
      P(R`Find \(f\) if \(f'(x)=-8\cos x\) and \(f(0)=6\).`, [
        R`\(f=-8\sin x+C\); at 0: \(0+C=6\).`,
      ], R`\(f(x)=-8\sin x+6\)`),
      P(R`Find \(\displaystyle\int(14x^{6}-8x-5)\,dx\).`, [
        R`Add 1 to each power and divide by the new power.`,
      ], R`\(2x^{7}-4x^{2}-5x+C\)`),
      P(R`Find \(f\) if \(f'(x)=2x+2\) and \(f(-2)=9\).`, [
        R`\(f=x^{2}+2x+C\); plug in \(x=-2\): \(C=9\).`,
      ], R`\(f(x)=x^{2}+2x+9\)`),
      P(R`Find \(\displaystyle\int\left(\dfrac{-8}{x}+7e^x-8\cos x\right)dx\).`, [
        R`Use \(\int\tfrac1x=\ln|x|\), \(\int e^x=e^x\), \(\int\cos x=\sin x\).`,
      ], R`\(-8\ln|x|+7e^x-8\sin x+C\)`),
      P(R`Find \(\displaystyle\int\left(-12\sqrt x-\dfrac{4}{x^2}\right)dx\).`, [
        R`Rewrite: \(-12x^{1/2}-4x^{-2}\).`,
        R`\(-12x^{1/2}\to-8x^{3/2}\), \(-4x^{-2}\to4x^{-1}\).`,
      ], R`\(-8x^{3/2}+\dfrac{4}{x}+C\)`),
      P(R`Find \(\displaystyle\int(-\sin x-8\sec^2x)\,dx\).`, [
        R`\(\int\sin x=-\cos x\), \(\int\sec^2x=\tan x\).`,
      ], R`\(\cos x-8\tan x+C\)`),
      P(R`Find \(\displaystyle\int(x-8)(x+5)\,dx\).`, [
        R`Multiply out: \(x^{2}-3x-40\).`,
      ], R`\(\tfrac{1}{3}x^{3}-\tfrac{3}{2}x^{2}-40x+C\)`),
      P(R`Find \(\displaystyle\int\frac{2x^{2}+8x-3}{x}\,dx\).`, [
        R`Divide: \(2x+8-3\tfrac1x\).`,
      ], R`\(x^2+8x-3\ln|x|+C\)`),
      P(R`Find \(f\) if \(f''(x)=12\), \(f'(0)=0\), \(f(0)=9\).`, [
        R`\(f'=12x+C_1\), \(C_1=0\). \(f=6x^2+C_2\), \(C_2=9\).`,
      ], R`\(f(x)=6x^{2}+9\)`),
      P(R`A ball is thrown up at 64 ft/s from 73 ft high (\(a=-32\) ft/s²). Find its maximum height.`, [
        R`\(v=-32t+64\), \(s=-16t^2+64t+73\).`,
        R`\(v=0\Rightarrow t=2\).`,
      ], R`\(137\) ft`),
      P(R`Find \(\displaystyle\int\left(\frac{-2}{1+x^2}-\frac{3}{\sqrt{1-x^2}}\right)dx\).`, [
        R`Inverse trig formulas.`,
      ], R`\(-2\arctan x-3\arcsin x+C\)`),
      P(R`Find \(f\) if \(f'(x)=9\cos x\) and \(f(0)=-4\).`, [
        R`\(f=9\sin x+C\); at 0: \(0+C=-4\).`,
      ], R`\(f(x)=9\sin x-4\)`),
      P(R`Find \(\displaystyle\int(16x^{3}+6x+4)\,dx\).`, [
        R`Add 1 to each power and divide by the new power.`,
      ], R`\(4x^{4}+3x^{2}+4x+C\)`),
      P(R`Find \(f\) if \(f'(x)=2x-8\) and \(f(-2)=4\).`, [
        R`\(f=x^{2}-8x+C\); plug in \(x=-2\): \(C=-16\).`,
      ], R`\(f(x)=x^{2}-8x-16\)`),
      P(R`Find \(\displaystyle\int\left(\dfrac{-5}{x}-7e^x-2\cos x\right)dx\).`, [
        R`Use \(\int\tfrac1x=\ln|x|\), \(\int e^x=e^x\), \(\int\cos x=\sin x\).`,
      ], R`\(-5\ln|x|-7e^x-2\sin x+C\)`),
      P(R`Find \(\displaystyle\int\left(6\sqrt x-\dfrac{9}{x^2}\right)dx\).`, [
        R`Rewrite: \(6x^{1/2}-9x^{-2}\).`,
        R`\(6x^{1/2}\to4x^{3/2}\), \(-9x^{-2}\to9x^{-1}\).`,
      ], R`\(4x^{3/2}+\dfrac{9}{x}+C\)`),
      P(R`Find \(\displaystyle\int(-7\sin x+8\sec^2x)\,dx\).`, [
        R`\(\int\sin x=-\cos x\), \(\int\sec^2x=\tan x\).`,
      ], R`\(7\cos x+8\tan x+C\)`),
      P(R`Find \(\displaystyle\int(x-7)(x+7)\,dx\).`, [
        R`Multiply out: \(x^{2}-49\).`,
      ], R`\(\tfrac{1}{3}x^{3}-49x+C\)`),
      P(R`Find \(\displaystyle\int\frac{9x^{2}+6x-7}{x}\,dx\).`, [
        R`Divide: \(9x+6-7\tfrac1x\).`,
      ], R`\(\tfrac{9}{2}x^2+6x-7\ln|x|+C\)`),
      P(R`Find \(f\) if \(f''(x)=7\), \(f'(0)=0\), \(f(0)=-6\).`, [
        R`\(f'=7x+C_1\), \(C_1=0\). \(f=\tfrac{7}{2}x^2+C_2\), \(C_2=-6\).`,
      ], R`\(f(x)=\tfrac{7}{2}x^{2}-6\)`),
      P(R`A ball is thrown up at 48 ft/s from 80 ft high (\(a=-32\) ft/s²). Find its maximum height.`, [
        R`\(v=-32t+48\), \(s=-16t^2+48t+80\).`,
        R`\(v=0\Rightarrow t=1.5\).`,
      ], R`\(116\) ft`),
      P(R`Find \(\displaystyle\int\left(\frac{7}{1+x^2}+\frac{3}{\sqrt{1-x^2}}\right)dx\).`, [
        R`Inverse trig formulas.`,
      ], R`\(7\arctan x+3\arcsin x+C\)`),
      P(R`Find \(f\) if \(f'(x)=2\cos x\) and \(f(0)=0\).`, [
        R`\(f=2\sin x+C\); at 0: \(0+C=0\).`,
      ], R`\(f(x)=2\sin x\)`),
      P(R`Find \(\displaystyle\int(-16x^{7}+6x+4)\,dx\).`, [
        R`Add 1 to each power and divide by the new power.`,
      ], R`\(-2x^{8}+3x^{2}+4x+C\)`),
      P(R`Find \(f\) if \(f'(x)=-2x-9\) and \(f(-3)=-7\).`, [
        R`\(f=-x^{2}-9x+C\); plug in \(x=-3\): \(C=-25\).`,
      ], R`\(f(x)=-x^{2}-9x-25\)`),
      P(R`Find \(\displaystyle\int\left(\dfrac{3}{x}-6e^x+8\cos x\right)dx\).`, [
        R`Use \(\int\tfrac1x=\ln|x|\), \(\int e^x=e^x\), \(\int\cos x=\sin x\).`,
      ], R`\(3\ln|x|-6e^x+8\sin x+C\)`),
      P(R`Find \(\displaystyle\int\left(-12\sqrt x-\dfrac{2}{x^2}\right)dx\).`, [
        R`Rewrite: \(-12x^{1/2}-2x^{-2}\).`,
        R`\(-12x^{1/2}\to-8x^{3/2}\), \(-2x^{-2}\to2x^{-1}\).`,
      ], R`\(-8x^{3/2}+\dfrac{2}{x}+C\)`),
      P(R`Find \(\displaystyle\int(-2\sin x+6\sec^2x)\,dx\).`, [
        R`\(\int\sin x=-\cos x\), \(\int\sec^2x=\tan x\).`,
      ], R`\(2\cos x+6\tan x+C\)`),
      P(R`Find \(\displaystyle\int(x+1)(x-9)\,dx\).`, [
        R`Multiply out: \(x^{2}-8x-9\).`,
      ], R`\(\tfrac{1}{3}x^{3}-4x^{2}-9x+C\)`),
      P(R`Find \(\displaystyle\int\frac{x^{2}+3x-8}{x}\,dx\).`, [
        R`Divide: \(x+3-8\tfrac1x\).`,
      ], R`\(\tfrac{1}{2}x^2+3x-8\ln|x|+C\)`),
      P(R`Find \(f\) if \(f''(x)=10\), \(f'(0)=-5\), \(f(0)=8\).`, [
        R`\(f'=10x+C_1\), \(C_1=-5\). \(f=5x^2-5x+C_2\), \(C_2=8\).`,
      ], R`\(f(x)=5x^{2}-5x+8\)`),
      P(R`A ball is thrown up at 32 ft/s from 89 ft high (\(a=-32\) ft/s²). Find its maximum height.`, [
        R`\(v=-32t+32\), \(s=-16t^2+32t+89\).`,
        R`\(v=0\Rightarrow t=1\).`,
      ], R`\(105\) ft`),
      P(R`Find \(\displaystyle\int\left(\frac{2}{1+x^2}-\frac{7}{\sqrt{1-x^2}}\right)dx\).`, [
        R`Inverse trig formulas.`,
      ], R`\(2\arctan x-7\arcsin x+C\)`),
      P(R`Find \(f\) if \(f'(x)=-2\sin x\) and \(f(0)=-3\).`, [
        R`\(f=2\cos x+C\); at 0: \(2+C=-3\).`,
      ], R`\(f(x)=2\cos x-5\)`),
      P(R`Find \(\displaystyle\int(-12x^{2}-12x-1)\,dx\).`, [
        R`Add 1 to each power and divide by the new power.`,
      ], R`\(-4x^{3}-6x^{2}-x+C\)`),
      P(R`Find \(f\) if \(f'(x)=-8x-7\) and \(f(-2)=15\).`, [
        R`\(f=-4x^{2}-7x+C\); plug in \(x=-2\): \(C=17\).`,
      ], R`\(f(x)=-4x^{2}-7x+17\)`),
      P(R`Find \(\displaystyle\int\left(\dfrac{9}{x}+2e^x+9\cos x\right)dx\).`, [
        R`Use \(\int\tfrac1x=\ln|x|\), \(\int e^x=e^x\), \(\int\cos x=\sin x\).`,
      ], R`\(9\ln|x|+2e^x+9\sin x+C\)`),
      P(R`Find \(\displaystyle\int\left(-12\sqrt x-\dfrac{7}{x^2}\right)dx\).`, [
        R`Rewrite: \(-12x^{1/2}-7x^{-2}\).`,
        R`\(-12x^{1/2}\to-8x^{3/2}\), \(-7x^{-2}\to7x^{-1}\).`,
      ], R`\(-8x^{3/2}+\dfrac{7}{x}+C\)`),
      P(R`Find \(\displaystyle\int(4\sin x+7\sec^2x)\,dx\).`, [
        R`\(\int\sin x=-\cos x\), \(\int\sec^2x=\tan x\).`,
      ], R`\(-4\cos x+7\tan x+C\)`),
      P(R`Find \(\displaystyle\int(x-5)(x+8)\,dx\).`, [
        R`Multiply out: \(x^{2}+3x-40\).`,
      ], R`\(\tfrac{1}{3}x^{3}+\tfrac{3}{2}x^{2}-40x+C\)`),
      P(R`Find \(\displaystyle\int\frac{4x^{2}+9x-3}{x}\,dx\).`, [
        R`Divide: \(4x+9-3\tfrac1x\).`,
      ], R`\(2x^2+9x-3\ln|x|+C\)`),
      P(R`Find \(f\) if \(f''(x)=1\), \(f'(0)=1\), \(f(0)=-8\).`, [
        R`\(f'=1x+C_1\), \(C_1=1\). \(f=\tfrac{1}{2}x^2+x+C_2\), \(C_2=-8\).`,
      ], R`\(f(x)=\tfrac{1}{2}x^{2}+x-8\)`),
      P(R`A ball is thrown up at 16 ft/s from 69 ft high (\(a=-32\) ft/s²). Find its maximum height.`, [
        R`\(v=-32t+16\), \(s=-16t^2+16t+69\).`,
        R`\(v=0\Rightarrow t=0.5\).`,
      ], R`\(73\) ft`),
      P(R`Find \(\displaystyle\int\left(\frac{-1}{1+x^2}-\frac{8}{\sqrt{1-x^2}}\right)dx\).`, [
        R`Inverse trig formulas.`,
      ], R`\(-\arctan x-8\arcsin x+C\)`),
      P(R`Find \(f\) if \(f'(x)=-\cos x\) and \(f(0)=-6\).`, [
        R`\(f=-\sin x+C\); at 0: \(0+C=-6\).`,
      ], R`\(f(x)=-\sin x-6\)`),
      P(R`Find \(\displaystyle\int(30x^{4}-2x-6)\,dx\).`, [
        R`Add 1 to each power and divide by the new power.`,
      ], R`\(6x^{5}-x^{2}-6x+C\)`),
      P(R`Find \(f\) if \(f'(x)=-6x+5\) and \(f(-1)=-8\).`, [
        R`\(f=-3x^{2}+5x+C\); plug in \(x=-1\): \(C=0\).`,
      ], R`\(f(x)=-3x^{2}+5x\)`),
      P(R`Find \(\displaystyle\int\left(\dfrac{-7}{x}+2e^x+2\cos x\right)dx\).`, [
        R`Use \(\int\tfrac1x=\ln|x|\), \(\int e^x=e^x\), \(\int\cos x=\sin x\).`,
      ], R`\(-7\ln|x|+2e^x+2\sin x+C\)`),
      P(R`Find \(\displaystyle\int\left(-12\sqrt x+\dfrac{1}{x^2}\right)dx\).`, [
        R`Rewrite: \(-12x^{1/2}+x^{-2}\).`,
        R`\(-12x^{1/2}\to-8x^{3/2}\), \(x^{-2}\to-x^{-1}\).`,
      ], R`\(-8x^{3/2}-\dfrac{1}{x}+C\)`),
      P(R`Find \(\displaystyle\int(-\sin x+6\sec^2x)\,dx\).`, [
        R`\(\int\sin x=-\cos x\), \(\int\sec^2x=\tan x\).`,
      ], R`\(\cos x+6\tan x+C\)`),
      P(R`Find \(\displaystyle\int(x-3)(x+2)\,dx\).`, [
        R`Multiply out: \(x^{2}-x-6\).`,
      ], R`\(\tfrac{1}{3}x^{3}-\tfrac{1}{2}x^{2}-6x+C\)`),
      P(R`Find \(\displaystyle\int\frac{-9x^{2}+8x-6}{x}\,dx\).`, [
        R`Divide: \(-9x+8-6\tfrac1x\).`,
      ], R`\(-\tfrac{9}{2}x^2+8x-6\ln|x|+C\)`),
      P(R`Find \(f\) if \(f''(x)=3\), \(f'(0)=3\), \(f(0)=-8\).`, [
        R`\(f'=3x+C_1\), \(C_1=3\). \(f=\tfrac{3}{2}x^2+3x+C_2\), \(C_2=-8\).`,
      ], R`\(f(x)=\tfrac{3}{2}x^{2}+3x-8\)`),
      P(R`A ball is thrown up at 48 ft/s from 55 ft high (\(a=-32\) ft/s²). Find its maximum height.`, [
        R`\(v=-32t+48\), \(s=-16t^2+48t+55\).`,
        R`\(v=0\Rightarrow t=1.5\).`,
      ], R`\(91\) ft`),
      P(R`Find \(\displaystyle\int\left(\frac{9}{1+x^2}-\frac{8}{\sqrt{1-x^2}}\right)dx\).`, [
        R`Inverse trig formulas.`,
      ], R`\(9\arctan x-8\arcsin x+C\)`),
      P(R`Find \(f\) if \(f'(x)=-5\cos x\) and \(f(0)=1\).`, [
        R`\(f=-5\sin x+C\); at 0: \(0+C=1\).`,
      ], R`\(f(x)=-5\sin x+1\)`),
      P(R`Find \(\displaystyle\int(-21x^{6}-2x-6)\,dx\).`, [
        R`Add 1 to each power and divide by the new power.`,
      ], R`\(-3x^{7}-x^{2}-6x+C\)`),
      P(R`Find \(f\) if \(f'(x)=-8x+6\) and \(f(-1)=-4\).`, [
        R`\(f=-4x^{2}+6x+C\); plug in \(x=-1\): \(C=6\).`,
      ], R`\(f(x)=-4x^{2}+6x+6\)`),
      P(R`Find \(\displaystyle\int\left(\dfrac{8}{x}-9e^x-5\cos x\right)dx\).`, [
        R`Use \(\int\tfrac1x=\ln|x|\), \(\int e^x=e^x\), \(\int\cos x=\sin x\).`,
      ], R`\(8\ln|x|-9e^x-5\sin x+C\)`),
      P(R`Find \(\displaystyle\int\left(6\sqrt x+\dfrac{3}{x^2}\right)dx\).`, [
        R`Rewrite: \(6x^{1/2}+3x^{-2}\).`,
        R`\(6x^{1/2}\to4x^{3/2}\), \(3x^{-2}\to-3x^{-1}\).`,
      ], R`\(4x^{3/2}-\dfrac{3}{x}+C\)`),
      P(R`Find \(\displaystyle\int(6\sin x-8\sec^2x)\,dx\).`, [
        R`\(\int\sin x=-\cos x\), \(\int\sec^2x=\tan x\).`,
      ], R`\(-6\cos x-8\tan x+C\)`),
      P(R`Find \(\displaystyle\int(x-4)(x-3)\,dx\).`, [
        R`Multiply out: \(x^{2}-7x+12\).`,
      ], R`\(\tfrac{1}{3}x^{3}-\tfrac{7}{2}x^{2}+12x+C\)`),
      P(R`Find \(\displaystyle\int\frac{-4x^{2}-4x-6}{x}\,dx\).`, [
        R`Divide: \(-4x-4-6\tfrac1x\).`,
      ], R`\(-2x^2-4x-6\ln|x|+C\)`),
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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`Evaluate \(\displaystyle\int_{0}^{1}(9x)\,dx\).`, [
        R`\(F=\tfrac{9}{2}x^{2}\); \(F(1)=\dfrac{9}{2}\), \(F(0)=0\).`,
      ], R`\(\dfrac{9}{2}\)`),
      P(R`Evaluate \(\displaystyle\int_{-1}^{2}(4x^{2}-1)\,dx\).`, [
        R`\(F=\tfrac{4}{3}x^{3}-x\); \(F(2)=\dfrac{26}{3}\), \(F(-1)=-\dfrac{1}{3}\).`,
      ], R`\(9\)`),
      P(R`Find the area between \(y=3x\) and \(y=x^2\).`, [
        R`Intersect at \(0,\ 3\); line on top.`,
        R`\(\int_0^{3}(3x-x^2)\,dx=\dfrac{27}{2}-9\).`,
      ], R`\(\dfrac{9}{2}\)`),
      P(R`Find the average value of \(f(x)=x^2\) on \([0,8]\).`, [
        R`\(\dfrac{1}{8}\int_0^{8}x^2\,dx=\dfrac{1}{8}\cdot\dfrac{512}{3}\).`,
      ], R`\(\dfrac{64}{3}\)`),
      P(R`Evaluate \(\displaystyle\int_{-2}^{0}6x^3\,dx\).`, [
        R`\(\left[\tfrac{3}{2}x^4\right]_{-2}^{0}\).`,
      ], R`\(-24\)`),
      P(R`Evaluate \(\displaystyle\int_{0}^{\tfrac\pi4}5\sec^2x\,dx\).`, [
        R`Antiderivative \(5\tan x\); top minus bottom.`,
      ], R`\(5\)`),
      P(R`Evaluate \(\displaystyle\int_1^{e^{4}}\frac{2}{x}\,dx\).`, [
        R`\(2[\ln x]_1^{e^{4}}=2(4-0)\).`,
      ], R`\(8\)`),
      P(R`Find \(\dfrac{d}{dx}\displaystyle\int_{-1}^{x^{3}}t^2+1\,dt\).`, [
        R`FTC Part 1 + chain rule: plug in \(x^{3}\) and multiply by \(3x^{2}\).`,
      ], R`\(3x^{2}\left(x^{6}+1\right)\)`),
      P(R`Estimate \(\displaystyle\int_0^{6}(x^{2}+2)\,dx\) with a left Riemann sum using 6 rectangles.`, [
        R`\(\Delta x=1\); left endpoints \(0,\ 1,\ 2,\ 3,\ 4,\ 5\).`,
        R`Sum of heights: \(2+3+6+11+18+27=67\).`,
      ], R`\(67\)`),
      P(R`Find the area under \(y=4-x^2\) above the \(x\)-axis.`, [
        R`Roots \(\pm2\). \(\left[4x-\tfrac{x^3}{3}\right]_{-2}^{2}\).`,
      ], R`\(\dfrac{32}{3}\)`),
      P(R`If \(\int_0^{5}f=-12\) and \(\int_0^{6}f=20\), find \(\int_{5}^{6}f\) and \(\int_{6}^{5}f\).`, [
        R`\(\int_{5}^{6}f=\int_0^{6}f-\int_0^{5}f\). Flipping limits changes the sign.`,
      ], R`\(32\) and \(-32\)`),
      P(R`\(v(t)=t-4\) m/s on \([0,6]\). Find the displacement and total distance.`, [
        R`Displacement: \(\left[\tfrac{t^2}{2}-4t\right]_0^{6}\).`,
        R`Distance: \(\int_0^{4}(4-t)\,dt+\int_{4}^{6}(t-4)\,dt=8+2\).`,
      ], R`Displacement \(-6\) m; distance \(10\) m`),
      P(R`Find \(\dfrac{d}{dx}\displaystyle\int_{-2}^{x}e^{-t^2}\,dt\).`, [
        R`FTC Part 1: replace \(t\) with \(x\).`,
      ], R`\(e^{-x^2}\)`),
      P(R`Evaluate \(\displaystyle\int_{-1}^{0}(2x-8)\,dx\).`, [
        R`\(F=x^{2}-8x\); \(F(0)=0\), \(F(-1)=9\).`,
      ], R`\(-9\)`),
      P(R`Evaluate \(\displaystyle\int_{2}^{4}(x^{2}+5)\,dx\).`, [
        R`\(F=\tfrac{1}{3}x^{3}+5x\); \(F(4)=\dfrac{124}{3}\), \(F(2)=\dfrac{38}{3}\).`,
      ], R`\(\dfrac{86}{3}\)`),
      P(R`Find the area between \(y=x\) and \(y=x^2\).`, [
        R`Intersect at \(0,\ 1\); line on top.`,
        R`\(\int_0^{1}(x-x^2)\,dx=\dfrac{1}{2}-\dfrac{1}{3}\).`,
      ], R`\(\dfrac{1}{6}\)`),
      P(R`Find the average value of \(f(x)=5x^2\) on \([0,9]\).`, [
        R`\(\dfrac{1}{9}\int_0^{9}5x^2\,dx=\dfrac{1}{9}\cdot1215\).`,
      ], R`\(135\)`),
      P(R`Evaluate \(\displaystyle\int_{-2}^{1}4x^3\,dx\).`, [
        R`\(\left[x^4\right]_{-2}^{1}\).`,
      ], R`\(-15\)`),
      P(R`Evaluate \(\displaystyle\int_{0}^{\tfrac\pi2}8\cos x\,dx\).`, [
        R`Antiderivative \(8\sin x\); top minus bottom.`,
      ], R`\(8\)`),
      P(R`Evaluate \(\displaystyle\int_1^{e^{5}}\frac{-4}{x}\,dx\).`, [
        R`\(-4[\ln x]_1^{e^{5}}=-4(5-0)\).`,
      ], R`\(-20\)`),
      P(R`Find \(\dfrac{d}{dx}\displaystyle\int_{5}^{x^{2}}t^3\,dt\).`, [
        R`FTC Part 1 + chain rule: plug in \(x^{2}\) and multiply by \(2x\).`,
      ], R`\(2x\left(x^{6}\right)\)`),
      P(R`Estimate \(\displaystyle\int_0^{6}(x^{2}+3)\,dx\) with a right Riemann sum using 6 rectangles.`, [
        R`\(\Delta x=1\); right endpoints \(1,\ 2,\ 3,\ 4,\ 5,\ 6\).`,
        R`Sum of heights: \(4+7+12+19+28+39=109\).`,
      ], R`\(109\)`),
      P(R`Find the area under \(y=16-x^2\) above the \(x\)-axis.`, [
        R`Roots \(\pm4\). \(\left[16x-\tfrac{x^3}{3}\right]_{-4}^{4}\).`,
      ], R`\(\dfrac{256}{3}\)`),
      P(R`If \(\int_0^{4}f=12\) and \(\int_0^{6}f=7\), find \(\int_{4}^{6}f\) and \(\int_{6}^{4}f\).`, [
        R`\(\int_{4}^{6}f=\int_0^{6}f-\int_0^{4}f\). Flipping limits changes the sign.`,
      ], R`\(-5\) and \(5\)`),
      P(R`\(v(t)=t-5\) m/s on \([0,7]\). Find the displacement and total distance.`, [
        R`Displacement: \(\left[\tfrac{t^2}{2}-5t\right]_0^{7}\).`,
        R`Distance: \(\int_0^{5}(5-t)\,dt+\int_{5}^{7}(t-5)\,dt=\dfrac{25}{2}+2\).`,
      ], R`Displacement \(-\dfrac{21}{2}\) m; distance \(\dfrac{29}{2}\) m`),
      P(R`Find \(\dfrac{d}{dx}\displaystyle\int_{2}^{x}\dfrac{1}{1+t^4}\,dt\).`, [
        R`FTC Part 1: replace \(t\) with \(x\).`,
      ], R`\(\dfrac{1}{1+x^4}\)`),
      P(R`Evaluate \(\displaystyle\int_{0}^{3}(8x-1)\,dx\).`, [
        R`\(F=4x^{2}-x\); \(F(3)=33\), \(F(0)=0\).`,
      ], R`\(33\)`),
      P(R`Evaluate \(\displaystyle\int_{2}^{4}(4x^{2}+3)\,dx\).`, [
        R`\(F=\tfrac{4}{3}x^{3}+3x\); \(F(4)=\dfrac{292}{3}\), \(F(2)=\dfrac{50}{3}\).`,
      ], R`\(\dfrac{242}{3}\)`),
      P(R`Find the area between \(y=5x\) and \(y=x^2\).`, [
        R`Intersect at \(0,\ 5\); line on top.`,
        R`\(\int_0^{5}(5x-x^2)\,dx=\dfrac{125}{2}-\dfrac{125}{3}\).`,
      ], R`\(\dfrac{125}{6}\)`),
      P(R`Find the average value of \(f(x)=5x^2\) on \([0,2]\).`, [
        R`\(\dfrac{1}{2}\int_0^{2}5x^2\,dx=\dfrac{1}{2}\cdot\dfrac{40}{3}\).`,
      ], R`\(\dfrac{20}{3}\)`),
      P(R`Evaluate \(\displaystyle\int_{-1}^{2}-5x^3\,dx\).`, [
        R`\(\left[-\tfrac{5}{4}x^4\right]_{-1}^{2}\).`,
      ], R`\(-\dfrac{75}{4}\)`),
      P(R`Evaluate \(\displaystyle\int_{0}^{\pi}-5\sin x\,dx\).`, [
        R`Antiderivative \(5\cos x\); top minus bottom.`,
      ], R`\(-10\)`),
      P(R`Evaluate \(\displaystyle\int_1^{e^{2}}\frac{11}{x}\,dx\).`, [
        R`\(11[\ln x]_1^{e^{2}}=11(2-0)\).`,
      ], R`\(22\)`),
      P(R`Find \(\dfrac{d}{dx}\displaystyle\int_{3}^{x^{4}}\sqrt{t}\,dt\).`, [
        R`FTC Part 1 + chain rule: plug in \(x^{4}\) and multiply by \(4x^{3}\).`,
      ], R`\(4x^{3}\left(\sqrt{x^{4}}\right)\)`),
      P(R`Estimate \(\displaystyle\int_0^{6}(x^{2})\,dx\) with a right Riemann sum using 6 rectangles.`, [
        R`\(\Delta x=1\); right endpoints \(1,\ 2,\ 3,\ 4,\ 5,\ 6\).`,
        R`Sum of heights: \(1+4+9+16+25+36=91\).`,
      ], R`\(91\)`),
      P(R`Find the area under \(y=9-x^2\) above the \(x\)-axis.`, [
        R`Roots \(\pm3\). \(\left[9x-\tfrac{x^3}{3}\right]_{-3}^{3}\).`,
      ], R`\(36\)`),
      P(R`If \(\int_0^{5}f=-18\) and \(\int_0^{9}f=-14\), find \(\int_{5}^{9}f\) and \(\int_{9}^{5}f\).`, [
        R`\(\int_{5}^{9}f=\int_0^{9}f-\int_0^{5}f\). Flipping limits changes the sign.`,
      ], R`\(4\) and \(-4\)`),
      P(R`\(v(t)=t-6\) m/s on \([0,8]\). Find the displacement and total distance.`, [
        R`Displacement: \(\left[\tfrac{t^2}{2}-6t\right]_0^{8}\).`,
        R`Distance: \(\int_0^{6}(6-t)\,dt+\int_{6}^{8}(t-6)\,dt=18+2\).`,
      ], R`Displacement \(-16\) m; distance \(20\) m`),
      P(R`Find \(\dfrac{d}{dx}\displaystyle\int_{-2}^{x}\sqrt{t^2+1}\,dt\).`, [
        R`FTC Part 1: replace \(t\) with \(x\).`,
      ], R`\(\sqrt{x^2+1}\)`),
      P(R`Evaluate \(\displaystyle\int_{1}^{4}(2x-9)\,dx\).`, [
        R`\(F=x^{2}-9x\); \(F(4)=-20\), \(F(1)=-8\).`,
      ], R`\(-12\)`),
      P(R`Evaluate \(\displaystyle\int_{-2}^{0}(2x^{2})\,dx\).`, [
        R`\(F=\tfrac{2}{3}x^{3}\); \(F(0)=0\), \(F(-2)=-\dfrac{16}{3}\).`,
      ], R`\(\dfrac{16}{3}\)`),
      P(R`Find the area between \(y=2x\) and \(y=x^2\).`, [
        R`Intersect at \(0,\ 2\); line on top.`,
        R`\(\int_0^{2}(2x-x^2)\,dx=4-\dfrac{8}{3}\).`,
      ], R`\(\dfrac{4}{3}\)`),
      P(R`Find the average value of \(f(x)=x^2\) on \([0,4]\).`, [
        R`\(\dfrac{1}{4}\int_0^{4}x^2\,dx=\dfrac{1}{4}\cdot\dfrac{64}{3}\).`,
      ], R`\(\dfrac{16}{3}\)`),
      P(R`Evaluate \(\displaystyle\int_{0}^{3}3x^3\,dx\).`, [
        R`\(\left[\tfrac{3}{4}x^4\right]_{0}^{3}\).`,
      ], R`\(\dfrac{243}{4}\)`),
      P(R`Evaluate \(\displaystyle\int_{0}^{\tfrac\pi4}3\sec^2x\,dx\).`, [
        R`Antiderivative \(3\tan x\); top minus bottom.`,
      ], R`\(3\)`),
      P(R`Evaluate \(\displaystyle\int_1^{e^{8}}\frac{-3}{x}\,dx\).`, [
        R`\(-3[\ln x]_1^{e^{8}}=-3(8-0)\).`,
      ], R`\(-24\)`),
      P(R`Find \(\dfrac{d}{dx}\displaystyle\int_{-2}^{x^{3}}\sqrt{t}\,dt\).`, [
        R`FTC Part 1 + chain rule: plug in \(x^{3}\) and multiply by \(3x^{2}\).`,
      ], R`\(3x^{2}\left(\sqrt{x^{3}}\right)\)`),
      P(R`Estimate \(\displaystyle\int_0^{5}(x^{2}+2)\,dx\) with a left Riemann sum using 5 rectangles.`, [
        R`\(\Delta x=1\); left endpoints \(0,\ 1,\ 2,\ 3,\ 4\).`,
        R`Sum of heights: \(2+3+6+11+18=40\).`,
      ], R`\(40\)`),
      P(R`If \(\int_0^{3}f=8\) and \(\int_0^{7}f=-15\), find \(\int_{3}^{7}f\) and \(\int_{7}^{3}f\).`, [
        R`\(\int_{3}^{7}f=\int_0^{7}f-\int_0^{3}f\). Flipping limits changes the sign.`,
      ], R`\(-23\) and \(23\)`),
      P(R`\(v(t)=t-6\) m/s on \([0,7]\). Find the displacement and total distance.`, [
        R`Displacement: \(\left[\tfrac{t^2}{2}-6t\right]_0^{7}\).`,
        R`Distance: \(\int_0^{6}(6-t)\,dt+\int_{6}^{7}(t-6)\,dt=18+\dfrac{1}{2}\).`,
      ], R`Displacement \(-\dfrac{35}{2}\) m; distance \(\dfrac{37}{2}\) m`),
      P(R`Find \(\dfrac{d}{dx}\displaystyle\int_{1}^{x}t\ln t\,dt\).`, [
        R`FTC Part 1: replace \(t\) with \(x\).`,
      ], R`\(x\ln x\)`),
      P(R`Evaluate \(\displaystyle\int_{3}^{6}(8x+2)\,dx\).`, [
        R`\(F=4x^{2}+2x\); \(F(6)=156\), \(F(3)=42\).`,
      ], R`\(114\)`),
      P(R`Evaluate \(\displaystyle\int_{0}^{2}(4x^{2}+6)\,dx\).`, [
        R`\(F=\tfrac{4}{3}x^{3}+6x\); \(F(2)=\dfrac{68}{3}\), \(F(0)=0\).`,
      ], R`\(\dfrac{68}{3}\)`),
      P(R`Find the area between \(y=7x\) and \(y=x^2\).`, [
        R`Intersect at \(0,\ 7\); line on top.`,
        R`\(\int_0^{7}(7x-x^2)\,dx=\dfrac{343}{2}-\dfrac{343}{3}\).`,
      ], R`\(\dfrac{343}{6}\)`),
      P(R`Find the average value of \(f(x)=7x^2\) on \([0,2]\).`, [
        R`\(\dfrac{1}{2}\int_0^{2}7x^2\,dx=\dfrac{1}{2}\cdot\dfrac{56}{3}\).`,
      ], R`\(\dfrac{28}{3}\)`),
      P(R`Evaluate \(\displaystyle\int_{-2}^{0}2x^3\,dx\).`, [
        R`\(\left[\tfrac{1}{2}x^4\right]_{-2}^{0}\).`,
      ], R`\(-8\)`),
      P(R`Evaluate \(\displaystyle\int_{0}^{\pi}3\sin x\,dx\).`, [
        R`Antiderivative \(-3\cos x\); top minus bottom.`,
      ], R`\(6\)`),
      P(R`Evaluate \(\displaystyle\int_1^{e^{7}}\frac{-4}{x}\,dx\).`, [
        R`\(-4[\ln x]_1^{e^{7}}=-4(7-0)\).`,
      ], R`\(-28\)`),
      P(R`Find \(\dfrac{d}{dx}\displaystyle\int_{2}^{x^{3}}\cos t\,dt\).`, [
        R`FTC Part 1 + chain rule: plug in \(x^{3}\) and multiply by \(3x^{2}\).`,
      ], R`\(3x^{2}\left(\cos(x^{3})\right)\)`),
      P(R`Estimate \(\displaystyle\int_0^{4}(x^{2})\,dx\) with a left Riemann sum using 4 rectangles.`, [
        R`\(\Delta x=1\); left endpoints \(0,\ 1,\ 2,\ 3\).`,
        R`Sum of heights: \(0+1+4+9=14\).`,
      ], R`\(14\)`),
      P(R`Find the area under \(y=1-x^2\) above the \(x\)-axis.`, [
        R`Roots \(\pm1\). \(\left[1x-\tfrac{x^3}{3}\right]_{-1}^{1}\).`,
      ], R`\(\dfrac{4}{3}\)`),
      P(R`If \(\int_0^{5}f=-15\) and \(\int_0^{10}f=-7\), find \(\int_{5}^{10}f\) and \(\int_{10}^{5}f\).`, [
        R`\(\int_{5}^{10}f=\int_0^{10}f-\int_0^{5}f\). Flipping limits changes the sign.`,
      ], R`\(8\) and \(-8\)`),
      P(R`\(v(t)=t-3\) m/s on \([0,8]\). Find the displacement and total distance.`, [
        R`Displacement: \(\left[\tfrac{t^2}{2}-3t\right]_0^{8}\).`,
        R`Distance: \(\int_0^{3}(3-t)\,dt+\int_{3}^{8}(t-3)\,dt=\dfrac{9}{2}+\dfrac{25}{2}\).`,
      ], R`Displacement \(8\) m; distance \(17\) m`),
      P(R`Find \(\dfrac{d}{dx}\displaystyle\int_{3}^{x}\sqrt{t^2+1}\,dt\).`, [
        R`FTC Part 1: replace \(t\) with \(x\).`,
      ], R`\(\sqrt{x^2+1}\)`),
      P(R`Evaluate \(\displaystyle\int_{1}^{6}(-3x-9)\,dx\).`, [
        R`\(F=-\tfrac{3}{2}x^{2}-9x\); \(F(6)=-108\), \(F(1)=-\dfrac{21}{2}\).`,
      ], R`\(-\dfrac{195}{2}\)`),
      P(R`Evaluate \(\displaystyle\int_{-1}^{1}(-3x^{2}-5)\,dx\).`, [
        R`\(F=-x^{3}-5x\); \(F(1)=-6\), \(F(-1)=6\).`,
      ], R`\(-12\)`),
      P(R`Find the area between \(y=4x\) and \(y=x^2\).`, [
        R`Intersect at \(0,\ 4\); line on top.`,
        R`\(\int_0^{4}(4x-x^2)\,dx=32-\dfrac{64}{3}\).`,
      ], R`\(\dfrac{32}{3}\)`),
      P(R`Find the average value of \(f(x)=3x^2\) on \([0,6]\).`, [
        R`\(\dfrac{1}{6}\int_0^{6}3x^2\,dx=\dfrac{1}{6}\cdot216\).`,
      ], R`\(36\)`),
      P(R`Evaluate \(\displaystyle\int_{-1}^{2}3x^3\,dx\).`, [
        R`\(\left[\tfrac{3}{4}x^4\right]_{-1}^{2}\).`,
      ], R`\(\dfrac{45}{4}\)`),
      P(R`Evaluate \(\displaystyle\int_1^{e^{1}}\frac{9}{x}\,dx\).`, [
        R`\(9[\ln x]_1^{e^{1}}=9(1-0)\).`,
      ], R`\(9\)`),
      P(R`Find \(\dfrac{d}{dx}\displaystyle\int_{0}^{x^{4}}\ln t\,dt\).`, [
        R`FTC Part 1 + chain rule: plug in \(x^{4}\) and multiply by \(4x^{3}\).`,
      ], R`\(4x^{3}\left(\ln(x^{4})\right)\)`),
      P(R`Estimate \(\displaystyle\int_0^{4}(x^{2}+3)\,dx\) with a right Riemann sum using 4 rectangles.`, [
        R`\(\Delta x=1\); right endpoints \(1,\ 2,\ 3,\ 4\).`,
        R`Sum of heights: \(4+7+12+19=42\).`,
      ], R`\(42\)`),
      P(R`Find the area under \(y=36-x^2\) above the \(x\)-axis.`, [
        R`Roots \(\pm6\). \(\left[36x-\tfrac{x^3}{3}\right]_{-6}^{6}\).`,
      ], R`\(288\)`),
      P(R`If \(\int_0^{4}f=14\) and \(\int_0^{8}f=0\), find \(\int_{4}^{8}f\) and \(\int_{8}^{4}f\).`, [
        R`\(\int_{4}^{8}f=\int_0^{8}f-\int_0^{4}f\). Flipping limits changes the sign.`,
      ], R`\(-14\) and \(14\)`),
      P(R`\(v(t)=t-4\) m/s on \([0,10]\). Find the displacement and total distance.`, [
        R`Displacement: \(\left[\tfrac{t^2}{2}-4t\right]_0^{10}\).`,
        R`Distance: \(\int_0^{4}(4-t)\,dt+\int_{4}^{10}(t-4)\,dt=8+18\).`,
      ], R`Displacement \(10\) m; distance \(26\) m`),
      P(R`Find \(\dfrac{d}{dx}\displaystyle\int_{-3}^{x}e^{-t^2}\,dt\).`, [
        R`FTC Part 1: replace \(t\) with \(x\).`,
      ], R`\(e^{-x^2}\)`),
      P(R`Evaluate \(\displaystyle\int_{3}^{5}(3x-9)\,dx\).`, [
        R`\(F=\tfrac{3}{2}x^{2}-9x\); \(F(5)=-\dfrac{15}{2}\), \(F(3)=-\dfrac{27}{2}\).`,
      ], R`\(6\)`),
      P(R`Evaluate \(\displaystyle\int_{1}^{2}(-5x^{2}-9)\,dx\).`, [
        R`\(F=-\tfrac{5}{3}x^{3}-9x\); \(F(2)=-\dfrac{94}{3}\), \(F(1)=-\dfrac{32}{3}\).`,
      ], R`\(-\dfrac{62}{3}\)`),
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
      // ---- generated practice (numbers vary; answers computed) ----
      P(R`Find \(\displaystyle\int(2x-3)^{9}\,dx\).`, [
        R`\(u=2x-3\), \(dx=\tfrac1{2}du\).`,
      ], R`\(\dfrac{(2x-3)^{10}}{20}+C\)`),
      P(R`Find \(\displaystyle\int x(x^2-2)^{7}\,dx\).`, [
        R`\(u=x^2-2\), \(x\,dx=\tfrac12du\).`,
      ], R`\(\dfrac{(x^2-2)^{8}}{16}+C\)`),
      P(R`Find \(\displaystyle\int \sin(10x)\,dx\).`, [
        R`\(u=10x\), \(dx=\tfrac1{10}du\).`,
      ], R`\(-\dfrac{\cos(10x)}{10}+C\)`),
      P(R`Evaluate \(\displaystyle\int_0^1x(x^2+1)^{2}\,dx\).`, [
        R`\(u=x^2+1\) from 1 to 2: \(\tfrac12\left[\tfrac{u^{3}}{3}\right]_1^2\).`,
      ], R`\(\dfrac{7}{6}\)`),
      P(R`Find \(\displaystyle\int x^2(x^3+12)^{2}\,dx\).`, [
        R`\(u=x^3+12\), \(x^2dx=\tfrac13du\).`,
      ], R`\(\dfrac{(x^3+12)^{3}}{9}+C\)`),
      P(R`Find \(\displaystyle\int\frac{1}{8x+6}\,dx\).`, [
        R`\(u=8x+6\), \(dx=\tfrac1{8}du\).`,
      ], R`\(\tfrac1{8}\ln|8x+6|+C\)`),
      P(R`Find \(\displaystyle\int\frac{8x}{x^2+20}\,dx\).`, [
        R`\(u=x^2+20\), \(x\,dx=\tfrac12du\).`,
      ], R`\(4\ln(x^2+20)+C\)`),
      P(R`Find \(\displaystyle\int xe^{2x^2}\,dx\).`, [
        R`\(u=2x^2\), \(du=4x\,dx\).`,
      ], R`\(\tfrac{1}{4}e^{2x^2}+C\)`),
      P(R`Find \(\displaystyle\int \cos^{3}x\sin x\,dx\).`, [
        R`\(u=\cos x\), \(du=-\sin x\,dx\).`,
      ], R`\(-\dfrac{\cos^{4}x}{4}+C\)`),
      P(R`Find \(\displaystyle\int\frac{(\ln x)^{4}}{x}\,dx\).`, [
        R`\(u=\ln x\), \(du=\tfrac1x dx\).`,
      ], R`\(\dfrac{(\ln x)^{5}}{5}+C\)`),
      P(R`Find \(\displaystyle\int\sqrt{6x-5}\,dx\).`, [
        R`\(u=6x-5\): \(\tfrac1{6}\cdot\tfrac23u^{3/2}\).`,
      ], R`\(\dfrac{2(6x-5)^{3/2}}{18}+C\)`),
      P(R`Evaluate \(\displaystyle\int_0^1(x+1)^{4}\,dx\).`, [
        R`\(u=x+1\) from 1 to 2: \(\tfrac1{1}\left[\tfrac{u^{5}}{5}\right]_1^{2}\).`,
      ], R`\(\dfrac{31}{5}\)`),
      P(R`Find \(\displaystyle\int(2x-8)^{4}\,dx\).`, [
        R`\(u=2x-8\), \(dx=\tfrac1{2}du\).`,
      ], R`\(\dfrac{(2x-8)^{5}}{10}+C\)`),
      P(R`Find \(\displaystyle\int x(x^2+6)^{9}\,dx\).`, [
        R`\(u=x^2+6\), \(x\,dx=\tfrac12du\).`,
      ], R`\(\dfrac{(x^2+6)^{10}}{20}+C\)`),
      P(R`Find \(\displaystyle\int \cos(3x)\,dx\).`, [
        R`\(u=3x\), \(dx=\tfrac1{3}du\).`,
      ], R`\(\dfrac{\sin(3x)}{3}+C\)`),
      P(R`Evaluate \(\displaystyle\int_0^1x(x^2+1)^{6}\,dx\).`, [
        R`\(u=x^2+1\) from 1 to 2: \(\tfrac12\left[\tfrac{u^{7}}{7}\right]_1^2\).`,
      ], R`\(\dfrac{127}{14}\)`),
      P(R`Find \(\displaystyle\int x^2(x^3+1)^{7}\,dx\).`, [
        R`\(u=x^3+1\), \(x^2dx=\tfrac13du\).`,
      ], R`\(\dfrac{(x^3+1)^{8}}{24}+C\)`),
      P(R`Find \(\displaystyle\int\frac{1}{2x+10}\,dx\).`, [
        R`\(u=2x+10\), \(dx=\tfrac1{2}du\).`,
      ], R`\(\tfrac1{2}\ln|2x+10|+C\)`),
      P(R`Find \(\displaystyle\int\frac{7x}{x^2+6}\,dx\).`, [
        R`\(u=x^2+6\), \(x\,dx=\tfrac12du\).`,
      ], R`\(\tfrac{7}{2}\ln(x^2+6)+C\)`),
      P(R`Find \(\displaystyle\int xe^{5x^2}\,dx\).`, [
        R`\(u=5x^2\), \(du=10x\,dx\).`,
      ], R`\(\tfrac{1}{10}e^{5x^2}+C\)`),
      P(R`Find \(\displaystyle\int \sin^{5}x\cos x\,dx\).`, [
        R`\(u=\sin x\), \(du=\cos x\,dx\).`,
      ], R`\(\dfrac{\sin^{6}x}{6}+C\)`),
      P(R`Find \(\displaystyle\int\frac{(\ln x)^{2}}{x}\,dx\).`, [
        R`\(u=\ln x\), \(du=\tfrac1x dx\).`,
      ], R`\(\dfrac{(\ln x)^{3}}{3}+C\)`),
      P(R`Find \(\displaystyle\int\sqrt{6x+1}\,dx\).`, [
        R`\(u=6x+1\): \(\tfrac1{6}\cdot\tfrac23u^{3/2}\).`,
      ], R`\(\dfrac{2(6x+1)^{3/2}}{18}+C\)`),
      P(R`Evaluate \(\displaystyle\int_0^1(3x+1)^{4}\,dx\).`, [
        R`\(u=3x+1\) from 1 to 4: \(\tfrac1{3}\left[\tfrac{u^{5}}{5}\right]_1^{4}\).`,
      ], R`\(\dfrac{341}{5}\)`),
      P(R`Find \(\displaystyle\int(9x+6)^{5}\,dx\).`, [
        R`\(u=9x+6\), \(dx=\tfrac1{9}du\).`,
      ], R`\(\dfrac{(9x+6)^{6}}{54}+C\)`),
      P(R`Find \(\displaystyle\int x(x^2-5)^{10}\,dx\).`, [
        R`\(u=x^2-5\), \(x\,dx=\tfrac12du\).`,
      ], R`\(\dfrac{(x^2-5)^{11}}{22}+C\)`),
      P(R`Find \(\displaystyle\int \sin(3x)\,dx\).`, [
        R`\(u=3x\), \(dx=\tfrac1{3}du\).`,
      ], R`\(-\dfrac{\cos(3x)}{3}+C\)`),
      P(R`Evaluate \(\displaystyle\int_0^1x(x^2+1)^{3}\,dx\).`, [
        R`\(u=x^2+1\) from 1 to 2: \(\tfrac12\left[\tfrac{u^{4}}{4}\right]_1^2\).`,
      ], R`\(\dfrac{15}{8}\)`),
      P(R`Find \(\displaystyle\int x^2(x^3-11)^{7}\,dx\).`, [
        R`\(u=x^3-11\), \(x^2dx=\tfrac13du\).`,
      ], R`\(\dfrac{(x^3-11)^{8}}{24}+C\)`),
      P(R`Find \(\displaystyle\int\frac{1}{7x-1}\,dx\).`, [
        R`\(u=7x-1\), \(dx=\tfrac1{7}du\).`,
      ], R`\(\tfrac1{7}\ln|7x-1|+C\)`),
      P(R`Find \(\displaystyle\int\frac{6x}{x^2+12}\,dx\).`, [
        R`\(u=x^2+12\), \(x\,dx=\tfrac12du\).`,
      ], R`\(3\ln(x^2+12)+C\)`),
      P(R`Find \(\displaystyle\int xe^{-5x^2}\,dx\).`, [
        R`\(u=-5x^2\), \(du=-10x\,dx\).`,
      ], R`\(-\tfrac{1}{10}e^{-5x^2}+C\)`),
      P(R`Find \(\displaystyle\int \cos^{8}x\sin x\,dx\).`, [
        R`\(u=\cos x\), \(du=-\sin x\,dx\).`,
      ], R`\(-\dfrac{\cos^{9}x}{9}+C\)`),
      P(R`Find \(\displaystyle\int\frac{(\ln x)^{6}}{x}\,dx\).`, [
        R`\(u=\ln x\), \(du=\tfrac1x dx\).`,
      ], R`\(\dfrac{(\ln x)^{7}}{7}+C\)`),
      P(R`Find \(\displaystyle\int\sqrt{9x-6}\,dx\).`, [
        R`\(u=9x-6\): \(\tfrac1{9}\cdot\tfrac23u^{3/2}\).`,
      ], R`\(\dfrac{2(9x-6)^{3/2}}{27}+C\)`),
      P(R`Evaluate \(\displaystyle\int_0^1(4x+1)^{4}\,dx\).`, [
        R`\(u=4x+1\) from 1 to 5: \(\tfrac1{4}\left[\tfrac{u^{5}}{5}\right]_1^{5}\).`,
      ], R`\(\dfrac{781}{5}\)`),
      P(R`Find \(\displaystyle\int(3x+2)^{3}\,dx\).`, [
        R`\(u=3x+2\), \(dx=\tfrac1{3}du\).`,
      ], R`\(\dfrac{(3x+2)^{4}}{12}+C\)`),
      P(R`Find \(\displaystyle\int x(x^2-3)^{4}\,dx\).`, [
        R`\(u=x^2-3\), \(x\,dx=\tfrac12du\).`,
      ], R`\(\dfrac{(x^2-3)^{5}}{10}+C\)`),
      P(R`Find \(\displaystyle\int \sec^2(6x)\,dx\).`, [
        R`\(u=6x\), \(dx=\tfrac1{6}du\).`,
      ], R`\(\dfrac{\tan(6x)}{6}+C\)`),
      P(R`Evaluate \(\displaystyle\int_0^1x(x^2+1)^{9}\,dx\).`, [
        R`\(u=x^2+1\) from 1 to 2: \(\tfrac12\left[\tfrac{u^{10}}{10}\right]_1^2\).`,
      ], R`\(\dfrac{1023}{20}\)`),
      P(R`Find \(\displaystyle\int x^2(x^3-9)^{5}\,dx\).`, [
        R`\(u=x^3-9\), \(x^2dx=\tfrac13du\).`,
      ], R`\(\dfrac{(x^3-9)^{6}}{18}+C\)`),
      P(R`Find \(\displaystyle\int\frac{1}{12x+7}\,dx\).`, [
        R`\(u=12x+7\), \(dx=\tfrac1{12}du\).`,
      ], R`\(\tfrac1{12}\ln|12x+7|+C\)`),
      P(R`Find \(\displaystyle\int\frac{6x}{x^2+19}\,dx\).`, [
        R`\(u=x^2+19\), \(x\,dx=\tfrac12du\).`,
      ], R`\(3\ln(x^2+19)+C\)`),
      P(R`Find \(\displaystyle\int xe^{-2x^2}\,dx\).`, [
        R`\(u=-2x^2\), \(du=-4x\,dx\).`,
      ], R`\(-\tfrac{1}{4}e^{-2x^2}+C\)`),
      P(R`Find \(\displaystyle\int\sqrt{6x-7}\,dx\).`, [
        R`\(u=6x-7\): \(\tfrac1{6}\cdot\tfrac23u^{3/2}\).`,
      ], R`\(\dfrac{2(6x-7)^{3/2}}{18}+C\)`),
      P(R`Find \(\displaystyle\int(3x+4)^{7}\,dx\).`, [
        R`\(u=3x+4\), \(dx=\tfrac1{3}du\).`,
      ], R`\(\dfrac{(3x+4)^{8}}{24}+C\)`),
      P(R`Find \(\displaystyle\int x(x^2-2)^{5}\,dx\).`, [
        R`\(u=x^2-2\), \(x\,dx=\tfrac12du\).`,
      ], R`\(\dfrac{(x^2-2)^{6}}{12}+C\)`),
      P(R`Find \(\displaystyle\int \cos(7x)\,dx\).`, [
        R`\(u=7x\), \(dx=\tfrac1{7}du\).`,
      ], R`\(\dfrac{\sin(7x)}{7}+C\)`),
      P(R`Evaluate \(\displaystyle\int_0^1x(x^2+1)^{8}\,dx\).`, [
        R`\(u=x^2+1\) from 1 to 2: \(\tfrac12\left[\tfrac{u^{9}}{9}\right]_1^2\).`,
      ], R`\(\dfrac{511}{18}\)`),
      P(R`Find \(\displaystyle\int x^2(x^3+9)^{5}\,dx\).`, [
        R`\(u=x^3+9\), \(x^2dx=\tfrac13du\).`,
      ], R`\(\dfrac{(x^3+9)^{6}}{18}+C\)`),
      P(R`Find \(\displaystyle\int\frac{1}{11x+11}\,dx\).`, [
        R`\(u=11x+11\), \(dx=\tfrac1{11}du\).`,
      ], R`\(\tfrac1{11}\ln|11x+11|+C\)`),
      P(R`Find \(\displaystyle\int\frac{8x}{x^2+15}\,dx\).`, [
        R`\(u=x^2+15\), \(x\,dx=\tfrac12du\).`,
      ], R`\(4\ln(x^2+15)+C\)`),
      P(R`Find \(\displaystyle\int xe^{-4x^2}\,dx\).`, [
        R`\(u=-4x^2\), \(du=-8x\,dx\).`,
      ], R`\(-\tfrac{1}{8}e^{-4x^2}+C\)`),
      P(R`Find \(\displaystyle\int \sin^{7}x\cos x\,dx\).`, [
        R`\(u=\sin x\), \(du=\cos x\,dx\).`,
      ], R`\(\dfrac{\sin^{8}x}{8}+C\)`),
      P(R`Find \(\displaystyle\int\frac{(\ln x)^{7}}{x}\,dx\).`, [
        R`\(u=\ln x\), \(du=\tfrac1x dx\).`,
      ], R`\(\dfrac{(\ln x)^{8}}{8}+C\)`),
      P(R`Find \(\displaystyle\int\sqrt{2x+1}\,dx\).`, [
        R`\(u=2x+1\): \(\tfrac1{2}\cdot\tfrac23u^{3/2}\).`,
      ], R`\(\dfrac{2(2x+1)^{3/2}}{6}+C\)`),
      P(R`Evaluate \(\displaystyle\int_0^1(3x+1)^{2}\,dx\).`, [
        R`\(u=3x+1\) from 1 to 4: \(\tfrac1{3}\left[\tfrac{u^{3}}{3}\right]_1^{4}\).`,
      ], R`\(7\)`),
      P(R`Find \(\displaystyle\int(2x-8)^{7}\,dx\).`, [
        R`\(u=2x-8\), \(dx=\tfrac1{2}du\).`,
      ], R`\(\dfrac{(2x-8)^{8}}{16}+C\)`),
      P(R`Find \(\displaystyle\int x(x^2+5)^{6}\,dx\).`, [
        R`\(u=x^2+5\), \(x\,dx=\tfrac12du\).`,
      ], R`\(\dfrac{(x^2+5)^{7}}{14}+C\)`),
      P(R`Find \(\displaystyle\int e^{5x}\,dx\).`, [
        R`\(u=5x\), \(dx=\tfrac1{5}du\).`,
      ], R`\(\dfrac{e^{5x}}{5}+C\)`),
      P(R`Find \(\displaystyle\int x^2(x^3+2)^{4}\,dx\).`, [
        R`\(u=x^3+2\), \(x^2dx=\tfrac13du\).`,
      ], R`\(\dfrac{(x^3+2)^{5}}{15}+C\)`),
      P(R`Find \(\displaystyle\int\frac{1}{12x-7}\,dx\).`, [
        R`\(u=12x-7\), \(dx=\tfrac1{12}du\).`,
      ], R`\(\tfrac1{12}\ln|12x-7|+C\)`),
      P(R`Find \(\displaystyle\int xe^{-6x^2}\,dx\).`, [
        R`\(u=-6x^2\), \(du=-12x\,dx\).`,
      ], R`\(-\tfrac{1}{12}e^{-6x^2}+C\)`),
      P(R`Find \(\displaystyle\int \sin^{9}x\cos x\,dx\).`, [
        R`\(u=\sin x\), \(du=\cos x\,dx\).`,
      ], R`\(\dfrac{\sin^{10}x}{10}+C\)`),
      P(R`Find \(\displaystyle\int\sqrt{8x+7}\,dx\).`, [
        R`\(u=8x+7\): \(\tfrac1{8}\cdot\tfrac23u^{3/2}\).`,
      ], R`\(\dfrac{2(8x+7)^{3/2}}{24}+C\)`),
      P(R`Evaluate \(\displaystyle\int_0^1(2x+1)^{4}\,dx\).`, [
        R`\(u=2x+1\) from 1 to 3: \(\tfrac1{2}\left[\tfrac{u^{5}}{5}\right]_1^{3}\).`,
      ], R`\(\dfrac{121}{5}\)`),
      P(R`Find \(\displaystyle\int(9x+1)^{7}\,dx\).`, [
        R`\(u=9x+1\), \(dx=\tfrac1{9}du\).`,
      ], R`\(\dfrac{(9x+1)^{8}}{72}+C\)`),
      P(R`Find \(\displaystyle\int x(x^2+2)^{3}\,dx\).`, [
        R`\(u=x^2+2\), \(x\,dx=\tfrac12du\).`,
      ], R`\(\dfrac{(x^2+2)^{4}}{8}+C\)`),
      P(R`Find \(\displaystyle\int \cos(2x)\,dx\).`, [
        R`\(u=2x\), \(dx=\tfrac1{2}du\).`,
      ], R`\(\dfrac{\sin(2x)}{2}+C\)`),
      P(R`Find \(\displaystyle\int x^2(x^3-11)^{4}\,dx\).`, [
        R`\(u=x^3-11\), \(x^2dx=\tfrac13du\).`,
      ], R`\(\dfrac{(x^3-11)^{5}}{15}+C\)`),
      P(R`Find \(\displaystyle\int\frac{1}{11x+2}\,dx\).`, [
        R`\(u=11x+2\), \(dx=\tfrac1{11}du\).`,
      ], R`\(\tfrac1{11}\ln|11x+2|+C\)`),
      P(R`Find \(\displaystyle\int\frac{7x}{x^2+18}\,dx\).`, [
        R`\(u=x^2+18\), \(x\,dx=\tfrac12du\).`,
      ], R`\(\tfrac{7}{2}\ln(x^2+18)+C\)`),
      P(R`Find \(\displaystyle\int xe^{x^2}\,dx\).`, [
        R`\(u=x^2\), \(du=2x\,dx\).`,
      ], R`\(\tfrac{1}{2}e^{x^2}+C\)`),
      P(R`Find \(\displaystyle\int \sin^{8}x\cos x\,dx\).`, [
        R`\(u=\sin x\), \(du=\cos x\,dx\).`,
      ], R`\(\dfrac{\sin^{9}x}{9}+C\)`),
      P(R`Find \(\displaystyle\int\sqrt{6x-9}\,dx\).`, [
        R`\(u=6x-9\): \(\tfrac1{6}\cdot\tfrac23u^{3/2}\).`,
      ], R`\(\dfrac{2(6x-9)^{3/2}}{18}+C\)`),
      P(R`Find \(\displaystyle\int(9x+2)^{3}\,dx\).`, [
        R`\(u=9x+2\), \(dx=\tfrac1{9}du\).`,
      ], R`\(\dfrac{(9x+2)^{4}}{36}+C\)`),
      P(R`Find \(\displaystyle\int x(x^2+4)^{10}\,dx\).`, [
        R`\(u=x^2+4\), \(x\,dx=\tfrac12du\).`,
      ], R`\(\dfrac{(x^2+4)^{11}}{22}+C\)`),
      P(R`Find \(\displaystyle\int \sin(5x)\,dx\).`, [
        R`\(u=5x\), \(dx=\tfrac1{5}du\).`,
      ], R`\(-\dfrac{\cos(5x)}{5}+C\)`),
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
