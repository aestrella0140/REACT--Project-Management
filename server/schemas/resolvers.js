const { User, Project } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }

            throw AuthenticationError;
        },

        getProjects: async () => {
            return Project.find();
        },

        getProject: async (parent, { projectId }) => {
            return Project.findOne({ _id: projectId })
        },
    },

    Mutation: {
        addUser: async (parent, {name, email, password})
    }
}