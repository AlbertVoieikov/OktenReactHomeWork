import {useEffect, useState} from "react";

import {TodoComponent} from "./TodoComponent";
import {getTodos} from "../../services/app.service";

function TodosComponent() {

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        getTodos().then(value => setTodos([...value]))
    }, [])
    return (
        <div>
            {todos.map(value => <TodoComponent item={value} key={value.id}/>)}
        </div>
    );
}

export {TodosComponent};