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
        addUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            };

            const token = signToken(user);
            return {token, user };
        },

        removeUser: async (parent, args, context) => {
            if (context.user) {
                return User.findByIdAndDelete({ _id: context.user._id });
            }
            throw AuthenticationError;
        },
    },
};

module.exports = resolvers;