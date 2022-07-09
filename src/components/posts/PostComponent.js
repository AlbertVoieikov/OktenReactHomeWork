function PostComponent({item}) {
    return (
        <div>
            <h4>{item.id}</h4>
            <p>{item.title}</p>
            <p>{item.body}</p>
        </div>
    );
}

export {PostComponent};