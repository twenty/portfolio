import React from 'react';
import Example from '../work/Example';

export default class SectionWork extends React.Component {
    render() {
        const data = this.props.data;
        let examples = null;
        if( data.examples ) {
            examples = data.examples.map((example, key) => {
                return <Example key={key} title={example.title} href={example.href}
                        description={example.description} tags={example.tags}
                        image={example.image} />
            });
        }
        return (
            <div className={[`Section`, `Section__${this.props.sectionName}`].join(" ")}>
               { data.title && <h3 className="Section__Title">{data.title}</h3>}
               { examples && examples }
            </div>
        )
    }
}