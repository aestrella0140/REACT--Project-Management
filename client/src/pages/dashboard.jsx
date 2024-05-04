import { useQuery, useMutation } from "@apollo/client";
import React, { useState} from "react";

import ProjectList from '../components/projectList';
import CategoryMenu from "../components/CategoryMenu";
import Project from '../components/card/project';

import { CREATE_PROJECT } from "../utils/mutations";
import { QUERY_PROJECTS, QUERY_SINGLE_PROJECT } from "../utils/queries";

const dashboard = () => {
    const { loading, data } = useQuery(QUERY_PROJECTS);
    const [addProject] = useMutation(CREATE_PROJECT);
    const projects = data?.projects || [];
    const [showProject, setShowProject] = useState(false);

    const handleShowProject = () => {
        setShowProject(!showProject);
    };

    const handleAddProject = async (projectData) => {
        try {
            await addProject({
                variables: {...projectData}
            });
            setShowProject(false);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <main>
            <div>
                <CategoryMenu />
                <button onClick={handleShowProject}>Add Project</button>
                {showProject && <Project onAddProject={handleAddProject} />}
                <div>
                    {loading ? (
                        <div>loading...</div>
                    ) : (
                        <ProjectList 
                        projects={projects}
                        title="List of current ongoing and finished projects"
                        />
                    )}
                </div>
                
            </div>
        </main>
    );
};

export default dashboard;