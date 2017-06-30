import mongoose, { Schema } from 'mongoose';

/**
 * User Schema
 */
const VehicleSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    match: [ /idle|rented/, 'Invalid status, please use only idle or rented as values' ]
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
VehicleSchema.statics = {
  listSimulationVehicles(simulationId) {
    return this.find({ simulation: simulationId })
      .sort({ createdAt: -1 })
      .exec();
  }
};

/**
 * @typedef Vehicle
 */
export default mongoose.model('Vehicle', VehicleSchema);
