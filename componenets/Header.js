
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";

export default function Header() {
  const [user] = useAuthState(auth);

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link href="/">
        <h1 className="text-xl font-bold cursor-pointer">Tsixla</h1>
      </Link>

      <div>
        {user ? (
          <>
            <span className="mr-4">Welcome, {user.email}</span>
            <button onClick={() => auth.signOut()} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
              <button className="bg-blue-500 px-3 py-1 rounded mr-2">Sign In</button>
            </Link>
            <Link href="/signup">
              <button className="bg-green-500 px-3 py-1 rounded">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
