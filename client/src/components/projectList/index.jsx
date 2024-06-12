import React from "react";
import { List, Datagrid, TextField } from 'react-admin';



export const ProjectList =  (props) => {
    <List {...props}>
        <Datagrid rowClick='edit'>
            <TextField source="id" />
            <TextField source="description"/>
            <TextField source="Status"/>
            <TextField source="priority"/>
            <TextField source="Users" />
            <TextField source="dependencies"/>
            <TextField source="category"/>
        </Datagrid>
    </List>
};

export default ProjectList;