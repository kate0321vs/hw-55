import * as React from 'react';

interface Props {
  name: string;
  image: string;
  onAddIngredient: React.MouseEventHandler;
  count: number;
}

const Ingredient: React.FC<Props> = ({image, name, onAddIngredient, count}) => {
  return (
    <>
      <button type="button"
              className="ingredientBtn"
              onClick={onAddIngredient}>
        <img className="ingredientImage"
             src={image} alt={name}/>
        {name}
      </button>
      <p>x <span>{count}</span>
      </p>
    </>
  );
};

export default Ingredient;