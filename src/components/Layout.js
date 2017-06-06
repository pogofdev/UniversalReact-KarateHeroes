// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';
import { MuiThemeProvider } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavigationBar from './NavigationBar';

injectTapEventPlugin();
export default class Layout extends React.Component {

    componentDidMount () {
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
    }

    checkLogin () {
        const accessToken = localStorage.getItem("accessToken");
    }


    render () {
        return (
            <MuiThemeProvider>
                <div className="app-container">
                    <header>
                        <NavigationBar/>
                        <Link to="/">
                            <img className="logo" src="/img/logo-judo-heroes.png"/>
                        </Link>
                    </header>
                    <div className="app-content">{this.props.children}</div>
                    <footer>
                        <p>
                            This is a demo app to showcase universal rendering and routing
                            with <strong>React</strong> and <strong>Express</strong>.
                        </p>
                    </footer>
                </div>
            </MuiThemeProvider>
        );
    }
}
