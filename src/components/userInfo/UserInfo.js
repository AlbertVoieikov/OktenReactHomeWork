
function UserInfo({user}) {
    return (
        <div>
            <div>UserID: {user.id}</div>
                <hr/>
            <div>Name: {user.name}</div>
            <div>UserName: {user.username}</div>
            <div>email: {user.email}</div>
                <hr/>
            <div> Address:
                 <div>street: {user.address.street}</div>
                 <div>suite: {user.address.suite}</div>
                 <div>city: {user.address.city}</div>
                 <div>zipcode:{user.address.zipcode}</div>
                 <div>geo:
                      <div>{user.address.geo.lat}</div>
                      <div>{user.address.geo.lng}</div>
                 </div>

            </div>
                <hr/>
            <div>phone: {user.phone}</div>
            <div>website: {user.website}</div>
                <hr/>
            <div>company information:
                 <div>company name: {user.company.name}</div>
                 <div>company catchPhrase: {user.company.catchPhrase}</div>
                 <div>company bs: {user.company.bs}</div>
            </div>

        </div>
    );
}

export {UserInfo};

