import axios from "axios";
import { useEffect, useState } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data.meals);
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <div
        key={idMeal}
        style={hoveredId === idMeal ? styles.mealCardHover : styles.mealCard}
        onMouseEnter={() => setHoveredId(idMeal)}
        onMouseLeave={() => setHoveredId(null)}
      >
        <img src={strMealThumb} alt={strMeal} style={styles.image} />
        <div style={styles.info}>
          <p style={styles.mealName}>{strMeal}</p>
          <p style={styles.mealId}>#{idMeal}</p>
        </div>
      </div>
    );
  });
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Seafood Meals</h1>
      <div style={styles.grid}>{itemsList}</div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
    color: "#333",
    marginBottom: "40px",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  mealCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  mealCardHover: {
    backgroundColor: "white",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    transform: "translateY(-8px)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
  },
  info: {
    padding: "16px",
  },
  mealName: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    margin: "0 0 8px 0",
  },
  mealId: {
    fontSize: "12px",
    color: "#888",
    margin: "0",
  },
};

export default Meals;
