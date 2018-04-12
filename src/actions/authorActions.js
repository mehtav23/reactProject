"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionsTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function (author) {
        var newAuthor = AuthorApi.saveAuthor(author);

        //Hey dispatcher go tell all the stores that an author has been created.
        Dispatcher.dispatch({
            actionType: ActionsTypes.CREATE_AUTHOR,
            author: newAuthor
        })
    }
};

module.exports = AuthorActions;