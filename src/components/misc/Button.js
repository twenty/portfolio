import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isDisabled: false
        };
    }

    render() {
        
        return (
            <div className={[`Button`, `Button__Container`].join(" ")}>
                <button disabled={this.props.disabled} type="submit">{this.props.text}</button>
            </div>
        )
    }
}