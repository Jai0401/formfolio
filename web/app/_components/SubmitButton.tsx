import React from 'react'

export default function SubmitButton({submitForm}:{submitForm:()=>void}) {
  return (
    <div className="flex justify-end">
        <button type="submit" 
        className="bg-black rounded-lg px-4 py-2 hover:bg-black/80 font-semibold text-white"
        onClick={submitForm}
        >Submit</button>
    </div>
  )
}
