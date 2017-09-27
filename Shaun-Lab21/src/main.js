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
      cows: [],
      current: '',
      content: cowsay.say({ text: 'HELLO!' })

    };

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    cowsay.list((err, cows) => {
      let current = cows[0]
      this.setState({cows, current})
    })
  }

  handleClick(e) {
    let current = e.target.value
    let text = faker.hacker.phrase()
    this.setState({current, content: cowsay.say({text, f: current})
  })
    // this.setState(prevState => {
    //   return {
    //     content: cowsay.say({
	  //     text : faker.lorem.words(),
	  //      e : 'oO',
	  //      T : 'U '
    }

  render() {
    return (
      <div>
      <Navbar />
        <h3>The Cow Saysssss</h3>
        <select onChange={this.handleClick}>
          {this.state.cows.map((cow, i) => {
            return <option key={i} value={cow}>{cow}</option>
          })}
        </select>
        <button onClick={this.handleClick}>What does the cow say???</button>
          <pre>
            <code>
              {this.state.content}
            </code>
          </pre>
    </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
