import React, { useState } from "react";
import JSONDATA from '../Items/index.json';
import {useNavigate} from 'react-router-dom';


const SearchBox = () => {
    const [searchTerm,setSearchTerm] = useState('');
    const navigate = useNavigate()


    function Redirect(id) {
        navigate(`/shop/product_page/${id}`)
    }

    return(
        <div>
             <div className="App">
            <input type="text" placeholder="Enter your search..." onChange={e=>setSearchTerm(e.target.value)} />
            {
                JSONDATA.filter( val =>{
                if(searchTerm === ""){
                return val;
                }
                else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
                }
            }).map((val)=>(
               
                <li className="py-2 px-3" key={val.id} onClick={() => Redirect(val.id)}>
                {val.name}
                </li>  
            ))
            }
            </div>
        </div>
  );
};

export default SearchBox;
