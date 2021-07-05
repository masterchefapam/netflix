import React from 'react';
import Nav from '../Home/Nav/Nav';
import Banner from '../Home/Banner/Banner';
import './homescreen.css'
import requests from '../Request';
import Row from '../Home/Row/Row';

const HomeScreen = () => {
    return (
        <div className="homescreen">
            
            <Nav/>
            <Banner/>
            <Row
                 title='NETFLIX ORIGINALS'
                 isLargeRow= {true}
                 fetchUrl={requests.fetchNetflixOriginals}
            />
            <Row
                 title='Trending Now'
                 fetchUrl={requests.fetchTrending}
            />
            <Row
                 title='Top Rated'
                 fetchUrl={requests.fetchTopRated}
            />
            <Row
                 title='Action Movies'
                 fetchUrl={requests.fetchActionMovies}
            />
            <Row
                 title='Comedy Movies'
                 fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                 title='Horror Movies'
                 fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                 title='RomanceMovies'
                 fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                 title='Documentaries'
                 fetchUrl={requests.fetchDocumentaries}
            />
  
        </div>
    );
}

export default HomeScreen;
