import express from 'express';
import BookController from '../controller/book_controller.js';
const router = express.Router();

router.get('/', BookController.main_page)
router.post('/create_book', BookController.create_book)
router.get('/get_all_books', BookController.get_all_books)
router.get('/get_book/:id', BookController.get_book)

export default router