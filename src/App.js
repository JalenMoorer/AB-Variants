import React, {Component}  from 'react';
import './App.css';

import Experiment from 'react-ab-test/lib/Experiment';
import Variant from 'react-ab-test/lib/Variant';
import emitter from 'react-ab-test/lib/emitter';

import Header from './components/Header';
import Logo from './components/Logo';
import Nav from './components/Nav'


class App extends Component {
  render() {
    return (
      <div className="container">
      <Experiment ref="header" name="Align Heder">
        <Variant name="A">
          <Header>
            <Logo />
            <Nav align="left" />
          </Header>
        </Variant>
        <Variant name="B">
          <Header>
            <Logo />
            <Nav align="right" />
          </Header>
        </Variant>
      </Experiment>
    </div>
    );
  }
}


emitter.addPlayListener((experimentName, variantName) => {
  console.log(`Displaying experiment ${experimentName} variant ${variantName}`);
});

export default App;
