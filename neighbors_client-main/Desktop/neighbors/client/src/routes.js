import { APPLICATIONS_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import Applications from "./pages/Applications"
import { Component } from "react"
import ApplicationsPage from "./pages/ApplicationPage"

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: APPLICATIONS_ROUTE,
        Component: Applications
    },
    {
        path: APPLICATIONS_ROUTE +':id',
        Component: ApplicationsPage
    }
]