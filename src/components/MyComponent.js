// class companent
// function component

import React from 'react';
import DisplayInfor from './Display';
import AddUserinfor from './AddUserinfor';

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Hoi Dan It", age: "16" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "Culuc", age: "69" },
        ]
    }
    handleAddNewUser = (userObj) => {
        console.log(">>> check data from parent: ", userObj)
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
            // dùng cái này sẽ đẩy lên trên đầu 
            // listUsers: [...this.state.listUsers, userObj]
            // dùng cái này sẽ đẩy xuống cuối cùng
        })
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone
        })
    }

    //JSX
    render() {
        // DRY:don't reapt youself
        return (
            <>
                <br />
                <div className='a'>
                    <AddUserinfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br></br>
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}

                    />
                </div>
                <div className='b'>

                </div>
            </>
        );
    }

}

export default MyComponent;