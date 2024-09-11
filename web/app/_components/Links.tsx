import React from 'react'
import Image from 'next/image';
import DeleteIcon from '../public/icons/delete.png';

interface Link {
    title: string;
    url: string;
}   

export default function Links({links, setLinks}: {links: Link[], setLinks: React.Dispatch<React.SetStateAction<Link[]>>}) {
  return (
    <div className='mb-3'>
        <p className='block font-bold text-lg underline underline-offset-4 tracking-tighter mb-3'>Links:</p>
        {links.map((link, index)=>{
            return(
                <div key={index} className='mb-3 flex justify-between gap-2'>
                    <input 
                        type='text' 
                        id={`linkTitle${index}`} 
                        className='px-2 py-1 rounded-md border-2 border-black/10' 
                        placeholder='Enter the link title'
                        value={link.title}
                        onChange={(e) => {
                            const updatedLinks = [...links];
                            updatedLinks[index].title = e.target.value;
                            setLinks(updatedLinks);
                        }}
                    />
                    <input
                        type='url|email'
                        id={`linkUrl${index}`}
                        className='w-full px-2 py-1 rounded-md border-2 border-black/10'
                        placeholder='Enter link URL'
                        value={link.url}
                        onChange={(e) => {
                            const updatedLinks = [...links];
                            updatedLinks[index].url = e.target.value;
                            setLinks(updatedLinks);
                        }}
                    />
                    <button
                    className='px-2 py-1 rounded-lg bg-black/10 hover:bg-transparent'
                    onClick={() => {
                        const updatedLinks = links.filter((_, i) => i !== index);
                        setLinks(updatedLinks);
                    }}>
                        <Image src={DeleteIcon} alt='delete' className='h-auto w-auto'></Image>
                    </button>
                </div>
            )
        })}
            <button 
                type="button" 
                className="bg-black rounded-lg px-4 py-2 hover:bg-black/80 font-semibold text-white"
                onClick={() => {
                    setLinks([...links, {title: "", url: "",}]);
                }}
            >
                {links.length === 0 ? "Add" : "Add more"}
            </button>
    </div>
  )
}
