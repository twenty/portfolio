import React from 'react';

export default class TextField extends React.Component {
    render() {
        return (
            <div className={[`Field`, `TextField`].join(" ")}>
                <input className={[`fatField`, (this.props.isMandatory ? `required` : ``)].join(" ")} 
                        type="text" name={this.props.name} placeholder={this.props.placeholder}
                        onChange={this.props.onChange} />
            </div>
        )
    }
}