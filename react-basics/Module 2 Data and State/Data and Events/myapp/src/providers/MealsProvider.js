import React from "react";

const MealsContext = React.createContext();

const todayMeals = [ "Backed Beans", "Baked Sweet Potatoes", "Baked Ziti" ];

const Mealsprovider = ({ children }) => {
    const [meals, setMealsList] = React.useState(todayMeals);

    return (
        <MealsContext.Provider value={{ meals }}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default Mealsprovider;