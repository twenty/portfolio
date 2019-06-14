import React from 'react';
import Tag from './Tag';
export default class ExampleInformation extends React.Component {
    
    render() {
        const Tags = this.props.tags.map((tag, key) => {
            return <Tag key={key} text={tag}/>
        });
        return (
            <div>
                { this.props.title && 
                    <h4 className="Project__Title">
                        {this.props.href && 
                            <a href={this.props.href} target="_blank" rel="noopener noreferrer">
                                {this.props.title}
                            </a>
                        }
                    </h4>
                }
                { this.props.description && 
                    <p className="Project__Description">
                        {this.props.description}
                    </p>
                }
                { Tags && 
                    <div className="Project__Meta">
                        <ul className="Tags">
                            {Tags}
                        </ul>
                    </div>
                }
            </div>
        )
    }
}