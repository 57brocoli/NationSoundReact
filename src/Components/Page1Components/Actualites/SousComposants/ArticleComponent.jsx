import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleCards from './ArticleCards';
import { fetchArticles } from '../../../../../redux/reducers/ArticlesReducers';

const ArticleComponent = () => {

    //On récupere les articles du redux
    const dispatch = useDispatch()
    const articles = useSelector(state=>state.articles.articles)
    useEffect(()=>{
        dispatch(fetchArticles())
    },[dispatch])

    // On récupéré les catégories
    var allMapCategories = articles.map((article)=>article.categories.name)

    // On trie les catégories, pour eleminer les doublons
    const selectCategories = allMapCategories.filter((x, i) => allMapCategories.indexOf(x) === i);
    
    //variable qui comptient le filtre
    const [filter, setFilter] = useState(null)

    //Fonctions pour filtrées les articles
    const [nombreArticle, setNombreArticle] = useState(3);
    const tousAfficher = () => {
        setNombreArticle(articles.length);
    };

    //Fonction qui filtre les épisodes
    const filterArticle = (articles) => {
        return articles
        //Si le filtre est activer
        .filter(article => filter ? article.categories.name === filter : true)
        //On coupe le tableau
        .slice(0, nombreArticle)
    }

    //Tableau des articles aprés filtre
    const articleFiltrer = filterArticle(articles)

    return (
        <div className="container mb-3">
            {articleFiltrer.length >= 3 ?
                nombreArticle === 3 ?
                    <button className="btn text-white fs-5 ps-0" onClick={tousAfficher}>
                        Tout afficher
                    </button>
                :
                    <button type="button" className="btn text-white fs-5 ps-0" onClick={()=>setNombreArticle(3)}>
                        Revenir
                    </button>
            :
            null
            }
            <button type="button" className="btn dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
                Catégories
            </button>
            <ul className="dropdown-menu ">
                {selectCategories && 
                    selectCategories.map((category, index)=>{
                        return(
                            <li key={index} onClick={()=>setFilter(category)}><button className="dropdown-item" type="button">{category}</button></li>
                        )
                    })    
                }
            </ul>
            {filter && 
            <button type="button" className="btn text-white" onClick={()=>setFilter(null)}>
                Réinitialisé
            </button>
            }
            {articleFiltrer.map((article, index)=>{
                return(
                    <ArticleCards key={article.id} article={article} index={index}/>
                )
            })}
        </div>
    );
};

export default ArticleComponent;