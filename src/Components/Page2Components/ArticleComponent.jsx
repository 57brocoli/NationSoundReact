import { useEffect, useState } from 'react';
import axios from 'axios';

const ArticleComponent = ({id, height, screenSize}) => {

    const[article, setArticle] = useState()
    useEffect(()=>{
        axios
            .get(`https://pixelevent.site/api/articles/${id}`)
            .then(res => setArticle(res.data))
    },[id])

    const image = {
        uri : 'https://pixelevent.site/assets/uploads/articles/'
    }
    const imageDiapo = {
        uri : 'https://pixelevent.site/assets/uploads/articles/diapo/'
    }
    //fonction pour le slider des hotel
    function prev(){
        document.getElementById('slider-container').scrollLeft -= 270;
    }
    function next(){
        document.getElementById('slider-container').scrollLeft += 270;
    }
    
    return (
        <div className='mt-5' style={{minHeight:height}}>
            {article &&
                <div>
                    {article.images[0] &&
                        <header style={{backgroundImage:`url(${imageDiapo.uri}${article.images[0].name})`}} className='centerImage'>
                        </header>
                    }
                    <article className='container text-white'>
                        <h2 className='fs-1 text-center my-4'>{article.title}</h2>
                        <div className=''>
                            <div className='d-flex justify-content-center me-xl-3 float-xl-start'>
                                <img src={`${image.uri}${article.featuredImage}`} alt="image article" style={{maxHeight:250, maxWidth:screenSize.width}} className='rounded'/>
                            </div>
                            <h5 className='mt-3 '>{article.introduction}</h5>
                        </div>
                        <hr />
                        <p className='text-white'>
                            {article.content}
                        </p>
                        <section>
                            <div id="slider-container" className="slider d-flex container">
                                <div onClick={prev} className="control-prev-btn">
                                    <i className="fas fa-arrow-left"></i>
                                </div>
                                {article.images.map((img, index)=>{
                                    return(
                                        <div key={index} style={{backgroundImage:`url(${imageDiapo.uri}${img.name})`}} className='slide rounded mx-xl-4 hotelImage' >
                                            <p></p>
                                        </div>
                                    )
                                })}
                                <div onClick={next} className="control-next-btn">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                            <div className="overlay"></div>
                        </section>
                    </article>
                </div>
            }
        </div>
    );
};

export default ArticleComponent;