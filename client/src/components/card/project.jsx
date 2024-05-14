import React from "react";
import { useFormik, Formik, Form, Field } from "formik";

import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../../utils/mutations";

const projectForm = () => {
  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT);


  return (
    <div className="custom-card  col-12">
      <Formik
        initialValues={{
          title: "",
          description: "",
          Status: "",
          priority: "",
          users: "",
          dependencies: "",
          category: "",
        }}
        onSubmit={(values) => {
          if (typeof values.users === 'string') {
            values.users = values.users.split(',').map(id => id.trim());
          }
          createProject({ variables: values })
            .then((response) => {
              const { data } = response;
              const {
                title,
                description,
                Status,
                priority,
                users,
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
          <Form className="project-form bg-light">
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
                  <option value="option1">ergo</option>
                  <option value="option2">people</option>
                  <option value="option3">delivery</option>
                  <option value="option4">quality</option>
                </Field>
              </div>

              <div className="card-1">
                <label htmlFor="users">Users</label>
                <Field
                  type="text"
                  name="users"
                  id="users"
                  placeholder="Add Users to project"
                  onSubmit={value => objectId(value)}
                />
              </div>
            </div>

            <div className="middle">
              <div className="description-container">
                <label className="desc-label ml-4" htmlFor="description">Problem Statement</label>
                <Field
                  as="textarea"
                  className="description-field mr-4"
                  type="description"
                  name="description"
                  id="description"
                  placeholder="Enter description here"
                  style={{resize: "none" }}
                />
              </div>

              <div className="card-2 mr-5">
                <label htmlFor="Status">Rankings</label>
                <Field as="select" name="Status" id="Status" className="status-field" >
                <option value="">select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

                </Field>
              </div>
            </div>

            <div className="bottom">
              <div className="mr-3">
                <label htmlFor="priority">Priority</label>
                <Field as="select" name="priority" id="priority">
                  <option value="">select</option>
                  <option className="low" value="optionOne">low</option>
                  <option className="moderate" value="optionTwo">moderate</option>
                  <option className="high" value="optionThree">high</option>
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
