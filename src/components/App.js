import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './ExerciseTracker/Navbar';
import ExerciseList from './ExerciseTracker/ExerciseList';
import EditExercise from './ExerciseTracker/EditExercise';
import CreateExercise from './ExerciseTracker/CreateExercise';
import CreateUser from './ExerciseTracker/CreateUser';

function App(){
    return(
        // <h1>Hello</h1>
        <Router>
            <div className="container">
                <Navbar />
                <br />
                <Switch>
                    <Route path='/' exact component={ExerciseList} />
                    <Route path='/edit/:id' component={EditExercise} />
                    <Route path='/create' component={CreateExercise} />
                    <Route path='/user' component={CreateUser} />
                </Switch>
            </div>    
        </Router>
    );
}

export default App