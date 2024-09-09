import React from 'react'

export default function Name({name, setName}:{name:string, setName:React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <div className="mb-3">
        <label htmlFor="inputName" className="block font-medium tracking-tighter mb-1">Name</label>
        <input 
            type="text" 
            id="inputName" 
            className="w-full px-2 py-1 rounded-md border-2 border-black/10" 
            placeholder="Enter your name"
            aria-describedby="nameHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    </div>
  )
}
