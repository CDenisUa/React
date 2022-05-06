// Core
import {useEffect} from "react";
import {useNavigate} from 'react-router-dom';

// Redux
import {useDispatch, useSelector} from "react-redux";
import {selectAllCountries, selectCountriesInfo, selectVisibleCountries} from "../store/countries/countries-selectors";
import {loadCountries} from "../store/countries/countries-actions";
import {selectSearch} from "../store/controls/controls-selectors";

// Components
import {List} from '../components/List';
import {Card} from '../components/Card';
import {Controls} from '../components/Controls';

export const HomePage = () => {
    const dispatch = useDispatch();
    const search = useSelector(selectSearch);
    const countries = useSelector(state => selectVisibleCountries(state, { search }));
    const {status, error, qty} = useSelector(selectCountriesInfo);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(loadCountries())
    }, [qty, dispatch])

    return (
        <>
            <Controls/>
            {error && <h2>Can't fetch data</h2>}
            {status === 'loading' && <h2>Loading...</h2>}
            {status === 'received' && (
                <List>
                    {countries.map((c) => {
                        const countryInfo = {
                            img: c.flags.png,
                            name: c.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital,
                                },
                            ],
                        };

                        return (
                            <Card
                                key={c.name}
                                onClick={() => navigate(`/country/${c.name}`)}
                                {...countryInfo}
                            />
                        );
                    })}
                </List>
            )}
        </>
    );
};
