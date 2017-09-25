import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

//A button
class Button extends React.Component {
  render() {
    return(
      <button type="button"></button>
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
    )
  }
}

//we need to put the text into something
class Box extends React.Component {
  render() {return (
      <article>cow stuff</article>
    )
  }
}

//Our overall app
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content
      //something or other
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState(prevState => {
      return {
        <p> {cowsay.think(<p>faker.words.random(120)</p>)} </p>
        }
    })
  }
}

render() {
  return (
    <div.className ="application">
      <Heady />

      //Beats me...
      <pre> {
        this.state
      }
      </pre>

      <Button onClick={this.handleClick}>click me</button>
    </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
