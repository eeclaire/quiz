import React from 'react';

const Prompt = React.createClass({
    render() {
        return(
            <div>
                <p>{this.props.prompt}</p>
            </div>
        )
    }
})

export default Prompt;