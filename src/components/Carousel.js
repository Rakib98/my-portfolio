import React from "react";

import Card from "../components/Card";

import brookfield from "../assets/img/brookfield.png";
import phpShowcase from "../assets/img/phpShowcase.png";
import walsall from "../assets/img/walsall.png";
import pizza from "../assets/img/pizza.png";
import lyricsApp from "../assets/img/lyricsApp.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Brookfield Garden & Pet Centre",
          subTitle: "Website for a fictional gaden and pet store",
          imgSrc: brookfield,
          link: "https://rakib-brookfield.netlify.com",
          code: "https://github.com/Rakib98/Brookfield-Website"
        },
        {
          id: 1,
          title: "Lyrics Search App",
          subTitle: "React application that fetches data from an API.",
          imgSrc: lyricsApp,
          link: "https://rakib-lyrics-search.netlify.com",
          code: "https://github.com/Rakib98/search-lyrics-songs"
        },
        {
          id: 2,
          title: "Walsall Tourism",
          subTitle: "Fictional website for a tourism company.",
          imgSrc: walsall,
          link: "https://rakib-walsalltourism.netlify.com/",
          code: "https://github.com/Rakib98/WalsallTourism"
        },
        {
          id: 3,
          title: "PHP Showcase",
          subTitle: "Website showing various PHP functions",
          imgSrc: phpShowcase,
          link: "",
          code: "https://github.com/Rakib98/PHP-Showcase"
        },
        {
          id: 4,
          title: "Pizza Ordering App",
          subTitle: "Program built in C#, for a fictional pizza company",
          imgSrc: pizza,
          link: "",
          code: "https://github.com/Rakib98/PizzaOrdering"
        }
      ]
    };
  }

  /* handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }
 */

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container>
        <Row className="">{this.makeItems(this.state.items)}</Row>
      </Container>
    );
  }
}

export default Carousel;
