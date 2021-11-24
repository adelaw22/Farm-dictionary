import React from "react";
import {Container} from "react-bootstrap";
import JSONDATA from '../../components/Items/index.json';

const DetailsPage = () => {
    return (
        <div>
            <Container>
                <p>Farm</p>
                <h5>Encyclopedia</h5>
               {
                   JSONDATA.map(val =>(
                    <div key={val.id}>
                         <div>
                            <h3 className="itemName">{val.name}</h3>
                            <div className="audio_component"></div>
                        </div>
                        <div>
                            {/* <img src=""/> */}
                            {/* <img src=""/> */}
                        </div>
                        <div className="description">
                        <p>{val.info}</p>
                        </div>
                    </div>
                   ))
               }
            </Container>
        </div>
    )
}

export default DetailsPage;