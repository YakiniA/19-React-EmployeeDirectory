import React from "react";

function Table(props) {
    // console.log("props" +props);
    console.log("----Props.employees----")
    console.log(props.employees);
 
    // console.log(props.employees.gender);
    // const name = JSON.stringify(props.employees.name)
    // console.log(JSON.stringify(props.employees.name));
    // console.log(props.employees.name);
    // console.log(props.employees.picture);
    // console.log(props.employees.email);
    // console.log(props.employees.phone);
    // console.log(props.employees.dob);
    // console.log(props.dob);
    return(
    
         <table class="table table-striped">
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
         

              {props.employees.map( (employee, index) => (
                  
                        <tr>
                        
                        
                            <th scope="row">{index+1}</th>
                            <td><img src={employee.picture.thumbnail} alt="employee picture"></img></td>
                            <td>{employee.name.first} {employee.name.last}</td>
                            <td>{employee.phone} </td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.date}</td>
                           
                        </tr>
                        
                        ))} 
 
           
        
         </tbody>
         </table>
    );
}

export default Table;