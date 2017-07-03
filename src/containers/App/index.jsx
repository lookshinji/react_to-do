//Libs
import React, { Component } from 'react';

//Styles
import './style.less';

//Containers
import ToDo from '../ToDo'
import InputItem from '../../components/InputItem'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>To do List</h2>
          <InputItem />
          <ToDo />
        </div>
      </div>
    );
  }
}

export default App;
