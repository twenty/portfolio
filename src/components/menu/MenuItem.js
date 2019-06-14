import React from 'react';

export default class MenuItem extends React.Component {
    render() {
        const colors = ["blue", "pink", "orange", "yellow", "red", "green", "purple"];
        const randomInt = Math.floor(Math.random() * 7);
        const selectedColor = colors[randomInt];
        return (
            <li className={["Menu__Item", `Item--${selectedColor}`].join(" ")}>
                <a href={this.props.url}>
                    {this.props.text}
                </a>
            </li>
        )
    }
}