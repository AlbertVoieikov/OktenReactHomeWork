
function Launch({item: {mission_name, launch_year, links: {mission_patch_small}}}) {
    return (
        <div>
            <div>Mission name: {mission_name}</div>
            <div>Launch year: {launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
}

export {Launch};