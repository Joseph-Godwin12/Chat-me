import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Work from './Work.jsx'
import Group from './Group.jsx'
import Room from './Room.jsx'
import Chat from './Chat.jsx'
import Becky from './Becky.jsx'
import Confidence from './Confidence.jsx'
import Duru from './Duru.jsx'
import Elder from './Elder.jsx'
import Festus from './Festus.jsx'
import Grant from './Grant.jsx'
import Obinna from './Obinna.jsx'
import { Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"


export default function App() {

    const router = createBrowserRouter(createRoutesFromElements(

        <Route path='/' element={<Work />}>
            <Route path='/chat' element={<Chat />} />
            <Route path='/room' element={<Room />} />
            <Route path='/group' element={<Group />} />
            <Route path='/becky' element={<Becky />} />
            <Route path='/confidence' element={<Confidence />} />
            <Route path='/duru' element={<Duru />} />
            <Route path='/elder' element={<Elder />} />
            <Route path='/festus' element={<Festus />} />
            <Route path='/grant' element={<Grant />} />
            <Route path='/obinna' element={<Obinna />} />
        </Route>



    ))
    return (
        <RouterProvider router={router} />

    )
}


