/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { supabase } from './client'; // Import supabase from client.js
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
  const [creators, setCreators] = useState([]); // State to hold content creators

  useEffect(() => {
    // Function to fetch content creators from the database
    async function fetchCreators() {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data); // Update state with fetched content creators
      }
    }

    fetchCreators(); // Call the function to fetch content creators
  }, []);

    return (
      <Router>
        <Routes>
          {/* Show all creators */}
          <Route path="/" element={<ShowCreators creators={creators}/>} />
  
          {/* View a single creator */}
          <Route path="/creator/:name" element={<ViewCreator />} />
  
          {/* Edit an existing creator */}
          <Route path="/creator/:name/edit" element={<EditCreator />} />
  
          {/* Add a new creator */}
          <Route path="/add" element={<AddCreator />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
  