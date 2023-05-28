import React from 'react';
import './Displayinfor.scss';
import logo1 from './../logo.svg';

class DisplayInfor extends React.Component {

    constructor(props) {
        console.log(">>> call me contructor: 1")
        super(props);
        // babel compiler
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log('>>> call me component did mount')
        setTimeout(() => {
            document.title = 'Eric & Hoi Dan IT'
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> call me component did update', this.props.prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            alert('you got 5 users')
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log('>>> call me render')
        // console.log(this.props)
        //destructuring array/object
        const { listUsers } = this.props;
        //object
        //const listUser =this.props.listUsers;
        //props =>viết tắt properties 
        console.log(listUsers)
        // console.table(listUsers)

        // template +logic js
        return (
            <div className='display-infor-container'>
                {/* <img src={logo1} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>

                        {this.state.isShowListUser === true ? "  Hide list users :" : "  Show list users :"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user, index) => {
                            console.log(user)
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div> My name's {user.name} </div>
                                    <div> My age's {user.age} </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>
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
}
export default DisplayInfor;
