import React from 'react'

const ToPerson = ({adressArr}) => {
  return (
    <div className='to-person'>
    {
        Object.values(adressArr[0]).map((v,i) =>{
            return <p key={`adress${v}`}>{`${v}`}</p>
        })
    }
    </div>
  )
}

export default ToPerson