import { Book } from "../models/book_model.js";

class BookController {
    static main_page = async (request, response) => {
        return response.status(234).send('Welcome to book store project')
    };

    static book_detail = async (request, response) => {
        try {
            if ( !request.body.tile || request.body.author || request.body.publishYear ) {
                return response.status(400).send({ message: 'Send all required fields: title, author, publishYear' })
            }

            const newBook = {
                title: request.body.title,
                author: request.body.author,
                publishYear: request.body.publishYear
            }

            const book = await Book.create(newBook);
            return response.status(201).send(book)
        }
        catch (error) {
            console.log(error.message);
            response.status(500).send({ message: error.message });
        }
    }
}

export default BookController