import React from "react";
import {Route, Switch} from "react-router-dom";
import StudentsList from "../components/StudentsList";
import StudentProfile from "../components/StudentProfile";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={StudentsList} />
            <Route exact path="/student-profile/:roll" component={StudentProfile} />
        </Switch>
    );
};

export default Router;
