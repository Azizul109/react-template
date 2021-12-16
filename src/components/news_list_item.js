import React from 'react';
import classes from '../css/styles.css';

const NewsListItem = (props) => {
    return (
        <div>
            {/* <h1>I am coming from list-item!!!</h1> */}
            <div className={classes.new_item}>
                <h3>{props.item.title}</h3>
                <div>
                    {props.item.feed}
                </div>
            </div>
        </div>

        //we can use glamor for css
    );
};

export default NewsListItem;