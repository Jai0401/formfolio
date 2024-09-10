"use client"
import * as React from "react";
import Description from './Description';
import Name from './Name';
import SubmitButton from "./SubmitButton";
import Projects from "./Projects";
import Links from "./Links";

export default function Form() {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [projects, setProjects] = React.useState([{title: "", description: "", link: ""}]);
    const [links, setLinks] = React.useState([{title: "GitHub", url: ""},{title: "LinkedIn", url: ""},{title: "Resume", url: ""},{title:'Email', url:''}]);
    function submitForm() {
        console.log("Name: ", name);
        console.log("Description: ", description);
    }

    return (
        <div className="py-4 flex justify-center items-center pt-10 px-2">
            <form className="border-2 border-black/30 rounded-lg p-8 w-full max-w-3xl">
                <Name name={name} setName={setName}/>
                <Description description={description} setDescription={setDescription}/>
                <Projects projects={projects} setProjects={setProjects}/>
                <Links links={links} setLinks={setLinks}/>
                <SubmitButton submitForm={submitForm}/>
            </form>
        </div>
    );
}
