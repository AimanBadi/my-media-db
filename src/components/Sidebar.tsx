import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [visible, setVisible] = useState(true);
  return visible ? (
    <div
      className={`${
        visible ? "flex" : "hidden"
      } flex-col h-full p-4 shadow-md gap-4 ml-auto`}
    >
      <FontAwesomeIcon
        icon={faBars}
        className="cursor-pointer"
        onClick={() => setVisible(false)}
      />
      <h1>Sidebar</h1>
    </div>
  ) : (
    <div className="flex p-4">
      <FontAwesomeIcon
        icon={faBars}
        className="cursor-pointer"
        onClick={() => setVisible(true)}
      />
    </div>
  );
};

export default Sidebar;
