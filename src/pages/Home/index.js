import React from 'react';
import "./home.css";
import SearchBar from "../../components/searchBox";
import {Container} from "react-bootstrap";


const Home = () => {
    return (
        <div className="homePage">
            <Container>
               <div className="cta mx-auto">
                  <p className="mb-0">Farm</p>
                  <h1>Encyclopedia</h1>

                  <div className="search_component">
                    <SearchBar/>
                  </div>
                  <p className="grp_no mt-5 text-center">Group 1</p>
               </div>
            </Container>
        </div>
    );
}

export default Home;