import "./RecipeList.css";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Trashcan from "../assets/trashcan.svg";
import { projectFirestore } from "../firebase/config";

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes &&
        recipes.map((recipe) => (
          <div key={recipe.id} className={`card ${mode}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make.</p>
            <div>{recipe.method.substring(0, 100)}</div>
            <Link exact to={`/recipes/${recipe.id}`}>
              Cook this.
            </Link>
            <img
              src={Trashcan}
              className="delete"
              onClick={() => handleClick(recipe.id)}
              alt=""
            />
          </div>
        ))}
    </div>
  );
}
