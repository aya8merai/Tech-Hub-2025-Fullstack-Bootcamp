import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Posts from './Posts.jsx';
import Post from './Post.jsx';
import Todos from './Todos.jsx';
import UserTodos from './UserTodos.jsx';
import Users from './Users.jsx'
import PostComments from './PostComments.jsx';
import Layout from './Layouts/Layout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route index element={<App />} />                    
          <Route path='/posts' element={<Posts />} />                                    
            <Route path='/post/:id' element={<Post />} /> 
            <Route path='/posts/:id/comments' element={<PostComments />} />
          <Route path='/todos' element={<Todos />} />  
            <Route path='/userTodos/:id' element={<UserTodos />} />
          <Route path='/users' element={<Users />} /> 
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
