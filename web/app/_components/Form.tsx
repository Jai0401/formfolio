export default function Form(){
    return (
        <div className="py-4 flex justify-center items-center pt-10">
            <form className="border-black border-2 rounded-lg p-8 sm:w-[500px]">
                <div className="mb-3 flex justify-center">
                    <div>
                        <label htmlFor="inputName" className="form-label font-medium tracking-tighter">Name</label><br></br>
                        <input type="text" 
                        className="form-control px-2 py-1 rounded-md border-2 border-black/10 sm:w-96" 
                        id="input Name" 
                        placeholder="Enter your name"
                        aria-describedby="emailHelp"/>
                    </div>
                </div>
                <div className="mb-3 flex justify-center">
                    <div>
                        <label htmlFor="description" className="form-label tracking-tighter font-medium">Brief Description</label><br></br>
                        <textarea
                        className="form-control px-2 py-1 rounded-md border-2 border-black/10 h-40 sm:w-96" 
                        placeholder="I am a Computer Science student at Rajiv Gandhi Institute of Petroleum Technology. My passion lies in Machine Learning and Web Development, and during my spare time, I actively participate in open-source projects..."
                        id="description"/>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="btn btn-primary bg-black rounded-lg px-4 py-1 hover:bg-black/80 font-semibold text-white">Submit</button>
                </div>
            </form>
        </div>
    )
}