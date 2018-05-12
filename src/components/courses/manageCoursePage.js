"use strict";

var React = require('react');
var CourseForm = require('./courseForm');
var CourseStore = require('../../stores/courseStore');

var ManageCoursePage = React.createClass({
	getInitialState: function () {
		return {
			course: {
				id: "",
				title: "",
				watchHref: "",
				author: {
					id: "",
					name: ""
				},
				length: "",
				category: ""
			},
			errors: {
				title: "",
				category: ""
			},
			dirty: false
		};
	},
	componentWillMount: function() {
		var courseId = this.props.params.id; //from the path '/author:id'
		if (courseId) {
			this.setState({course: CourseStore.getCourseById(courseId) });
		}
	},
	render: function () {
		return (
			<CourseForm
				course={this.state.course}
				errors={this.state.errors}
			/>
		);

	}
});

module.exports = ManageCoursePage;