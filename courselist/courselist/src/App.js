import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';


class App extends Component {

  state = {
    courses: [
      {name: "HTML"},
      {name: "PHP"},
      {name: "jQuery"}
    ],
    current: ''
  }

  updateCourse = (e) =>  {
    this.setState({
      current : e.target.value
    })
  }

  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses; 
    if(current !== ''){
      courses.unshift({name: current});
      this.setState({
        courses,
        current: ''
      });
    }else{
      return false
    }



  }

  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    })

  }

  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }


  render() {

    const {courses} = this.state;
    const courseList = courses.length !== 0 ?  courses.map( (course, index) => { 
      return <CourseList details={course} key={index}  index={index}  deleteCourse={this.deleteCourse}  editCourse={this.editCourse}/>
      
    })
    :  <p>There's No items To Show </p>



    return (
      <section className="App container">
          <h2>Add Courses</h2>
          <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
         <ul>
            {  courseList } 
         </ul>
      </section>
    );
  }
}

export default App;
