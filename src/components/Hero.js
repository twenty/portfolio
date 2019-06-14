import React from 'react';
import Menu from './menu/Menu';
import HeroData from '../data/herodata.json';

export default class Hero extends React.Component {
    render() {
        return (
            <div className="Hero">
                <Menu align="right"/>
                <div className="message">
                    <h1 className="message__big">{HeroData.messages.title}</h1>
                    <h2 className="message__small">{HeroData.messages.description}</h2>
                </div>
                <div className="learnMore">
                    <a href="#work">{HeroData.messages.learn_more}</a>
                    <i className="fas fa-angle-down"></i>
                </div>
            </div>
        )
    }
}