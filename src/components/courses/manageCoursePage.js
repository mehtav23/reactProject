"use strict";

var React = require('react');
var CourseForm = require('./courseForm');

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