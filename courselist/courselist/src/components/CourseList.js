import React, {Component, Fragment} from 'react';

class CourseList extends Component {

    state = {
        isEdit: false
    }

    toggleState = () => {
        const {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    } 

    renderCourse = () => {
        return (
            <li>
                    <span className="addd">{this.props.details.name}</span>
                    <button className="edit-btn" onClick={() => {this.toggleState()}} >Edit Course</button>
                    <button className="del-btn" onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
                    <div className="clear"></div>

            </li>
        )
    }

    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);

        this.toggleState()
    }


    renderUpdateForm = () => {
        return (
            <form onSubmit={this.updateCourseItem}>
                <input className="adde" type="text" ref={(v) => { this.input = v}}  defaultValue={this.props.details.name} />
                <button className="add-btn" type="submit">Update Course</button>
                <div className="clear"></div>

            </form> 
        )

    }

    render() {
        let {isEdit} = this.state;
        return (
            <Fragment>
                {isEdit ? this.renderUpdateForm() : this.renderCourse()}
                 
            </Fragment>
        )
    }
}

export default CourseList;