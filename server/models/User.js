const { Schema, model, default: mongoose } = require('mongoose');
const brypt = require('bcrypt');

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true, 
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\..+/, 'Must be a valid email address'],
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minlength: 8,
    },
    Projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    }]
});



UserSchema.pre('save', async function (next) {
    if (this.inNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await brypt.hash(this.password, saltRounds);
    }

    next();
});

UserSchema.methods.isCorrectPassword = async function (password) {
    return brypt.compare(password, this.password);
};

const User = model('User', UserSchema);

module.exports = User;
