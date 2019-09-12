/* 
  part 162
  So let's take just a quick moment to recap and this video we did a lot of stuff we've done before we created new pages we wired 
  all of that up. So I'm not going to go into detail about that again but I do want to talk about though is the new stuff we did.
  So right here we set up our first provider. This allows us to actually set up firebase to authenticate with Google if we are 
  going to be using the Google off provider. We also had to enable that over in the firebase dashboard. Now this alone wasn't 
  enough what we really needed to do was actually pass the provider into a function to sign in with pop up. That is what triggered 
  the pop up showed my Google accounts and allowed me to pick one over inside of APTA J S We also used something new on off state 
  changed. This allowed us to run this function every single time. The authentication state changed including when we first load 
  the application with all of this in place we are ready to continue on to the next video where we're going to continue to 
  integrate the firebase authentication.
*/

import { firebase, GoogleAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
  type: 'LOGIN',
  uid
})

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(GoogleAuthProvider)
  }
}

export const logout = () => ({
  type: 'LOGOUT'
})

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}