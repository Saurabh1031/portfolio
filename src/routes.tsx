//@ts-nocheck
import React from "react";
import Login from "./modules/login";
import Signup from "./modules/signup";
import HomePage from "./modules/HomePage";
import Portfolio from "./modules/portfolio/portfolio";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Projects from "./modules/my-projects";
export default function RoutesPage() {
    const isAuthenticated = false;
    const routes = [
        { path: '/', component: Portfolio, isPrivate: false },
        { path: '/projects', component: Projects, isPrivate: false },
        //below routes are for learning purpose only
        { path: '/home', component: HomePage, isPrivate: true },
        { path: '/login', component: Login, isPrivate: false },
        { path: '/signup', component: Signup, isPrivate: false },
        // Add more routes as needed
    ];
    const AuthenticatedComponents = ({ route }) => {
        if (route.isPrivate && isAuthenticated) {
            return <route.component />
        } else if (!route.isPrivate) {
            return <route.component />
        } else {
            console.log("navigate to login");
            return <Navigate to="/login" />
        }
    }

    return (
        <Router>
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} exact element={<AuthenticatedComponents route={route} />} />
                ))}
                {/* Add a catch-all route for 404 Not Found */}
                {/* <Redirect path="*" render={() => <h1>404 Not Found</h1>} /> */}
            </Routes>
        </Router>
    )
};