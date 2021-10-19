import * as axios from 'axios';
import React from 'react';
import userPhoto from "../../Assets/man.png";
import styles from './Users.module.css';



class Users extends React.Component {

    //constructr  с пропсами не обяхателен, они по умолчанию есть уже в компоненте
    // constructor(props) {
    //     super(props)
    // }
    
    componentDidMount(){
         if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }
    }
   
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);

                });
    }


    render() {
        // debugger
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

            for (let i=1; i<=pagesCount; i++){
                pages.push(i);
            }
        return <div>
            <div>
                {pages.map(p=>{
                   return <span className = {this.props.currentPage === p && styles.selectedPage}
                   onClick = {(e) => {this.onPageChanged(p)}}>{p}</span>
                    
                })}
            </div>
        { 
            this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !=null ? u.photos.small : userPhoto }  className={styles.userPhoto} alt="" srcset="" />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>

                    </span>

                </div>
            )
        }
    </div>
    }

}

// alert("new")



export default Users;