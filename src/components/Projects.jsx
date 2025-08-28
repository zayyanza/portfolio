import React from 'react'
import pokedex from '../assets/pokedex.mp4'
import coffee from '../assets/coffee-tracker.mp4'
import student from '../assets/student-management.mp4'
import portfolio from '../assets/portfolio.mp4'

const projects = [
    {
        name: 'Coffee Intake Tracker',
        desc: 'A web app to track coffee consumption. Users can log different coffee types along with price and time, and the app calculates stats like active caffeine level, daily intake, cost, and history. Data is stored with Firebase.',
        web: 'https://coffee-intake-tracker.netlify.app',
        git: 'https://github.com/zayyanza/coffee-intake-tracker',
        vid: coffee,
        tools: ['React', 'Tailwind', 'Typescript', 'Shadcn/ui', 'Firebase']
    },
    {
        name: "Zayyan's Portfolio",
        desc: 'A modern and responsive personal website built to showcase my skills, projects, and experience as a developer.',
        git: 'https://github.com/zayyanza/portfolio',
        web: 'https://zayyanza.netlify.app',
        vid: portfolio,
        tools: ['React', 'Tailwind']
    },
    {
        name: 'Student Management',
        desc: 'A CRUD-based web app for managing student records. It lets users add, edit, search, and delete students with a clean interface, search functionality, and pagination.',
        git: 'https://github.com/zayyanza/student-management-laravel',
        vid: student,
        tools: ['Laravel', 'MySQL']
    },
    {
        name: 'Pokedex',
        desc: 'A web app that serves as a digital Pokédex, built using the PokéAPI It allows users to search for Pokémon and view detailed information such as type, abilities, stats, and sprites. The project highlights my skills in working with RESTful APIs.',
        web: 'https://pokedex-zet.netlify.app',
        git: 'https://github.com/zayyanza/pokedex',
        vid: pokedex,
        tools: ['React', 'Tailwind', 'Typescript', 'Shadcn/ui', 'REST API']
    },
]

function ProjectCard(props) {
    return (
        <div className='flex flex-col gap-5 p-4 bg-bg-variant rounded-2xl justify-between'>
            <div className='flex flex-col gap-5'>
                <div className='rounded-2xl'>
                <video
                    src={props.vid}
                    autoPlay
                    loop
                    muted
                    playsInline
                    width="600"
                    style={{ borderRadius: "8px", maxWidth: "100%" }}
                />
            </div>
            <h4 className='text-2xl'>{props.name}</h4>
            <div className='flex flex-wrap gap-2'>
                {props.tools.map((tool, i) => (
                    <div className="py-0.5 px-2 text-xs bg-bg rounded-lg" key={i}>{tool}</div>
                ))}
            </div>
            <p className='text-light text-sm'>{props.desc}</p>
            </div>
            <div className='flex gap-4'>
                {props.web && <a href={props.web} className='btn ' target='_blank'>Website</a>}
                {props.git && <a href={props.git} className='btn' target='_blank'>Github</a>}
            </div>
        </div>

    )
}

function Projects() {
    return (
        <section id='projects' className='p-24'>
            <div>
                <h2 className='text-4xl text-primary mb-8'>Projects</h2>
            </div>

            <div className='grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]'>
                {projects.map((project, i) => {
                    return (
                        <ProjectCard
                            name={project.name}
                            vid={project.vid}
                            desc={project.desc}
                            git={project.git}
                            web={project.web}
                            key={i}
                            tools={project.tools}></ProjectCard>
                    )
                })}
            </div>

        </section>
    )
}

export default Projects