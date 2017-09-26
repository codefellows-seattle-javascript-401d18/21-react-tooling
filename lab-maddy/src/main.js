import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState(prevState => {
      return {
        content: cowsay.say({text: faker.lorem.words(20)}),
      };
    }
    );
  }
  render(){
    return (
      <div>
        <h1> Generate Cowsay Lorem </h1>
        <button onClick={this.handleClick}> click here! </button>
         <pre> {this.state.content} </pre>
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById('root'));
