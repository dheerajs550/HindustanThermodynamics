import Link from 'next/link'
import React from 'react'

const Navebar = () => {
  return (
   <>
   <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <Link class="navbar-brand" href="/home">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
  <form class="form-inline mr-auto my-2 my-lg-0">
</form>
    <ul class="navbar-nav  mt-2 mt-lg-0">
      <li class="nav-item active">
        <Link class="nav-link" href="/home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="/about">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " href="/products">Products</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link "  href="/contact">Contact Us</Link>
    </li>
    </ul>
  </div>
</nav>
   </>
  )
}

export default Navebar
