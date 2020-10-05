import React, {useState, useEffect} from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList'
import NotFoundPage from './notFoundPage';


const ArticlePage = ({ match }) => {

    const name = match.params.name
    const article = articleContent.find(article => article.name === name)

    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});
    
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name} `);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);


        }

        fetchData()
        setArticleInfo({upvotes: Math.ceil(Math.random() * 9)})
    }, [name])
    
    
    if (!article) return <NotFoundPage />
    const otherArticles = articleContent.filter(article => article.name !== name);
     return ( 
         <div>
             <h1>{article.title} </h1>
             <p>This post have been upvoted {articleInfo.upvotes} times</p>
             {article.content.map((paragraph, key) => (
                 <p key={key}> {paragraph} </p>
             ))}
             <h3>Other Articles: </h3>
             <ArticlesList articles={otherArticles}/>
         </div>
      );
 }
  
 export default ArticlePage; 