import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Select necessary</h2>

            <div>
                <Link to={'albums'}>Albums</Link>
            </div>

            <div>
                <Link to={'comments'}>Comments</Link>
            </div>

            <div>
                <Link to={'todos'}>Todos</Link>
            </div>
        </div>
    );
};

export {Header};