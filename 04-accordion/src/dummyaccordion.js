import React, { useState } from 'react';
import './Accordion.css'
import questions from './data';
const Acccordion = () => {
    const [query, setQuery] = useState(questions);
    const [showInfo, setShowInfo] = useState(false);
    // const fun = (id) => {
    //     console.log(id);
    //     query.map((item) => {
    //         if (item.id === id) {
    //             return setShowInfo(true);
    //         } else {
    //             return setShowInfo(false)
    //         }

    //     })

    // }

    return (<>


        <div>Acccordion</div>

        <div className='faqSection'>
            {

                query.map((faq) => {

                    return (<React.Fragment key={faq.id}>
                        <article className='question' >
                            <header >
                                <h4>{faq.title}</h4>
                                <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                                    {showInfo ? '-' : '+'}
                                </button>
                            </header>

                            {showInfo && <p>{faq.info}</p>}
                        </article>


                    </React.Fragment>)
                })
            }
        </div>

    </>
    )
}

export default Acccordion;