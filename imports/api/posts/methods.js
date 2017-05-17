import {Meteor} from 'meteor/meteor';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {CallPromiseMixin} from 'meteor/didericis:callpromise-mixin';
import SimpleSchema from 'simpl-schema';
import _ from 'lodash';

import rateLimit from '../../modules/rateLimit';

import Posts from './posts';

// Get
export const findOnePost = new ValidatedMethod({
    name: 'posts.findOne',
    mixins: [CallPromiseMixin],
    // validate: Posts.schema.validator(),
    validate: null,
    run(doc) {
        if (!this.isSimulation) {
            return Posts.findOne(doc);
        }
    }
});

// Insert
export const insertPost = new ValidatedMethod({
    name: 'posts.insert',
    mixins: [CallPromiseMixin],
    // validate: Posts.schema.validator(),
    validate: null,
    run(doc) {
        if (!this.isSimulation) {
            return Posts.insert(doc);
        }
    }
});

// Update
export const updatePost = new ValidatedMethod({
    name: 'posts.update',
    mixins: [CallPromiseMixin],
    // validate: Posts.schema.validator(),
    validate: null,
    run(doc) {
        if (!this.isSimulation) {
            return Posts.update({_id: doc._id}, {$set: doc});
        }
    }
});

export const removePost = new ValidatedMethod({
    name: 'posts.remove',
    mixins: [CallPromiseMixin],
    // validate: null,
    validate: new SimpleSchema({
        _id: {type: String},
    }).validator(),
    run(selector) {
        if (!this.isSimulation) {
            Posts.remove(selector);

            return 'success';
        }
    }
});

rateLimit({
    methods: [
        insertPost,
        updatePost,
        removePost,
    ],
    limit: 5,
    timeRange: 1000,
});
