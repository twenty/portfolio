import React from 'react';
export default class Tag extends React.Component {
    
    render() {
        if( !this.props.text ) {
            return "";
        }
        return (
            <li className="Tag">{this.props.text}</li>
        )
    }
}