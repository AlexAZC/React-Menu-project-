function Categories({categories,filterCategories}) {
    const buttonForCategories = categories.map((value) => <button type="button" className="btn" key={value} onClick={() => filterCategories(value)}>{value}</button>)
  return (
    <div className="btn-container" >
      {buttonForCategories}
    </div>
  )
}
export default Categories