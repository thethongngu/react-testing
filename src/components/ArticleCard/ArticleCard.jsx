import React from 'react';
import './ArticleCard.css';

export function ArticleCard(props) {
    return (
        <a href={props.articleData.url}>
            <div className='card'>
                <figure>
                    <img src={props.articleData.urlToImage} alt='Source not found'/>
                    <figcaption>
                        <h3>{props.articleData.title}</h3>
                    </figcaption>
                </figure>
                <div className='info'>
                    <p className='date'>{props.articleData.publishedAt.substring(0, 10)}</p>
                    <p className='source'>{props.articleData.source.name}</p>
                </div>
                <p>
                    {props.articleData.description}
                </p>
            </div>
        </a>
    )
}
