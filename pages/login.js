import { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Redirect to homepage after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "5px" }}>
          Login
        </button>
      </form>
    </div>
  );
}
