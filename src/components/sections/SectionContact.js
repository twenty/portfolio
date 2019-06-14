import React from 'react';
import Form from '../form/Form';

export default class SectionContact extends React.Component {
    render() {
        
        const data = this.props.data;
        
        return (
            <div className={[`Section`, `Section__${this.props.sectionName}`].join(" ")}>
               { data.title && <h3 className="Section__Title">{data.title}</h3>}
               <div className={[`left`, `description`].join(" ")}>
                    <h4>SAY HELLO!</h4>
                    <p>
                        Christapher Alvarez <br/>
                        Front-end Developer
                    </p>
                    <p style={{"margin": "20px 0"}}>
                        <a href="mailto:hello@cralvarez.com">hello@cralvarez.com</a>
                    </p>
                    <p style={{"margin": "20px 0"}}>
                        <span>Or</span>
                    </p>
                    <p style={{"margin": "20px 0"}}>
                        Check out my 
                        <a href="https://github.com/twenty" target="_blank" rel="noopener noreferrer">GitHub</a>
                        to see what I'm working on!
                    </p>
               </div>
               { data.form && 
                    <div className={[`right`].join(" ")}>
                        <Form formData={data.form} /> 
                    </div>
               } 
            </div>
        )
    }
}