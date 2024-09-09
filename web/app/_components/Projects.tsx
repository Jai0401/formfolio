import Image from 'next/image';
import DeleteIcon from '../public/icons/delete.png';

interface Project {
    title: string;
    description: string;
}

export default function Projects({numProjects, setNumProjects, projects, setProjects}:
    {numProjects:number, setNumProjects:React.Dispatch<React.SetStateAction<number>>,
    projects: Project[], setProjects: React.Dispatch<React.SetStateAction<Project[]>>}) {
    return(
        <div className="mb-3">
            <p className="block font-bold text-lg underline underline-offset-4 tracking-tighter mb-3">Projects:</p>
            {[...Array(numProjects)].map((_, index) => (
                <div key={index} className="mb-3">
                    <label htmlFor={`projectName${index}`} className="block font-medium tracking-tighter mb-1">Project Name</label>
                    <input 
                        type="text" 
                        id={`projectName${index}`} 
                        className="w-full px-2 py-1 rounded-md border-2 border-black/10" 
                        placeholder="Enter the project name"
                        aria-describedby="projectNameHelp"
                        value={projects[index].title}
                        onChange={(e) => {
                            const updatedProjects = [...projects];
                            updatedProjects[index].title = e.target.value;
                            setProjects(updatedProjects);
                        }}
                    />
                    <label htmlFor={`projectDescription${index}`} className="block font-medium tracking-tighter mb-1">Project Description</label>
                    <textarea
                        id={`projectDescription${index}`}
                        className="w-full px-2 py-1 rounded-md border-2 border-black/10 min-h-[160px]" 
                        placeholder="I am a Computer Science student at Rajiv Gandhi Institute of Petroleum Technology. My passion lies in Machine Learning and Web Development, and during my spare time, I actively participate in open-source projects..."
                        aria-describedby="projectDescriptionHelp"
                        value={projects[index].description}
                        onChange={(e) => {
                            const updatedProjects = [...projects];
                            updatedProjects[index].description = e.target.value;
                            setProjects(updatedProjects);
                        }}
                    />
                    <button onClick={(e) => {
                        e.preventDefault();
                        const updatedProjects = projects.filter((_, i) => i !== index);
                        setProjects(updatedProjects);
                        setNumProjects(numProjects - 1);
                    }}><Image src={DeleteIcon} alt='delete' className='h-6 w-auto'></Image></button>
                </div>
            ))}
            {
                numProjects === 0 ? 
                <button 
                    type="button" 
                    className="bg-black rounded-lg px-4 py-2 hover:bg-black/80 font-semibold text-white"
                    onClick={() => {
                        setProjects([...projects, {title: "", description: ""}]);
                        setNumProjects(numProjects + 1)}}
                >Add a Project</button>:
                <button 
                    type="button" 
                    className="bg-black rounded-lg px-4 py-2 hover:bg-black/80 font-semibold text-white"
                    onClick={() => {
                        setProjects([...projects, {title: "", description: ""}]);
                        setNumProjects(numProjects + 1)}}
                >Add more</button>
            }
        </div>
    )
}