import React, { Component } from 'react';
import Icons from './components/Icons';
import ThemeChange from './components/ThemeChange';
import Input from './components/Input';
import Time from './components/Time';
import timeOfDaySwitch from './components/timeOfDaySwitch';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onThemeChange = this.onThemeChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onNameSubmit = this.onNameSubmit.bind(this);

    this.state = {
      theme: 'App',
      inputName: ''
    };
  }
  onThemeChange(e) {
    this.setState({ theme: e.target.name });
  }
  onNameSubmit(e) {
    e.preventDefault();
    const name = this.state.inputName;
    localStorage.setItem('name', `${name}`);
    this.setState({ inputName: '' });
  }

  onNameChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { theme, inputName } = this.state;

    let nameContent;
    if (!localStorage.name) {
      nameContent = (
        <Input
          inputName={inputName}
          onNameChange={this.onNameChange}
          onNameSubmit={this.onNameSubmit}
        />
      );
    } else {
      nameContent = (
        <p>
          Good {`${timeOfDaySwitch()}`}{' '}
          <span className="name">{localStorage.name}</span>, how are you doing
          today?
        </p>
      );
    }

    return (
      <div className={theme}>
        <div className="flexCenter2">{nameContent}</div>
        <Time />
        <Icons />
        <ThemeChange onThemeChange={this.onThemeChange} />
      </div>
    );
  }
}

export default App;
