import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import './Tour.css'
const url = 'https://course-api.com/react-tours-project';
const Tour = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [TourContent, setTourContent] = useState([]);
    const [showHide, SetShowHide] = useState(false);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setTourContent(data);
                setIsLoading(false);

            }
            )
            .catch((error)=>{
                setIsLoading(false);
                console.log(error)
                throw new  Error(error)
            })
    }, [])

    const RemoveItemTour = (id) => {
        console.log(id)
        let newData = TourContent.filter((tour) => tour.id !== id);
        setTourContent(newData);
    }

    // const Hidecontent = ({ length }) => {

    //     let splitLength = length.split('');
    //     let splitArray = splitLength.splice(0, 200).join('');
    //     // console.log(splitArray);
    //     return splitArray;
    // }
    // console.log(TourContent);
    return (
        <>
            {isLoading ? <Loader /> :

                <section>
                    <div><h1 className='TourTitle'>Tour List</h1></div>
                    <div className='TourContainer'>


                        {
                            TourContent.map((tour) => {
                                return (<>
                                    <div className='TourCard' key={tour.id}>
                                        <div className='TourCardimg'><img src={tour.image} alt={"img"} /></div>
                                        <div className='TourCardname'><h4>{tour.name}</h4></div>
                                        <div className='TourCardPrice'><p><b>Price: </b>{tour.price}$</p></div>
                                        {/* <div className='Tourinfo'><p>{tour.info}</p></div> */}
                                        {/* <div>
                                            {showHide ? <Hidecontent length={tour.info} /> : <p>{tour.info} </p>}
                                            <button onClick={() => SetShowHide(!showHide)}>            {showHide ? 'show less' : '  read more'}
                                            </button>
                                        </div> */}


                                        <div>

                                            {showHide ? tour.info : `${tour.info.substring(0, 200)}...`}

                                            <button className='showHide' onClick={() => SetShowHide(!showHide)}>
                                                { showHide?'show less':'read more'}

                                            </button>

                                        </div>
                                        <div style={{textAlign:'center'}}>

                                    
                                        <button type='button' onClick={() => RemoveItemTour(tour.id)} className='RemoveItemButton'>Not Intersted</button>
                                        </div>
                                    </div>

                                </>)
                            })
                        }
                    </div>
                </section>

            }
        </>
    )
}

export default Tour