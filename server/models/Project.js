const { Schema, model, default: mongoose } = require('mongoose');

const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }, 
    description: {
        type: String,
        required: true,
        trim: true,
    },
    Status: {
        type: String, 
        required: true,
    },
    Priority: {
        type: String,
        required: true,
    },
    Users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    Dependencies: {
        type: String,
        required: true,
        trim: true,
    },
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;