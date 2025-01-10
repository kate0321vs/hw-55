import * as React from 'react';

interface Props {
ingredientName: string;
}

const DrawIngredient: React.FC<Props> = ({ ingredientName }) => {
  return (
    <div className={ingredientName}></div>
  );
};

export default DrawIngredient;