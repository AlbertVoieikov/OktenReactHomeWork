import {useEffect, useState} from "react";

import {User} from "../user/User";
import {UserInfo} from "../userInfo/UserInfo";

function Users() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUsers(value))
    }, []);

    const userInfoBtn = (item) =>{
        setUser(item);
    }

    return (

        <div>
            {user && <UserInfo user={user}/>}
            {users.map(user => <User key={user.id} item={user} userInfoBtn={userInfoBtn}/>)}
        </div>
    );
}

export {Users};