import React from 'react';
import './PokeList.scss';
import PokeCell from '../PokeCell/PokeCell';

const PokeList = () => {
  return (
    <section className="poke-list">
      <PokeCell />
      <PokeCell />
      <PokeCell />
    </section>
  )
}

PokeList.propTypes = {

}

export default PokeList
