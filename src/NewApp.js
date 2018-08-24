import React, { Component } from 'react';
import './App.css';

// class NewApp extends Component {
//   render() {
//     return (
//       <h1>Hello World</h1>
//     );
//   }
// }

// function NewApp(props) {
//     return <h1>Hello world</h1>
// }


function NewApp(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }


export default NewApp;
