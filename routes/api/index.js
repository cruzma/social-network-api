const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');


// add prefix of `/pizzas` to routes created in `pizza-routes.js`

router.use('/thoughts', thoughtRoutes);

module.exports = router;