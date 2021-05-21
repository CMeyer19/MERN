import React, { Component } from 'react';

export default class StringGeneratorComponent extends Component {
  constructor(props) {
    super(props);

    this.onChangeStringLength = this.onChangeStringLength.bind(this);
    this.generateString = this.generateString.bind(this);

    this.state = {
      value: '',
      stringLength: 0
    };
  }

  generateRandomString() {
    const result = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = this.state.stringLength;
    for (let i = 0; i < charactersLength; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
  }

  generateString() {
    this.setState({
      value: this.generateRandomString()
    });
  }

  onChangeStringLength(e) {
    this.setState({
      stringLength: e.target.value
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>String generation</h3>

        <div
          style={{ marginTop: 10 }}
          className="form-group"
        >
          <label>String length: </label>
          <input
            type="number"
            className="form-control"
            value={this.state.stringLength}
            onChange={this.onChangeStringLength}
          />
        </div>
        <button
          style={{ marginTop: 10 }}
          type="button"
          className="btn btn-primary"
          onClick={this.generateString}
        >Generate
        </button>
        <div
          style={{ marginTop: 10 }}
          className="form-group"
        >
          <label>Value: </label>
          <input
            type="text"
            className="form-control"
            value={this.state.value}
          />
        </div>
      </div>
    );
  }


}
