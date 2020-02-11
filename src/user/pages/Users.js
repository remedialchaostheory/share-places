import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Sally Mae",
      image:
        "https://cdn.pixabay.com/photo/2020/02/05/15/19/zoo-4821484_1280.jpg",
      placeCount: 2
    },
    {
      id: 2,
      name: "Lenny Kite",
      image:
        "https://cdn.pixabay.com/photo/2015/06/21/20/12/peacock-816981_1280.jpg",
      placeCount: 4
    }
  ];
  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
