import React from "react";
import { useFormik ,Formik, Form, Field } from "formik";

import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../../utils/mutations";

const projectForm = () => {
  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT);

  // const formik = useFormik({
  //   initialValues: {
  //     title: "",
  //     description: "",
  //     Status: "",
  //     priority: "",
  //     Users: "",
  //     dependencies: "",
  //     category: "",
  //   },
  //   onSubmit: (values) => {
  //     createProject({ variables: values })
  //       .then((response) => {
  //         const { data } = response;
  //         const {
  //           title,
  //           description,
  //           Status,
  //           priority,
  //           Users,
  //           dependencies,
  //           category,
  //         } = values;
  //       })
  //       .then(() => {
  //         // going to use toastify here instead of alert
  //         alert("Project successfully created!");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  // });
  return (
    <div className="custom-card  col-12">
      <Formik
        initialValues={{
          title: "",
          description: "",
          Status: "",
          priority: "",
          Users: "",
          dependencies: "",
          category: "",
        }}
        onSubmit={(values) => {
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
        }}
      >
        {() => (
          <Form className="project-form">
            <label htmlFor="title">Title</label>
            <Field
              type="title"
              name="title"
              id="title"
              placeholder="Enter title here"
            />

            <label htmlFor="description">Description</label>
            <Field
              type="description"
              name="description"
              id="description"
              placeholder="Enter description here"
            />

            <label htmlFor="Status">Status</label>
            <Field
              type="text"
              name="Status"
              id="Status"
              placeholder="Enter Status here"
              
            />

            <label htmlFor="priority">Priority</label>
            <Field
              type="text"
              name="priority"
              id="priority"
              placeholder="Choose priority of project"
              
            />

            <label htmlFor="Users">Users</label>
            <Field
              type="text"
              name="Users"
              id="Users"
              placeholder="Add Users to project"
              
            />

            <label htmlFor="dependencies">Dependencies</label>
            <Field
              type="text"
              name="dependencies"
              id="dependencies"
              placeholder="Add dependencies to project"
            />

            <label htmlFor="category">Category</label>
            <Field as="select" name="category" id="category">
              <option value="">select</option>
              <option value="option1">AC</option>
              <option value="option2">SWaGA</option>
              <option value="option3">Viatorr</option>
            </Field>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default projectForm;
