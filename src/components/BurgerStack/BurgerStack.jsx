const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.map((ingredient, index) => (
        <div key={index} style={{ backgroundColor: ingredient.color }}>
          <li>{ingredient.name}
            <button onClick={() => removeFromBurger(ingredient)}>-</button>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default BurgerStack;
  