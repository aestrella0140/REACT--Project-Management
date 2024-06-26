import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

import { CREATE_CATEGORY } from "../dataProvider/dataProvider";

const CategoryCreate = ({ isAdmin }) => {
  const [createCategory, { loading, error }] = useMutation(CREATE_CATEGORY);
  const [categoryType, setCategoryType] = useState("");

  const handleCreateCategory = async (categoryData) => {
    if (!isAdmin) {
      alert("only Admins can create categories");
      return;
    }

    try {
      const result = await createCategory({ variables: { type: categoryType } });
      console.log(result);
      setCategoryType("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={categoryType}
        onChange={(e) => setCategoryType(e.target.value)}
        placeholder="Enter new category type"
      />
      <button onClick={handleCreateCategory}>Create Category</button>
    </div>
  );
};

export default CategoryCreate;
