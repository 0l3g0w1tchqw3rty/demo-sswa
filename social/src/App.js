import './zero_style.css'
import './App.css'
import Footer from "./Components/Footer/Footer"
import Aside from "./Components/Aside/Aside"
import {Redirect, Route, Switch} from "react-router-dom"
import HeaderContainer from "./Components/Header/HeaderContainer"
import LoginPage from "./Components/Main/Login/Login"
import React, {Suspense} from 'react'
import {connect} from "react-redux"
import {initialisation} from "./redux/reducers/appReducer"
import Preloader from "./Components/Common/Preloader/Preloader"


const SettingsContainer = React.lazy(() => import('./Components/Main/Settings/SettingsContainer'))
const ProfileContainer = React.lazy(() => import('./Components/Main/Profile/ProfileContainer'))
const MessagesContainer = React.lazy(() => import('./Components/Main/Messages/MessagesContainer'))
const UsersContainer = React.lazy(() => import('./Components/Main/Users/UsersContainer'))

class App extends React.Component {

    componentDidMount() {
        this.props.initialisation()
    }

    render() {

        if (!this.props.initialized) {
            return (
                <Preloader/>
            )
        }

        return (
            <div className="wrapper">
                <HeaderContainer/>
                <div className="content">
                    <div className="content__container">
                        <Aside/>
                        <Switch>
                            <Suspense fallback={<Preloader/>}>
                                <Redirect from="/" to="/profile"/>
                                <Route path="/messages" render={() => <MessagesContainer/>}/>
                                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                                <Route path="/users" render={() => <UsersContainer/>}/>
                                <Route path="/settings" render={() => <SettingsContainer/>}/>
                                <Route  path="/login" render={() => <LoginPage/>}/>
                            </Suspense>
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialize,
    }
}
export default connect(mapStateToProps, {initialisation})(App)

