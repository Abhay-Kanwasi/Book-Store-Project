import express from 'express';
import BookController from '../controller/book_controller.js';
const router = express.Router();

router.get('/', BookController.main_page)
router.post('/book', BookController.book_detail)

export default router