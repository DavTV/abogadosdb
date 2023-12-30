'use strict';

/**
 * attention service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::attention.attention');
