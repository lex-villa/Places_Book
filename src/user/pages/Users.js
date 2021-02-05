import React from "react";

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Cheems',
            image: 'https://m.media-amazon.com/images/I/51nwxb8IVmL._AC_SL1000_.jpg',
            places: 3
        },
    ]

    return (
        <UsersList items={USERS} />
    );
};

export default Users;