import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import RespCardList from "./RespCardList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resps: [],
      content: ""
    };
    this.search = this.search.bind(this);
  }

  async search() {
    let content = document.getElementById("search-text").value;
    let sort = document.getElementById("sort").value;
    if (!content) alert("Вы ничего не ввели");
    else {
      let response = await axios.get(
        "https://api.github.com/search/repositories?sience=" +
          "&q=" +
          content +
          "&sort=" +
          sort +
          "&per_page=10"
      );

      response = response.data.items;
      this.setState(() => {
        return { resps: response };
      });
    }
  }

  render() {
    return (
      <div>
        <input id="search-text" />
        <button onClick={() => this.search()}>Поиск</button>
        <br />
        <select id="sort">
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
          <option value="followers">Followers</option>
        </select>
        <RespCardList resps={this.state.resps} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
