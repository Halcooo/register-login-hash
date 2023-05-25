import React from "react";
import { useEffect, useState } from "react";

function Content() {
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser"))
  );
  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")));
    console.log(loggedUser);
  }, []);

  return (
    <div>
      <h1>Welcome: {loggedUser.username} </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus hic
        fugiat dolore esse dolores, ut harum at deleniti facere id! Dolor eius
        libero provident officia, ut unde fuga nostrum ipsam ad modi voluptatem
        recusandae. Doloremque ratione consequatur nesciunt fugiat mollitia,
        asperiores reprehenderit molestiae distinctio minus nihil
        exercitationem. Porro ex adipisci magni facere id cupiditate voluptate
        fugiat unde odio officia.
      </p>
    </div>
  );
}

export default Content;
