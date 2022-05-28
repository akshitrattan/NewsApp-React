import './App.css';
import News from './components/News';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
        </div>
        <Routes>
          <Route exact path="/Business" element={<News key="business" category="business"/>}></Route> 
          <Route exact path="/Entertainment" element={<News key="entertainment" category="entertainment"/>}></Route> 
          <Route exact path="/Food" element={<News key="food" category="food"/>}></Route> 
          <Route exact path="/Health" element={<News key="health" category="health"/>}></Route> 
          <Route exact path="/Politics" element={<News key="politics" category="politics"/>}></Route> 
          <Route exact path="/Science" element={<News key="science" category="science"/>}></Route> 
          <Route exact path="/Sports" element={<News key="sports" category="sports"/>}></Route> 
          <Route exact path="/Technology" element={<News key="technology" category="technology"/>}></Route> 
        </Routes>
      </Router>
    );
  }
}

