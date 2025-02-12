import React, { useState } from 'react';  
import './App.css';

import BurgerStack from './components/BurgerStack/BurgerStack';
import IngredientList from './components/IngredientList/IngredientList';

const App = () => {
  const [stack, setStack] = useState([]);
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beet Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Lentil Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Facon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Daiya Cheddar Cheese', color: '#FDE18B' },
    { name: 'Daiya Swiss Cheese', color: '#F1E1A8' },
  ];
  
  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };
  const removeFromBurger = (ingredient) => {
    setStack(stack.filter((item) => item !== ingredient));
  };

  return (
    <main>
      <h1>The Gnarly Patty</h1>
      <section>
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} /> 
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;