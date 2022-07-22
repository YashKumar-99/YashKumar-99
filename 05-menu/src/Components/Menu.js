import React, { useState } from 'react'
import menudata from '../data'
import SingleMenu from './SingleMenu'

import UniqueItem from './UniqueItem'
const Menu = () => {
    const [menuarray, setMenuArray] = useState(menudata)
    const [cate, setcate] = useState('all');

    const clickHandler = (id) => {
        console.log(id)
        setcate(id)

    }
    let cat = new Set(menuarray.map((menu) => menu.category));
    let uniqueCategroy = ['all', ...cat]
    console.log(uniqueCategroy, "cat")
    return (
        <>

            <div>
                {
                    uniqueCategroy.map((uniqeitem) =>

                        <UniqueItem key={uniqeitem.id} uniqeitem={uniqeitem} clickHandler={clickHandler} />)
                }
            </div>

            {
                menuarray.map((menuitem) => {
                    return <SingleMenu key={menuitem.key} {...menuitem} cate={cate} />
                })
            }



        </>
    )
}

export default Menu