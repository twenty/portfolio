import React from 'react';
import TextField from './TextField';
import TextArea from './TextArea';

export default class Field extends React.Component {
    render() {
        if( !this.props.type || !this.props.name ) {
            return "";
        }

        const [ type, name, placeholder, isMandatory, onChange ] = [ this.props.type, this.props.name, (this.props.placeholder ? this.props.placeholder : ""),
            (this.props.isMandatory ? this.props.isMandatory : false), this.props.onFieldChange ];

        let placeHolderText = (placeholder ? placeholder : "");

        if(isMandatory && placeHolderText) {
            placeHolderText = `${placeHolderText} (required)`;
        }

        let Component = null;

        switch(type) {
            case "text":
                Component = TextField;
                break;
            case "textarea":
                Component = TextArea;
                break;
            default:
                break;
        }

        if( Component === null ) {
            return "";
        }

        return (
            <div className={[`Form`].join(" ")}>
                { Component && <Component name={name} placeholder={placeHolderText} isMandatory={isMandatory} onChange={onChange} /> }
            </div>
        )
    }
}