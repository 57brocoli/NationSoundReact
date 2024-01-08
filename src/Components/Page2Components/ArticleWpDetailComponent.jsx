import { useEffect, useState } from 'react';
import axios from 'axios';

const ArticleWpComponent = ({id, height}) => {
    const[article, setArticle] = useState()
    useEffect(()=>{
        axios
            .get(`https://backoffice.pixelevent.site/wp-json/wp/v2/posts/${id}?_embed`)
            .then(res => setArticle(res.data))
    },[id])
    console.log(article);

    return (
        <div className='mt-5' style={{minHeight:height}}>
            {article &&
                <article className='container text-white'>
                    <h2 className='text-center py-4' dangerouslySetInnerHTML={{__html:article.title.rendered}}></h2>
                    {article._embedded['wp:featuredmedia'] &&
                        <div className='d-flex justify-content-center me-xl-3 float-xl-start'> 
                            <img src={`${article._embedded['wp:featuredmedia'][0].source_url}`} alt="image article" style={{width:300}} className='rounded float-start'/>
                        </div>
                    }
                    <p className='mt-3' dangerouslySetInnerHTML={{__html:article.content.rendered}}>
                    </p>
                    <hr />
                    <p>Cetegory : <span dangerouslySetInnerHTML={{__html:article._embedded['wp:term'][0][0].name}}></span></p>
                    <p>Auteur : <span dangerouslySetInnerHTML={{__html:article._embedded['author'][0].name}}></span></p>
                </article>
            }
        </div>
    );
};

export default ArticleWpComponent;