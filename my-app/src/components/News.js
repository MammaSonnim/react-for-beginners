import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Article from './Article';


export default class News extends Component {
    state = {
        filteredNews: this.props.news
    }

    componentWillReceiveProps(nextProps) {
        let nextFilteredNews = [...nextProps.news];

        nextFilteredNews.forEach(item => {
            if (item.fullText.toLowerCase().indexOf('pubg') !== -1) {
                item.fullText = 'СПАМ'
            }
        })

        this.setState({ filteredNews: nextFilteredNews })
    }

    renderArticles = () => {
        const { filteredNews } = this.state;

        return filteredNews.length ? filteredNews.map(item => {
            return <Article key={item.id} data={item} />
        }) : <p>Новостей нет</p>;
    }

    render() {
        const { filteredNews } = this.state;

        return (
            <section className="news">
                <h2 className="news__heading">Новости</h2>
                {this.renderArticles()}
                {filteredNews.length ? <strong className="news__count">
                    Всего новостей: {filteredNews.length}</strong> : null}
            </section>
        )
    }
}

News.propTypes = {
    news: PropTypes.array.isRequired
}