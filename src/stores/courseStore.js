"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _courses = [];

var CourseStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
    getAllCourses: function() {
		return _courses;
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			_courses = action.initialData.courses;
			CourseStore.emitChange();
			break;
		default:
			// no op
	}
});

module.exports = CourseStore;


