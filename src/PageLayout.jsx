import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { Link } from "react-router-dom"; 

export default function PageLayout({ children }) {

  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {

    console.log("Cikis yapiliyor...");

    localStorage.removeItem("kiwitter_user");

    setUser(null);
  }

  return (
    <div className="relative">
      <div className="sticky top-0 bg-white shadow-md">
        <header className="container mx-auto p-6 flex flex-row justify-between items-center">
          <h1 className="text-lg font-bold text-lime-800">KIWITTER</h1>

          {user ? (
            <div className="flex gap-4 items-center">
              <p>{user.nickname}</p>
              <button onClick={handleLogout} className="bg-lime-800 text-white text-sm p-2 rounded-lg">Çıkış yap</button>
            </div>
          ) : (
            <nav className="flex gap-4 items-center">
              <Link className="text-lime-800 text-sm font-bold" to="/login">Giriş yap</Link>
              <Link className="text-lime-800 text-sm font-bold" to="/signup">Kayıt ol</Link>
            </nav>
          )}
        </header>
      </div>
      <div className="pt-6 pb-12">
        <main className="container mx-auto bg-white min-h-96 rounded-xl shadow-xl p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
