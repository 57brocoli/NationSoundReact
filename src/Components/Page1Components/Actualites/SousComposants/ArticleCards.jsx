import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { imageArticle } from '../../../../Assets/Variables/Variable';
import {AnimatePresence, motion} from 'framer-motion'

const ArticleCards = ({article, index}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: index * 0.2 }}
        >
            <NavLink className='my-2 mx-3 d-flex text-decoration-none text-white cardArticle backgroundSat' to={`/article/${article.id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <motion.div
                    initial={{ filter: 'saturate(50%)' }}
                    animate={{ filter: isHovered ? 'saturate(100%)' : 'saturate(50%)'}}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundImage: `url(${imageArticle.uri}${article.featuredImage})` }}
                    className='imgArticle centerImage rounded col-3'
                >
                </motion.div>
                <div >
                    <h3 className='ps-3 mb-3 pt-2 h2 titleArticle'>{article.title}</h3>
                    <p className='contentArticle px-3'>{article.introduction}</p>
                    <p className='ps-3'>Catégorie : {article.categories.name}</p>
                </div>
            </NavLink>
        </motion.div>
    );
};

export default ArticleCards;