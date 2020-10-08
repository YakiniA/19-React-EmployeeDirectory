import React from "react";
import "./style.css";
import dateformat from "dateformat";

function SearchResults(props) {
  return (
    <table className="table table-striped table table-striped table-dark">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Image</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">DOB</th>
        </tr>
    </thead>
    <tbody>

         {props.results.map( (employee, index) => (
            
                   <tr key={employee.email}>
                       <th scope="row">{index+1}</th>
                       <td><img src={employee.picture.medium} alt=""></img></td>
                       <td>{employee.name.first} {employee.name.last}</td>
                       <td>{employee.phone} </td>
                       <td>{employee.email}</td>
                       <td>{dateformat(employee.dob.date, "mm-dd-yyyy")}</td>    
                   </tr>
                   
                   ))} 

    </tbody>
    </table>

  );
}

export default SearchResults;
