import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyDptPmAm25a7Mf2vurJgQJFdJTqhx6dn7U",
  authDomain: "react-sec01-017.firebaseapp.com",
  projectId: "react-sec01-017",
  storageBucket: "react-sec01-017.appspot.com",
  messagingSenderId: "335056698887",
  appId: "1:335056698887:web:49d766bd2e3794802034a2"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BNT3CaoNI9kTDAAK_hkmX3KGkQFTJA-tRwlx7a6EW9vblbNzggYug7lqUPYgZn4LOWc3cowZHF2NVX0JsZ0-o0k"
);

export { messaging };
