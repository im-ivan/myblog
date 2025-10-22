import { useEffect, useState, type FormEvent } from "react";

export const Playground = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    console.log("igual");
  }, [email === "amora"]);
  const handleEntrar = () => {
    console.log(email);
  };
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="">
          <span>email</span>
          endereco
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
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};
