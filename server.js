import express from 'express';

const app = express();

const movies = [
    {
      name: 'The Conjuring',
      year: 2013,
      poster: 'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg',
      description: 'The Conjuring is a 2013 American supernatural horror film directed by James Wan and written by Chad Hayes and Carey W. Hayes.'
    },
    {
      name: 'Anabelle',
      year: 2014,
      poster: 'https://fr.web.img5.acsta.net/pictures/19/05/29/12/09/4290749.jpg',
      description: 'Annabelle movies are a series of three Warner Bros films set in James Wans The Conjuring universe.'
    },
    {
      name: 'The Nun',
      year: 2018,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_.jpg',
      description: 'In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.'
    },
    {
      name: 'The devil made me',
      year: 2021,
      poster: 'https://m.media-amazon.com/images/I/415e-df8XGL.jpg',
      description: 'Paranormal investigators Ed and Lorraine Warren take on one of the most sensational cases of their careers after a cop stumbles...'
    },
    {
        name: 'The Nun II',
        year: 2023,
        poster: 'https://i.pinimg.com/originals/0d/bb/b7/0dbbb7a410564d4acc77c05d7a9764ef.jpg',
        description: 'In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.'
      }
  ];
  
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Body parse
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Create static files from the public directory
app.use(express.static('public'));

// Route for the home page
app.get('/', (req, res) => {
    res.render('index', { movies });
});

// Route for handling errors 404
app.use((req, res) => {
    res.status(404).render('404');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
