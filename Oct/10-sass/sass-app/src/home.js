import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './app.scss';

export default function Home() {
    return (
        <div>
            <ButtonToolbar>
                <Button variant="danger">Red Button</Button>
                <Button variant="info">Info Button</Button>
                <Button variant="success">Success Button</Button>
                <Button variant="warning">Warning Button</Button>
            </ButtonToolbar>
        </div>
    )
}