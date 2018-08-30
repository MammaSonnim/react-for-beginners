import React, { Component, Fragment } from 'react';
import './App.css';
import Add from './components/Add';
import { News } from './components/News'

export default class App extends Component {
    state = {
        news: null,
        isLoading: false
    }

    // news null isLoading false — запроса нет или выполнился с ошибкой
    // news null isLoading true — запрос выполнятся
    // news [] — новостей нет
    // news [1, 2, 3] — новости есть и они загружены

    static getDerivedStateFromProps(props, state) {
        let nextFilteredNews;

        if (Array.isArray(state.news)) {
            nextFilteredNews = [...state.news];

            nextFilteredNews.forEach(item => {
                if (item.fullText.toLowerCase().indexOf('pubg') !== -1) {
                    item.fullText = 'СПАМ'
                }
            })
        }

        return {
            filteredNews: nextFilteredNews || null
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('http://localhost:3000/data/newsData.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    news: data,
                    isLoading: false
                })
            })

    }

    handleAddNews = (data) => {
        const { news } = this.state;
        const nextNews = [data, ...news];

        this.setState({ news: nextNews });
    }

    render() {
        const { news, isLoading } = this.state;

        return (
            <Fragment>
                <Add onAddNews={this.handleAddNews}/>
                { Array.isArray(news) && <News news={news}/> }
                { isLoading && <p>Загружаю...</p> }
            </Fragment>
        )
    }
}
