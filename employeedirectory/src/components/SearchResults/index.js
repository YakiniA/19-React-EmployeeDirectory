import React from "react";
import "./style.css";
import dateformat from "dateformat";

function SearchResults(props) {
  return (
    // <ul className="list-group search-results">
    //   {props.results.map(result => (
    //     <li key={result} className="list-group-item">
    //       <img alt="employee" src={result} className="img-fluid" />
    //     </li>
    //   ))}
    // </ul>

    <table className="table table-striped">
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
            
                   <tr>
                       <th scope="row">{index+1}</th>
                       <td><img src={employee.picture.medium} alt="employee picture"></img></td>
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
