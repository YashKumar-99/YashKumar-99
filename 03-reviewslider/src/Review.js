import React, { useState } from 'react';
import reviews from './data';
import './Review.css'

const Review = () => {
    const [count, setcount] = useState(0);
    const [slider, setSlider] = useState(reviews);

    const Random = () => {

        let randomNumber = Math.floor(Math.random() * slider.length);

        if (randomNumber === count) {
            randomNumber = count + 1;
        }

        console.log(randomNumber, "dfsdf")
        setcount(randomNumber)
    }
    return (
        <>

            <div className='reviewHeading'><h1>  Review Slider</h1></div>
            {
                slider.map((item, index) => {
                    // console.log(item)
                    if (index === count) {
                        return (<>
                            <div className='fullSliderCard' key={item.id}>
                                <img src={item.image} alt="image" />
                                <h4>{item.name}</h4>
                                <h5>{item.job}</h5>
                                <p>{item.text}</p>
                                <div className='buttons'>
                                <button onClick={() => setcount(count - 1)}>prev</button>
                                <button onClick={() => setcount(count + 1)}>Next</button>
                                </div>


                                <div className='randomButton'>
                                    <button  type='button' onClick={Random}>Random</button>
                                </div>
                            </div>
                        </>)
                    } else if (count < 0) {
                        return setcount(slider.length - 1);
                    } else if (count > slider.length - 1) {
                        return setcount(0);
                    }


                })
            }
        </>
    )
}

export default Review