import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Row from "../components/Row";
import Col from "../components/Col";


class Index extends Component {

    state = {
        search: [],
        employees: [],
        filteredEmployees: [],
        results: [],
        error: "",
        isActive: false,
      };

 // When the component mounts, get a list of all available employees
  componentDidMount() {
    API.getEmployees()
      .then(res => {
        this.setState({ employees: res.data.results})
      }).catch(err => console.log(err));

       if (this.state.filteredEmployees.length < 1) {
         this.setState({
             filteredEmployees: this.state.employees
         });
     }
  }

  // compare(a, b) {
  //   // Use toUpperCase() to ignore character casing
  //   const bandA = a.band.toUpperCase();
  //   const bandB = b.band.toUpperCase();
  
  //   let comparison = 0;
  //   if (bandA > bandB) {
  //     comparison = 1;
  //   } else if (bandA < bandB) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // }
  
  // singers.sort(compare);
  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });

    event.target.value
       ? this.setState({isActive : true})
       : this.setState({isActive : false});
   
     const filteredList = this.state.employees.filter((item) => {
         let values = item.name.title + item.name.first + item.name.last + item.gender + item.dob.age +  item.dob + item.email + item.phone;
         return values.indexOf(this.state.search) !== -1;
     });

  //    const sortedList = filteredList.filter(prof => {
  //     // Filter results by doing case insensitive match on name here
  //     return prof.name.first.toLowerCase().includes(this.state.search.toLowerCase());
  //     }).sort((a, b) => {
  //     // Sort results by matching name with keyword position in name
  //     if(a.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) > b.name.toLowerCase().indexOf(this.state.search.toLowerCase())) {
  //         return 1;
  //     } else if (a.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) < b.name.first.toLowerCase().indexOf(this.state.search.toLowerCase())) {
  //         return -1;
  //     } else {
  //         if(a.name.first > b.name.first)
  //             return 1;
  //         else
  //             return -1;
  //     }
  // });
     console.log(filteredList);
     this.setState({
         filteredEmployees: filteredList
     });
};

render(){
  return (
    <div>
     
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h3 style={{textAlign : "center", marginBottom: "2%"}}>Welcome to the Employee Directory!</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <SearchForm 
             handleInputChange={this.handleInputChange}
            //  employees={this.state.employees}
            employees={this.state.employees} 
           />
  
          {this.state.isActive 
           ? <SearchResults results= {this.state.filteredEmployees} /> 
           : <SearchResults results = {this.state.employees}/> 
          }
          </Col>
        </Row> 
      </Container>
    </div>
  );
  }
}

export default Index;
