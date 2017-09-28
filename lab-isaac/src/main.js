import Cowsay from 'cowsay-browser';
import Faker from 'faker';
import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [],
      current: 'default',
      content: Cowsay.say({ text: 'select "click me" to generate Lorem Ipsum'}),
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    Cowsay.list((err, cows) => {
      this.setState({ cows });
    });
  }

  handleChange(e) {
    let current = e.target.value;
    this.setState(prevState => {
      return {current: {current}};
    });
  }

  handleClick(e) {
    let text = Faker.lorem.words(10);
    this.setState(prevState => {
      return {content: Cowsay.say({
        text:`${text}`,
        f: this.state.current.current,
      })};
    });
  }

  render() {
    return (
      <div className="application">
        <h1>Generate Cowsay lorem</h1>
        <select onChange ={this.handleChange}>
          {this.state.cows.map((cow, i) => {
            return <option key= {i} value={cow}>{cow}</option>;
          })}
        </select>
        <button onClick={this.handleClick}>click me</button>
        <pre><code>{this.state.content}</code></pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
