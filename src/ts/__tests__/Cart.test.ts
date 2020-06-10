import Cart from '../service/Cart';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('3 books in cart, sum is correct', () => {

  const cart = new Cart();

  const book1 = new Book(1, 'book', 'author', 100, 10);
  const book2 = new Book(2, 'book2', 'author', 200, 10);
  const book3 = new Book(3, 'book3', 'author', 400, 10);

  cart.add(book1);
  cart.add(book2);
  cart.add(book3);

  expect(cart.getSum()).toBe(700);
});

test('sum with discount', () => {
  const cart = new Cart();

  const book1 = new Book(1, 'book', 'author', 100, 10);
  const book2 = new Book(2, 'book2', 'author', 200, 10);
  const book3 = new Book(3, 'book3', 'author', 400, 10);

  cart.add(book1);
  cart.add(book2);
  cart.add(book3);

  expect(cart.getSumWithDiscount(10)).toBe(630);
});

test('delete', () => {
  const cart = new Cart();

  const book1 = new Book(1, 'book', 'author', 100, 10);
  const book2 = new Book(2, 'book2', 'author', 200, 10);
  const book3 = new Book(3, 'book3', 'author', 400, 10);

  cart.add(book1);
  cart.add(book2);
  cart.add(book3);

  cart.deleteItem(3);
  
  expect(cart.items.length).toBe(2);
  expect(cart.items).not.toContain(book3);
  expect(cart.items).toContain(book1);
  expect(cart.items).toContain(book2);
});

