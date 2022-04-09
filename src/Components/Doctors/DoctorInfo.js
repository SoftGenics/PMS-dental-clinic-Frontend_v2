import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Container, Card} from 'react-bootstrap'


function DoctorInfo(){
    const [GetData, SetPost] = useState([]);
    const {id}  = useParams();
    useEffect(() => {
      const fetchPosts = async () =>{
        const res = await axios.get(`http://localhost:4001/api/Doctor/${id}`);
        SetPost(res.data)
      }
      fetchPosts();
    })
   return (
       <>
        {GetData.map((getdata) =>{
            return(
                <>
                <h1 className='text-center mt-3'>Doctors<span style={{color:'#f76840'}}> Profile</span></h1>
                  <Container className=" d-flex align-items-center justify-content-center profile-card">
                    
                    <Card style={{ width: '35rem', marginTop:'8rem', marginBottom:'4rem', boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                      <Card.Img src={`http://localhost:4001/uploads/${getdata.profile}` }  />
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
       </>
   )
}
export default DoctorInfo;