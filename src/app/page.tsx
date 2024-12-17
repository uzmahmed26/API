import { log } from "console";
import Image from "next/image";
import Link from "next/link"

export default async function Home() {
  const url = await fetch("https://simple-books-api.glitch.me/books");
  const res = await url.json();
  console.log(res)
  return (
   <div>{res.map((book:any)=>(
    <div key={book.id}>
     <Link href={`${book.id}`}>
      <h1 className="text-2xl text-sky-200 p-2 bg-red-500 text-center">{book.name}</h1>
      </Link>
    </div>
   ))}
   </div>

  );
}
