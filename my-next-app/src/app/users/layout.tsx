import React from 'react';

const UserLayout = ({children}) => {
    return (
        <div>
            <h1>This User layout</h1>
            {children}
        </div>
    );
};

export default UserLayout;