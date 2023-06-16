import React from "react";
import styles from './MenuItems.module.css'
import Card from "../UI/Card";

const MENU_DATA = [
    {
        id: 'm1',
        name: 'Pizza',
        description:'Cheesy, saucy flavor explosion!',
        price: 200

    },
    {
        id: 'm2',
        name: 'Burger',
        description:'Juicy, sizzling burger delight',
        price: 100

    },
    {
        id: 'm3',
        name: 'Fries',
        description:'Fried potato perfection party!',
        price: 40

    },
    {
        id: 'm4',
        name: 'Dosa',
        description:'Crispy, savory dosa magic',
        price: 70

    },
    {
        id: 'm5',
        name: 'Fried Rice',
        description:'Flavorful wok-tossed deliciousness',
        price: 80

    },
    {
        id: 'm6',
        name: 'Idli',
        description:'Fluffy comfort on plate',
        price: 60

    }
]

function MenuItems(){
    return(
        <section className={styles.meals} >
            <Card >
            <ul>
                {MENU_DATA.map(item => <li>{item.name}</li>)}
            </ul>
            </Card>
        </section>
    )
};

export default MenuItems;