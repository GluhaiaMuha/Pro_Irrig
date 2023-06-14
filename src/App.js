import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Navbar from "./Navbar";
import Auth from "./Auth";


function App() {
    return (
        <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/"/>
                    <Route path="/auth" element={<Auth/>}/>
                </Routes>
        </BrowserRouter>
    );
}

export default App;
