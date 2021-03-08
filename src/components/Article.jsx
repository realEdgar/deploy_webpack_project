import React from 'react' 

export const Article = (props) => {
    return (
        <article className="section-three__article">
            <h4 className="article__title">{props.title}</h4>
            <h5 className="article__price">{props.price}</h5>
            <p className="article__description">
                {props.description}
            </p>
            <div className="align-container">
                <p className="article__stats">{props.stat}<span>left</span></p>
                <button className={props.classStyle} >{props.button}</button>
            </div>            
        </article>
    )
} 