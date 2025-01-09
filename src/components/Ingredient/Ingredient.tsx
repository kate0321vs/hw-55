import "./Ingredient.css";

interface Props {
  name: string;
  image: string;
  count: number;
  onAddIngredient: React.MouseEventHandler;
  onDeleteIngredient: React.MouseEventHandler;
}

const Ingredient: React.FC<Props> = ({image, name, onAddIngredient, count, onDeleteIngredient}) => {
  return (
    <div className="ingredient">
      <button type="button"
              className="ingredientBtn"
              onClick={onAddIngredient}>
        <img className="ingredientImage"
             src={image} alt={name}/>
        {name}
      </button>
      <p>x <span>{count}</span>
      </p>
      <button type="button" onClick={onDeleteIngredient}>X</button>
    </div>
  );
};

export default Ingredient;