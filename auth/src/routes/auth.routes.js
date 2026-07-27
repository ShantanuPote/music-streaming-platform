import express from "express";
import * as authControllers from "../controllers/auth.controller.js"
import * as validationRules from "../middlewares/validations.middleware.js"
import passport from "passport";

const router = express.Router();

router.post('/register', validationRules.registerUserValidationRules,authControllers.register)

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback route that Google will redirect to after authentication
router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  authControllers.googleAuthentication
)

export default router;