import React from 'react';
import './Displayinfor.scss';
import logo1 from './../logo.svg';

// stateless vs stateful

// class DisplayInfor extends React.Component {


//     render() {
//         console.log('>>> call me render')
//         // console.log(this.props)
//         //destructuring array/object
//         const { listUsers } = this.props;
//         //object
//         //const listUser =this.props.listUsers;
//         //props =>viết tắt properties 
//         console.log(listUsers)
//         // console.table(listUsers)

//         // template +logic js
//         return (
//             <div className='display-infor-container'>

//                 {true &&
//                     <>
//                         {listUsers.map((user, index) => {
//                             console.log(user)
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div> My name's {user.name} </div>
//                                     <div> My age's {user.age} </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>
//                                             Delete
//                                         </button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )

//                         })
//                         }
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;//object

    return (
        <div className='display-infor-container'>

            {true &&
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
