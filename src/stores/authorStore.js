"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionsTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';
var assign = require('object-assign');
var _ = require('lodash');

var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListner: function (callback) {
        this.removeChangeListner(CHANGE_EVENT, callback);
    },

    emitChangeListener: function () {
        this.emit(CHANGE_EVENT);
    },
    getAllAuthors: function () {
        return _authors;
    },
    getAuthorById: function (id) {
        return _.find(_author, { id: id });
    }

});
Dispatcher.register(function (action) {
    switch (action.ActionsTypes) {
        case ActionsTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
    }
});

module.exports = AuthorStore;