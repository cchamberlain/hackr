import React from "react";
import { RouteHandler } from "react-router";
import MainMenu from "components/MainMenu";

import './Application.less';

import { Grid, Row, Col } from "react-bootstrap"

export default class Application extends React.Component {
	static getProps(stores, params) {
		var transition = stores.Router.getItem("transition")
		return {
			loading: !!transition
		}
	}
	render() {
		var { loading } = this.props;
        return <Grid>
            <Row>
                <Col xs={12}>
			         <MainMenu />
			         <RouteHandler />
                </Col>
            </Row>
		</Grid>
	}
}



Application.contextTypes = {
	stores: React.PropTypes.object
};
