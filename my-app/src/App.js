import React, { Component, Fragment } from 'react';
import './App.css';
import Add from './components/Add';
import News from './components/News';
import newsData from './data/newsData.json';

export default class App extends Component {
    state = {
        news: newsData
    }

    handleAddNews = (data) => {
        const { news } = this.state;
        const nextNews = [data, ...news];

        this.setState({ news: nextNews });
    }

    render() {
        return (
            <Fragment>
                <Add onAddNews={this.handleAddNews}/>
                <News news={this.state.news}/>
            </Fragment>
        )
    }
}
