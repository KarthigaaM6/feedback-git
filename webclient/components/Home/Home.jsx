import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


 class Home extends React.Component {
 constructor() {
 super();
 this.handleLogout = this.handleLogout.bind(this);
 }
handleLogout() {
alert("HI");
}
 render() {
 return(<div><AppBar
    title="Title"
    iconElementRight={<FlatButton label="Logout" onClick = {this.handleLogout}/>}
  /></div>);
 }
 }

 module.exports = Home;
