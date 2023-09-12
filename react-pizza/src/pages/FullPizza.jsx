import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PizzaBlock from "../components/PizzaBlock";

const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          "https://64c4f551c853c26efada564f.mockapi.io/items/" + id,
        );
        setPizza(data);
      } catch (error) {
        alert("такой пиццы нету");
        navigate("/");
      }
    };
    fetchPizza();
  }, []);
  if (!pizza) {
    return <div>Загрузка данных...</div>;
  } else {
    return (
      <>
        <PizzaBlock {...pizza} />
        <Link to="/">go back</Link>
      </>
    );
  }
};
export default FullPizza;
