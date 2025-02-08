import { Routes, Route, Link, NavLink } from "react-router-dom";import React from 'react';

export default function AboutPage() {
  return (
    <div>
      <h1>About Our Project</h1>
      <p>We are very passionate about doing a kanban thing</p>
      <p>Very very passionate</p>
      <div>
        <a href="https://github.com/aoge2716/Kanban-Board-App">Our repository</a>
        <a href="https://github.com/AntoineQuint">Antoine GitHub  </a>
        <a href="https://github.com/aoge2716">Aoge GitHub</a>
      </div>
      
      <Link to="/">
        <button>Try going backward</button>
      </Link>
    </div>
  );
}