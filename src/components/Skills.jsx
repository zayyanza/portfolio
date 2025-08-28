import React from 'react'
import css from '../assets/css3.svg'
import reactSVG from '../assets/react.svg'
import tailwindSVG from '../assets/tailwindcss.svg'
import javascriptSVG from '../assets/javascript.svg'
import laravelSVG from '../assets/laravel.svg'
import cpp from '../assets/c-plus-plus.svg'
import flutter from '../assets/flutter.svg'
import github from '../assets/github.svg'
import mysql from '../assets/mysql.svg'
import python from '../assets/python.svg'
import shandcn from '../assets/shadcn-ui.svg'
import typescript from '../assets/typescript.svg'
import html from '../assets/html.svg'


function SkillCard(props) {
    return (
        <div className='flex gap-3 items-center my-4 border-solid border border-bg-variant p-2 rounded-xl'>
            <div className='bg-bg-variant rounded-xs p-2'>
                <img className="h-12" src={props.img} alt="" />
            </div>
            <div className='font-semibold'>{props.name}</div>
        </div>
    )
}

function Skills() {
  return (
    <section id='skills' className='p-24'>
        <div>
            <h2 className='text-4xl text-primary'>Skills</h2>
        </div>
        <div className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
            <SkillCard img={reactSVG} name='React'></SkillCard>
            <SkillCard img={tailwindSVG} name='Tailwind'></SkillCard>
            <SkillCard img={laravelSVG} name='Laravel'></SkillCard>
            <SkillCard img={typescript} name='Typescript'></SkillCard>
            <SkillCard img={flutter} name='Flutter'></SkillCard>
            <SkillCard img={github} name='Git/GitHub'></SkillCard>
            <SkillCard img={mysql} name='MySQL'></SkillCard>
            <SkillCard img={shandcn} name='Shadcn/ui'></SkillCard>
            <SkillCard img={html} name='HTML'></SkillCard>
            <SkillCard img={css} name='CSS'></SkillCard>
            <SkillCard img={javascriptSVG} name='Javascript'></SkillCard>
            <SkillCard img={python} name='Python'></SkillCard>
            <SkillCard img={cpp} name='C++'></SkillCard>
        </div>
        
    </section>
  )
}

export default Skills