import React from "react";
import user from "../images/user.png";
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link 
          to={{pathname: `/contact/${id}`, state:{contact: props.contact}}}>  
        
        <div className="header">{name}</div>
        <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "#e72727", marginTop: "7px"}}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link 
         to={{pathname: `/edit`, state: {contact: props.contact}}}>  
      <i
        className="edit alternate outline icon"
        style={{ color: "#4e5a55", marginTop: "7px", marginRight: "10px" }}
      ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
