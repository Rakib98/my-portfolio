import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5 bg-dark text-white">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Rakib Abdur
                    </Col>

                    <Col className="p-0 d-flex justify-content-end git-link" md={3}>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;