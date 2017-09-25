import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

class Navbar extends React.Component {
  render() {
    return (
      <header className="app-header container">
      <h1>Counter App</h1>
      <nav>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    </header>
    )
  }
}
