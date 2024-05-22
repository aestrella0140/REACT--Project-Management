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
    priority: {
        type: String,
        required: true,
    },
    Users: {
        type: String,
        required: true,
    },
    dependencies: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', 
        required: true
    }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;