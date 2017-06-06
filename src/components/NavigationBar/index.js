import React, { Component } from 'react';
import { AppBar, IconButton, MenuItem, IconMenu, FontIcon } from 'material-ui';
import { SocialPerson, ActionDescription, AvWeb, ActionExitToApp } from 'material-ui/svg-icons';
import inlineStyles from '../../static/css/MaterialUI';

class NavigationBar extends Component {
    constructor (props) {
        super(props);
    }


    render () {
        return (
            <AppBar
                showMenuIconButton={false}
                title={"Poisongas"}
                style={inlineStyles.appBar.root}
                titleStyle={inlineStyles.appBar.title}
                onTitleTouchTap={() => alert("will implement it later")}
                zDepth={0}
                iconStyleRight={inlineStyles.appBar.elementRight}
                iconElementRight={
                    <div>
                        <IconMenu
                            iconButtonElement={
                                <IconButton name="about-button" disableTouchRipple >
                                    <SocialPerson color={inlineStyles.iconColor} />
                                </IconButton>
                            }
                            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                            targetOrigin={{ horizontal: 'left', vertical: 'top' }}

                        >
                            <MenuItem primaryText="Edit" />
                            <MenuItem primaryText="Preview" />
                        </IconMenu>
                        <IconButton name="post-button" disableTouchRipple >
                            <ActionDescription color={inlineStyles.iconColor} />
                        </IconButton>
                        <IconMenu
                            iconButtonElement={
                                <IconButton name="project-button" disableTouchRipple >
                                    <AvWeb color={inlineStyles.iconColor}/>
                                </IconButton>
                            }
                            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                        >
                            <MenuItem primaryText="Edit" />
                            <MenuItem primaryText="Preview" />
                        </IconMenu>
                        <a href={"bayba"} >
                            <IconButton
                                iconStyle={inlineStyles.appBar.gitHubButton}
                                name="git-hub-button"
                                disableTouchRipple
                            >
                                <FontIcon className="muidocs-icon-custom-git-hub" style={inlineStyles.appBar.iconStyles} />
                            </IconButton>
                        </a>
                        <IconButton
                            name="sign-out-button"
                            disableTouchRipple
                            onClick={() => this.props.signOut()}
                        >
                            <ActionExitToApp color={inlineStyles.iconColor} />
                        </IconButton>
                    </div>
                }
            />
        );
    }
}

export default NavigationBar;
