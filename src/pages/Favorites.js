import { useContext } from 'react';

import FavoritesContext from '../store/favorite-context';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    return (<section>
        <h1>My Favorites</h1>
    </section>);
}

export default FavoritesPage;

