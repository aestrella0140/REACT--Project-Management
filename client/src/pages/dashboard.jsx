import { useQuery } from "@apollo/client";

import ProjectList from '../components/projectList';

import { QUERY_PROJECTS } from "../utils/queries";

const dash = () => {
    const { loading, data } = useQuery(QUERY_PROJECTS);
    const projects = data.projects || [];

    return (
        <main>
            <div>
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