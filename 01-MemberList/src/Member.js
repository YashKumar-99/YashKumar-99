import React, { useState } from 'react'
import data from './data'

import './Member.css'
const Member = () => {
  const [Members, setMember] = useState(data);

  const RemoveMember = (id) => {
    console.log(id);

    let newData = Members.filter((member) => member.id !== id)
    setMember(newData)
  }
  return (
    <>
      <div className='Card'>
        <h2> We have total {Members.length} Members</h2>

        <div className='cardDetails'>



          {
            Members.map((member) => {

              return (<>
                <div className='MemberProfile' key={member.id}>
                  <div className='memberImg'><img src={member.image} alt={member.name} /></div>
                  <div className='about-bio'>
                    <div className='memberName'>{member.name}</div>
                    <div className='memberAge'>{member.age}</div>
                  </div>
                  <button  className='itemButton' type='button' onClick={() => RemoveMember(member.id)}>Remove </button>
                </div>

              </>)
            })
          }

        </div>

        <button className='clearButton' type='button' onClick={() => setMember([])}>Clear All</button>

      </div>
     
      
    </>)
}

export default Member;