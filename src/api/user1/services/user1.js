'use strict';

/**
 * user1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user1.user1');
