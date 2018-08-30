import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Article from './Article';

const News = ({ news }) => {
    const renderArticles = () => {
        return news.length ? news.map(item => {
            return <Article key={item.id} data={item} />
        }) : <p>Новостей нет</p>;
    }

    return (
        <section className="news">
            <h2 className="news__heading">Новости</h2>
            {renderArticles()}
            {news.length ? <strong className="news__count">
                Всего новостей: {news.length}</strong> : null}
        </section>
    )
}

News.propTypes = {
    news: PropTypes.array.isRequired
}

export { News };
