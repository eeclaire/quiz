import React, { Component } from 'react';

import Answer from '../components/Answer';
import Prompt from '../components/Prompt';

import '../css/components/question.css'


class Question extends Component {
    render() {
        return(
            <div className="question">
                <Prompt key={this.props.id} prompt={this.props.prompt} />
                <span>
                    <Answer key={this.props.id} image={this.props.answer1.img} caption={this.props.answer1.caption} />
                    <Answer key={this.props.id} image={this.props.answer2.img} caption={this.props.answer2.caption} />
                </span>
                <span>
                    <Answer key={this.props.id} image={this.props.answer3.img} caption={this.props.answer3.caption} />
                    <Answer key={this.props.id} image={this.props.answer4.img} caption={this.props.answer4.caption} />
                </span>
            </div>
        );
    }
}

export default Question;
