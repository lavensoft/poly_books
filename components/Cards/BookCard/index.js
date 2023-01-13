import './styles.module.scss';


function BookCard({img, title, price}){
  return (
    <>
    <div className="card-header "  >
         <img  src={img} style={{width:'100%', height:'200px'}} ></img>
    </div>
   
        <div className="card-body">
            <p className='card-title'>{title}</p>
            <p>{price}</p>
        </div>
    </>
       
  
  )
}

export default BookCard;