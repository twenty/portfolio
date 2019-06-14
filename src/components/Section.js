import React from 'react';
import SectionData from '../data/pagedata.json';
import SectionWork from './sections/SectionWork.js';
import SectionContact from './sections/SectionContact.js';

export default class Section extends React.Component {
    
    components = {
        Work: SectionWork,
        Contact: SectionContact
    };

    render() {
        if(!this.props.sectionName || !SectionData[this.props.sectionName]) {
            return <div><h3>ERROR LOADING SECTION</h3></div>
        }

        const Component = this.components[this.props.sectionName];

        return (
            <div className={[`Section`, `Section__${this.props.sectionName}`].join(" ")}>
                { this.props.section }
                { <Component data={SectionData[this.props.sectionName]} /> }
            </div>
        )
    }
}