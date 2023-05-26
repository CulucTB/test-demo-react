// class companent
// function component

import React from 'react';
import DisplayInfor from './Display';
import UserInfor from './Userinfor';

class MyComponent extends React.Component {


    render() {
        const myInfor = ['ab', 'c', 'd']
        return (
            <div>
                <UserInfor />
                <br></br>
                <DisplayInfor name="Hoi Dan It" age="30" />
                <hr />
                <DisplayInfor name="Eric" age="26" />

            </div>
        );
    }

}

export default MyComponent;