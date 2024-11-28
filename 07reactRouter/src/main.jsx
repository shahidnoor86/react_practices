import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Contact } from './components/Contact/Contact';
import { User } from './components/User/User';
import { Github, githubInfoLoader } from './components/Github/Github';


/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "", element: <Home />
      },
      {
        path: "about", element: <About />
      },
      {
        path: "contact", element: <Contact />
      }
    ]
  }
]); */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader}/>
      <Route path="user/:userId" element={<User />} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
