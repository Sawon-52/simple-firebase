/**
 * ------------------------------------------------------------------------------------------
 *                            INITIAL SETUP
 * ------------------------------------------------------------------------------------------
 * 1.visite:console.firebase.google.com
 * 2.create project(skip google analytics)
 * 3.Register app(create config)
 * 4.install firebase in project : npm install firebase
 * 5.and config file to your project
 * 6.DANGER: Do not publish or make firebase config to public by pusshing those to github.
 *-------------------------------------------------------------------------------------------
 *                           INTEGRATION
 *-------------------------------------------------------------------------------------------
 * 7.Visit: Got to Docs > Build > Authentication > web > get started
 * 8.export app from the firebase.config.js: export default app
 * 9.login.jsx: import getAuth from firebase/auth
 * 10.create const auth = getAuth(app).
 *-------------------------------------------------------------------------------------------
 *                            PROVIDER
 *-------------------------------------------------------------------------------------------
 * 11.import googleAuthProvider and create a new provider
 * 12.use signInwithPopup and pass auth and provider
 * 13.activate sign-in method (google, facebook, github, etc)
 * 14.[vite]: Change 127.0.0.1 to localhost
 *
 */
