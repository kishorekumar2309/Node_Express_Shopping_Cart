var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

userSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null)
};

userSchema.methods.validPassword = function(password) {
    var user = this;
    return new Promise(function(resolve, reject){
        bcrypt.compare(password, user.password, function(err, res){
            if(res) resolve(res);
            else reject(res);
        });
    });
}

module.exports = mongoose.model('User', userSchema);