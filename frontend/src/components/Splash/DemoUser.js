import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function DemoUser() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential, password }))
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <button onClick={e => {
        setCredential("Greedo");
        setPassword("password");
      }} type="submit">Demo User Login</button>
    </div>
    </form>
  );
}

export default DemoUser;
