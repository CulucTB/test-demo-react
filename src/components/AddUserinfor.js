import React, { useState } from 'react';

// const [AddUserInfor, setAddUserInfor] = useState () ;
// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         address: 'Hoi Dan IT',
//         age: ''

//     };

//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })

//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })

//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render() {
//         return (
//            

//         )
//     }
// }

const AddUserInfor = (props) => {
    // state = {
    //     name: '',
    //     address: 'Hoi Dan IT',
    //     age: ''
    // };


    const [name, setName] = useState('');
    const [address, setAddress] = useState('Hoi Dan IT');
    const [age, setAge] = useState('');


    const handleOnChangeInput = (event) => {
        // this.setState({
        //     name: event.target.value
        // })
        setName(event.target.value)

    }

    const handleOnChangeAge = (event) => {
        // this.setState({
        //     age: event.target.value
        // })
        setAge(event.target.value)

    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
    }

    return (
        <div>
            My name is {name} and I'm from {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name </label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)}
                />

                <label>Your age</label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>

    )
}


export default AddUserInfor;