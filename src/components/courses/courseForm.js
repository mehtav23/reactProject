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
					name="link"
					label="Link"
					value={this.props.course.watchHref}
					onChange={this.props.onChange}
					error={this.props.errors.category} />
				<Input
					name="author"
					label="Author"
					value={this.props.course.author.name}
					onChange={this.props.onChange}
					error={this.props.errors.category} />
				<Input
					name="length"
					label="Length"
					value={this.props.course.length}
					onChange={this.props.onChange}
					error={this.props.errors.category} />

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