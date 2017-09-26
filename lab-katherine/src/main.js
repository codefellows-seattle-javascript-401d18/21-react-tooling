import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
const cowsay = require('cowsay-browser');
const faker = require('faker');


class Navbar extends React.Component {
  render() {
    return (
      <header className="app-header container">
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: cowsay.say({
        text : faker.lorem.words(),
      }),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => {
      return {content: cowsay.say({
        text : faker.lorem.words(),
      })};
    });
  }

  render() {
    return (
      <div className="application">
        <Navbar />
        <pre>{this.state.content}</pre>
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
