import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";

export function myFunction() {
    document.getElementById("demo").innerHTML = "Close button has been clicked";
  }

const Notifications = () => {
  return (
      <div className="Notifications">
      <button 
        style={{
          background: "transparent",
          border: "none",
          position: "absolute",
          right:"-600px" ,
          left: "-20px", top: 10,
        }}
        aria-label="close"
        onClick={myFunction}>Click me
      <img src={closeIcon} alt="close-icon"
         style={{
            right: 20,
            width : "150px",
            height : "150px",
        }}
    />
        
      </button>
      <p>Here is the list of notifications</p>
      <ul>
      <NotificationItem type='default' value='New course available' />
      <NotificationItem type='urgent' value='New resume available' />
      <NotificationItem type='urgent' html={{__html:getLatestNotification()}} />
      </ul>
      <p id = "demo"></p>

    </div>
  );
};

export default Notifications;