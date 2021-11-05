import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from "../../Assets/Images/man.png";
import styles from './Users.module.css';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];

            for (let i=1; i<=pagesCount; i++){
                pages.push(i);
            }

    

    return <div>
        <div>
            {pages.map(p=>{
                return <span className = {props.currentPage === p && styles.selectedPage}
                onClick = {(e) => {props.onPageChanged(p)}}>{p}</span>
                
            })}
        </div>
    { 
        props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>    
                         <img src={u.photos.small !=null ? u.photos.small : userPhoto }  className={styles.userPhoto} alt="" srcset="" />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "api-key": "5203aca8-8ded-4d99-8be6-dc6467667be1"
                                    }
                                })
                                    .then(response => {
                                        // if (response.data.resusltCode == 0) {
                                        //     props.unfollow(u.id);
                                        // }
                                        props.unfollow(u.id);
                                    });

                                    // props.unfollow(u.id) 
                            }}>Unfollow</button>
                            : <button onClick={() => { 
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "api-key": "5203aca8-8ded-4d99-8be6-dc6467667be1"
                                    }
                                })
                                    .then(response => {
                                        // if (response.data.resusltCode == 0) {
                                        //     props.follow(u.id); 
                                        // }
                                        props.follow(u.id); 

                                    });
                                    // props.follow(u.id) 

                                }}>Follow</button>}
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


// alert("new")



export default Users;