import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
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
        let url = `https://newsdata.io/api/1/news?apikey=pub_76911041b0c243d638990dd91628e6660bf1&language=en&page=${prevPage}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.results, page: prevPage});
        window.scroll(0,0);
        
    }

    onNextClick = async () => {
        let currentPage = this.state.page;
        let nextPage = this.state.page + 1;
        let url = `https://newsdata.io/api/1/news?apikey=pub_76911041b0c243d638990dd91628e6660bf1&language=en&page=${nextPage}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.results, page: nextPage});
        window.scroll(0, 0);

    }

    async componentDidMount() {
        console.log('cdm')
        let url = "https://newsdata.io/api/1/news?apikey=pub_76911041b0c243d638990dd91628e6660bf1&language=en";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.results, totalResults:parsedData.totalResults});

    }

    render() {
        console.log('render');
        return (
            <div className='container my-5'>
                <div className="container">
                <h1>Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element)=> {
                        return <div className="col-md-4" key={element.link}>
                        <NewsItem title={element.title ? element.title.slice(0,45): ""} description={element.description ? element.description.slice(0, 88): ""} imageURL={element.image_url ? element.image_url: "https://cdn.dribbble.com/users/975543/screenshots/4623054/1_d.png"} newsURL={element.link}/>
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
        );
    }
}



