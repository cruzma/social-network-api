const router = require('express').Router();
const { 
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,

 } = require('../../controllers/thought-controller');


 router.route('/').get(getAllThought).post(addThought);

 router.route('/:id').get(getThoughtById).put(updateThought).delete(removeThought);

 module.exports = router;