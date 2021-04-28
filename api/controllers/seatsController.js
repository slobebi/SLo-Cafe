const Seat = require('../models/seat');

//Booking(Get by ID)
module.exports.details = (req, res) => {
    var id = req.params.id;
    Seat.findOne({_id: id}, function(err, seat){
        if(err) {
            return res.status(500).json({
                message: 'Error getting record.'
            });
        }
        if(!seat) {
            return res.status(404).json({
                message: 'No such record'
            });
        }
        return res.json(seat);
    });
}

//Booking(Get by User)
module.exports.get_byuser = (req, res) => {
    const id = req.params.id;
    Seat.find({user_id: id}, function(err, seat){
        if(err) {
            return res.status(500).json({
                message: 'Error getting records.'
            });
        }
        if(seat.length === 0) {
            return res.status(404).json({
                message: 'No such record'
            });
        }
        return res.json(seat);
      });
}

//Booking(Post)
module.exports.book = (req, res) => {
    const seat = new Seat({
        name : req.body.name,
        user_id : req.body.user_id,
        table_size : req.body.table_size,
        people_amt : req.body.people_amt,
        floor : req.body.floor,
        smoking : req.body.smoking,
        time: req.body.time
    })
    seat.save((err, seat) => {
        if(err) {
            return res.status(500).json({
                message: 'Error saving record',
                error: err
            })
        }
        return res.json({
            message: 'saved',
            _id: seat._id
        })
    })

};

//Booking(Delete a Book)

module.exports.delete = function(req, res) {
    var id = req.params.id;
    Seat.findByIdAndRemove(id, function(err, seat){
        if(err) {
            return res.status(500).json({
                message: 'Error getting record.'
            });
        }
        return res.json(seat);
    });
}