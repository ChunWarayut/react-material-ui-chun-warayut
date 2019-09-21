import React, { Component } from "react";
import "./NoMatch.css";
import { Link } from "react-router-dom";
import LoodingComponent from "../../components/Looding/";

export default class NoMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
  }
  render() {
    return (
      <>
      {this.state.loading && <LoodingComponent />}
        <div className="error-body">
          <section className="error-container">
            <span className="four">
              <span className="screen-reader-text">4</span>
            </span>
            <span className="zero">
              <span className="screen-reader-text">0</span>
            </span>
            <span className="four">
              <span className="screen-reader-text">4</span>
            </span>
          </section>
          <div className="link-container">
            <Link to="/" className="more-link">
              Go Back
            </Link>
          </div>
        </div>
      </>
    );
  }
}
