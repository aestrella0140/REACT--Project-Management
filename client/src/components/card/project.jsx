import React from "react";
import { useFormik, Formik, Form, Field } from "formik";

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
            <div className="top">
              <div className="card-1">
                <label htmlFor="title">Title</label>
                <Field
                  type="title"
                  name="title"
                  id="title"
                  placeholder="Enter title here"
                />
              </div>

              <div className="card-1">
                <label htmlFor="category">Category</label>
                <Field as="select" name="category" id="category">
                  <option value="">select</option>
                  <option value="option1">AC</option>
                  <option value="option2">SWaGA</option>
                  <option value="option3">Viatorr</option>
                </Field>
              </div>

              <div className="card-1">
                <label htmlFor="Users">Users</label>
                <Field
                  type="text"
                  name="Users"
                  id="Users"
                  placeholder="Add Users to project"
                />
              </div>
            </div>

            <div className="middle">
              <div className="description-container">
                <label className="desc-label" htmlFor="description">Description</label>
                <Field
                  as="textarea"
                  className="description-field"
                  type="description"
                  name="description"
                  id="description"
                  placeholder="Enter description here"
                />
              </div>

              <div className="card-2">
                <label htmlFor="Status">Status</label>
                <Field
                  className="status-field"
                  type="text"
                  name="Status"
                  id="Status"
                  placeholder="Enter Status here"
                />
              </div>
            </div>

            <div className="bottom">
              <div>
                <label htmlFor="priority">Priority</label>
                <Field as="select" name="priority" id="priority">
                  <option value="">select</option>
                  <option value="optionOne">low</option>
                  <option value="optionTwo">moderate</option>
                  <option value="optionThree">high</option>
                </Field>
              </div>

              <div>
                <label htmlFor="dependencies">Dependencies</label>
                <Field
                  type="text"
                  name="dependencies"
                  id="dependencies"
                  placeholder="Add dependencies to project"
                />
              </div>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default projectForm;
