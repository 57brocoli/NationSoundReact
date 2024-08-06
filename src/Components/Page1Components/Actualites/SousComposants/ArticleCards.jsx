import React from 'react';
import { NavLink } from 'react-router-dom';
import { imageArticle } from '../../../../Assets/Variables/Variable';
import {motion} from 'framer-motion'

const ArticleCards = ({article, index}) => {
    return (
        <motion.div
        key={article.id}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2}}
        >
            <NavLink className='my-2 d-flex text-decoration-none text-white cardArticle backgroundSat' to={`/article/${article.id}`}>
                <div style={{backgroundImage:`url(${imageArticle.uri}${article.featuredImage})`}} className='imgArticle centerImage rounded col-3 '>
                </div>
                <div>
                    <h3 className='ps-3 mb-3 pt-2 h2 titleArticle'>{article.title}</h3>
                    <p className='contentArticle px-3'>{article.introduction}</p>
                    <p className='ps-3'>Catégorie : {article.categories.name}</p>
                </div>
            </NavLink>
        </motion.div>
    );
};

export default ArticleCards;