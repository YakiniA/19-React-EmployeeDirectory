import React, { Component } from "react";
import Hero from "../components/Hero";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Table from "../components/Table";
import SearchResults from "../components/SearchResults";
import Row from "../components/Row";
import Col from "../components/Col";

class Index extends Component {

    state = {
        search: "",
        employees: [],
        results: [],
        error: ""
      };

 // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ employees: res.data.message }))
      .catch(err => console.log(err));
  }


  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

render(){
  return (
    <div>
     
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome to the Employee Directory!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <SearchForm
            // handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
          />
          <SearchResults results={this.state.results} />
          </Col>
        </Row>
        <Row>
            <Table />

           
        </Row>
      </Container>
    </div>
  );
  }
}

export default Index;
