import React from 'react'
import { Link } from 'react-router'
import ReactLogo from 'elements/ReactLogo'

import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};


export default class MainMenu extends React.Component {
	render() {
		return <Navbar brand="hackr" inverse toggleNavKey={0}></Navbar>
	}
}
