import express from 'express';
import BookController from '../controller/book_controller.js';
const router = express.Router();

router.get('/', BookController.main_page)
router.get('/get_all_books', BookController.get_all_books)
router.get('/get_book/:id', BookController.get_book)

router.post('/create_book', BookController.create_book)
router.delete('/delete_book/:id', BookController.delete_book)

router.put('/update_book/:id', BookController.update_book)

export default router