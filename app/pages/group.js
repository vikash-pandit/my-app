// app/pages/group.js
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Group.module.css';

export default function Group() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Group Page</title>
        <meta name="description" content="Responsive Group Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="d-flex justify-content-between align-items-center py-3">
        <h1 className="text-primary">Group Page</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="row">
          <div className="col-md-8">
            <h2>Welcome to the Group Page</h2>
            <p>
              This is a sample group page designed for both mobile and desktop devices.
              Resize your browser to see the responsiveness.
            </p>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-3">
              <h3>Sidebar</h3>
              <p>This is a sidebar section.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-4">
        <p>&copy; 2024 Group Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
