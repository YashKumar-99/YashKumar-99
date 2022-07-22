import React, { useState } from 'react';
import './Accordion.css'
import questions from './data';
import SingleItem from './SingleItem';
const Acccordion = () => {
    const [query, setQuery] = useState(questions);
 

    return (<>


        <div>Acccordion</div>

        <div className='faqSection'>
            {

                query.map((faq) => {
              return( <SingleItem key={faq.id} {...faq}/>)
                  
                })
            }
        </div>

    </>
    )
}

export default Acccordion;