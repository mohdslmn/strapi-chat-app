'use strict';

/**
 * active controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::active.active');
