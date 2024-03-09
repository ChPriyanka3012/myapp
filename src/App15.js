import React from 'react'
import Feeds from './Feeds';
import Posts from './Posts';
import Albums from './Albums';
import Comments from './Comments';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function App15() {
  return (
    <div>
      <Router>
        <Link to="/">Feeds</Link> | <Link to="/post">Post</Link>  |  <Link to="/album">Albums</Link> |<Link to="/comments">Comments</Link>
        <Routes>
            <Route path="/"  element={<Feeds/>}></Route>
            <Route path="/post" element={<Posts/>}></Route>
            <Route path="/album" index element={<Albums/>}></Route>
            <Route path="/comments" element={<Comments/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}