import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../context/CitiesContext";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
const CityItem = ({ city }) => {
  const { currentCity, deleteCity } = useCities();
  function handleClick(id, e) {
    e.preventDefault();
    deleteCity(id);
  }
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          city.id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>{formatDate(city.date)}</time>
        <button
          className={styles.deleteBtn}
          onClick={(e) => handleClick(city.id, e)}
        >
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
