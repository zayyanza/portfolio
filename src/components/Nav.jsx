import React, { useState } from 'react'

import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaTools } from "react-icons/fa";

function Nav() {
    const [active, setActive] = useState('');


    return (
        <div>
            <nav className='bg-[rgba(0,0,0,0.3)] flex gap-4 w-max rounded-4xl py-3 px-7 z-10 backdrop-blur-sm fixed left-1/2 bottom-8 transform -translate-x-1/2'>
                <a href="#about" className={`${active === 'about' ? 'bg-primary !text-white' : 'bg-transparent'} p-3 rounded-full text-light text-xl`} onClick={() => setActive('about')}><LuUserRound></LuUserRound></a>
                <a href="#skills" className={`${active === 'skills' ? 'bg-primary !text-white' : 'bg-transparent'} p-3 rounded-full text-light text-xl`} onClick={() => setActive('skills')}><FaTools/></a>
                <a href="#projects" className={`${active === 'projects' ? 'bg-primary !text-white' : 'bg-transparent'} p-3 rounded-full text-light text-xl`} onClick={() => setActive('projects')}><BiBook></BiBook></a>
                <a href="#contact" className={`${active === 'contact' ? 'bg-primary !text-white' : 'bg-transparent'} p-3 rounded-full text-light text-xl`} onClick={() => setActive('contact')}><BiMessageSquareDetail></BiMessageSquareDetail></a>
            </nav>

        </div>
    )
}

export default Nav