import { useState } from "react";
import { Homepage } from "./pages/Homepage";
import { Navbar } from "./components/Navbar";

export const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Navbar user={user} />
      <Homepage />
    </div>
  );
};
