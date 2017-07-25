import React from 'react';

import Answer from '../components/Answer';
import Prompt from '../components/Prompt';

import '../css/components/question.css'

const Question = React.createClass({
    render() {
        return(
            <div className="question">
                <Prompt key={this.props.id} prompt={this.props.prompt} />
                <Answer key={this.props.id} image={this.props.img1} />
                <Answer key={this.props.id} image={this.props.img2} />
            </div>
        );
    }
});

export default Question;
