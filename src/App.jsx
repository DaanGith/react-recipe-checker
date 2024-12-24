import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  // Your state code here
  const [selectedItem, setSelectedItem] = useState();

  return (
      <div>
        {selectedItem ? (
          <RecipePage recipe={selectedItem} clickfn={setSelectedItem} />
        ) : (
          <RecipeListPage clickFn={setSelectedItem} />
        )}
      </div>
  );
};

