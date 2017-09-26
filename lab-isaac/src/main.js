import Cowsay from 'cowsay-browser';
// import {SQUIRREL} from 'cowsay-browser';
import Faker from 'faker';
import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

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
      return {content: Cowsay.say({text:`${Faker.lorem.words(10)}`})};
    });
  }

  render() {
    return (
      <div className="application">
        <h1>Generate Cowsay lorem</h1>
        <button onClick={this.handleClick}>click me</button>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
//Should have a property called content
//should create a view with the following display
//a heading with the title "Generate Cowsay Lorem"
//a button that displays "click me"
//onClick the button should generate new content on the app state using cowsay-browser and faker
//a pre tag that displays the app's state's content
