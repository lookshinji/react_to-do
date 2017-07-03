import React, { Component } from 'react';
import './style.less';

class InputItem extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="novo item"></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default InputItem;
