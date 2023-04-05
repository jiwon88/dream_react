import React from "react";

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avatar 
                    image ='https://images.unsplash.com/photo-1678260102701-67dddc6b73d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80'
                    name = 'Bob'
                    size = {200}
                    />
                    <p>안녕하세요!</p>
            </Navbar>

            <Navbar>
                안녕하세요!
            </Navbar>
        </div>
    );
}

function Navbar({ children }) {
    return (
        <header style={{ backgroundColor: 'yellow' }} >{children}</header>
    );
}

function Avatar({ image, name, size }) {
    return (
        <div>
            <img
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{ borderRadius: '50%' }}
            />
            
        </div>
    );
}