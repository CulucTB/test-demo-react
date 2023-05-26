// class companent
// function component

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Cu Luc',
        address: 'Hoi Dan IT',
        age: 25

    };

    handleClick = (event) => {
        console.log(">> click me my button");
        console.log(" My name is ", this.state.name)

        this.setState({
            name: 'Eric',
            age: Math.floor((Math.random() * 100) + 1)
        })
        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }

    handleOnMouseOver(event) {
        console.log(event.pageX)
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })

    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>

                My name is {this.state.name} and I'm from {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>


            </div>
        );
    }

}

export default MyComponent;