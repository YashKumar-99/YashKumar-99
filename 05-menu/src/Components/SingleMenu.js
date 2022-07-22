import React from 'react'

const SingleMenu = ({ id, img, title, category, price, desc, uniqueCategroy, cate }) => {

    console.log(cate, "Gd")
    if (category === cate) {
        return (
            <>
                {

                    <div>
                        <div>{id}</div>
                        <div>{category}</div>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                }



            </>
        )
    }
    else if ('all' === cate) {

        return (
            <>
                {

                    <div>
                        <div>{id}</div>
                        <div>{category}</div>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                }



            </>
        )

    }


}

export default SingleMenu