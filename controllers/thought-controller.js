const { thoughts } = require('../models');

const thoughtController = {

    getAllThought(req, res){
            thoughts.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getThoughtById({ params }, res){
        thoughts.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '_v'
        })
        .select('-_v')
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({ message: 'No thought found' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    addThought({ body }, res ){
        thoughts.create(body)
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.status(400).json(err));
    },

    updateThought({ body }, res ){
        thoughts.findByIdAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({ message: 'Thought not found!'});
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },

    removeThought(){
        thoughts.findOneAndDelete({_id: params.id })
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({ message: 'Thought not found!'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    }

    
};

module.exports = thoughtController;