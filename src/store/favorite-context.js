
import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite:  (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}

});

// 이 함수도 그 자체를 export 한다 
// 두 객체 사이에 상호작용이 필요하기 때문
export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    // userFavorites.concat(favoriteMeetup)
    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
    
}

// FC도 export 하고 
export default FavoritesContext;