# HMO X Academy

Team induction and annual training refresher for HMO X: 13 modules, multiple-choice quizzes (80% pass), learner declaration and manager sign-off.

- Published page: https://claude.ai/artifact/6X3kDFQfTQH6K6BLyMX5RS
- `content.js`: lessons and questions (edit here). Module `id`s must not change once people have taken quizzes.
- `app.html`: the page (layout, quiz, progress, sign-off).
- `build.sh`: inlines `content.js` into `app.html` and writes `dist/hmox-academy.html`, which is what gets published.
- `research/`: notes gathered from the Drive template reports and other HMO X sessions, used to fill in the course.

Results are stored in the page's own database: `progress/<person>` (only that person can write it; Editors can read all) and `signoffs/<person>` (Editors write). Staff need Contributor access to save results; managers need Editor.
