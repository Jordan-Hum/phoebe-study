# Calc 1 Study Hub

A password-protected study site for Calculus 1. It has:

- **Pre-Calc Review (4 topics)**: algebra essentials, functions & graphs, trigonometry, exponents & logarithms
- **Calculus 1 (15 topics)**: limits, continuity, definition of the derivative, derivative rules, chain rule (trig/exp/log), implicit differentiation, related rates, linear approximation, extrema & curve sketching, Mean Value Theorem, optimization, L'Hôpital's rule, antiderivatives, definite integrals & FTC, u-substitution
- **How-tos**: step-by-step methods for each topic
- **Formulas**: listed for each topic, plus a printable formula sheet with all of them
- **1,900 practice problems**: 100 per topic, shown 10 per page: reveal the solution one step at a time, or show the answer right away
- **Self-marking**: "I got it right" / "I got it wrong". Progress saves automatically in the browser (no save button), and missed problems go on the Review list
- **Random practice**: a mixed set across the topics you choose

## Password

To change the password:

```bash
node tools/set-password.js "new password"
```

Then commit and push. This is a light lock for a static site. It keeps casual visitors out, but it is not real security.

## Publish with GitHub Pages

1. On GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**. Pick the branch with this code and the **/ (root)** folder, then click **Save**.
3. After a minute or two the site is live at `https://<your-username>.github.io/phoebe-study/`.

Note: GitHub Pages on a free account requires the repository to be **public**.

## Run locally

Open `index.html` in a browser. To serve it locally instead, run `python3 -m http.server` and visit http://localhost:8000.

## Editing content

All topics, how-tos, formulas, and problems are in `js/content.js`. Math is written in LaTeX between `\( ... \)` or `\[ ... \]`.
