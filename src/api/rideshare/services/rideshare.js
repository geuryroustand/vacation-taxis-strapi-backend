'use strict';

/**
 * rideshare service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rideshare.rideshare');
