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
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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