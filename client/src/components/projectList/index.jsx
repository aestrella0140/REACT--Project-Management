import { useMutation } from "@apollo/client";

import { REMOVE_PROJECT } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";

const ProjectList = ({ projects, isLoggedInUser = false }) => {
    const [removeProject, { error }] = useMutation
        (REMOVE_PROJECT, {
            refetchQueries: [
                QUERY_ME,
                'me'
            ]
        });

    const handleRemoveProject = async (project) => {
        try {
            const { data } = await removeProject({
                variables: { project},
            });
        } catch (err) {
            console.log(err);
        }
    };

    if(!projects.length) {
        return <h3>no Projects yet</h3>;
    }

    return(
        <div>
            <div>
                {projects &&
                projects.map((project) => (
                    <div key={project.title}>

                    </div>
                ))
                }
            </div>
        </div>
    )
};

export default ProjectList;