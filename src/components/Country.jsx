import { useEffect } from "react";

import { fetchData } from "./redux/slice/fetchData";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import Loading from "./Loading";
import Error from "./Error";

const Country = () => {
    const dispatch = useDispatch();

    const mainData = useSelector(state => state.getData);

    const { data: countryData, error, loading, errorMessage } = mainData;
    useEffect(() => {
        dispatch(fetchData('https://restcountries.com/v3.1/all'));
    }, []);


    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error message={errorMessage} />
    }

    return (
        <div className="country-wrapper">
            {
                countryData.map((country, index) => (
                    <Link key={index} to={`country/${country.name.common}`}>
                        <CountryCard countryName={country.name.common} flag={country.flags.png} />
                    </Link>
                ))
            }
        </div>
    )
}

export default Country;