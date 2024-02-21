import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Warden = () => {
  const { rolePermission } = useSelector((state) => state?.Auth.user);
  console.log(rolePermission?.role_name, "rolePermission");
  return (
    <>
      <div>Warden action</div>
      {rolePermission?.role_name == "warden" ? (
        <Button variant="contained">order cleaning item</Button>
      ) : (
        ""
      )}
      {rolePermission?.role_name === "HR-officer" && (
        <>
          <Button variant="contained">Access HR Functionality</Button>
          <Button variant="contained">View cleaning All order</Button>
        </>
      )}
    </>
  );
};

export default Warden;
