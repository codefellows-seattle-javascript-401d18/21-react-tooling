import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

//A button
class Button extends React.Component {
  render() {
    return(
      <button type="button">Click Me</button>
    );
  }
}

//A blank cow - I feel like we could use this as a reusable element in various places?
class Cow extends React.Component {
  render() {
    return (
      cowsay.say({
        text: "",
        e: "99",
        f: "dragon",
      })
    )
  }
}


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
      content
      }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => {
      return {
        //cow talks
        content: { <Cow />}
      };
    });
  }

  render(){
    return (
    <div className ="application">
      <Heady />
      <Button />
      <pre>{this.state.content}</pre>
    </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
