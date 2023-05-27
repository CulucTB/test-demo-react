import React from 'react';
import './Displayinfor.scss';
class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        // console.log(this.props)
        //destructuring array/object
        const { listUsers } = this.props;
        //object
        //const listUser =this.props.listUsers;
        //props =>viết tắt properties 
        console.log(listUsers)
        // console.table(listUsers)
        return (
            <div className='display-infor-container'>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>

                        {this.state.isShowListUser === true ? "  Hide list users :" : "  Show list users :"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div style={{ color: 'yellow', paddingTop: '50px' }}> My name's {user.name} </div>
                                    <div> My age's {user.age} </div>
                                    <hr />
                                </div>
                            )

                        })
                        }
                    </div >
                }
            </div>
        )
    }
}
export default DisplayInfor;
