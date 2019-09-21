import React, { Component } from 'react'
import LoodingComponent from '../../components/Looding/index'

export default class Home extends Component {
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
      })
    }, 2000)
  }
  render() {
    return (
      <>
        {this.state.loading && <LoodingComponent />}
        <div>About</div>
      </>
    );
  }
}
