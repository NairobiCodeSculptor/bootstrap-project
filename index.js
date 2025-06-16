// Ensure your package.json includes: "type": "module"
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.use(express.static('assets'));

app.use(express.static('public'));

// Set the views directory (optional if using default 'views')
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" folder


// Routes
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/about', (req, res) => {
  res.render('about.ejs');
});

app.get('/contact', (req, res) => {
  res.render('contact.ejs');
});

app.get('/menu', (req, res) => {
  res.render('menu.ejs');
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});