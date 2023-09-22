function MenuItem({image,name,price,description}) {
  return (
    <article className="menu-item" >
      <img src={image} alt={name} className="img" />
      <div className="item-info">
          <header>
            <h5>{name} <span className="item-price" >${price}</span> </h5>
          </header>
        <p className="item-text" >{description}</p>
      </div>
    </article>
  )
}
export default MenuItem