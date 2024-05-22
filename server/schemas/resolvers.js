const { User, Project, Category } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

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

    categories: async () => {
      return await Category.find();
    },

    projects: async (parent, { category, type }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (type) {
        params.type = {
          $regex: type,
        };
      }

      return await Project.find(params).populate("category");
    },

    project: async (parent, { _id }) => {
      return await Project.findById(_id).populate("category");
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
        throw new AuthenticationError("no user with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("incorrect password");
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

    createProject: async (
      parent,
      { title, description, Status, priority, Users, dependencies, category }
    ) => {

      const project = await Project.create({
        title,
        description,
        Status,
        priority,
        Users,
        dependencies,
        category,
      });

      // await project.populate("Users category").execPopulate();

      return { project };
    },

    removeProject: async (parent, args, context) => {
      if (context.project) {
        return Project.findByIdAndDelete({ _id: context.project._id });
      }
      throw AuthenticationError;
    },

    updateProject: async (
      parent,
      {projectId, title, description, Status, priority, Users, dependencies, category }
    ) => {
      

      const project = await Project.findOneAndUpdate(
        { _id: projectId },
        {
          title,
          description,
          Status,
          priority,
          Users,
          dependencies,
          category,
        },
        { new: true }
      );

      await project.populate("Users category").execPopulate();

      return { project };

    },
  },
};

module.exports = resolvers;
