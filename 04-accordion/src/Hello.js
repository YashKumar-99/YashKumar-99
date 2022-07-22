import React from 'react'
import data from './data'
const Hello = () => {
    console.log(data)
    return (
        <>
            {
                data.map((item) => {
                    return (<React.Fragment key={item.id}>
                        <div >  
                            {item.title}
                        </div>
                    </React.Fragment>)
                })
            }
        </>)
}

export default Hello




//Error

// react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `Hello`. See https://reactjs.org/link/warning-keys for more information.
//     at Hello
//     at App