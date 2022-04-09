import React,{Component} from 'react'
import { Navigate } from 'react-router-dom';
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar';
import NavbarMenu from '../Navbar/NavbarMenu'
import './Dashboard.css'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Legend, Tooltip, CartesianGrid, PieChart, Pie, Label, ComposedChart, Bar, Line, BarChart} from 'recharts'
export default class dashboard extends Component {
  constructor(props){
    super(props)
    const token = localStorage.getItem("token")
    let loggedIn = true
    if(token ==  null){
      loggedIn= false
    }
    this.state = {
      loggedIn
    }
  }

render()

{
  const Patients = [
    {
      date: '01/04/2022',
      patients: 10,
      Male: 7,
      Female: 3
    },
    {
      date: '02/04/2022',
      patients: 5,
      Male: 2,
      Female: 3
    },
    {
      date: '03/04/2022',
      patients: 7,
      Male: 3,
      Female: 4
    },
    {
      date: '04/04/2022',
      patients: 12,
      Male: 5,
      Female: 7
    },
    {
      date: '05/04/2022',
      patients: 6,
      Male: 2,
      Female: 4
    },
    {
      date: '06/04/2022',
      patients: 4,
      Male: 2,
      Female: 2
    },
    {
      date: '06/04/2022',
      patients: 10,
      Male: 6,
      Female: 4
    }
  ]
  const DashboardItem = [
    {
      name:'doctor',
      number: 4
    },
    {
      name:'Patient',
      number: 100
    },
    {
      name:'Todays Patents',
      number: 50
    },
    {
      name:'Appoitment',
      number: 150
    }
  ]
  const Appoitment = [
    {
      No_of_Appointments: 5,
      date:'01/04/2022',
      time: '9:00 AM',
      Tooth_Pain: 1,
      Colored_Filling: 1,
      Root_Canal_treatment: 1,
      Fractured_Root: 2
    },
    {
      No_of_Appointments: 7,
      date:'02/04/2022',
      time: '8:00 AM',
      Tooth_Pain: 2,
      Colored_Filling: 3,
      Root_Canal_treatment: 1,
      Fractured_Root: 2
    },
    {
      No_of_Appointments: 4,
      date:'03/04/2022',
      time: '10:00 AM',
      Tooth_Pain: 2,
      Colored_Filling: 1,
      Root_Canal_treatment: 1,
      Fractured_Root: 0
    },
    {
      No_of_Appointments: 6,
      date:'04/04/2022',
      time: '12:00 PM',
      Tooth_Pain: 2,
      Colored_Filling: 3,
      Root_Canal_treatment: 1,
      Fractured_Root: 0
  
    }
  ]
  const Patents_Appoitment =[
    {
      date: '01/04/2022',
      patients: 10,
      Appoitment: 8
    },
    {
      date: '02/04/2022',
      patients: 5,
      Appoitment: 9
    },
    {
      date: '03/04/2022',
      patients: 7,
      Appoitment: 3
    },
    {
      date: '04/04/2022',
      patients: 6,
      Appoitment: 9
    },
    {
      date: '05/04/2022',
      patients: 12,
      Appoitment: 10
    },
    {
      date: '06/04/2022',
      patients: 6,
      Appoitment: 4
    },
    {
      date: '07/04/2022',
      patients: 4,
      Appoitment: 7
    }
  ]

  if(this.state.loggedIn === false){
    return <Navigate to="/" />
  }
  return (
    <>
      <Sidebar />
      <NavbarMenu />
    <Container className='dashboard'>
        <h3><i className="fas fa-arrow-left"></i> Dashboard</h3>
        <p><i className="fas fa-home"></i> / dashboard</p>
        <Row>
            <Col sm={3} className='dashboard-wrapper'>
                <Card bg='danger'>
                    <Card.Body>
                        <Card.Title>Doctors</Card.Title>
                        <Card.Text>4</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={3} className='dashboard-wrapper'>
            <Card bg='primary'>
                <Card.Body>
                    <Card.Title>Patients</Card.Title>
                    <Card.Text>100</Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col sm={3} className='dashboard-wrapper'>
            <Card bg='warning'>
                <Card.Body>
                    <Card.Title>Today's Patients</Card.Title>
                    <Card.Text>50</Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col sm={3} className='dashboard-wrapper'>
            <Card bg='success'>
                <Card.Body>
                    <Card.Title>Appoitments</Card.Title>
                    <Card.Text>150</Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        <Row className='mt-5'>
          <Col sm={8}>
            <ResponsiveContainer width="100%" aspect={2}>
            <AreaChart width={1000} height={350} data={Patients}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorGv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#fc3434" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#fc3434" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="date" allowDuplicatedCategory={false} />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="patients" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              <Area type="monotone" dataKey="Male" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
              <Area type="monotone" dataKey="Female" stroke="red" fillOpacity={1} fill="url(#colorGv)" />
            </AreaChart>
            </ResponsiveContainer>
          </Col>
          <Col sm={4}>
            <ResponsiveContainer width="100%" aspect={1}>
              <PieChart >
                <Tooltip />
                <Label />
              <Pie data={DashboardItem} dataKey="number" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
              <Pie data={DashboardItem} dataKey="number" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
              <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Col>
        </Row>
    </Container>
    <Container className='mt-5'>
      <Row>
        <Col sm={6}>
        <h3 className='mt-3 mb-3 text-center'>Doctor's</h3>
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Timing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Gaurav Sharma</td>
            <td>Tooth specialist</td>
            <td>8:00AM to 10:00 Am</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Niraj Kumar</td>
            <td>Root Canal specialist</td>
            <td>10:00AM to 12:00 PM</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Raj Kumar</td>
            <td>Color Filling specialist</td>
            <td>12:00PM to 03:00 PM</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Prashant Kumar</td>
            <td>fractured Root specialist</td>
            <td>3:00PM to 06:00 PM</td>
          </tr>
        </tbody>
      </Table>
        </Col>
        <Col sm={6} >
          <ResponsiveContainer>
            <ComposedChart width={730} height={250} data={Appoitment}>
            <XAxis dataKey="time"name="time"/>
              <YAxis  />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Bar dataKey="No_of_Appointments" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="Tooth_Pain" stroke="#ff7300" />
              <Line type="monotone" dataKey="Colored_Filling" stroke="red" />
              <Line type="monotone" dataKey="Root_Canal_treatment" stroke="green" />
              <Line type="monotone" dataKey="Fractured_Root" stroke="blue" />
            </ComposedChart>
          </ResponsiveContainer>
        </Col>
      </Row>
      <Container className='mt-5'>
        <h3 className='text-center mt-3 mb-3'>Total Patients And Appoitments</h3>
        <ResponsiveContainer width='100%' aspect={3} >
        <BarChart width={730} height={250} data={Patents_Appoitment}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="patients" fill="#8884d8" />
          <Bar dataKey="Appoitment" fill="#82ca9d" />
        </BarChart>
        </ResponsiveContainer>
      </Container>
    </Container>
    </>
  )
}

}