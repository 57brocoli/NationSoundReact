import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCards from '../SubComponent/ArticleCards';


const ArticlePixeleventCoponent = () => {
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        axios
            .get('https://pixelevent.site/api/articles')
            .then(res => setArticles(res.data['hydra:member']));
    },[])
    // On map les articles pour récupéré leurs catégories.
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

    return (
        <div className="container mb-3">
            {nombreArticle === 3 ?
                <button className="btn text-white fs-5 ps-0" onClick={tousAfficher}>
                    Tous afficher
                </button>
                :
                <button type="button" className="btn text-white fs-5 ps-0" onClick={()=>setNombreArticle(3)}>
                    Revenir
                </button>
            }
            <button type="button" className="btn dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
                Category
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
            {filter === null ?
                articles && 
                    articles
                        .slice(0, nombreArticle)
                        .map((article, index)=>{
                            return(
                                <ArticleCards key={index} article={article} channel={"pixelevent"}/>
                            )
                        })
                : 
                articles &&
                    articles
                        .filter(article => article.categories.name === filter)
                        .slice(0, nombreArticle)
                        .map((article, index)=>{
                            return(
                                <ArticleCards key={index} article={article} channel={"pixelevent"}/>
                            )
                        })
            }
        </div>
    );
};

export default ArticlePixeleventCoponent;