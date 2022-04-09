import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Container, Row, Col, Form , Card} from 'react-bootstrap';
function UpdateDoctor() {
        const [GetData, SetPost] = useState([]);
        const {id}  = useParams();
        console.log(id);
        useEffect(() => {
          const fetchPosts = async () =>{
            const res = await axios.get(`http://localhost:4001/api/Doctor/${id}`);
            SetPost(res.data)
          }
          fetchPosts();
        })
  return (
    <div>

        <section className="add-doctor-form" data-stellar-background-ratio="3">
    <Container className='mt-5 add-doctor'>
      <h2 className='text-center mt-3'> Upadate Doctor</h2>
      <Row>
      <Col md={6} sm={6} >
      {GetData.map((getdata) =>{
            return(
                <>
                <h2 className='text-center mt-3'>Doctors<span style={{color:'#f76840'}}> Profile</span></h2>
                  <Container className=" d-flex align-items-center justify-content-center profile-card">
                    
                    <Card style={{ width: '35rem', marginTop:'8rem', marginBottom:'4rem', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                      <Card.Img src={`http://localhost:4001/uploads/${getdata.profile}`} />
                      <Card.Body>
                        <h2 className='text-center mb-3'>{getdata.firstname} {getdata.lastname}</h2>
                        <Container >
                        <Card.Text>
                        <h4>Specialization: <span style={{color:'#f76840', marginLeft:'4px'}}>&nbsp;&nbsp;{getdata.Specialization}</span></h4>
                        <h4>Experience: <span style={{color:'#f76840', marginLeft:'4px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getdata.t_experience}&nbsp;&nbsp;Years</span></h4>
                        <h4><i class="fas fa-user"></i>&nbsp;&nbsp;Gender: <span style={{color:'#f76840', marginLeft:'4px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getdata.gender}</span></h4>
                        <h4><i class="fas fa-envelope"></i>&nbsp;&nbsp;Email: <span style={{color:'#f76840', marginLeft:'4px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getdata.email}</span></h4>
                        <h4> <i class="fas fa-phone-alt"></i>&nbsp;&nbsp;Phone: <span style={{color:'#f76840', marginLeft:'4px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getdata.P_number}</span></h4>
                        <h4><i class="fab fa-whatsapp"></i>&nbsp;&nbsp;Whatsapp: <span style={{color:'#f76840', marginLeft:'4px'}}>&nbsp;&nbsp;&nbsp;&nbsp;{getdata.w_number}</span></h4>
                        <h4><i class="fas fa-address-card"></i>&nbsp;&nbsp;Address: <span style={{color:'#f76840', marginLeft:'4px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getdata.address}</span></h4>
                        </Card.Text>
                        </Container>
                      </Card.Body>
                    </Card>
                  </Container>
                </>
                  )
                }
            )
         }              
        </Col>
        <Col md={6} sm={6}>
        {GetData.map((getdata)=>{
                          return(<>
           <Form className="add-doctor-form" action={`http://localhost:4001/api/updateDoctor/${getdata.id}`} method='post' >
              <div className='text-center d-inline mb-b'>
                  <h2 className='mb-5'>Fill Doctor<span style={{color:'#f76840'}}> Details</span></h2>
              </div>
                  <Row>
                    <Col md={6} sm={6}>
                      <Form.Label>First Name</Form.Label>
 
                      <Form.Control type="text" className="form-control" name="firstname" placeholder="Full Name" value={getdata.firstname} required/>

                    </Col>

                    <Col md={6} sm={6}>
                      <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" className="form-control" name="lastname"  placeholder="Last Name" value={getdata.lastname} required/>
                    </Col>
                    <Col md={6} sm={6}>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" className="form-control" name="P_number" placeholder="Phone Number" value={getdata.P_number}/>
                    </Col>
                    <Col md={6} sm={6}>
                      <Form.Label>Whatsapp Number</Form.Label>
                      <Form.Control type="tel" className="form-control" name="w_number"  placeholder="Your Whatsapp Number" value={getdata.w_number}/>
                    </Col>
                  </Row>
                    <Row>
                      <Col md={6} sm={6}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" className="form-control" name="email"  placeholder="Your Email" value={getdata.email} />
                      </Col>
                      <Col md={6} sm={6}>
                        <Form.Label>Select Gender</Form.Label>
                          {['radio'].map((type) => (
                             <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                  inline
                                  label="Male"
                                  name="gender"
                                  value={getdata.gender}
                                  type={type}
                                  />
                                <Form.Check
                                  inline
                                  label="Female"
                                  name="gender"
                                  value={getdata.gender}
                                  type={type}
                                />
                                <Form.Check
                                 inline
                                 label="Others"
                                 value={getdata.gender}
                                 type={type}
                                />
                              </div>
                            ))}
                      </Col>
                    </Row>
                      <Row>
                    <Col md={12} sm={12}>
                      <Form.Label >Address</Form.Label>
                      <Form.Control type="address" className="form-control" name="address"  placeholder="Your Address" value={getdata.address} />
                    </Col>
                    </Row>
                    <Row>
                      <Col md={12} sm={12}>
                      <section>
                      <label class="upload-btn btn-md">
                          Upload Profile Picture &nbsp;&nbsp;
                          <input
                              type="file"
                              hidden
                              class="form-control-file"
                              name="profile"
                              accept="image/*"
                            
                              />
                          <svg
                              width="1.5em"
                              height="1.5em"
                              viewBox="0 0 16 16"
                              class="bi bi-folder2-open"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              >
                              <path
                                fill-rule="evenodd"
                                d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"
                                />
                          </svg>
                        </label>
                      </section>
                      </Col>
                      </Row>
                      <Row>
                      <Col md={6} sm={6}>
                          <Form.Label >Total Experience</Form.Label>
                          <Form.Control type="number" name="t_experience" className="form-control" value={getdata.t_experience}/>
                        </Col>
                        <Col md={6} sm={6}>
                                        <Form.Label>Specialization</Form.Label>
                                        <Form.Select className="form-control" name="Specialization" value={getdata.Specialization}>
                                             <option>Tooth cleaner</option>
                                             <option>Denstiry</option>
                                             <option>Compsite filling</option>
                                             <option>white filling</option>
                                        </Form.Select>
                                   </Col>
                      </Row>
                      <Row>
                      <Col md={12} sm={12}>
                          <button type="submit" className="form-control" id="cf-submit" >Update Doctor Profile</button>
                      </Col>
                      </Row>
                      </Form>
                      </>)
                      })}
                   </Col>
      </Row>
    </Container>
</section>
    </div>
  )
}

export default UpdateDoctor