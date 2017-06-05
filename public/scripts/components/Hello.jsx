import React from 'react';

const Hello = React.createClass({
    getInitialState() {
        return {fullName: 'World'};
    },
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
});

export default Hello;