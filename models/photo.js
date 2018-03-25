var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// db.inventory.insertMany([{ car:{auto1:1, auto2: 2, auto3: 3, auto4: 4, auto5: 4, auto6:5,auto7:5},ppl: {ppl1:5,ppl2:5,ppl3:5,ppl4:5,ppl5:5, ppl6:5,ppl7:5},nature : {nature1:5,nature2:5,nature3:5,nature4:5,nature5:5, nature6:5,nature7:5}}]);

var inventory1 = new Schema({
    itemType: {
        type: String,
        trim: true,
        required: "itemType is required"
    }
});

// This creates our model from the above schema, using mongoose's model method
var db = mongoose.model("db", inventory1);

// Export the User model
module.exports = db;