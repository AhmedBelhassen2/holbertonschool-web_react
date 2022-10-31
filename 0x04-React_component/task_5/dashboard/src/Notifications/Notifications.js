import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";


export function myFunction() {
    document.getElementById("demo").innerHTML = "Close button has been clicked";
  }

class Notifications extends React.Component  {

  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render ()  {
    return(
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification() }} />
      </ul>
      <p id = "demo"></p>

    </div>
    )
}}




export default Notifications;