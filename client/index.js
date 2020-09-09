<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "./Wrapper";
import App from "./containers/App";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "./scss/main.scss";
import "./scss/index.scss";

ReactDOM.render(
	<Wrapper>
		<App />
	</Wrapper>,
	document.getElementById("root")
);
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './containers/App';
import store from './store';
import { Provider } from 'react-redux';
import './scss/index.scss'
import Wrapper from './Wrapper';



ReactDOM.render(
  <Wrapper>
    <App /> 
  </Wrapper>
  ,
  document.getElementById('root')
);


  
>>>>>>> ff6009a4c7f47850f8c119fb038df1f519fc6b60
