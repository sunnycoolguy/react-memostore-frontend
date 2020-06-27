import React from 'react';
import Login from './Login.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MemoDisplay from './MemoDisplay.js';


class MemoStore extends React.Component {
    render(){
        return (
            <Router>
                <h1 className='title'>
                    <Link to='/'>
                        MemoStore
                    </Link>
                </h1>
                <Route path='/' exact component={Login}/>
                <Route path='/:username' exact component={MemoDisplay}/>
            </Router>
        );    
    }
}

export default MemoStore;