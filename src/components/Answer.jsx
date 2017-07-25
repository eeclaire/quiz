import React from 'react';

import '../css/components/answer.css'

const Answer = React.createClass({
    render() {
        return(
            <div>
                <img src={this.props.image} />
            </div>
        )
    }
})

//<img src={require(`${this.props.image}`)} />

export default Answer;
