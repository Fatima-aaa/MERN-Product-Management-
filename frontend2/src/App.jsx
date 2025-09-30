import React from 'react';
import AddProductForm from './AddProductForm';
import UserTable from './UserTable';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🛒 Product Management Dashboard</h1>
      </header>
      <main className="app-main">
        <section className="form-section">
          <AddProductForm />
        </section>
        <section className="table-section">
          <UserTable />
        </section>
      </main>
    </div>
  );
};

export default App;
