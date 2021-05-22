import React from 'react';
import { useHistory } from 'react-router-dom';

import eilat from './assets/eilat.jpg';
import deadsea from './assets/deadsea.jpg';
import jerusalem from './assets/jerusalem.jpg';
import haifa from './assets/haifa.jpg';
import kineretlake from './assets/kineretlake.jpg';
import nazaret from './assets/nazaret.jpg';
import jaffo from './assets/jaffo.jpg';

import './App.css';

const Home = () => {

  const history = useHistory();

  return (
    <div className="App">
      <div className="App-header">
        <p>Организованные туры по Израилю</p>
        <div className="TourCity" onClick={() => history.push('/eilat')} >
          <p>Эйлат</p>
          <img src={eilat} className="CityImg" alt="eilat" />
        </div>
        <div className="TourCity" >
          <p>Мёртвое море</p>
          <img src={deadsea} className="CityImg" alt="deadsea" />
        </div>
        <div className="TourCity" >
          <p>Иерусалим</p>
          <img src={jerusalem} className="CityImg" alt="jerusalem" />
        </div>
        <div className="TourCity" >
          <p>Хайфа</p>
          <img src={haifa} className="CityImg" alt="haifa" />
        </div>
        <div className="TourCity" >
          <p>Галилейское озеро</p>
          <img src={kineretlake} className="CityImg" alt="kineretlake" />
        </div>
        <div className="TourCity" >
          <p>Назарет</p>
          <img src={nazaret} className="CityImg" alt="nazaret" />
        </div>
        <div className="TourCity" >
          <p>Тель-Авив Яффо</p>
          <img src={jaffo} className="CityImg" alt="jaffo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
