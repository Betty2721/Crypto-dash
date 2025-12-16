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
import { useContext } from 'react';

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


//Understanding the building process

//Building - ur app refers to creating a production-ready version of your app
//           that the browser can run efficiently.

//The result is a set of static files-HTML,CSS,JS and assets -
//  that can be served quickly and reliably to users.

//  npm run build----command

// What Happens During Build?
   // Transpile code from JSX,TypeScript,etc to plain JS
   // Build code into single or multiple files
   // Minify code to reduce file size(remove comments, white spaces)
   // Optimize assets (images, fonts, etc)
   // Inject runtime code to handle hot module replacement

//      Context API

//  problems with Holding state in App
   //App.jsx becomes bloated
   //Prop drilling through multiple layers
   //No separation of state

// Context API -  a built-in way in react to share data(state)
           //across components without passing props manually through
           //every level of the component tree.  

    //  How it works

// 1. create context object
const ThemeContext = React.createContext();

// 2. provide value with provider
<ThemeContext.Provider value={{ theme: 'dark' }}>
    // it can be a function
    <App />
</ThemeContext.Provider>

// 3. consume Anywhere with useContext()
const { theme } = useContext(ThemeContext);

