import './styles/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import cowsay from 'cowsay-browser';
import faker from 'faker';


class Navbar extends React.Component {
  render() {
    return (
      <header className="cowsay header">
        <h1>Cowsay React</h1>
      </header>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: cowsay.say({ text: 'HELLO!' })

    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState(prevState => {
      return {
        content: cowsay.say({
	      text : faker.lorem.words(),
	       e : 'oO',
	       T : 'U '
       })
    }
  });
}

  render() {
    return (
      <div>
      <Navbar />
        <h3>The Cow Saysssss</h3>
        <button onClick={this.handleClick}>What does the cow say???</button>
        <pre>{this.state.content}</pre>
    </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
