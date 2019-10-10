import React, { Component } from 'react';
import { Dropdown, Container, Row, Col, Alert } from 'react-bootstrap';
import Columns from './Columns'
import 'bootstrap/dist/css/bootstrap.css'
import './app.scss';

class Boot extends Component {

    state = {
        numCols: 2,
        themes: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
    }

    addColumn = (numCols) => {
        this.setState({ numCols: numCols });
        console.log(numCols);

    }

    render() {
        return (
            <div className="App">
                <Container className="containerClass">
                    <Row>
                        <Col md={3}>
                            <Dropdown>
                                <Dropdown.Toggle variant="success">
                                    Dropdown Button
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => this.addColumn(1)}>Show 1 Column</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.addColumn(2)}>Show 2 Column</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.addColumn(3)}>Show 3 Column</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.addColumn(4)}>Show 4 Column</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.addColumn(5)}>Show 5 Column</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.addColumn(6)}>Show 6 Column</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.addColumn(7)}>Show 7 Column</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col md={1}></Col>
                        <Col md={8}>
                            <Row>
                                <Columns number={this.state.numCols} themes={this.state.themes} />
                            </Row>
                        </Col>
                    </Row>
                </Container>


            </div>
        )
    }
}

export default Boot;