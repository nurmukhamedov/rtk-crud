const CountryCard = (props) => {
    const { countryName, flag } = props;

    return (
        <div className="country-card">
            <img className="country-flag" src={flag} />
            <h3>{countryName}</h3>
        </div>
    )
}

export default CountryCard;