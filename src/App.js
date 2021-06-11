import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Form from "./components/Form";
import Pairwise from "./components/Pairwise";
import Result from "./components/Result";

export default class App extends Component {
  ActiveState = {
    FORM: 0,
    PAIRWISE: 1,
    RESULT: 2,
  };

  state = {
    activeState: this.ActiveState.FORM,
    buttonNum: 0,
    result: [],
    show: false,
  };

  handleFormSubmit = (buttonNum) => {
    this.setState({
      activeState: this.ActiveState.PAIRWISE,
      buttonNum,
      show: true,
    });
  };

  handlePairwiseSubmit = (result) => {
    this.setState({
      activeState: this.ActiveState.RESULT,
      result: result,
    });
  };

  render() {
    if (this.state.activeState === this.ActiveState.FORM) {
      return <Form onSubmit={this.handleFormSubmit} />;
    }

    if (this.state.activeState === this.ActiveState.PAIRWISE) {
      return (
        <Pairwise
          onSubmit={this.handlePairwiseSubmit}
          buttonNum={this.state.buttonNum}
        />
      );
    }

    if (this.state.activeState === this.ActiveState.RESULT) {
      return <Result result={this.state.result} />;
    }
  }
}
