import React, { Component } from 'react';

#set($capitalizedFilename = $NAME.substring(0,1).toUpperCase() + $NAME.substring(1))
class $capitalizedFilename extends Component {
  state = {};
  
  render() {
    return (
      
    );
  }
}

export default $capitalizedFilename;
