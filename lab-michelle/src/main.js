import './style/main.scss';
import cowsay from 'cowsay-browser';
import faker from 'faker';
import React from 'react';
import ReactDom from 'react-dom';


//Header
class Heady extends React.Component {
  render() {
    return (
      <header className="cowsay header">
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  }
}

//Our overall app
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //Cow hasn't said anything yet, so blank cow
      content: '',
    };

//I'm going to leave it at "this" but I actually think maybe we need to bind to the button itself??
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => {
      return {
        //cow talks
        // content: <Cow />?
        content:
          cowsay.say({
            text: faker.random.words(5),
            e: '99',
            f: 'dragon',
          }),
      };
    });
  }

  render(){
    return (
    <div className ="application">
      <Heady />
      <button onClick={this.handleClick}>click me</button>
      <pre>{this.state.content}</pre>
    </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
