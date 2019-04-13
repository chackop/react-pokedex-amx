import React from 'react';
import './PokeList.scss';
import PokeCell from '../PokeCell/PokeCell';

const PokeList = ({ handleOnClick }) => {
  return (
    <section className="poke-list">
      <PokeCell handleOnClick={handleOnClick} />
      <PokeCell handleOnClick={handleOnClick} />
      <PokeCell handleOnClick={handleOnClick} />
    </section>
  )
}

PokeList.propTypes = {

}

export default PokeList
