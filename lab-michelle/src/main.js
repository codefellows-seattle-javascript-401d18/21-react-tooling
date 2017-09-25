import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

class Button extends React.Component {
  render() {
    return(
      <button type="button"></button>
    )
  }
}

class Heady extends React.Component {
  render() {
    return (
      <header className="cowsay header">
        <h1>Generate Cowsay Lorem</h1>
      </header>
    )
  }
}

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
      return { //something }
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
      }</pre>

      <Button onClick={this.handleClick}>click me</button>
      //possibly put cowsay here
      //something onClick = {this.handleCLick}
    </div>
  )
}
}

ReactDom.render(<App />, document.getElementById('root'));
