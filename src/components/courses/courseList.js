"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var anchorDecoration = {
    "textDecoration": "underline"
};


var CourseList = React.createClass({
    propTypes: {
		courses: React.PropTypes.array.isRequired
	},

    render: function () {
        var createCourseRow = function (course) {
            return (
                <tr key={course.id}>
                    <td><Link to="manageCourse" params={{id: course.id}} style={anchorDecoration}>{course.title}</Link></td>
                    <td><a href={course.watchHref} style={anchorDecoration}>Link</a></td>
                    <td>{course.author.name}</td>
                    <td>{course.length}</td>
                    <td>{course.category}</td>
                </tr>
            );
        };
        return (
            <div>
                <table className="table">
                    <thead>
                        <th>Title</th>
                        <th></th>
                        <th>Author</th>
                        <th>Length</th>
                        <th>Category</th>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>

        );
    }
});

module.exports = CourseList;