import React, { Component } from 'react';

export default class StringGeneratorComponent extends Component {
  constructor(props) {
    super(props);

    this.onChangeStringLength = this.onChangeStringLength.bind(this);
    this.generateString = this.generateString.bind(this);
    this.onChangeStringAmount = this.onChangeStringAmount.bind(this);

    this.state = {
      value: '',
      stringLength: 0,
      stringAmount: 0
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

  onChangeValue() {

  }

  generateString() {
    let finalResult = '';
    for (let i = 0; i < this.state.stringAmount; i++) {
      finalResult += this.generateRandomString() + '\r\n';
    }
    this.setState({
      value: finalResult
    });
  }

  onChangeStringLength(e) {
    this.setState({
      stringLength: e.target.value
    });
  }

  onChangeStringAmount(e) {
    this.setState({
      stringAmount: e.target.value
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
        <div
          style={{ marginTop: 10 }}
          className="form-group"
        >
          <label>Amount: </label>
          <input
            type="number"
            className="form-control"
            value={this.state.stringAmount}
            onChange={this.onChangeStringAmount}
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
          <textarea
            onChange={this.onChangeValue}
            className="form-control"
            value={this.state.value}
            rows={5}
          />
        </div>
      </div>
    );
  }

}
