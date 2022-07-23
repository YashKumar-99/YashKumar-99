import React, { useEffect, useState } from 'react';
import './Tabs.css';
// import Tabs from './Components/Tabs';
const url = 'https://course-api.com/react-tabs-project';

function Tabs() {
    const [IsLoading, setIsloading] = useState(true);
    const [resultArray, setResultArray] = useState([]);
    // console.log(resultArray[0], "gdag")
    const clickHandler = (id) => {
        // console.log(id)
        const res = resultArray.filter((item) => item.id === id);
        // console.log(res)
        setDetailsArray(res);
    }
    const [detialsArraay, setDetailsArray] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((response) => {

                if (response.ok) {
                    return response.json();
                }

                throw new Error('Somthing went wrong');
            })
            .then((result) => {
                setResultArray(result)
                setDetailsArray([result[0]]);
                setIsloading(false);
                // console.log([result[0]],"Res")
            })
            .catch((error) => {
                setIsloading(false);
                console.log(error);
            })
    }, [])
    // console.log(resultArray, "reste");

    // console.log(detialsArraay, "da")

    return (

        <>

            {IsLoading && <h1 style={{ textAlign: 'center' }}>Loading...</h1>}

            <div>


                <div className='main-container'>


                    {/* {console.log(detialsArraay, "redds")} */}
                    <div className='button-group'>
                        {
                            resultArray.map((data) => {
                                return (<React.Fragment key={data.id}>
                                    <div className='Tabs-button'>
                                        <button type='button' onClick={() => clickHandler(data.id)}>{data.company} </button>
                                    </div>

                                </React.Fragment>)
                            })
                        }
                    </div>




                    {


                        detialsArraay.map((data) => {
                            return (<React.Fragment key={data.id} >
                                <div className='Tabs-details'>
                                    <div> {data.title}</div>
                                    <div>{data.company}</div>
                                    <div>{data.dates}</div>
                                    <div>
                                        {
                                            data.duties.map((dutie, index) => {
                                                return (<React.Fragment key={index}>
                                                    <p>{dutie}</p>

                                                </React.Fragment>)
                                            })
                                        }
                                    </div>
                                </div>
                            </React.Fragment>)
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Tabs;
