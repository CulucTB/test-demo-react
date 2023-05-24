// class companent
// function component

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Cu Luc',
        address: 'Hoi Dan IT',
        age: 25

    };

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }

}

export default MyComponent;