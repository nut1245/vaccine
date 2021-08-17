import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Vaccine from './components/Vaccine';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[
        {
          nameCompony:"Astrazeneca",
          nameInter:"AZD1222",
          produce:"England",
          technology:"ไวรัส Adonovirus พาหะ"
        },{
          nameCompony:"Phizer",
          nameInter:"BNT162",
          produce:"USA",
          technology:"mRNA"
        },{
          nameCompony:"moderna",
          nameInter:"mRNA-1273",
          produce:"USA",
          technology:"mRNA"
        }
      ],
    };
  }

  render(){
    const itemsRender = this.state.items.map((item)=>{
      return(
        <Vaccine
        nameCompony={item.nameCompony}
        nameInter={item.nameInter}
        produce={item.produce}
        technology={item.technology}
        />
      );
    });
    return (
      <div className='vaccine'>
        {itemsRender}
      </div>
    );

}

};

ReactDOM.render(<App />, document.querySelector('#root'));