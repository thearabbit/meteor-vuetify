import {Meteor} from 'meteor/meteor';
import {DDPRateLimiter} from 'meteor/ddp-rate-limiter';
import _ from 'lodash';

const fetchMethodNames = methods => _.map(methods, 'name');

const assignLimits = ({methods, limit, timeRange}) => {
    const methodNames = fetchMethodNames(methods);

    if (Meteor.isServer) {
        DDPRateLimiter.addRule({
            name(name) {
                return _.includes(methodNames, name);
            },
            connectionId() {
                return true;
            },
        }, limit, timeRange);
    }
};

export default function rateLimit(options) {
    return assignLimits(options);
}
