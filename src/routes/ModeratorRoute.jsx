import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import Forbidden from '../components/Forbidden/Forbidden';

const ModeratorRoute = ({ children }) => {
    const { loading, user } = useAuth();
    const { role, roleLoading } = useRole()

    if (loading || !user || roleLoading) {
        return <LoadingSpinner />
    }

    if (role !== 'moderator') {
        return <Forbidden />
    }

    return children;
};

export default ModeratorRoute;