import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import Layout from "./component/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" exact element={<AllMeetupsPage />}></Route>
          <Route path="/new-meetup" element={<NewMeetupPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
