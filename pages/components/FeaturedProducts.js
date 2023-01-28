import React from 'react'

const FeaturedProducts = () => {
  return (
    <>
      <h1 className='text-center mt-5'>Featured Products</h1>
      <div className='Featured_Products_box d-md-flex justify-content-around pt-5 '>
      <div className="card" style={{width: "25rem" , height: "75vh"}}>
  <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" className="card-img-top"  alt="..." style={{width:"100%"}}/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div className="card" style={{width: "25rem" , height: "75vh"}}>
  <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" className="card-img-top"  alt="..." style={{width:"100%"}}/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div className="card" style={{width: "25rem" , height: "75vh"}}>
  <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" className="card-img-top"  alt="..." style={{width:"100%"}}/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      </div>
      <style jsx>{`
.Featured_Products_box {
  background:var(--footerColor);
  box-shadow:var(--boxShadow);
  height: 100vh;
  width: 100%;
 
}
  
.CarouselPotoBox{
  background:var(--yellow);
  box-shadow:var(--boxShadow);
  height: 70vh;
  width: 99%;
}

`}</style>
    </>
  )
}

export default FeaturedProducts
