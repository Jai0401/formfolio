import Link from "next/link";

export default function Navbar() {
    return(
        <div className="py-2 text-black">
            <Link href="/">
                <h1 className="text-center text-3xl font-semibold tracking-tighter hover:text-black/80 ">Formfolio</h1>
            </Link>
            {/* <p className="text-center text-lg font-semibold tracking-tighter">Fill the form below and get your portfolio site instantly</p> */}
        </div>
    )
}