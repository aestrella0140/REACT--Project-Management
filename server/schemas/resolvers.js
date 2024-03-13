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

        projects: async () => {
            return Project.find();
        },

        project: async (parent, { projectId }) => {
            return Project.findOne({ _id: projectId });
        },
    },

    Mutation: {
        addUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('no user with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('incorrect password');
            }

            const token = signToken(user);
            return { token, user };
        },

        removeUser: async (parent, args, context) => {
            if (context.user) {
                return User.findByIdAndDelete({ _id: context.user._id });
            }
            throw AuthenticationError;
        },

        createProject: async (parent, { title, description, Status, priority, Users, dependencies }) => {
            const project = await Project.create({ title, description, Status, priority, Users, dependencies });
            

            return { project };
        },

        removeProject: async (parent, args, context) => {
            if (context.project) {
                return Project.findByIdAndDelete({ _id: context.project._id });
            }
            throw AuthenticationError;
        },

        updateProject: async (parent, args, context ) => {
            if (context.project) {
                return Project.findByIdAndUpdate(context.project.id, args, {
                    new: true,
                });
            }

            throw AuthenticationError;
        },
    },
};

module.exports = resolvers;