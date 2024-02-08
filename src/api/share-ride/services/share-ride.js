'use strict';

/**
 * share-ride service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::share-ride.share-ride');
