import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';


class Navbar extends React.Component {
  render() {
    return (
      <header className="app-header container">
        <h1>Generate Cowsay Lorem</h1>
        <nav>
        <ul>
        <li>button here maybe/?</li>
        </ul>
        </nav>
      </header>
    );
  }
}
class App extends React.Component {
  constructor(content) {
    super(content);

    this.state = {
      // figure this out?
    };

    this.handleClick = this.handleClick.bind(this); // not sure about this either
  }

  handleClick(e) {
    this.setState(prevState => {
      //figure this out also
    });
  }

  render() {
    return (
      <div className="application">
        <NavBAr />
        <p onClick={this.handleClick}>,</p>

      </div>

    );
  }
}




ReactDom.render(<App />, document.getElementById('root'));
