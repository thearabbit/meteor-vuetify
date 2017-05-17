import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Posts = new Mongo.Collection('posts');

Posts.schema = new SimpleSchema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    type: {
        type: String
    },
    publishedDate: {
        type: Date
    }
});

Posts.attachSchema(Posts.schema);

export default Posts;
