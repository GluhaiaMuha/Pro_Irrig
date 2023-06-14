import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Navbar from "./Components/Navbar";
import Auth from "./Components/Auth";
import Dashboard from "./Components/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
        ;
}

export default App;
