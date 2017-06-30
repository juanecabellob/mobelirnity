import express from 'express';
import simulationRoutes from './simulation.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /simulations
router.use('/simulation', simulationRoutes);

export default router;
