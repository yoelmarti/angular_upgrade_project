const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let dakarPilotsSchema = new Schema({
    // _id:{
    //     type: String
    // },
    name: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    vehicle: {
        type: String
    },
    brand: {
        type: String
    },
    model: {
        type: String
    },
    preparer: {
        type: String
    },
    vehicleImg: {
        type: String
    }
},{
    collection: 'pilots'
});

module.exports = mongoose.model('DakarPilot', dakarPilotsSchema);