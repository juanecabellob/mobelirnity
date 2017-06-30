import mongoose, { Schema } from 'mongoose';

/**
 * Ride Schema
 */
const RideSchema = new mongoose.Schema({
  locationA: {
    type: String,
    required: true
  },
  locationB: {
    type: String,
    required: true
  },
  simulation: {
    _id: Schema.Types.ObjectId,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Statics
 */
RideSchema.statics = {
  listSimulationRides(simulationId) {
    return this.find({ simulation: simulationId })
      .sort({ createdAt: -1 })
      .exec();
  }
};

/**
 * @typedef Ride
 */
export default mongoose.model('Ride', RideSchema);
