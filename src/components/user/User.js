function User({item, userId}) {
    const onclick = () =>{
        userId(item.id);
    }
    return (
        <div>
            <h3>{item.name}</h3>
            <button onClick={onclick}>user posts</button>
        </div>
    );
}

export {User};
