import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

export default class Add extends Component {
    state = {
        author: '',
        text: '',
        fullText: '',
        agree: false
    }

    onBtnClickHandler = (e) => {
        e.preventDefault();

        const { author, text, fullText, id } = this.state;
        const { onAddNews } = this.props;

        onAddNews({
            id: id || +new Date(),
            author,
            text,
            fullText
        });
    }

    validate = () => {
        const { author, text, agree } = this.state;

        return agree && author.trim() && text.trim();

    }

    renderSubmit = () => {
        return <button className="add__btn"
                       onClick={this.onBtnClickHandler}
                       disabled={!this.validate()}>
            Добавить новость</button>
    }

    handleChange = (e) => {
        const { id, value } = e.currentTarget;

        this.setState({ [id]: value })
    }

    handleCheck = (e) => {
        this.setState({ agree: e.currentTarget.checked })
    }

    render() {
        const { author, text, fullText } = this.state;

        return (
            <form className="add">
                <input
                    id="author"
                    value={author}
                    onChange={this.handleChange}
                    type="text"
                    className="add__author"
                    placeholder="Ваше имя"/>
                <textarea
                    id="text"
                    value={text}
                    onChange={this.handleChange}
                    className="add__text"
                    placeholder="Текст новости">
                    </textarea>
                <textarea
                    id="fullText"
                    value={fullText}
                    onChange={this.handleChange}
                    className="add__text"
                    placeholder="Текст новости">
                    </textarea>
                <label className="add__checkrule">
                    <input type="checkbox" onChange={this.handleCheck} /> Я согласен с правилами
                </label>
                {this.renderSubmit()}
            </form>
        )
    }
}

Add.propTypes = {
    onAddNews: PropTypes.func.isRequired
}
