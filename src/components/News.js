import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
        
    }

    async componentDidMount() {
        let url = "https://newsdata.io/api/1/news?apikey=pub_7681f631ee13c4020e110397ac1cf3a040d4&language=en";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.results});

    }

    render() {
        return (
            <div className='container my-5'>
                <h1>Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element)=> {
                        return <div className="col-md-4" key={element.link}>
                        <NewsItem title={element.title ? element.title.slice(0,45): ""} description={element.description ? element.description.slice(0, 88): ""} imageURL={element.image_url ? element.image_url: "https://cdn.dribbble.com/users/975543/screenshots/4623054/1_d.png"} newsURL={element.link}/>
                    </div>
                    })}
                </div>
            </div>
        );
    }
}



