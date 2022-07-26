const FavoriteBookController = require('../controllers/book-cotroller/favorite-book');
const BookController = require('./book-cotroller/book')

exports.routesConfig = function (app) {

    app.post('/favorite', [
      FavoriteBookController.addFavorite
    ]);

    app.get('/favorite', [
      FavoriteBookController.getAll
    ]);

    app.get('/books', [
      BookController.getListBook
    ]);
};