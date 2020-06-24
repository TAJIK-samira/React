import React from 'react';
import {link} from 'react-router-dom';


function Header(){

    return(
        <ul style={{display: 'flex'}}> 
            <li style ={{marginLeft: 10, listStyle : 'none'}} >
                <link to="/"> Home </link>
            </li>
           

            
            <li style ={{marginLeft: 10, listStyle : 'none'}}>
                <link to="/Post">Post</link>
            </li>
            

            
            <li style ={{marginLeft: 10, listStyle : 'none'}}>
                <link to="/Contact">Contact</li>
            </link>
        </ul>
    );
}

export default Header;