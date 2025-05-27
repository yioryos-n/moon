import Link from "next/link"

export function ReturnButton() {
    return (
        <Link href="/moon/">
          <button type="button" className="text-lg text-shadow-small hover:text-shadow-hover-dark hover:duration-500 hover:cursor-pointer">Back to Homepage</button>
        </Link>
    )
}