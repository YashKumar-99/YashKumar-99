import react, { useState } from 'react';

import './App.css';
import Categories from './Categories';
import menudata from './data';
import Menu from './Menu';

const allCategories = ['all', ...new Set(menudata.map((item) => item.category))];

function App() {
  const [menuitems, setmenuItems] = useState(menudata);
  const [categories, setCategories] = useState(allCategories);


  const filterItems = (category) => {
    if (category === 'all') {
      setmenuItems(menudata);
      return;
    }
    const newItems = menudata.filter((item) => item.category === category)
    setmenuItems(newItems)
  }

  return (
    <>

      <main>
        <section>
          <div className='title'>

            <h2>Our Menu</h2>
            <div className='underline'></div>
          </div>

        </section>
      </main>

      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuitems} />

    </>
  );
}

export default App;
