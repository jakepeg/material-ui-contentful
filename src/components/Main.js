import React from 'react';
import CardList from './OLDCardList'
import Selecta from './Selecta'

class Main extends React.Component {
  state = {
    open: false,
    selectedValue: 'Amazing Experiences',
//    cards: [],
//    searchString: '',
  };

  render() {
    return (
        <div>
          <Selecta />
          <CardList />
        </div>
    );
  }
}

export default Main;