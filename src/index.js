import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import Carousel from './components/app/carousel';
import Nos from './components/app/Nos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Nos/>
		<Carousel/>
		<App/>
	</>
);

