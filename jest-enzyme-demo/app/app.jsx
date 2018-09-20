import React from 'react';
import ChildComponent from './childComponent.jsx';
import ButtonComponent from './buttonComponent.jsx';

export default class App extends React.Component {


  render() {
    return (
    <div>
      <p className='app-title'>Testing React Components</p>
      <p className='content'>Testing with Jest-Enzyme</p>
      <ChildComponent childData={'Child Data Component'}/>
      <ButtonComponent/>
    </div>
    );
  }
}