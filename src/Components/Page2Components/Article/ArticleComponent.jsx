import { useEffect, useState } from 'react';
import CommentForm from '../../Formulaires/CommentForm';
import { useDispatch, useSelector } from 'react-redux';
import { imageArticle, imageArticleDiapo, useModal, useScrollFunction } from '../../../Assets/Variables/Variable';
import ConnectOrAuthModal from '../../SubComponent/ConnectOrAuthModal';
import ScrollBox from '../../SubComponent/ScrollBox'
import FilterImages from './SousComposants/FilterImages';
import { fetchArticles } from '../../../../redux/reducers/ArticlesReducers';

const ArticleComponent = ({id}) => {

    //On récupere les articles du redux
    const dispatch = useDispatch()
        useEffect(()=>{
            dispatch(fetchArticles())
        },[dispatch])
    const articles = useSelector(state=>state.articles.articles)
    const user = useSelector(state => state.user.user)

    //On récupère l'article
    const [article, setArticle] = useState(null)
    //On remet à jour l'article
    useEffect(() => {
        const articleCible = articles.find(article => article.id === Number(id));
        setArticle(articleCible);
    }, [articles, id]);

///////////////////////////////////////////////////Fonction pour les modal ///////////////////////////////////////////
    const {
        modal,
        openModal,
        handleCloseModal
    } = useModal()

    return (
        <div className='mt-5'>
            {article &&
                <div>
                    {article.images[0] &&
                        <header style={{backgroundImage:`url(${imageArticleDiapo.uri}${article.images[0].name})`}} className='centerImage'>
                        </header>
                    }
                    <article className='container text-white'>
                        <h2 className='fs-1 text-center my-4'>{article.title}</h2>
                        <div className=''>
                            <div className='d-flex justify-content-center me-xl-3 float-xl-start'>
                                <img src={`${imageArticle.uri}${article.featuredImage}`} alt="image article" style={{maxHeight:250, maxWidth:'100vw'}} className='rounded'/>
                            </div>
                            <h5 className='mt-3 '>{article.introduction}</h5>
                        </div>
                        <hr />
                        <p className='text-white'>
                            {article.content}
                        </p>
                        
                    </article>
                    {/* Section pour les images */}
                    <section>
                        <div className='container'>
                            <ScrollBox data={article.images} box={FilterImages}/>
                        </div>
                    </section>
                    {/* Section pour les commentaires */}
                    <section className="commentsSection container">
                        {article.comments.length > 1 && 
                        <div>
                            <h3 className='commentsSectionTitre'>Commentaire{article.comments.length > 1 && "s"} :</h3>
                            {article.comments.map((comment) => (
                                <div key={comment.id} className="contenaireCommentaire">
                                {comment.author &&
                                <p className="commentaireAutor">{comment.author.firstname} {comment.author.lastname}</p>
                                }
                                {comment.authorMobile &&
                                <p className="commentaireAutor">{comment.authorMobile}</p>
                                }
                                <p className="commentaireContent">{comment.content}</p>
                                </div>
                            ))}
                            </div>
                        }
                        <h4 className='commentsSectionTitre'>{article.comments.length < 1 ? "Soyez le premier à laisser un commentaire :" : "Rediger un commentaire :"}</h4>
                        {user ?
                        <CommentForm id={article.id} article={article} setArticle={setArticle} user={user}/>
                        :
                        <button className='btn btn-primary' onClick={openModal}>Connectez vous pour commenter</button>
                        }
                    </section>
                </div>
            }
            {modal &&
                <ConnectOrAuthModal show={modal.show} handleClose={handleCloseModal}/>
            }
        </div>
    );
};

export default ArticleComponent;