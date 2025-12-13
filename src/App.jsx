import { useState, useEffect } from "react";
import HomePage from './pages/home';
import AboutPage from "./pages/about";
import NotFoundPage from './pages/not-found';
import CoinDetailsPage from './pages/coin-details';
import { Routes, Route } from 'react-router';
import Header from "./components/Header";
const API_URL = import.meta.env.VITE_COINS_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('market_cap_desc');

  useEffect(() => {
    const fetchCoins = async () => {
       try {
          const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=10&page=1&sparkline=false`
        );
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setCoins(data);
       } catch (err) {
        setError(err.message);
       } finally {
        setLoading(false);
       }
    };

     fetchCoins();

    //   fetch(API_URL)
    //     .then((res) => {
    //       if (!res.ok) throw new Error('Failed to fetch data');
    //       return res.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       setCoins(data);
    //       setLoading(false);
    //     })
    //     .catch((err) => {
    //       setError(err.message);
    //       setLoading(false);
    //     })
  }, [limit]);

  return (
    <>
    <Header />
     <Routes>
        <Route
          path='/'
          element={
            <HomePage
              coins={coins}
              filter={filter}
              setFilter={setFilter}
              limit={limit}
              setLimit={setLimit}
              sortBy={sortBy}
              setSortBy={setSortBy}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/coin/:id' element={<CoinDetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </>
  );
};

export default App;



//Environment variables - are special values stored outside
//your code thatlet you configure your app without hardcoding 
// sensitive or environment-specific info.

// .env - loaded inall cases(base default variables)
// .env.local - loaded in all cases but local only
// .env.development, .env.production - loaded in that mode only
// .env.developmet.local, .env.production.local - loaded in that mode only and local only
// .env.test - test specific config

//when u use environment variable with vite, u need to include the _VITE prefix
// VITE_API_URL='XXXXXX'

//accessing environment variables
//import.meta.env.VITE_API_URL;

//WHEN USING .ENV FILES IN THE FRONTEND , u should not store secure information
// such as API keys and secrets as they are exposed to the client-side code.

//Handling Sensitive Data

//Create a backend server (Node.js, Python, PHP, etc)
//Serverless functions(vercel, netlify, AWS, etc)
//cloudflare workers
//secrets managers