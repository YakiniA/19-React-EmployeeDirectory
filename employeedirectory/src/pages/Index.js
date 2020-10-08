import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Pagination from "../components/Pagination";
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
        loading:false,
        currentPage : 1,
        postsPerPage : 10,
        currentPosts : []
      };

 // When the component mounts, get a list of all available employees
  componentDidMount() {
    API.getEmployees()
      .then(res => {
        //  let slicedRes = res.data.results.slice(0,10);

        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        console.log(indexOfLastPost);
        console.log(indexOfFirstPost);
        this.setState({ employees: res.data.results})

        let slicedRes = res.data.results.slice(indexOfFirstPost,indexOfLastPost);
        // let emp = JSON.stringify(this.state.employees);
       
        this.setState({currentPosts : slicedRes });
        console.log(this.state.employees.length);
        console.log(this.state.postsPerPage);


       
          // this.setState({ dob: res.data.results.dob })
          // console.log(this.state.employees);
          // console.log(res);
          
      }).catch(err => console.log(err));

       if (this.state.filteredEmployees.length < 1) {
         this.setState({
             filteredEmployees: this.state.employees
         });
     }
  }

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
            <h3>Welcome to the Employee Directory!</h3>
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
           : <div> <SearchResults results = {this.state.currentPosts}/> <Pagination postsPerPage = {this.state.postsPerPage} totalPosts={this.state.employees.length}/> </div>
          }

          </Col>
        </Row> 

      </Container>
    </div>
  );
  }
}

export default Index;
