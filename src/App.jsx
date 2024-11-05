import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import supabase from './supabase';
import LandingPage from './components/landingpage';
import CreatePage from './components/create';
import GalleryPage from './components/gallery';
import CrewmateDetail from './components/crewmatedetail';
import EditPage from './components/editpage'
function App() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    fetchCrewmates();
  }, []);

  const fetchCrewmates = async () => {
    const { data, error } = await supabase.from('crewmate').select('*');
    if (error) console.error('Error fetching crewmates:', error);
    else setCrewmates(data);
  };

  const addCrewmate = async (crewmate) => {
    const { data, error } = await supabase.from('crewmate').insert([crewmate]);
    if (error) console.error('Error adding crewmate:', error);
    else setCrewmates([...crewmates, ...data]);
  };

  const updateCrewmate = async (id, updatedCrewmate) => {
    const { data, error } = await supabase.from('crewmate').update(updatedCrewmate).eq('id', id);
    if (error) console.error('Error updating crewmate:', error);
    else setCrewmates(crewmates.map(c => (c.id === id ? data[0] : c)));
  };

  const deleteCrewmate = async (id) => {
    const { error } = await supabase.from('crewmate').delete().eq('id', id);
    if (error) console.error('Error deleting crewmate:', error);
    else setCrewmates(crewmates.filter(c => c.id !== id));
  };

  
                          
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreatePage addCrewmate={addCrewmate} />} />
        <Route path="/crewmate/edit/:id" element={<EditPage crewmates={crewmates} updateCrewmate={updateCrewmate} />} />
        <Route path="/gallery" element={<GalleryPage crewmates={crewmates} deleteCrewmate={deleteCrewmate} />} />
        <Route path="/crewmate/:id" element={<CrewmateDetail crewmates={crewmates} updateCrewmate={updateCrewmate} />} />
      </Routes>
    </Router>
  );
}

export default App;
