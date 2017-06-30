import mongoose, { Schema } from 'mongoose';

/**
 * Citizen Schema
 */
const CitizenSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  destination: {
    type: String
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
CitizenSchema.statics = {
  listSimulationCitizens(simulationId) {
    return this.find({ simulation: simulationId })
      .sort({ createdAt: -1 })
      .exec();
  }
};

/**
 * @typedef Citizen
 */
export default mongoose.model('Citizen', CitizenSchema);
