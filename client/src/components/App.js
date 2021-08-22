import React from 'react'
import { BrowserRouter,Route,Router } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import history from '../history'
//instead of browser router for generic history we just use Router
//Warning: <BrowserRouter> ignores the history prop. To use
// a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.
const App = ()=>{
    return (
        <div className='ui container'>
            
            <Router history ={history}>
            <Header/>
                <div>
                    <Route path='/' exact component={StreamList}/>
                    <Route path='/streams/new' exact component={StreamCreate}/>
                    <Route path='/streams/edit/:id' exact component={StreamEdit}/>
                    <Route path='/streams/delete/:id' exact component={StreamDelete}/>
                    <Route path='/streams/:id' exact component={StreamShow}/>
                </div>
            </Router>
        </div>
    )
}
export default App;