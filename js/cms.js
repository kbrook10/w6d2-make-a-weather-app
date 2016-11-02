import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import CMS from '../components/CMS'
import Page from '../components/Page'
import Editor from '../components/Editor'

//Create global variable to share amongst components
// window.pageText = ''

//Create a router ->> Reviews browser and sets up component
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={CMS}>
            <Route path="page" component={Page}/>
            <Route path="editor" component={Editor}/>
        </Route>
    </Router>


    , document.getElementById('cms')
)
