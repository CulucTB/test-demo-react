// class companent
// function component

import React from 'react';
import DisplayInfor from './Display';
import UserInfor from './Userinfor';

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Hoi Dan It", age: "16" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "Culuc", age: "69" },
        ]
    }

    render() {
        // DRY:don't reapt youseft
        return (
            <div>
                <UserInfor />
                <br></br>
                <DisplayInfor
                    listUsers={this.state.listUsers}

                />


            </div>
        );
    }

}

export default MyComponent;