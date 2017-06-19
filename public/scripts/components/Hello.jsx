import React from 'react';

class Hello extends  React.Component{
    constructor(props) {
        super(props)
        this.state = {fullName: 'World'};
    }
    render() {
        const {fullName} = this.state;
        return (
            <div className='greeting'>
                <h1>
                    {fullName && `Hello, ${fullName}`}
                </h1>
            </div>
        );
    }
}

export default Hello;