import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollow } from '../../redux/users-reducer';
import * as axios from "axios";
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {

    //constructr  с пропсами не обяхателен, они по умолчанию есть уже в компоненте
    // constructor(props) {
    //     super(props)
    // }
    
    componentDidMount(){
         if (this.props.users.length === 0) {
            this.props.setIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setIsFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }
    }
   
    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setIsFetching(false);
                    this.props.setUsers(response.data.items);
                });
    }


    render() {
        // debugger
        
        return <>
        {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount = {this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    currentPage = {this.props.currentPage}
                    onPageChanged = {this.onPageChanged}
                    users = {this.props.users}
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow}

            />
        </>
    }

}

// функция возвращает объект,
let mapStateToProps = (state) => {
    // debugger
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//            dispatch(followActionCreator(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId))
//         },
//         setUsers: (users) => {
//             // debugger
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountActionCreator(totalCount))
//         },
//         setToggleIsFetching: (isFetching) => {
//             dispatch(setIsFetchingActionCreator(isFetching))
//         }
//     }
// }

//mapDiaspatchToProps можно сократить, и коллбэки чтоб создавались сами при передаче в экшен креатор, и диспчатся с созданными колбэками

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: followActionCreator,
//         unfollow: unfollowActionCreator,
//         setUsers: setUsersActionCreator,
//         setCurrentPage: setCurrentPageActionCreator,
//         setTotalUsersCount: setTotalUsersCountActionCreator,
//         setToggleIsFetching: setIsFetchingActionCreator
//     }
// }

//mapDiaspatchToProps можно убрать и вынести сокращенный код непосредственно в коннект


// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


// export default connect(mapStateToProps, {
//             follow: followActionCreator,
//             unfollow: unfollowActionCreator,
//             setUsers: setUsersActionCreator,
//             setCurrentPage: setCurrentPageActionCreator,
//             setTotalUsersCount: setTotalUsersCountActionCreator,
//             setToggleIsFetching: setIsFetchingActionCreator
//         })(UsersContainer);

//а можно сократить еще сильнее просто сделва названия одинаоквыми, так же заменим названия экшен креаторов и в редюсере

// export default connect(mapStateToProps, {
//     follow: follow,
//     unfollow: unfollow,
//     setUsers: setUsers,
//     setCurrentPage: setCurrentPage,
//     setTotalUsersCount: setTotalUsersCount,
//     setToggleIsFetching: setIsFetching
// })(UsersContainer);

//из-за того, что имена названия одинаковые, то можно сократить еще сильнее, а функции будут сами себя искать похожие

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching})(UsersContainer);