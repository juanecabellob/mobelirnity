import mongoose, { Schema } from 'mongoose';

/**
 * Place Schema
 */
const PlaceSchema = new mongoose.Schema({
  location: {
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
PlaceSchema.statics = {
  listSimulationPlaces(simulationId) {
    return this.find({ simulation: simulationId })
      .sort({ createdAt: -1 })
      .exec();
  }
};

/**
 * @typedef Places
 */
export default mongoose.model('Place', PlaceSchema);
