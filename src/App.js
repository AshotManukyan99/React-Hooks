import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './componnets/pages/Home'
import About from "./componnets/pages/About";
import Contact from "./componnets/pages/Contact";
import Navbar from "./componnets/Navbar/Navbar";
import {Alert} from "./componnets/Alert";
import {AlertState} from "./componnets/Context/Alert/AlertState";
import {GitHubState} from "./componnets/Context/GitHub/gitHubState";
import {useTranslation} from 'react-i18next';


function App() {


    return (
        <GitHubState>
            <AlertState>
                <Navbar/>
                <div className='container  pt-4  ' style={{marginTop: '10rem'}}>
                    <Alert alert={{text: 'Close this Alert ->', type: 'secondary'}}/>
                    <Switch>
                        <Route exact path={'/home'} component={Home}/>
                        <Route path={'/about'} component={About}/>
                        <Route path={'/contact:name?'} component={Contact}/>
                    </Switch>
                </div>
            </AlertState>
        </GitHubState>
    );
}

export default App;