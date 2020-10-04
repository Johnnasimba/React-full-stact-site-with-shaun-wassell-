import React from 'react';
import articleContent from './article-content';
import ArticleList from '../components/ArticlesList'


const ArticlesListPage = () => {
    return (
        <div>
            <h2>Articles</h2>
            <ArticleList articles={articleContent} />
         </div>
    );
}
 
export default ArticlesListPage;  