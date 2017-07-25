import React, { Component } from 'react';

import Answer from '../components/Answer';
import Prompt from '../components/Prompt';

import '../css/components/question.css'


class Question extends Component {
    render() {
        return(
            <div className="question">
                <Prompt key={this.props.id} prompt={this.props.prompt} />
                <Answer key={this.props.id} image={this.props.answer1.img} />
                <Answer key={this.props.id} image={this.props.answer2.img} />
            </div>
        );
    }
}

export default Question;
