import MenuItem from "./MenuItem"

function Menu({menu}) {
    const menuCard = menu.map((item) => {
        return <MenuItem key={item.id}
        image={item.img}
        name={item.title}
        price={item.price}
        description={item.desc}
         />
    })
  return (
    <div className="section-center" key={"something"} >
        {menuCard}
    </div>
  )
}
export default Menu