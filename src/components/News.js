import React, { Component } from 'react';
import Loading from './Loading';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';


export default class News extends Component {

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        
    }
    
    onPrevClick = async () => {
        let currentPage = this.state.page;
        let prevPage = this.state.page - 1;
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=338d03d3c36647f1b5f624992523676f&page=${prevPage}&category=${this.props.category}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading: false});
        this.setState({articles: parsedData.articles, page: prevPage});
        window.scroll(0,0);
        
    }

    onNextClick = async () => {
        let currentPage = this.state.page;
        let nextPage = this.state.page + 1;
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=338d03d3c36647f1b5f624992523676f&page=${nextPage}&category=${this.props.category}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading: false});
        this.setState({articles: parsedData.articles, page: nextPage});
        window.scroll(0, 0);

    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=338d03d3c36647f1b5f624992523676f&category=${this.props.category}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading: false});
        this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults});

    }

    render() {
        return (
            <>
                <div className='container my-5'>
                    <div className="container">
                    <h1 className='text-center'>Top Headlines</h1>
                    <div className="container justify-content-center">
                        {this.state.loading && <Loading/>}
                    </div>
                    <div className="row justify-content-center">
                        {!this.state.loading && this.state.articles.map((element)=> {
                            return <div className="col-md-4 row justify-content-center" key={element.link}>
                            <NewsItem title={element.title ? element.title.slice(0,45): ""} description={element.description ? element.description.slice(0, 88): ""} imageURL={element.image_url ? element.urlToImage: "https://cdn.dribbble.com/users/975543/screenshots/4623054/1_d.png"} newsURL={element.url} source={element.source.name}/>
                        </div>
                        })}
                    </div>`
                    </div>
                    <div className="container my-3">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center"> 
                                <li className="page-item"><a className="page-link" onClick={this.onPrevClick}>Previous</a></li>
                                <li className="page-item"><a className={`page-link ${this.state.page == 1 ? "active": ""}`} href="#">1</a></li>
                                <li className="page-item"><a className={`page-link ${this.state.page == 2 ? "active": ""}`} href="#">2</a></li>
                                <li className="page-item"><a className={`page-link ${this.state.page == 3 ? "active": ""}`} href="#">3</a></li>
                                <li className="page-item"><a className="page-link" onClick={this.onNextClick}>Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        );
    }
}



