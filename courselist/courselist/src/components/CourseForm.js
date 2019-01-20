import React from 'react';

const CourseForm = (props) => {
    return (
        <form onSubmit={props.addCourse} className="over">
            <input type="text" className="add" onChange={props.updateCourse} value={props.current} />
            <button className="add-btn" type="submit">Add Course</button>
        </form>
    )
}

export default CourseForm;