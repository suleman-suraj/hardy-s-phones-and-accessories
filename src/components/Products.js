import React from 'react'
import Phone1 from "../pictures/phone1.jpg"
import Phone2 from "../pictures/phone2.jpg"
import Phone4 from "../pictures/phone4.jpg"
import head1 from "../pictures/head1.jpg"
import head3 from "../pictures/head3.jpg"
import head4 from "../pictures/head4.webp"
import drive2 from "../pictures/drive2.jpg"
import drive3 from "../pictures/drive3.jpg"
import drive4 from "../pictures/drive4.jpg"
import case1 from "../pictures/case1.jpg"
import case2 from "../pictures/case2.jpg"
import case3 from "../pictures/case3.jpg"

function Products() {
  return (
    <div>
    <div className='firstrow'>

    <div className='card'>
    <h2>SumSung</h2>
    <img src={Phone1} alt=""/>
    <p>Ghc1,300</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
       <h2>iPhone</h2>
       <img src={Phone2} alt=""/>
       <p>Ghc 10,000</p>
       <button>Buy Me</button>
    </div>

    <div className='card'>
       <h2>Techno</h2>
       <img src={Phone4} alt=""/>
       <p>Ghc800</p>
       <button>Buy Me</button>
    </div>
 </div>

<div className='headphones'>
    <div className='card'>
    <h2>Headphones</h2>
    <img src={head1} alt=""/>
    <p>Ghc300</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>Headphones</h2>
    <img src={head3} alt=""/>
    <p>Ghc200</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>Headphones</h2>
    <img src={head4} alt=""/>
    <p>Ghc250</p>
    <button>Buy Me</button>
    </div>
</div>

<div className='pendrives'>
    <div className='card'>
    <h2>Pen Drives</h2>
    <img src={drive2} alt=""/>
    <p>Ghc60</p>
    <button>Buy Me</button>
    </div>
    
    <div className='card'>
    <h2>Pen Drives</h2>
    <img src={drive3} alt=""/>
    <p>Ghc60</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>Pen Drives</h2>
    <img src={drive4} alt=""/>
    <p>Ghc60</p>
    <button>Buy Me</button>
    </div>
</div>

<div className='phonecases'>
    <div className='card'>
    <h2>Phone Cases</h2>
    <img src={case1} alt=""/>
    <p>Ghc40</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>Phone Cases</h2>
    <img src={case2} alt=""/>
    <p>Ghc40</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>Phone Cases</h2>
    <img src={case3} alt=""/>
    <p>Ghc40</p>
    <button>Buy Me</button>
    </div>
</div>
</div>
    
  )
}

export default Products