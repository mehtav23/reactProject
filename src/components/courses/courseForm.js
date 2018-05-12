"use strict";

var React = require('react');
var Input = require('../common/textInput');

var CourseForm = React.createClass({
	propTypes: {
		course:	React.PropTypes.object.isRequired,
		errors: React.PropTypes.object
	},

	render: function() {
		return (
			<form>
				<h1>Manage Course</h1>
				<Input
					name="title"
					label="Title"
					value={this.props.course.title}
					onChange={this.props.onChange}
					error={this.props.errors.title} />

				<Input
					name="category"
					label="Category"
					value={this.props.course.category}
					onChange={this.props.onChange}
					error={this.props.errors.category} />
			</form>
		);
	}
});

module.exports = CourseForm;