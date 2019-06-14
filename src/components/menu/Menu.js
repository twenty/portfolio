import React from 'react';
import MenuItem from './MenuItem';
import MenuData from '../../data/menuitems.json';

export default class Menu extends React.Component {
    render() {
        const MenuItems = MenuData.map((menuItem, key) => {
            return <MenuItem key={key} href={menuItem.url} text={menuItem.text} />
        });
        return (
            <div className={["Menu", (this.props.align ? `Menu-align--${this.props.align}` : ``)].join(" ")}>
               <ul>
                {MenuItems}
               </ul>
            </div>
        )
    }
}