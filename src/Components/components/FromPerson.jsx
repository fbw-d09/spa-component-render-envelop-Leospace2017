import React from 'react'

const FromPerson = ({adressArr}) => {
  return (
    <div className='from-person'>
    {
        Object.values(adressArr[1]).map((v,i) =>{
            return <p key={`adress${v}`}>{`${v}`}</p>
        })
    }
    </div>
  )
}

export default FromPerson