'use strict';

/**
 * find-car-shared-ride service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::find-car-shared-ride.find-car-shared-ride');
