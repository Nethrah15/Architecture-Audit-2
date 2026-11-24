import React from "react";
export default function App() {
  return (
    <div>
      <a href="#main" className="skip-link">Skip to main content</a>
      <header><h1>SWYNEX ExpenseTrack</h1></header>
      <main id="main">
        <h2>Add Expense</h2>
        <form>
          <label htmlFor="title">Expense Title</label>
          <input id="title" type="text" placeholder="e.g. Lunch" />
          <label htmlFor="amount">Amount</label>
          <input id="amount" type="number" placeholder="100" />
          <label htmlFor="category">Category</label>
          <select id="category"><option>Food</option><option>Travel</option><option>Rent</option></select>
          <button type="submit">Add Expense</button>
        </form>
        <img src="/logo.png" alt="SWYNEX ExpenseTrack logo" />
      </main>
      <style>{`a:focus-visible, button:focus-visible, input:focus-visible { outline: 2px solid #2563EB; } .skip-link { position:absolute; top:-40px; } .skip-link:focus { top:0; background:#000; color:#fff; padding:8px; }`}</style>
    </div>
  );
}
