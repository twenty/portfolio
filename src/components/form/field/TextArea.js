import React from 'react';

export default class TextArea extends React.Component {
    render() {
        return (
            <div className={[`Field`, `TextArea`].join(" ")}>
                <textarea className={[`fatField`, (this.props.isMandatory ? `required` : ``)].join(" ")} 
                            name={this.props.name} placeholder={this.props.placeholder}
                            onChange={this.props.onChange} >

                </textarea>
            </div>
        )
    }
}