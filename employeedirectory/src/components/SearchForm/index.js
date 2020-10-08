import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group"> 
        <label htmlFor="employee"></label>
        <input width= "50%"
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control justify-content-center"
          placeholder="Enter employee detail to Search"
          id="employee"
        />
       
     
       {/* <datalist id="employees">
          {props.employees.map( (employee, index) => (
            <option key={employee.email} >
                {employee.name.first + " " +employee.name.last}
            </option>
          
          ))}
        </datalist>  */}

        {/* <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>  */}
      </div>
    </form>
  );
}

export default SearchForm;
