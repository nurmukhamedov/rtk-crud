
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchData } from "./redux/slice/fetchData";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";

const SingleCountry = () => {
    const countryName = useParams();
    const dispatch = useDispatch();

    const mainData = useSelector(state => state.getData);

    const url = `https://restcountries.com/v3.1/name/${countryName.name}`;

    const { data: countryData, error, loading, errorMessage } = mainData;

    const countryCardsData = countryData.map((country, index) => (
        <div key={index}>
            <CountryCard countryName={country.name.common} flag={country.flags.png} />
        </div>
    ))

    useEffect(() => {
        dispatch(fetchData(url));
    }, []);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error message={errorMessage} />
    }

    return (
        <>
            <Link to="/">Back to Home</Link>
            {countryCardsData}
        </>
    )
}

export default SingleCountry;