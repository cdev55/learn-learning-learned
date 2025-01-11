import Link from "next/link";

export default function NotFound(){
    return(
        <div >
            <h1>This page not found.</h1>
            <Link href={'/'}>Go to Home</Link>
        </div>
    )
}