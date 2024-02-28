import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// this to create project card
import Project from '../components/card/project';
// project list
import ProjectList from '../components/projectList';

import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
    const { userId } = useParams();

    const { loading, data } = useQuery(
        userId ? QUERY_SINGLE_USER : QUERY_ME,
        {
            variables: { userId: userId },
        }
    );

    const profile = data?.me || data?.profile || {};

    if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
        return <Navigate to="me" />;
    }

    if(loading) {
        return <div>loading....</div>;
    }

    if (!profile?.name) {
        return(
            <h4>
                You need to be logged in to see your profile page. Use the navigation links above to 
                sign in or sign up!
            </h4>
        );
    }

    // need a project list component first then bring in both project list and project form in t
    // in the return
    return (
        <div>
            <h2>
                {userId ? `${profile.name}'s` : 'Your'} friends projects are here
            </h2>

            {profile.projects?.length > 0 && (
                <ProjectList 
                projects={profile.projects}
                isLoggedInUser={!userId && true}
                />
            )}

            <div>
                <Project userId={profile._id}/>
            </div>
        </div>
    );
};

export default Profile();
