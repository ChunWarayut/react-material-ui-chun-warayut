import React from "react";
import { css } from "@emotion/core";
// First way to import
import { HashLoader } from "react-spinners";
// Another way to import. This is recommended to reduce bundle size
// import ClipLoader from 'react-spinners/ClipLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class LoodingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <>
        <div
          className="sweet-loading"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            position: "absolute",
            paddingTop: "40vh"
          }}
        >
          <HashLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={"#123abc"}
            loading={this.state.loading}
          />
        </div>
        <div
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99998,
            position: "absolute",
            backgroundColor: "#F5F5F6",
            paddingTop: "40vh",
            opacity: "0.9"
          }}
        />
      </>
    );
  }
}
