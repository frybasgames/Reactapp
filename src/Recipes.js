import React from 'react';
import style from './recipe.module.css';

const Recipes = ({DrinkThumb,Drink}) =>{
    return(
        <div className="recipes">
            <img className={style.DrinkThumb} src={DrinkThumb} alt=""/>
            <h1 className={style.className}>{Drink}</h1>
            
        </div>
    );
}
export default Recipes;