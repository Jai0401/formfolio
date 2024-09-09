"use client"
import * as React from "react";
import Description from './Description';
import Name from './Name';
import SubmitButton from "./SubmitButton";
import Projects from "./Projects";

export default function Form() {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [numProjects, setNumProjects] = React.useState(1);
    const [projects, setProjects] = React.useState([{title: "", description: ""}]);
    function submitForm() {
        console.log("Name: ", name);
        console.log("Description: ", description);
    }

    return (
        <div className="py-4 flex justify-center items-center pt-10 px-2">
            <form className="border-2 border-black/30 rounded-lg p-8 w-full max-w-3xl">
                <Name name={name} setName={setName}/>
                <Description description={description} setDescription={setDescription}/>
                
                <Projects numProjects={numProjects} setNumProjects={setNumProjects} projects={projects} setProjects={setProjects}/>

                <SubmitButton submitForm={submitForm}/>
            </form>
        </div>
    );
}
