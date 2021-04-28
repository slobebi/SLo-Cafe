const { Router } = require('express');

const router = Router();

const seatsController = require('../controllers/seatsController');

router.get('/seats/seat/:id', seatsController.details);
router.get('/seats/:id', seatsController.get_byuser);
router.post('/seats/book', seatsController.book);
router.delete('/seats/seat/:id', seatsController.delete);

module.exports = router