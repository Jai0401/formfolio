import Image from 'next/image';
import DeleteIcon from '../public/icons/delete.png';

interface Project {
    title: string;
    description: string;
    link: string;
}

export default function Projects({projects, setProjects}:
    {projects: Project[], setProjects: React.Dispatch<React.SetStateAction<Project[]>>}) {
    return (
        <div className="mb-3">
            <p className="block font-bold text-lg underline underline-offset-4 tracking-tighter mb-3">Projects:</p>
            {projects.map((project, index) => (
                <div key={index} className="mb-3">
                    <label htmlFor={`projectName${index}`} className="block font-medium tracking-tighter mb-1">Project Name</label>
                    <input 
                        type="text" 
                        id={`projectName${index}`} 
                        className="w-full px-2 py-1 rounded-md border-2 border-black/10" 
                        placeholder="Enter the project name"
                        value={project.title}
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
                        placeholder="Enter project description"
                        value={project.description}
                        onChange={(e) => {
                            const updatedProjects = [...projects];
                            updatedProjects[index].description = e.target.value;
                            setProjects(updatedProjects);
                        }}
                    />
                    <label htmlFor={`projectLink${index}`} className="block font-medium tracking-tighter mb-1">Project Link</label>
                    <input
                        type="url"
                        id={`projectLink${index}`}
                        className="w-full px-2 py-1 rounded-md border-2 border-black/10 mb-2"
                        placeholder="Enter project link"
                        value={project.link}
                        onChange={(e) => {
                            const updatedProjects = [...projects];
                            updatedProjects[index].link = e.target.value;
                            setProjects(updatedProjects);
                        }}
                    />
                    <button
                    className='px-2 py-1 rounded-lg bg-black/10 hover:bg-transparent'
                    onClick={() => {
                        const updatedProjects = projects.filter((_, i) => i !== index);
                        setProjects(updatedProjects);
                    }}>
                        <Image src={DeleteIcon} alt='delete' className='h-6 w-auto'></Image>
                    </button>
                </div>
            ))}
            <button 
                type="button" 
                className="bg-black rounded-lg px-4 py-2 hover:bg-black/80 font-semibold text-white"
                onClick={() => {
                    setProjects([...projects, {title: "", description: "", link: ""}]);
                }}
            >
                {projects.length === 0 ? "Add a Project" : "Add more"}
            </button>
        </div>
    )
}
