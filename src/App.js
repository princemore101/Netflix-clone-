import React, { } from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar'
import "./Navbar.css";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />

      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Horror movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Action movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Romentic movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Comedy moviwes' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />



    </div>
  );
}

export default App;
