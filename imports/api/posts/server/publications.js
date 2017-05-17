import {Meteor} from 'meteor/meteor';

import Posts from '../posts';

Meteor.publish('posts', function (selector = {}, options = {}) {
    Meteor._sleepForMs(1000);

    return Posts.find(selector, options);
});
