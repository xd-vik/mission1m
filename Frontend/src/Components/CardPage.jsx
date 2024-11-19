import React from "react";
import { useParams } from "react-router-dom";
import Enable from "../Components/Enable"
import Engage from "../Components/Engage"
import Empower from "../Components/Empower"

const CardPage = () => {
  const { id } = useParams();

  if (id === "0") {
    return <Enable />;
  } else if (id === "1") {
    return <Engage />;
  } else if (id === "2") {
    return <Empower />;
  } else {
    return <div>Page Not Found</div>; // Handle invalid IDs
  }
};

export default CardPage;
