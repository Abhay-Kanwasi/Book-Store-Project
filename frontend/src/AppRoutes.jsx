import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import DeleteBook from './pages/DeleteBook';
import ShowBook from './pages/ShowBook';
import UpdateBook from './pages/UpdateBook';


const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/create' element={<CreateBooks />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/edit/:id' element={<UpdateBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default AppRoutes;