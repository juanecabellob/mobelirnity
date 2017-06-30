import mongoose from 'mongoose';

/**
 * User Schema
 */
const SimulationSchema = new mongoose.Schema({
  numberOfCitizens: {
    type: Number,
    required: true
  },
  numberOfVehicles: {
    type: Number,
    required: true
  },
  startingMapCoordinate: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
SimulationSchema.method({
});

/**
 * Statics
 */
SimulationSchema.statics = {
  list() {
    return this.find()
      .sort({ createdAt: -1 })
      .exec();
  }
};

/**
 * @typedef Simulation
 */
export default mongoose.model('Simulation', SimulationSchema);
