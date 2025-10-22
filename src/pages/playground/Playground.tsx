import { useState } from "react";

export const Playground = () => {
  const [email, setEmail] = useState("");
  const handleEntrar = () => {
    console.log(email);
  };
  return (
    <>
      <form>
        <label htmlFor="">
          <span>email</span>
          <input
            value={email}
            placeholder="exemplo@email.com"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </label>
        <label htmlFor="">
          <span>password</span>
          <input type="password" />
        </label>
        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </>
  );
};
