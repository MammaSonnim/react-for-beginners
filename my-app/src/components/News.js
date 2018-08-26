import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Article from './Article';


export default class News extends Component {
    renderArticles = () => {
        const { news } = this.props;

        return news.length ? news.map(function(item) {
            return <Article key={item.id} data={item} />
        }) : <p>Новостей нет</p>;

    }

    render() {
        const { news } = this.props;

        return (
            <section className="news">
                <h2 className="news__heading">Новости</h2>
                {this.renderArticles()}
                {news.length ? <strong className="news__count">
                    Всего новостей: {news.length}</strong> : null}
            </section>
        )
    }
}

News.propTypes = {
    news: PropTypes.array.isRequired
}