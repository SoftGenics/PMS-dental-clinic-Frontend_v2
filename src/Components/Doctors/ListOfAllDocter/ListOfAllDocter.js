import React from 'react'
import {Table, Container, Form, Button,  FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './ListOfAllDocter.css'
import Sidebar from '../../Sidebar/Sidebar';
import NavbarMenu from '../../Navbar/NavbarMenu'
function ListOfAllDocter() {


  return (
      <>
      <Sidebar />
      <NavbarMenu />
      <Container className='mt-5'>
        <h1 className='text-center mb-3'>List of <span style={{color:'#3bc0fd'}}> Doctors</span></h1>
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        <Button variant="outline-danger ms-2">Reset</Button>
      </Form>
        <Table striped bordered hover className='table border shadow text-center mt-5'responsive="sm" >
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
      <tr>
      <td>1</td>
              <td>Prashant</td>
              <td>Kumar</td>
              <td>softgenics.prashant@gmail.com</td>
              <td>7061277787</td>
              <td>
                <Link to='/' className='btn btn-primary  mx-3'>View &nbsp;&nbsp;<i className="far fa-eye"></i></Link>
                <Link  className='mx-3 btn btn-outline-secondary' to='/'>Edit &nbsp;&nbsp;<i className="fas fa-edit"></i></Link>
                <Button className='btn btn-danger' >Delete </Button>
              </td>
      </tr>
      <tr>
      <td>2</td>
              <td>Prashant</td>
              <td>Kumar</td>
              <td>softgenics.prashant@gmail.com</td>
              <td>7061277787</td>
              <td>
                <Link to='/' className='btn btn-primary  mx-3'>View &nbsp;&nbsp;<i className="far fa-eye"></i></Link>
                <Link  className='mx-3 btn btn-outline-secondary' to='/'>Edit &nbsp;&nbsp;<i className="fas fa-edit"></i></Link>
                <Button className='btn btn-danger' >Delete </Button>
              </td>
      </tr>
      <tr>
      <td>3</td>
              <td>Prashant</td>
              <td>Kumar</td>
              <td>softgenics.prashant@gmail.com</td>
              <td>7061277787</td>
              <td>
                <Link to='/' className='btn btn-primary  mx-3'>View &nbsp;&nbsp;<i className="far fa-eye"></i></Link>
                <Link  className='mx-3 btn btn-outline-secondary' to='/'>Edit &nbsp;&nbsp;<i className="fas fa-edit"></i></Link>
                <Button className='btn btn-danger' >Delete </Button>
              </td>
      </tr>
          </tbody>
        </Table>
        </Container>

      </>
  )
}

export default ListOfAllDocter
