import { configureStore, combineReducers } from '@reduxjs/toolkit';
import billetsReducer from './reducers/BilletsReducers'
import LieuxReducers from "./reducers/LieuxReducers";
import ProgrammeReducers from "./reducers/prgrammeReducers";
import ArticlesReducers from "./reducers/ArticlesReducers";
import ArtistesReducers from "./reducers/ArtistesReducers";
import FaqsReducers from "./reducers/FaqReducers"
import SponsorsReducers from "./reducers/SponsorsReducers";
import EpisodesReducers from "./reducers/EpisodesReducers";
import userReducers from "./reducers/UserReducers";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //storage est le moteur de stockage par défaut de redux-persist qui utilise localStorage.

// Configuration de redux-persist
const persistConfig = {
    key: 'root',
    storage, //Spécifie que redux-persist doit utiliser localStorage pour persister l'état.
  };

//combineReducers combine tous vos reducers en un seul rootReducer. Chaque reducer gère une partie distincte de l'état de l'application. 
const rootReducer = combineReducers({
    user: userReducers,
    billets: billetsReducer,
    lieux: LieuxReducers,
    programme: ProgrammeReducers,
    articles: ArticlesReducers,
    artistes: ArtistesReducers,
    faqs: FaqsReducers,
    sponsors: SponsorsReducers,
    episodes: EpisodesReducers,
  });
  
  //persistReducer enveloppe le rootReducer pour ajouter la capacité de persistance. Il utilise la configuration persistConfig définie précédemment.
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer, //le persistedReducer comme le réducteur racine.
    // getDefaultMiddleware pour inclure les middlewares par défaut, avec une configuration pour ignorer les actions spécifiques de redux-persist qui contiennent des valeurs non sérialisables.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: true,
  });
  
  export const persistor = persistStore(store);
  
  export default store;