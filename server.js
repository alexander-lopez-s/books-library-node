import express from 'express';

const app = express();

const books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      cover: 'https://epqkkxb65h3.exactdn.com/wp-content/uploads/2023/02/m-2908.jpg',
      description: 'To Kill a Mockingbird is a novel by Harper Lee published in 1960. It is a classic of modern American literature.'
    },
    {
      title: 'Wuthuring Heights',
      author: 'Emily Brontë',
      year: 1847,
      cover: 'https://mpd-biblio-covers.imgix.net/9781466805743.jpg',
      description: '1Wuthering Heights is the first and only novel by the English author Emily Brontë, initially published in 1847 under her pen name "Ellis Bell".'
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: 1813,
      cover: 'https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg',
      description: 'Pride and Prejudice is a novel by Jane Austen published in 1813. It is a romantic classic that explores social class and marriage.'
    }
];

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Body parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create static files from the public directory
app.use(express.static('public'));

// Route for the home page
app.get('/', (req, res) => {
    res.render('index', { books });
});

// Route for handling errors 404
app.use((req, res) => {
    res.status(404).render('404');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
