import React from 'react';
import ExampleInformation from './ExampleInformation';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            image: null 
        };
    }
    componentDidMount() {
        import(`../../img/${this.props.image.url}`).then( module => {
            this.setState({ 
                image: module.default 
            });
        });
    }
    render() {
        const { image } = this.state;
        const imageAlign = ( this.props.image.align ? this.props.image.align : "left" );
        return (
            <div className={[`Example`, `Project`].join(" ")}>
                { imageAlign === "left" && 
                    <div>
                        <div>{image && <img src={image} alt={`Website design for ${this.props.title}`} />}</div>
                        <ExampleInformation title={this.props.title} description={this.props.description}
                                            tags={this.props.tags} href={this.props.href} />
                    </div>
                }
                
                { imageAlign === "right" && image && <img src={image} alt={`Website design for ${this.props.title}`} /> }
            </div>
        )
    }
}