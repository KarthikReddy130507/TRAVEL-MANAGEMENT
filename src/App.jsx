import React from 'react'

export default function App(){
  return (
    <div className="container">
      <header>
        <h1>Travel Management - Frontend (Demo)</h1>
        <p>Automatically build & deploy with GitHub Actions on every push to main.</p>
      </header>

      <main>
        <section className="card">
          <h2>Search trips</h2>
          <input placeholder="Enter destination..." />
          <button>Search</button>
        </section>

        <section className="card">
          <h2>Popular Destinations</h2>
          <ul>
            <li>Paris</li>
            <li>Tokyo</li>
            <li>New York</li>
          </ul>
        </section>
      </main>

      <footer>
        <small>Template repo: ready-to-upload ZIP for assessment.</small>
      </footer>
    </div>
  )
}