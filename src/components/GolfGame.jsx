import React, { Component } from 'react';

class GolfGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballVisible: false,
      ballPosition: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 39 && this.state.ballVisible) {
      // ArrowRight
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  };

  buttonClickHandler = () => {
    this.setState({ ballVisible: true });
  };

  renderChoice = () => {
    if (!this.state.ballVisible) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    } else {
      return (
        <div
          className="ball"
          style={{
            position: 'absolute',
            left: `${this.state.ballPosition}px`,
            top: '100px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'green',
          }}
        ></div>
      );
    }
  };

  render() {
    return (
      <div>
        <h1>Golf Game</h1>
        {this.renderChoice()}
      </div>
    );
  }
}

export default GolfGame;
