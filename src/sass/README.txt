https://create-react-app.dev/docs/adding-a-sass-stylesheet

usage
=======
index.scss
----------
@import 'sass/_testing.scss';    /* src/sass/_testing.scss */
@import '~abab/_test';           /* node_modules/abab/_test.scss */
...


HomePage.tsx
----------
import 'sass/_testing.scss';
import 'abab/_test.scss';
