import { useState } from "react";
import SearchUser from "./components/SearchUser";

import CardProfile from "./components/CardProfile";
import { ListFollowers } from "./components/ListFollowers";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="wrapper">
      {
        user ? (
          <>
            <CardProfile user={user} />
            <ListFollowers user={user.login} />
          </>
        ) : (
          <SearchUser getData={(data) => setUser(data)} />
        )
      }
    </div>
  )
}