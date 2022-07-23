import {useDispatch} from "react-redux";

import css from './Car.module.css';
import {carActions} from "../../redux/slices";

const Car = ({car}) => {
    const {id, model, year, price} = car;

    const dispatch = useDispatch();

    return (
        <div>
            <div className={css.Car}>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>year: {year}</div>
                <div>price: {price}</div>
                <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>updateCar</button>
                <button onClick={() => dispatch(carActions.deleteCar({id}))}>delete</button>
            </div>
        </div>
    );
};

export {Car};