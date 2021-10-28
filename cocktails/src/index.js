import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Cocktailcontext} from "./components/Cocktailcontex"
ReactDOM.render(
    <Cocktailcontext children={<App/>}/>
, document.getElementById('root'));