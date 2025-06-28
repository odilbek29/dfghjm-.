import data from '../../../public/data'
import  './card.css'

function Card(props) {
  return (
    <div>
      <main>
        <div className="container">
          <div className="ha">
            <h3>Products</h3>
            <button className='btn'>Move All To Bag</button> 
          </div>

          <div className="ota">
            {data.map((m,i)=>{
              return   <div className="card">
              <div className="l">
              <img src={m.img} alt="fg" />
              <button className='btn2'><img src="2.png" alt="vb" />   Add To Cart</button>
              </div>
              <h4>{m.name}</h4>
              <p>{m.price} $</p>
            </div>
            })}
           
          </div>
        </div>
      </main>
    </div>
  )
}

export default Card
