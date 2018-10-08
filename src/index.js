import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import BaseExample from './components/BaseExample/BaseExample'
// import ParamsExample from './components/ParamsExample/ParamsExample'
// import AuthExample from './components/AuthExample/AuthExample'
// import CustomExample from './components/CustomExample/CustomExample'
// import PreventingTransitionsExample from './components/PreventingTransitionsExample/PreventingTransitionsExample'
// import NoMatchExample from './components/NoMatchExample/NoMatchExample'
// import RecursiveExample from './components/RecursiveExample/RecusiveExample'
// import SideBarExample from './components/SideBarExample/SidebarExample'
// import StaticRouterExample from './components/StaticRouterExample/StaticRouterExample'
// import AnimationExample from './components/AnimationExample/AnimationExample'
// import AmbiguousExample from './components/AmbiguousExample/AmbiguousExample'
import {ModalGallery} from  './components/ModalGallery/ModalGallery'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <ModalGallery/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
