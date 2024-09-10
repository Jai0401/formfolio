import React from 'react';
import Image from 'next/image';

export default function Photo({ photo, setPhoto }: { photo?: File | undefined, setPhoto: (photo: File | undefined) => void }) {
  return (
    <div className='mb-3'>

      {/* Conditionally render the selected image if it exists */}
      {photo && (
        <div>
          {/* Display the selected image */}
          <Image
            alt="not found"
            width={100}
            height={100}
            src={URL.createObjectURL(photo)}
          />
          <br /> <br />
          {/* Button to remove the selected image */}
          <button onClick={() => setPhoto(undefined)} className='underline underline-offset-4'>Remove</button>
        </div>
      )}

      <br />

      {/* Input element to select an image file */}
      <label className='block font-medium tracking-tighter mb-1'>Photo</label>
      <input
        type="file"
        name="myImage"
        className="px-2 py-1 rounded-md border-2 border-black/10"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.files && event.target.files[0]) {
            console.log(event.target.files[0]);
            setPhoto(event.target.files[0]);
            console.log(photo);
          }
        }}
      />
    </div>
  );
}

