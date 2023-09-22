import { useState } from "react";
import Title from "./components/Title";
import menu from "./data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const App = () => {
  const [fullmenu,setFullMenu] = useState(menu);

  const categories = fullmenu.map((item) => item.category);
  const uniqueCategories = new Set(categories);
  const finalCategories = [...uniqueCategories, "all"]

  const [menuCategories,setMenuCategories] = useState(finalCategories)

  const filterCategories = (categ) => {
    let filteredcat = menu.filter((item) => {
        return item.category === categ
    })
    categ === "all" ? setFullMenu(menu) : setFullMenu(filteredcat)
  }

  return <main>
    <section className="menu">
    <Title text="Our menu" />
    <Categories categories={menuCategories} filterCategories={filterCategories} />
    <Menu menu={fullmenu} />
    </section>
  </main>;
};
export default App;
