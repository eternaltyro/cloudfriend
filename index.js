'use strict';

const intrinsic = require('./lib/intrinsic');
const conditions = require('./lib/conditions');
const pseudo = require('./lib/pseudo');
const build = require('./lib/build');
const validate = require('./lib/validate');
const merge = require('./lib/merge');
const shortcuts = require('./lib/shortcuts');

/**
 * The cloudfriend module
 *
 * @example
 * var cloudfriend = require('cloudfriend');
 */
const cloudfriend = module.exports = {
  build,
  validate,
  merge,
  shortcuts
};

Object.assign(cloudfriend, intrinsic);
Object.assign(cloudfriend, conditions);
Object.assign(cloudfriend, pseudo);


/**
 * @type object
 */
cloudfriend.permissions = {
  AWSTemplateFormatVersion: '2010-09-09',
  Resources: {
    User: {
      Type: 'AWS::IAM::User',
      Properties: {
        Policies: [
          {
            PolicyName: 'validate-templates',
            PolicyDocument: {
              Statement: [
                {
                  Action: 'cloudformation:ValidateTemplate',
                  Effect: 'Allow',
                  Resource: '*'
                }
              ]
            }
          }
        ]
      }
    },
    AccessKey: {
      Type: 'AWS::IAM::AccessKey',
      Properties: {
        UserName: intrinsic.ref('User')
      }
    }
  },
  Outputs: {
    AccessKeyId: { Value: intrinsic.ref('AccessKey') },
    SecretAccessKey: { Value: intrinsic.getAtt('AccessKey', 'SecretAccessKey') }
  }
};
