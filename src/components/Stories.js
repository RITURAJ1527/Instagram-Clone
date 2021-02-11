import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/i1.jpg", name: "Audi" },
    { id: 2, image: "/images/i2.jpg", name: "Raj" },
    { id: 3, image: "/images/i3.png", name: "Coder" },
    { id: 4, image: "/images/rituraj.png", name: "Rituraj" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
