'use strict';

/**
 * request-shared-ride service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::request-shared-ride.request-shared-ride');
