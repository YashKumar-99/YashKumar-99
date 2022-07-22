import React, { useState } from 'react'


const EveryItem = ({ id, company, title }) => {
    console.log(company, "Gdgs");
    const [showHide, setShowHide] = useState(false);
    const clickHandler = (id) => {
     
             if(id===id){
                setShowHide(!showHide )
             }
    }

    return (
        <>


            <button type='button' onClick={() => clickHandler(id)}> <h2>{company}</h2> </button>
            {showHide && <p> {title}</p>}

           

        </>

    )
}

export default EveryItem