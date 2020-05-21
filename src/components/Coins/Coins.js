import React, { Component } from "react";
import './Coins.css'

export default class Coins extends Component {
    constructor() {
        super();

        this.state = {
            dollars: 0
        };
    }

    handlesOnChange = (event) => {
        this.setState({
            dollars: Number(event.target.value || 0)
        });
    }

    render = () =>
        <div className="Coins">
            <h1>Buy Cripto Coins!</h1>

            <div className="question">
                <p>How much dollars do you have?</p>
                <p>
                    <input placeholder="0"
                           onChange={this.handlesOnChange}
                           type="text"/>
                </p>
            </div>
            <div className="answer">
                <p>Crypto coin price: $10</p>
                <p>You can buy <strong>{this.state.dollars / 10}</strong></p>
            </div>

        </div>
}