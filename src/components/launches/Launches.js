import {useEffect, useState} from "react";
import {Launch} from "../launch/Launch";

function Launches(){

    const [Launches, setLaunches] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value =>setLaunches(value.filter(value => value.launch_year !== '2020')))
    }, []);

    return (
        <div>
            {Launches.map((launch, index) => <Launch key={index} item={launch}/>)}
        </div>
    );
}
 export {Launches};