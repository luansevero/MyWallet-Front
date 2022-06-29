import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";



import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Wallet from "./components/pages/Wallet";
import Entry from "./components/pages/Entry";
import Exit from "./components/pages/Exit";
import Edit from "./components/pages/Edit";

export default function App() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/wallet/entry" element={<Entry />} />
                    <Route path="/wallet/exit" element={<Exit />} />
                    <Route path="/wallet/entry/edit/:id" element={<Edit />} />
                    <Route path="/wallet/exit/edit/:id" element={<Edit />} />
            </Routes>
        </BrowserRouter>
    )
}

//<Route path="/" element={} />