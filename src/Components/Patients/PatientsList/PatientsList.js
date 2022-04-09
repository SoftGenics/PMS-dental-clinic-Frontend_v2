import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Container } from 'react-bootstrap';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
export const patientsGenerator = patientsRow => {
    const items = [];
    for (let i = 0; i < patientsRow; i++) {
      items.push({ id: i, name: `Patients Name ${i}`, email: `patients@gmail.com`, age: 18 + i, address:`Lacknow`, number:1234567 + i, action:`view | del | edit` });
    }
    return items;
  };
  
  const products = patientsGenerator(100);
  
  const columns = [
    {
      dataField: "id",
      text: "Patients ID",
      sort: true
    },
    {
      dataField: "name",
      text: "Name",
      sort: true
    },
    {
      dataField: "number",
      text: "Number"
    },
    {
        dataField: "email",
        text: "E-Mail"
      },
      {
        dataField: "address",
        text: "Address"
      },
      {
        dataField: "action",
        text: "Actions"
      }
  ];
const PatientsList = () => {
  return (
    <div>
        <Container className='mt-3'>
        <h1 className='text-center mb-3'>List of <span style={{color:'#3bc0fd'}}> Patients</span></h1>
        <BootstrapTable
        keyField="name"
        data={products}
        columns={columns}
        pagination={paginationFactory({ sizePerPage:10})}
      /> 
      </Container>
    </div>
  )
}

export default PatientsList