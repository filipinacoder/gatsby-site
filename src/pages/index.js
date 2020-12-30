import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return <div style={{color: `purple`, fontSize: `72px`}}>
      <Link to="/contact/">Contact us</Link>
      <h1>Hello PH!</h1>
      <p>What a world!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
}
