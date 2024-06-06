import React from 'react';
import { NavLink } from 'react-router-dom';
import { imageArticle } from '../../../../Assets/Variables/Variable';

const ArticleCards = ({article}) => {
    return (
        <NavLink className='my-2 d-flex text-decoration-none text-white cardArticle' to={`/article/${article.id}`}>
            <div style={{backgroundImage:`url(${imageArticle.uri}${article.featuredImage})`}} className='imgArticle centerImage rounded col-3'>
            </div>
            <div>
                <h3 className='ps-3 mb-3 pt-2 h2 titleArticle'>{article.title}</h3>
                <p className='contentArticle px-3'>{article.introduction}</p>
                <p className='ps-3'>Category : {article.categories.name}</p>
            </div>
        </NavLink>
    );
};

export default ArticleCards;