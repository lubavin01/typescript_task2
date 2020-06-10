import Cart from './service/Cart';
import Book from './domain/Book';
// import MusicAlbum from './domain/MusicAlbum';

// const cart = new Cart();
// console.log(cart.items);

// cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
// cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

// console.log(cart.items);

const cart = new Cart();

const book1 = new Book(1, 'book', 'author', 100, 10);
const book2 = new Book(2, 'book2', 'author', 200, 10);
const book3 = new Book(3, 'book3', 'author', 400, 10);

cart.add(book1);
cart.add(book2);
cart.add(book3);

cart.deleteItem(3);

console.log(cart);

