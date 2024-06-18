import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

import { CREATE_CATEGORY } from "../dataProvider/dataProvider";

export const CategoryCreate = () => {
  const [createCategory, { loading, error }] = useMutation(CREATE_CATEGORY);

  const handleCreateCategory = (categoryData) => {
    
  }
};
