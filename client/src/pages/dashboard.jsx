import { useQuery } from "@apollo/client";

import ProjectList from '../components/projectList';

import { QUERY_PROJECTS, QUERY_SINGLE_PROJECT } from "../utils/queries";

const dashboard = () => {
    const { loading, data } = useQuery(QUERY_PROJECTS);
    const projects = data?.projects || [];

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

export default dashboard;