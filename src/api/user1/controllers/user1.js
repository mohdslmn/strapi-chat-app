'use strict';

/**
 * user1 controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user1.user1');
