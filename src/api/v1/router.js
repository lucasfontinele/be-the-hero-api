import express from 'express';

// Routes imports
import ongs from './ongs/routes';
import incidents from './incidents/routes';
import profile from './profile/routes';
import sessions from './sessions/routes';

const router = express.Router();

/**
 * ROUTE v1/ongs
 */
router.use('/ongs', ongs);

/**
 * ROUTE v1/incidents
 */
router.use('/incidents', incidents);

/**
 * ROUTE v1/profile
 */
router.use('/profile', profile);

/**
 * ROUTE v1/sessions
 */
router.use('/sessions', sessions);

export default router;
