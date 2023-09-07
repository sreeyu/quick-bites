import React, {useEffect, useState} from "react";
import styles from './MenuItems.module.css'
import Card from "../UI/Card";
import Meals from "./Meals/Meals";

function MenuItems(){

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMeals = async() => {
            const response = await fetch('https://quick-bites-de1c8-default-rtdb.firebaseio.com/meals.json');
            const responseData = await response.json();

            const loadedMeals = [];
            for (const key in responseData){
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                });
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        }
        fetchMeals()
    }, []);

    if(isLoading){
        return <section className={styles.loading}>
            <p>Loading....</p>
        </section>
    }

    const menu = meals.map(item => <Meals id={item.id} key={item.id} name={item.name} description={item.description} price={item.price} />)
    
    return(
        <section className={styles.meals} >
            <Card >
            <ul>
                {menu}
            </ul>
            </Card>
        </section>
    )
};

export default MenuItems;