import React, { Component } from "react";
import Hero from "../components/Hero";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Table from "../components/Table";
import SearchResults from "../components/SearchResults";
import Row from "../components/Row";
import Col from "../components/Col";


class SearchPage extends Component {

    state = {
        search: "",
        employees: [],
        // dob: "",
        query: "",
        results: [],
        error: ""
      };

 // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmployees()
      .then(res => {
          this.setState({ employees: res.data.results})
          // this.setState({ dob: res.data.results.dob })
          console.log(res);
          
      })
      
      .catch(err => console.log(err));
  }


  handleInputChange = event => {
    this.setState({ search: event.target.value });

    API.getParticularEmployee(this.state.search)
    .then(res => {
      console.log("===REs===");
      console.log(res)
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      this.setState({ results: res.data.results, error: "" });
      // this.setState({ employees: res.data.results });
    })
    .catch(err => this.setState({ error: err.message }));
};
  

render(){
  return (
    <div>
     
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h3>Welcome to the Employee Directory!</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <SearchForm 
             handleInputChange={this.handleInputChange}
             employees={this.state.employees}
           />
           <SearchResults results={this.state.results} /> 
           
          </Col>
        </Row> 
      
      </Container>
    </div>
  );
  }
}

export default SearchPage;
