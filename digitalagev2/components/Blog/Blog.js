import Image from 'next/image';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import blogg from '@/public/blogbg.png'

function blog() {
  return (
    <div>
        <Image
          src={blogg}
          height={10}
          width={500}
          className="d-block w-100"
          alt="Your Image Description"
          layout="responsive"
        />
      <hr />
      <Container>
        <Row>
          <Col xs={12} md={9}>
            <Card >
              <Card.Img variant="top" src="./bg-1.png" />
              <Card.Body>
                <Card.Text>DigitalAge | February 01, 2023</Card.Text>
                <hr />
                <Card.Title>Tiktok Illegally collecting data sharing</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor incididunt on labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Bccaecat cupidatat non proident,
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
          <Card >
            <Card.Title style={{paddingTop:15}}>About Me</Card.Title>
              <Card.Img variant="top" src="./wi-1.png" height={260} style={{padding:40}} />
              <Card.Body>
               <h5 style={{justifyContent:'center', textAlign:'center', marginBottom:6}}>Zulia Maron Duo</h5>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={9}>
            <Card >
              <Card.Img variant="top" src="./bg-2.png" />
              <Card.Body>
                <Card.Text>DigitalAge |  February 01, 2023</Card.Text>
                <hr />
                <Card.Title>How to learn PHP 10 tips to get you started</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor incididunt on labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Bccaecat cupidatat non proident,
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card >
              <Card.Body>
                <Card.Title>Popular Categories</Card.Title>
                <hr/>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                <p>Design</p>
                <hr/>
                  <p>Developement</p>
                  <hr/>
                <p>Sass</p>
                <hr/>
                <p>Wordpress</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card >
              <Card.Body>
                <Card.Title>Popular Tags</Card.Title>
                <hr/>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                <p>  <Button variant="outline-primary">Agency</Button>{' '}
                <Button variant="outline-primary">Bussiness</Button>{' '}
                <Button variant="outline-primary">Clean</Button>{' '}</p>
                <p>  <Button variant="outline-primary">Creative</Button>{' '}
                <Button variant="outline-primary">Design</Button>{' '}</p>
                <p>  <Button variant="outline-primary">Modern</Button>{' '}
                <Button variant="outline-primary">Popular</Button>{' '}</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card >
              <Card.Body>
                <Card.Title>Archives</Card.Title>
                <hr/>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                December 2018
                </Card.Text>
              </Card.Body>
              
            </Card>
            
          </Col>

        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={9}>
            <Card >
              <Card.Img variant="top" src="./bg-3.png" />
              <Card.Body>
                <Card.Text>DigitalAge | February 01, 2023</Card.Text>
                <hr />
                <Card.Title>Convincing reasons you need to learn</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor incididunt on labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Bccaecat cupidatat non proident,
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
          <Card >
              <Card.Body>
                <Card.Title>Meta</Card.Title>
                <hr/>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                <p>Log in</p>
                <hr/>
                  <p>Entries feed</p>
                  <hr/>
                <p>Comments feed</p>
                <hr/>
                <p>WordPress.org</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card >
            <Card.Title style={{paddingTop:10}}>About Me</Card.Title>
              <Card.Img variant="top" src="./wi-1.png" height={260} style={{padding:40}} />
              <Card.Body>
               
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default blog