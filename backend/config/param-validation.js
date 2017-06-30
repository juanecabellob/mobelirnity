import Joi from 'joi';

export default {
  // POST /api/users
  runSimulation: {
    body: {
      mapCoordinates: Joi.string().required(),
      numberOfVehicles: Joi.number().required(),
      numberOfCitizens: Joi.number().required()
    }
  }
};
