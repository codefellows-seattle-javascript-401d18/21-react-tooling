import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';


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
      content: cowsay.say({ text: 'Hello!', cow: 'DRAGON'}),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => {
      return {
        content: cowsay.say({ text: faker.lorem.words(5), cow:'DRAGON'}),
      };
    });
  }

  render() {
    return (
      <div className="application">
        <Navbar />
        <button onClick={this.handleClick}>Click Me</button>
        <pre> {this.state.content} </pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
