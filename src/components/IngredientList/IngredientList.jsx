const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <div key={index} style={{ backgroundColor: ingredient.color}}>
          <li>{ingredient.name} 
            <button onClick={() => addToBurger(ingredient)}>+</button>
          </li>
        </div>   
      ))}  
    </ul>
  );
};

export default IngredientList;
  