import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

const AboUt = ()=>{
    return(<div className='container-sm '>
        <Container >
            <Row>
                <Col>
                    <Card style={{ width: '30rem' }}>
                <Card.Img  className='Imagecard' variant="top" src="1.jpg" />
                <Card.Body>
                <Card.Title>Juan Montalvo</Card.Title>
                <Card.Text>
                
                Alumno licenciatura Ingenieria en progamacion y web master del septimo cuatrimestre del ITES rene descartes.

                </Card.Text>
                <Card.Text>
                Edad: 25
                </Card.Text>
                <Card.Text>
                    Hobbit: viajar.
                </Card.Text>
                </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" className='Imagecard' src="6.jpg" />
                        <Card.Body>
                        <Card.Title>Anthony Trujeque</Card.Title>
                        <Card.Text>
                        Alumno licenciatura Ingenieria en progamacion y web master del septimo cuatrimestre del ITES rene descartes.
                        </Card.Text>
                        <Card.Text>
                Edad: 25
                </Card.Text>
                <Card.Text>
                    Hobbit: ver series.
                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
  }
export default AboUt;