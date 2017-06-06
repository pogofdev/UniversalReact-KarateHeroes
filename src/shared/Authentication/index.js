import React, { Component } from 'react';
import PropTypes from 'prop-types';

// //check valid prop types
// Authentication.propTypes = {
//     name: PropTypes.string
// };


export default function (ComposedComponent) {
    class Authentication extends Component {
        constructor (props) {
            super(props);
            // Authentication.contextTypes = {
            //     router: PropTypes.object.isRequired
            // };
        }

        componentWillMount () {
            console.log("push to sign in page111");
            if (!this.props.authenticated) {
                console.log(this.props);
                this.props.router.push('sign-in');
            }

            if (typeof localStorage.getItem('accessToken') === "undefined") {
                this.props.signOut();
            }
        }

        render () {
            console.log("push to sign in page");
            return <ComposedComponent {...this.props} />;
        }


    }
    return Authentication;
}
