// Core
import React from 'react';
// Styles
import './List.scss';
// Mock
import { featureProductsMockData } from 'mock/featuredProductsMock';
// Components
import { Card } from 'components';

const List = () => {
  return (
    <div className='list'>
      {/*  Mock render  */}
      {
        featureProductsMockData.map( item => <Card key={item.id} item={item} /> )
      }
    </div>
  )
}

export default List;
