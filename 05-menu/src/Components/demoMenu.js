import React, { useState, useEffect } from 'react'


import menu from '../data'

const Menu = () => {

    const [menulist, setMenuList] = useState(menu);
    const [category, setcategory] = useState('all');




    const BreakfastHandler = () => {
        setcategory('breakfast');
    }

    const lunchHandler = () => {
        setcategory('lunch');
    }

    const shakesHandler = () => {
        setcategory('shakes');
    }



    // const AllHandler = () => {
    //      useEffect(() => {



    //      }, [third])

    // }

    return (
        <>

            <div>
                <button type='button' onClick={() => setMenuList(menulist)}>All</button>
                <button type='button' onClick={BreakfastHandler}>Breakfast</button>
                <button type='button' onClick={lunchHandler}>Lunch</button>
                <button type='button' onClick={shakesHandler}>Shakes</button>
            </div>




            {
                menulist.map((item) => {

                    if (item.category === category) {

                        return (<>
                            <div>{item.title}</div>
                            <div>{item.price}</div>
                        </>)
                    } else if (item.category !== category) {

                        return (<>
                            <div>{item.title}</div>
                            <div>{item.price}</div>
                            <div><img src={item.img} /></div>
                        </>)
                    }
                })
            }

        </>)
}

export default Menu;    