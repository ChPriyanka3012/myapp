import React from 'react'
import Feeds from './Feeds';
import Posts from './Posts';
import Albums from './Albums';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function App15() {
  return (
    <div>
      <Router>
        <Link to="/">Feeds</Link> | <Link to="/post">Post</Link>  |  <Link to="/album">Albums</Link>
        <Routes>
            <Route path="/" index element={<Feeds/>}></Route>
            <Route path="/post" element={<Posts/>}></Route>
            <Route path="/album" element={<Albums/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}