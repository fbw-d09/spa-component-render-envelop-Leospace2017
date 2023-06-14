import React from 'react'
import './Envelope.scss';
import { FromPerson, ToPerson, ImgContainer } from './components';

const adressLabel = [
    {
        name: 'Mr Dog',
        adress: 'DogStreet',
        Country: 'Universe'
    },
    {
        name: 'Mr Cat',
        adress: 'CatStreet',
        Country: 'Universe'
    }
]


const Envelope = () => {
  return (
    <div className='envelop-container'>
        <FromPerson adressArr={adressLabel}/>
        <ToPerson adressArr={adressLabel}/>
        <ImgContainer />
    </div>
  )
}

export default Envelope