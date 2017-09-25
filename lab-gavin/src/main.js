import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
// import { say } from 'cowsay';
import cowsay from 'cowsay-browser';
import faker from 'faker';


class Navbar extends React.Component {
  render() {
    return (
      <header className="app-header container">
        <h1>Counter App</h1>
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
      </header>
    );
  }
}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: cowsay.say({
        text: faker.lorem.words(20),
      }),

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState( state => {
      return {
        content: cowsay.say({
          text: faker.lorem.words(20),
        }),
      };
    });
  }

  render() {
    return (
      <div>
        <h2>Generate Cowsay Lorem</h2>
        <button onClick={this.handleClick}>Tell me what the cow say.</button>
        <pre>{this.state.content}</pre>
    </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
