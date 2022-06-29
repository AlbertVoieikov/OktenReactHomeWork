import {useEffect, useState} from "react";
import {User,getUsers} from "../index";

function Users({userId}) {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(({data})=>setUsers([...data]));
    },[]);

    return (
        <div>
            {
                users.map(user => <User item={user}
                                         key={user.id}
                                         userId={userId}
                />)
            }
        </div>
    )

}

export {Users};