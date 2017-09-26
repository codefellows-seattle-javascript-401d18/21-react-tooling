import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';


class Navbar extends React.Component {
  render() {
    return (
      <header className="app-header container">
        <h1>Generate Lorem</h1>
        <nav>
          <ul>
            <li>Press the Button</li>
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
        text: faker.lorem.paragraphs(3),
      }),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState( state => {
      return {
        content: cowsay.say({
          text: faker.lorem.paragraphs(3),
        }),
      };
    });
  }

  render() {
    return (
      <div className="cowSpeak">
        <Navbar />
        <button onClick={this.handleClick}>Make the cow moo</button>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
