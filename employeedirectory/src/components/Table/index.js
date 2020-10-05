import React from "react";

function Table(props) {
    console.log("props" +props);
    return(
        <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
            </tr>
        </thead>
        <tbody>
            <tr>
{/* 
                 {props.employees.map(employee => (
                    <div>
                    <th scope="row">1</th>
                    <td>{employee.picture.thumbnail}</td>
                    <td>{employee.name.first} {employee.name.second}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td>{employee.dob}</td>
                    </div>
                ))}
           */}
            </tr>
        
        </tbody>
        </table>
    );
}

export default Table;