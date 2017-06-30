import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import simulationCtrl from '../controllers/simulation.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get(simulationCtrl.list)

  /** POST /api/users - Create new user */
  .post(validate(paramValidation.runSimulation), simulationCtrl.run);

/** Load user when API with userId route parameter is hit */
router.param('userId', simulationCtrl.load);

export default router;
