import React, { Component } from 'react';

import '../css/components/answer.css'

class Answer extends Component {
    render() {
        return(
            <div className="answer">
                <img src={this.props.image} alt={this.props.caption} />
                <p>{this.props.caption}</p>
            </div>
        )
    }
}

export default Answer;
