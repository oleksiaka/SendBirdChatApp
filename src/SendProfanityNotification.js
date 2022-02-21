
function SendProfanityNotification() {

  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  else if (Notification.permission === "granted") {
    var notification = new Notification('SendBird Notification', { body: "You have recieved a message which contains profanity"});
  }

  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        var notification = new Notification('SendBird Notification', { body: "You have recieved a message which contains profanity"});
      }
    });
  }
}

export default SendProfanityNotification;