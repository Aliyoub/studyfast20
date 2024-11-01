const Database = require("better-sqlite3");
const path = require("path");

// // Create a database connection
// const db = new Database(path.join(process.cwd(), '../', 'database.db'));
const db = new Database(path.join(process.cwd(), "../database.db2"));
export default db;

// Function to open the SQLite database
// export function openDB() {
//     const db = new Database('../database.db'); // Specify the path to your SQLite database file
//     return db;
//   }

export function createUsersTable() {
  //   const db = openDB();
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    )
  `);
}

export function insertUser(name, email) {
  //   const db = openDB();
  const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
  stmt.run(name, email);
}

export function updateUser(id, name) {
  //   const db = openDB();
  const stmt = db.prepare("UPDATE users SET name = ?  WHERE id = ?");
  stmt.run(id, name);
}

export function getAllUsers() {
  //   const db = openDB();
  const stmt = db.prepare("SELECT * FROM users");
  return stmt.all();
}

export function deleteUser(id) {
  //   const db = openDB();
  const stmt = db.prepare("DELETE FROM users WHERE id = ?");
  stmt.run(id);
}

// // Open the database
// const db = new Database('your-database-file.db', { verbose: console.log });

// // Query to get all table names
// const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table';").all();

// // Output the table names
// tables.forEach(table => {
//   console.log(table.name);
// });

// // Close the database
// db.close();

// ================================ Content  =====================================================

export function createContentsTable() {

  //   const db = openDB();
  db.exec(`
    CREATE TABLE IF NOT EXISTS contents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      contentTitle TEXT NOT NULL,
      contentDescription TEXT NOT NULL,
      isSelectedItem INTEGER NOT NULL
    )
  `);
}

export function insertContent(contentTitle, contentDescription, isSelectedItem) {
  //   const db = openDB();
  const stmt = db.prepare(
    "INSERT INTO contents (contentTitle, contentDescription, isSelectedItem) VALUES (?, ?, ?)"
  );
  stmt.run(contentTitle, contentDescription, isSelectedItem);
}

export function updateContent(id, contentTitle, contentDescription, isSelectedItem) {
  // export function updateContent(contentTitle, contentDescription) {
  //   const db = openDB();
  const stmt = db.prepare(
    "UPDATE contents SET contentTitle = ?, contentDescription = ?, isSelectedItem = ? WHERE id = ?"
  );
  stmt.run(id, contentTitle, contentDescription, isSelectedItem);
}

export function getAllContents() {
  //   const db = openDB();
  const stmt = db.prepare("SELECT * FROM contents");
  return stmt.all();
}

export function deleteContent(id) {
  //   const db = openDB();
  const stmt = db.prepare("DELETE FROM contents WHERE id = ?");
  stmt.run(id);
}
