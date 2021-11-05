import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount() {
        // debugger
        // let userId = this.props.match.params.userId;
        // if (!userId) {
        //     userId=5555 ;
        // };
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
                .then(response => {
                    // debugger
                     if (response.data.resultCode == 0) {
                         let {id, login, email} = response.data.data;
                         this.props.setAuthUserData(id, email, login);
                     }
        //             // this.props.setIsFetching(false);
        //             this.props.setUserProfile(response.data);
        //             // this.props.setTotalUsersCount(response.data.totalCount);
                });
    }

    render(){
        return <Header {...this.props} />;
    }
}


let mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth,
    login: state.auth.login,

})
// let mapStateToProps = (state) => ({
//     profile: state.profilePage.profile
// });


// export default connect(mapStateToProps, {setUserProfile})(WithRouterContainerComponent);


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);