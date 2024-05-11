'use strict';

/**
 * active service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::active.active');
