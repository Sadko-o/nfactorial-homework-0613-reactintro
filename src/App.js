import './App.css';
import mountain from './img/mountain.jfif'
import river from './img/river.jpg'
import mpath from './img/mpath.jfif'
import fox from './img/fox.jfif'
import sky from './img/sky.jfif'
import icon from './img/icons.png'
import { format } from 'date-fns'
import React from 'react'

const currentTime = format(new Date(),'dd.mm.yyyy hh:mm');
function App() {
  
  return (
    <div>
        <div className="header">
            <img src={icon} alt="new"/>
            <input type="text"/>           
          <div className='time' >{currentTime}</div>
          
      </div>

      <div className='row'>
      <div className='col'> 
        <div className='centered'>Hey</div>
        <img src={mountain} alt="new"/>
      </div>
      <div className='col'> 
        <div className='centered'>Let's</div>
        <img src={river} alt="new"/>
        </div>
      <div className='col'> 
        <div className='centered'>Give</div>
        <img src={mpath} alt="new"/>
        </div>
      <div className='col'>
        <div className='centered'>All</div>
        <img src={fox} alt="new"/>
      </div>
      <div className='col'> 
        <div className='centered'>You can</div>
        <img src={sky} alt="new"/></div>
      </div>

      </div>
  );
}

export default App;
