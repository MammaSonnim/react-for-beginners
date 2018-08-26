import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

export default class Article extends Component {
    state = {
        visible: false, // определили начальное состояние
    }

    handleReadMoreClick = (e) => {
        e.preventDefault();
        this.setState((prevState, props) => {
            if (!prevState.visible) {
                return { visible: true }
            }
        });
    }

    render() {
        const { data: { author, text, fullText } } = this.props;
        const { visible } = this.state;

        return (
            <article className="news__article article">
                <p className="article__author">{author}:</p>
                <p className="article__text">{text}</p>
                { !visible && <button onClick={this.handleReadMoreClick} className="article__readmore">Подробнее</button> }
                { visible && <p className="article__text">{fullText}</p> }
            </article>
        )
    }
}

Article.propTypes = {
    data: PropTypes.shape({
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        fullText: PropTypes.string.isRequired
    })
}