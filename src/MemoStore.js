import React from 'react';
import Login from './Login.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MemoDisplay from './MemoDisplay.js';


class MemoStore extends React.Component {
    render(){
        return (
            <Router>
                <Route path='/' exact component={Login}/>
                <Route path='/:username' exact component={MemoDisplay}/>
            </Router>
        );    
    }
}

export default MemoStore;