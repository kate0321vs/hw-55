import './App.css';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import Ingredient from './components/Ingredient/Ingredient.tsx';
import { useState } from 'react';

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

  const [countIngredient, setCountIngredient] = useState<ICount[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0}
  ]);


  const clickBtn = (ingredient: IIngredient) => {

    const newCount = countIngredient.map((ing) => {
      if (ingredient.name === ing.name) {
        return {...ing, count: ing.count + 1};
      }
      return ing;
    });

    setCountIngredient(newCount);
  };


  return (
    <>
      <div className="ingredients">
        {ingredients.map((ingredient, index) => (
            <Ingredient key={index + 1}
                        image={ingredient.image}
                        name={ingredient.name}
                        onAddIngredient={() => clickBtn(ingredient)}
                        count={countIngredient[index].count}
            />
          ))}
      </div>
    </>
  );
};

export default App
