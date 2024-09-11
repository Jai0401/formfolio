"use client"
import * as React from "react";
import Description from './Description';
import Name from './Name';
import SubmitButton from "./SubmitButton";
import Projects from "./Projects";
import Links from "./Links";
// import Photo from "./Photo";

export default function Form() {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [projects, setProjects] = React.useState([{title: "", description: "", link: ""}]);
    const [links, setLinks] = React.useState([{title: "GitHub", url: ""},{title: "LinkedIn", url: ""},{title: "Resume", url: ""},{title:'Email', url:''}]);
    // const [photo, setPhoto] = React.useState<File | undefined>();
    
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        const formData = {
            name,
            description,
            projects,
            links
        };
    
        const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
    
        if (response.ok) {
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'portfolio.html';
            link.click();
            URL.revokeObjectURL(url);
        } else {
            console.error('Failed to generate HTML file.');
        }
    }

    return (
        <div className="py-2 flex justify-center items-center px-2">
            <form className="border-2 border-black/30 rounded-lg p-8 w-full max-w-3xl" onSubmit={handleSubmit}>
                {/* <Photo photo={photo} setPhoto={setPhoto}/> */}
                <Name name={name} setName={setName}/>
                <Description description={description} setDescription={setDescription}/>
                <Projects projects={projects} setProjects={setProjects}/>
                <Links links={links} setLinks={setLinks}/>
                <SubmitButton />
            </form>
        </div>
    );
}
