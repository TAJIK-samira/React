import React from 'react';
import {link} from 'react-router-dom';


function Header(){

    return(
        <ul style={{display: 'flex'}}> 

            <link to="/">
                 <li style ={{marginLeft: 10, listStyle : 'none'}} >Home </li>
            </link>
           

           <link to="/Post">
                 <li style ={{marginLeft: 10, listStyle : 'none'}}>Post</li>
            </link>

            <link to="/Contact">    
                <li style ={{marginLeft: 10, listStyle : 'none'}}>Contact</li>
            </link>
            
        </ul>
    );
}

export default Header;