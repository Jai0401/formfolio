import React from 'react'

export default function Description({description, setDescription}:{description:string, setDescription:React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <div className="mb-3">
        <label htmlFor="description" className="block font-medium tracking-tighter mb-1">Brief Description</label>
        <textarea
            id="description"
            className="w-full px-2 py-1 rounded-md border-2 border-black/10 min-h-[160px]" 
            placeholder="I am a Computer Science student at Rajiv Gandhi Institute of Petroleum Technology. My passion lies in Machine Learning and Web Development, and during my spare time, I actively participate in open-source projects..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
    </div>
  )
}
