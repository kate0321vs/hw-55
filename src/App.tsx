import './App.css';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import Ingredient from './components/Ingredient/Ingredient.tsx';
import { useState } from 'react';
import Price from './components/Price/Price.tsx';

interface IIngredient {
  name: string;
  price: number,
  image: string;
}

interface ICount {
  name: string;
  count: number;
}

const App = () => {
  const ingredients: IIngredient[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Bacon', price: 60, image: baconImage},
  ];

  const [countIngredients, setCountIngredient] = useState<ICount[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0}
  ]);

  const addIngredient = (ingredient: IIngredient) => {
    const newCount = countIngredients.map((ing) => {
      if (ingredient.name === ing.name) {
        return {...ing, count: ing.count + 1};
      }
      return ing;
    });
    setCountIngredient(newCount);
  };

  const deleteIngredient =  (index: number) => {
    const newCount = countIngredients.map((ingredient, i) => {
      if (index === i && ingredient.count > 0) {
        return {...ingredient, count: ingredient.count - 1};
      }
      return ingredient;
    })
    setCountIngredient(newCount);
  }


    const price = countIngredients.reduce((acc, countIngredient, index) => {
      acc = acc + (countIngredient.count * ingredients[index].price);
      return acc;
    }, 30)

  return (
    <div className="mainContainer">
      <div className="container">
        <h3 className='title'>Ingredients</h3>
        <div className="ingredients">
          {ingredients.map((ingredient, index) => (
            <Ingredient key={index + 1}
                        image={ingredient.image}
                        name={ingredient.name}
                        onAddIngredient={() => addIngredient(ingredient)}
                        count={countIngredients[index].count}
                        onDeleteIngredient={() => deleteIngredient(index)}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <h3 className="title">Burger</h3>
        <div className="Burger">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
          <div className="Salad"></div>
          <div className="Cheese"></div>
          <div className="Meat"></div>
          <div className="BreadBottom"></div>
        </div>
        <Price totalPrice={price}/>
      </div>
    </div>
  );
      };

      export default App
