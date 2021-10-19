import * as axios from 'axios';
import React from 'react';
import userPhoto from "../../Assets/man.png";

let Users = (props) => {
    // debugger 
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
        // props.setUsers([
        //     {
        //         id: 1,
        //         photoUrl: 'https://n1s1.elle.ru/0f/9b/06/0f9b06937efba22c8513132bb280430b/728x825_1_142399e76f9c0d5fc21b0432ca151fd5@940x1065_0xc0a839a4_9794863591477297267.jpeg',
        //         followed: true, 
        //         fullName: 'Roman', 
        //         status: 'I am a boss', 
        //         location: { city: 'Rostov-on-Don', country: 'Russia' }
        //     },
        //     {
        //         id: 2,
        //         photoUrl: 'https://n1s1.elle.ru/0f/9b/06/0f9b06937efba22c8513132bb280430b/728x825_1_142399e76f9c0d5fc21b0432ca151fd5@940x1065_0xc0a839a4_9794863591477297267.jpeg',
        //         followed: false, 
        //         fullName: 'Sasha', 
        //         status: 'I am a boss too', 
        //         location: { city: 'Kiev', country: 'Ukraine' }
        //     },
        //     {
        //         id: 3,
        //         photoUrl: 'https://n1s1.elle.ru/0f/9b/06/0f9b06937efba22c8513132bb280430b/728x825_1_142399e76f9c0d5fc21b0432ca151fd5@940x1065_0xc0a839a4_9794863591477297267.jpeg',
        //         followed: true,
        //         fullName: 'Ira', 
        //         status: 'I am a developer', 
        //         location: { city: 'Minsk', country: 'Belarus' }
        //     },
        // ])
    }


    return <div>

        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !=null ? u.photos.small : userPhoto } alt="" srcset="" />
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

export default Users;