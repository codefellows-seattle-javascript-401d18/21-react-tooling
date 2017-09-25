import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

//A button
class Button extends React.Component {
  render() {
    return(
      <button type="button"></button>
    );
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

//we need to put the text into something
class Box extends React.Component {
  render() {return (
      <article></article>
  );
  }
}

//Our overall app
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //Cow hasn't said anything yet
      // cowsay.say({
      //   text:"",
      //   e: "0o"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => {
      return {
        // <pre>faker.words.random(120)</pre>
      };
    });
  }

  render(){
    return (
    <div className ="application">
      <Heady />
      <Box/>
        <Button onClick={this.handleClick}>click me</Button>
      //Beats me...
      <pre> {
        this.state
      }
      </pre>
    </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
