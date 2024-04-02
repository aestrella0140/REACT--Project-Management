import React from "react";
import { useFormik, Form, Field } from "formik";

import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../../utils/mutations";

const projectForm = () => {
  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      Status: "",
      priority: "",
      Users: "",
      dependencies: "",
      category: "",
    },
    onSubmit: (values) => {
      createProject({ variables: values })
        .then((response) => {
          const { data } = response;
          const {
            title,
            description,
            Status,
            priority,
            Users,
            dependencies,
            category,
          } = values;
        })
        .then(() => {
          // going to use toastify here instead of alert
          alert("Project successfully created!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <div className="custom-card  col-12">
      <form className="project-form" onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="title"
          name="title"
          id="title"
          placeholder="Enter title here"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label htmlFor="description">Description</label>
        <input
          type="description"
          name="description"
          id="description"
          placeholder="Enter description here"
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        <label htmlFor="Status">Status</label>
        <input
          type="text"
          name="Status"
          id="Status"
          placeholder="Enter Status here"
          onChange={formik.handleChange}
          value={formik.values.Status}
        />

        <label htmlFor="priority">Priority</label>
        <input
          type="text"
          name="priority"
          id="priority"
          placeholder="Choose priority of project"
          onChange={formik.handleChange}
          value={formik.values.priority}
        />

        <label htmlFor="Users">Users</label>
        <input
          type="text"
          name="Users"
          id="Users"
          placeholder="Add Users to project"
          onChange={formik.handleChange}
          value={formik.values.Users}
        />

        <label htmlFor="dependencies">Dependencies</label>
        <input
          type="text"
          name="dependencies"
          id="dependencies"
          placeholder="Add dependencies to project"
          onChange={formik.handleChange}
          value={formik.values.dependencies}
        />

        <label htmlFor="category">Category</label>
        <Field as="select" name="category" id="category">
          <option value="">select</option>
          <option value="option1">AC</option>
          <option value="option2">SWaGA</option>
          <option value="option3">Viatorr</option>
        </Field>
      </form>
    </div>
  );
};

export default projectForm;
