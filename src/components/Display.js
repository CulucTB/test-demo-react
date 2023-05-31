import React, { useEffect, useState } from 'react';
import './Displayinfor.scss';
import logo1 from './../logo.svg';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
// stateless vs stateful


const DisplayInfor = (props) => {
    const { listUsers } = props;//object
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    // this.state = {
    //     isShowHideListUser: true 
    // }
    const handleShowHideListUser = () => {
        // this.state = {
        //     isShowHideListUser: true 
        // }
        setShowHideListUser(!isShowHideListUser);
    }

    console.log(">>> call me render")

    useEffect(
        () => {
            if (listUsers.lenght === 0) {
                alert('you deleted all the users')
            }
            console.log(">>> call me useEffect")
        }, [listUsers]
    );

    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list users" : "Show List user"}
                </span>
            </div>


            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {
                        console.log(user)
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div> My name's {user.name} </div>
                                <div> My age's {user.age} </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>
                                        Delete
                                    </button>
                                </div>
                                <hr />
                            </div>
                        )

                    })
                    }
                </>
            }
        </div>
    )

}
export default DisplayInfor;
