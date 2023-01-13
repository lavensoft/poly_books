

function DetailCard({img,title,price}){
    return (
        // <div class = 'container d-flex'>
        //     <div className="card-header">
        //     <img src={img}></img>
        //     </div>
           
        //     <div class='card-body'>
        //         <h4 className="card-title">{title}</h4>
        //         <p>{price}</p>
        //     </div>
        // </div>
       
     <div className="container d-flex" style={{width:"100%"}}>
        <img class="card-img-top" src={img} alt="Card image"></img>
        <div class="card-body">
            <h4 class="card-title">{title}</h4>
            <p class="card-text">{price}</p>
           
        </div>
    </div>
    )
}

export default DetailCard;