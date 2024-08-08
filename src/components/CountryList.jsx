import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import { useCities } from "../context/CitiesContext";
const CountryList = () => {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;
  // const countries = cities.reduce((arr,city)=>
  // if(!arr.map(el=>el.country).includes(city.country))
  //   return[...arr,{country:city.country,emoji:city.emoji}]
  // ,[])
  const countries = cities.reduce((arr, city) => {
    if (!arr.some((el) => el.country === city.country)) {
      arr.push({ country: city.country, emoji: city.emoji });
    }
    return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
};

export default CountryList;
