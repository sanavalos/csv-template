import React from 'react'
import { CSVLink } from 'react-csv'

function ReactCSV() {
 // WITH HEADERS
 // const headers = [
 //  {label: "Carrier Name", key: "carrierAttributes.full_name"},
 //  {label: "Company Name", key: "carrierAttributes.company_name"}
 // ]

 // const data = [
 //  {carrierAttributes: { full_name: "Carrier CSV", company_name: "Company CSV" }}
 // ]


 const data = [
  ["Carrier Full Name", "Carrier Email", "Carrier Office Phone", "Carrier Cell Phone", "Company Name", "Company Website", "Company Office Phone", "Company Fax Number", "Emergency Contact Full Name", "Emergency Contact Phone","Emergency Contact Email" ],
  ["","","","","","","","","","",""]
 ]

  return (
    <CSVLink 
    data={data}
    // headers={headers}
    filename={"create-carrier.csv"}
    target="_blank"
    >
     Download me</CSVLink>
  )
}

export default ReactCSV