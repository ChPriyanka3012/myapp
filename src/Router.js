import React from "react";
import Feeds from "./Feeds";
import Post from "./Post";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Albums from "./Albums";
export default function RouterExp() {
  return (
    <div>
      <Router>
        <Link to="/">Feeds</Link> | <Link to="/post">Post</Link>|<Link to="/albums">Albums</Link>
        <Routes>
            <Route path="/" index element={<Feeds/>}></Route>
            <Route path="/post" element={<Post/>}></Route>
            <Route path="/albums" element={<Albums/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}