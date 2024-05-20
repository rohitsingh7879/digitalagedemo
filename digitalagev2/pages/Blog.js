import Image from 'next/image';
import React, { useState, useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import blogg from '@/public/Blog.webp'
import { userContext } from './_app'
import axios from 'axios';
import Footer from '@/components/Footer/Footer';
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('../components/Navbar/Navbar'), { ssr: false })
function blog() {
  const { userdata, setuserdata } = useContext(userContext)
  const [file, setFile] = useState('')
  const [userID, setUserID] = useState()
  const [postData, setpostData] = useState({
    post_id: userID,
    title: "",
    description: "",
  })

  const [blogPosts, setBlogPost] = useState([])
  const getBlogs = () => {

    axios.get('http://localhost:8000/get-blog-posts')
      .then((res) => {
        setBlogPost(res.data)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

  }
  useEffect(() => {
    if (userdata) {
      setUserID(userdata.nickname)
    }
    getBlogs()
  }, [])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (!userID) {
      alert("Please Login to Create Posts")
    }
    else {
      setShow(true);
    }
  }

  const handleCreatePost = () => {
    const formdata = new FormData()
    formdata.append("post_id", "P1")
    formdata.append("title", postData.title)
    formdata.append("description", postData.description)
    formdata.append("file", file)
    console.log([...formdata])
    axios.post('http://localhost:8000/create-blog-post', formdata)
      .then(res => {
        if (res.status === 200) {
          getBlogs()
          handleClose()
        }
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deletePost = (id) => {
    console.log(id)
    axios.delete(`http://localhost:8000/delete-blog-posts/${id}`)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          getBlogs()
        }
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const buttonStyle = {
    width: '150px',
    '--bs-btn-padding-y': '.25rem',
    '--bs-btn-padding-x': '.5rem',
    '--bs-btn-font-size': '.75rem',
  };



  return (
    <>
      <div>
        <Navbar></Navbar>

        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://cdn.pixabay.com/photo/2017/05/05/22/38/blog-2288426_640.jpg"
                height={500}
                width={100}
                className="d-block w-100"
                alt="Your Image Description"
                layout="responsive"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>Welcome to DigitalAge</h2>
                <p>Technology, News and Trendz</p>
                <button className="btn btn-danger">Technology</button>
                <button className="btn btn-primary mx-2">Web Development</button>
                <button className="btn btn-success">Tech fun</button>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <Container>

          <Row>

            <Col xs={12} md={9}><Button style={{ width: "100%" }} variant="success" size="sm" onClick={handleShow}>
              Create Post
            </Button></Col>

          </Row>
          <br />
          <Row>

            {
              blogPosts.map((posts, index) => {
                const date = new Date(posts.createdAt);
                const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });

                return (
                  <>
                    <Col xs={12} md={9} key={index} className="mb-3">
                      <Card style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                        <Card.Img variant="top" height={500} width={300} src={`http://localhost:8000/Images/${posts.file}`} />
                        <Card.Body>
                          <div style={{ display: 'flex', justifyContent: "space-between" }}>
                            <Card.Text>DigitalAge | {formattedDate}</Card.Text>
                            {
                              postData.post_id == posts.post_id ? <Button variant="outline-danger" style={buttonStyle} onClick={() => deletePost(posts._id)} >Delete</Button> : null

                            }
                          </div>
                          <hr />
                          <Card.Title>{posts.title}</Card.Title>
                          <Card.Text>{posts.description}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    {
                      index == 0 ?
                        <Col xs={6} md={3} className='mb-2'>
                          <Card >
                            <Card.Body>
                              <Card.Title>Popular Categories</Card.Title>
                              <hr />
                              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                              <Card.Text>
                                <p>Design</p>
                                <hr />
                                <p>Developement</p>
                                <hr />
                                <p>Sass</p>
                                <hr />
                                <p>Wordpress</p>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                          <br />
                          <Card >
                            <Card.Body>
                              <Card.Title>Popular Tags</Card.Title>
                              <hr />
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
                          <br />
                          <Card >
                            <Card.Body>
                              <Card.Title>Archives</Card.Title>
                              <hr />
                              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                              <Card.Text>
                                December 2018
                              </Card.Text>
                            </Card.Body>

                          </Card>

                        </Col> : <></>
                    }

                    {
                      index == 1 ?
                        <Col xs={6} md={3} className='mb-2'>
                          <br />
                          <Card >
                            <Card.Title style={{ padding: 15 }}>About Me</Card.Title>
                            <Card.Img variant="top" src="./wi-1.png" height={260} style={{ padding: 40 }} />
                            <Card.Body>
                              <h5 style={{ justifyContent: 'center', textAlign: 'center', marginBottom: 6 }}>Zulia Maron Duo</h5>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                        : <></>
                    }
                    {
                      index == 2 ?
                        <Col xs={6} md={3} className='mb-2'>
                          <Card >
                            <Card.Body>
                              <Card.Title>Meta</Card.Title>
                              <hr />
                              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                              <Card.Text>
                                <p>Log in</p>
                                <hr />
                                <p>Entries feed</p>
                                <hr />
                                <p>Comments feed</p>
                                <hr />
                                <p>WordPress.org</p>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                          <Card >
                            <Card.Title style={{ paddingTop: 10 }}>About Me</Card.Title>
                            <Card.Img variant="top" src="./wi-1.png" height={260} style={{ padding: 40 }} />
                            <Card.Body>

                              <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                        : <></>
                    }

                  </>
                )
              })
            }
          </Row>
        </Container>

      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Your Blog Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="modal-body">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Title for your post</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Title" onChange={(e) => setpostData({ ...postData, title: e.target.value })} />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">Description for your post</label>
              <textarea type="text" class="form-control" id="formGroupExampleInput2" placeholder="Description" onChange={(e) => setpostData({ ...postData, description: e.target.value })} />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput3" class="form-label">Photo for your post</label>
              <input type="file" class="form-control" id="formGroupExampleInput3" placeholder="Photo" onChange={(e) => setFile(e.target.files[0])} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreatePost}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  )
}

export default blog