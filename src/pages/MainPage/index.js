import React from 'react';
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../api/requests";

function MainPage(props) {
    return (
        <div>
            <Banner />
            <Row
                title="NETFLIX ORIGINALS"
                id='NO'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row
                title="Trending Now"
                id='TN'
                fetchUrl={requests.fetchTrending}
            />
            <Row
                title="Top Rated"
                id='TR'
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title="Action Movies"
                id='AM'
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title="Comedy Movies"
                id='CM'
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title="Documentaries"
                id='DO'
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    );
}

export default MainPage;
