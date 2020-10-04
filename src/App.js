import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div id="page-body">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesList} />
          <Route path="/article" component={ArticlePage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
