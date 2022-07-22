import React from 'react'

const UniqueItem = ({ uniqeitem,clickHandler }) => {
    // console.log(uniqeitem,"gd")
    return (
        <div>

            <button type='button' onClick={()=>clickHandler(uniqeitem)}> {uniqeitem}   </button> </div>
    )
}

export default UniqueItem