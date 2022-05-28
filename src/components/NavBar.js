import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid text">
                <a className="navbar-brand" href="#">NewsApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Business</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Entertainment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Food</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Health</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Politics</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Science</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Technology</a>
                    </li>
                    </ul>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
  }
}
