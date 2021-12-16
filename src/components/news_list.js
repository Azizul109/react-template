import React from 'react';
import NewsListItem from './news_list_item';

const NewsList = (props) => {
    // console.log(props.news)

    const items = props.news.map((item) => {
        return (
            // <div>
            //     <h3>{item.title}</h3>
            //     <div>
            //         {item.feed}
            //     </div>
            // </div>
            <NewsListItem key={item.id} item={item}></NewsListItem>
        )
    })

    return (
        <div>
            {/* <h1>I am coming from news_list!!!</h1> */}
            {items}
        </div>
    );
};

export default NewsList;