import React, { useState, useEffect } from 'react';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import './HomePage.css'

export function HomePage(props) {

    const [ articleItems, setArticleItems ] = useState([]);
    console.log(props.newsData);
    useEffect(() => {
        setArticleItems(props.newsData.map((itemData, id) => {
            return (
                <li>
                    <ArticleCard key={id} articleData={itemData}/>
                </li>
            );
        }));
    }, [props.newsData]);
    
    return (
        <ul>
            {articleItems}
        </ul>
    )
}
