import React, { Component } from 'react'
import './SearchBar.css'

const sortByOptions = {
    "Recommended": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
}

export default class SearchBar extends Component {
    render() {
        return (
            <div>

                <div className="SearchBar">

                    <div className="SearchBar-sort-options">
                        <ul>
                            {Object.entries(sortByOptions).map(item => <li key={item[1]}> {item[0]} </li>)}
                        </ul>
                    </div>

                    <div className="SearchBar-fields">
                        <input placeholder="Search Businesses" />
                        <input placeholder="Where?" />
                    </div>

                    <div className="SearchBar-submit">
                        <a href='www.#.com' >Let's Go</a>
                    </div>

                </div>
                
            </div>
        )
    }
}