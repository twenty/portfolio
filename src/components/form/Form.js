import React from 'react';
import Field from './field/Field';
import Button from '../misc/Button';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        let stateObject = {
            isSubmitted: false,
            isValid: false,
            fields: {}
        };

        this.props.formData.fields.forEach((field, idx) => {
            stateObject.fields[field.name] = {
                "value": "",
                "mandatory": (field.mandatory ? field.mandatory : false)
            };
        });
        this.state = stateObject;
    }

    handleValidation() {
        let fields = this.state.fields;
        let isValid = true;
        Object.keys(fields).forEach((key) => {
            let field = fields[key];
            if( !field.value && field.mandatory ) {
                // console.log("Setting to false");
                isValid = false;
            }
            if( key === "email" ) {
                if( field.value ) {
                    if( !/[^\s@]+@[^\s@]+\.[^\s@]+/.test(field.value) ) {
                        isValid = false;
                    }
                }
            }
        });
        this.setState({
            isValid: isValid
        });
    }

    onFieldChange(field, event) {
        let fields = this.state.fields;
        fields[field].value = event.target.value;
        this.setState({fields});
        this.handleValidation();
    }

    render() {
        const formData = this.props.formData;
        if( !formData || !formData.fields || !formData.endpoint ) {
            return <div>Error loading form.</div>
        }
        const fields = formData.fields.map((field, key) => {
            return <Field key={key} type={field.type} name={field.name} placeholder={field.placeholder}
                          isMandatory={field.mandatory} onFieldChange={this.onFieldChange.bind(this, field.name)} />
        });
        const submitButton = (formData.submit ? <Button align={formData.submit.align} text={formData.submit.text} disabled={!this.state.isValid} /> : null);
        return (
            <div className={[`Form`].join(" ")}>
                { fields && fields }
                { submitButton && submitButton }
            </div>
        )
    }
}