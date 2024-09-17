import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'


export default function Work() {
    const location = useLocation();
    const hideHeaderPaths = ['/becky', '/confidence', '/duru', '/elder', '/festus', '/grant', '/obinna'];

    const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);



    return (
        <>
            {shouldShowHeader && (
                <div className="header">
                    <h2 className="header-text">Chat Me</h2>
                    <ul className="header-list">
                        <li><NavLink to={'/chat'} className="chat" >Chat</NavLink></li>
                        <li><NavLink to={'/room'} className="room">Room</NavLink></li>
                        <li><NavLink to={'/group'} className="group">Group</NavLink></li>
                    </ul>

                </div>
            )}
            <Outlet />

        </>
    )
}