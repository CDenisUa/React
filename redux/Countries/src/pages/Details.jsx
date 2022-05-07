// Core
import {useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5';

// Redux
import {useDispatch, useSelector} from "react-redux";
import {selectDetails} from "../store/details/detaills-selector";
import {loadCountryByName} from "../store/details/details-actions";

// Components
import {Button} from '../components/Button';
import {Info} from '../components/Info';


export const Details = () => {
    const dispatch = useDispatch();
    const {name} = useParams();
    const navigate = useNavigate();
    const {currentCountry, error, status} = useSelector(selectDetails);

    useEffect(() => {
        dispatch(loadCountryByName(name));
    }, [name, dispatch])

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack/> Back
            </Button>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {currentCountry && <Info push={navigate} {...currentCountry} />}
        </div>
    );
};
