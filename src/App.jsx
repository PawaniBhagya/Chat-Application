import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Chat from "./pages/Login/Chat/Chat";
import ProfileUpdate from "./pages/Login/ProfileUpdate/ProfileUpdate";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Profile" element={<ProfileUpdate />} />
      </Routes>
    </>
  );
};
export default App;
