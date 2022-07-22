import React, { useEffect, useState } from 'react'

import EveryItem from './EveryItem';
const url = 'https://course-api.com/react-tabs-project';

const Tabs = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [company, setCompany] = useState([]);


    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCompany(data);
                setIsLoading(false);
                console.log(data)

            })
        // return () => {
        // }
    }, [])
    return (
        <>

            {isLoading && <h1>Loading</h1>}
            {
                company.map((data) => {

                    return <EveryItem key={data.id}     {...data} />
                })
            }
        </>
    )
}   
export default Tabs;

