
function User({item, userInfoBtn}) {
    return (
        <div>
            <div>UserID: {item.id}</div>
            <h3>{item.name}</h3>
            <button onClick={() => userInfoBtn(item)}>User Infiomation</button>
        </div>
    );
}

export {User};