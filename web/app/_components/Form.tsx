"use client"
import * as React from "react";
import Description from './Description';
import Name from './Name';
import SubmitButton from "./SubmitButton";
import Projects from "./Projects";
import Links from "./Links";
import axios from "axios";

export default function Form() {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [projects, setProjects] = React.useState([{title: "", description: "", link: ""}]);
    const [links, setLinks] = React.useState([{title: "GitHub", url: ""},{title: "LinkedIn", url: ""},{title: "Resume", url: ""},{title:'Email', url:''}]);
    function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post('http://localhost:4000/form', {name, description, projects, links})
            .then(response => {
                console.log('Form submitted successfully', response);
            })
            .catch(error => {
                console.error('Error submitting the form', error);
            });
    }

    return (
        <div className="py-2 flex justify-center items-center px-2">
            <form className="border-2 border-black/30 rounded-lg p-8 w-full max-w-3xl" onSubmit={submitForm}>
                <Name name={name} setName={setName}/>
                <Description description={description} setDescription={setDescription}/>
                <Projects projects={projects} setProjects={setProjects}/>
                <Links links={links} setLinks={setLinks}/>
                <SubmitButton />
            </form>
        </div>
    );
}
