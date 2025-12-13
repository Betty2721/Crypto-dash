//ROUTING - is the process of determining how ana application
//          responds to a client request for a specific endpoint/URL.

// In a SPA , this involves mapping certail UI components based
//    on the URL.

//Routing Solutions
//   1. React Router / Remix ..........declarative mode
//   2. TanStack Router
//   3. Next.js - file based routing
//   4. Wouter, Universal Router, Reacj Router

import { BrowserRouter , Routes, Route } from 'react-router';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/about' element={<AboutPage />}/>  
                <Route path='/contact' element={<ContactPage />}/>    
            </Routes>
        </BrowserRouter>
    )
}

//BrowserRouter - top level component that wraps the entire application.
//Routes - a component that contains all the route 
//Route - define a single route
