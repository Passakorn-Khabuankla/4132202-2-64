import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyC0NZRiDwckaP2okkuVryZFOSydFwUnS90",
  authDomain: "sec01-3e363.firebaseapp.com",
  projectId: "sec01-3e363",
  storageBucket: "sec01-3e363.appspot.com",
  messagingSenderId: "167650829976",
  appId: "1:167650829976:web:b7d173dfef234db52e12ed",
  measurementId: "G-WFC7G57Z53"
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
  "BGH6AI8ZTCD_UTBykZZPUCrLlrSlUujjYZqg8rF15ej9-XRpYmHhhVxVRxhzr53zWpOSVTj2B57VZZLIL9P_hYw"
);

export { messaging };
