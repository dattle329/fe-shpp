import { useState } from "react";
import * as ApiHandler from "../../api/User";

const Authenticated = () => {
  const [mess, setMess] = useState("");
  function test() {
    ApiHandler.test()
      .then((res) => setMess(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <button onClick={test}>aaa</button>
      <h1>{mess}</h1>
    </div>
  );
};

export default Authenticated;
