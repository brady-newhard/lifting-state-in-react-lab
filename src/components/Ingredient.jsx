const Ingredient = ({ ingredient, handleClick, isRemovable }) => {
  return (
    <div style={{ backgroundColor: ingredient.color }}>
      <li>
        {ingredient.name}
        <button onClick={() => handleClick(ingredient)}>{isRemovable ? '-' : '+'}</button> 
      </li>
    </div>
  )
}

export default Ingredient