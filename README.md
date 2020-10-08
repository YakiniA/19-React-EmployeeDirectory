## React : Employee Directory

## Overview

This assignment is based on creating an employee directory with React. This can be achieved by breaking up application's UI into components, manage component state, and respond to user events.

## User Story

* As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Functionality

  * See the employees displayed in a table. 
  * Sorting is done based on the name.
  * Filter the users by at least one property. This can be achieved by using name, email and based on phone number.

## File Description

1. As this application is developed on react, it is broken into several components. And these components are used wherever necessary.
2. The styling for individual components are done and imported in index.js file.
3. In App.js, routing is present. Only one routing `(/)` is used and it refers to my index.js file.
4. Pages: 
   * An API call to [Random User](https://randomuser.me/api/?results=20&nat=us) to return    the random employee details.
   * Sorting the results based on name and saved that to the employees state.
   * On getting an input in Search, it filters the whole employee data and displays the filtered results on the table. If the user has not entered anything, it displays all the employee details in the table.
5. SearchForm: In the SearchForm, it displays the search box and handles the changes made in the box by using handleInputChange event.
6. SearchResults: The results of the employees saved in employee state, is being passed to the Search Results where it is being rendered in the table.

## Challenges Faced

1. The first challenge is fetching the employees and by using map to loop the employees and display in table.
2. Always got `map undefined` error. After troubleshooting came to know that employee array is not passed correctly for the map to loop over.
3. Faced difficulties as I include the same HTML syntax on react. For example, on using class instead of className. And, by proving alt in img tag.
4. Most difficult is doing filter. Filtering based on the search input. First I tried to achieve that in API call, but unfortunately not getting the results as expected. Then, I tried a filter function to check employees and limit based on user search input.

## Future Scope

I tried to do pagination, it worked fine. But the problem is whenever I go to different pages, it fetches the new set of employees and displays. I think, it needs more advanced features like useState, useEffect to achieve the same. Because of time constraint, thought of implementing this added bonus feature later.

## Link

Here's the link to my developed Website : [Employee Directory](https://pwa-budgettrackers.herokuapp.com/)

### Screenshots

![Screenshot1](employeedirectory/public/EmployeeTrackerVideo.gif)
![Screenshot2](employeedirectory/public/EmployeeTrackerSnapshot.png)

#### References

Stack Overflow : [Stackoverflow - React Two Children of Same Key](https://stackoverflow.com/questions/52219852/two-children-with-the-same-key-in-react)<br/>
Stack Overflow : [Stackoverflow - Each Child should have a Unique Key Prop](https://stackoverflow.com/questions/55153873/warning-each-child-in-a-list-should-have-a-unique-key-prop)<br/>
Stack Overflow : [Stackoverflow - Map function return undefined](https://stackoverflow.com/questions/16037049/why-does-javascript-map-function-return-undefined)<br/>
Adding logos : [Adding Logos in React](https://create-react-app.dev/docs/adding-images-fonts-and-files/)<br/>
React Documentation : [React - Documentation](https://reactjs.org/docs/lists-and-keys.html#keys)<br/>
