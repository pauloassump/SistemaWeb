const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String, 
}); //Estrutura do Usuário

module.exports = mongoose.model('User', UserSchema);