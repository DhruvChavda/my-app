import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json")
            .then((res) => res.json())
            .then((champions) => this.setState({ data: Object.values(champions.data) }))
            .catch((err) => console.log(err));
    }

    render() {
        const { data, searchField } = this.state;
        const filteredChamps = data.filter((champion) =>
            champion.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1 className="head1">LOL Champion Info</h1>
                <SearchBox
                    placeholder="Search Champions"
                    handleChange={(e) => {
                        this.setState({ searchField: e.target.value });
                    }}
                />
                <CardList champions={filteredChamps} />
            </div>
        );
    }
}
