import React, { useState, useEffect } from 'react';
import './ArticleCard.css';

export function ArticleCard(props) {
    return (
        <div className='card'>
            <figure>
                <img src={props.articleData.urlToImage} />
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
    )
}
