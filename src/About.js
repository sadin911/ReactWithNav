//Temporarily store data here
import React from "react";
import styled from "styled-components";
const Styles = styled.div`
  body,
  html {
    font-family: "Montserrat", sans-serif;
  }

  .card {
    width: 280px;
    display: block;
    margin: 60px auto;
 
    -webkit-transition: 0.25s;
    transition: 0.25s;
  }
  .card:hover {
 
    cursor: pointer;
  }
  .card:hover .button-primary {
    -webkit-transform: translate(10px, 0);
    transform: translate(10px, 0);
  }

  .card-header {
    height: 150px;
    width: 100%;
    padding: 15px;
    width: 100%;
    background-size: cover;
    color: #fff;
  }

  .card-header--title {
    text-transform: uppercase;
    margin: 0;
  }

  .card-body {
    padding: 15px;
    background-color: #000;
    width: 100%;
  }

  .date {
    font-size: 11px;
    font-weight: 600;
    color: grey;
  }

  .body-content {
    padding-bottom: 40px;
    font-size: 13px;
    line-height: 1.8;
  }

  .button-primary {
    border: none;
    box-shadow: none;
    font-family: inherit;
    background-color: transparent;
    color: #341cac;
    font-size: 15px;
    -webkit-transition: 0.25s;
    transition: 0.25s;
  }
  .button-primary i {
    padding-right: 4px;
  }

  .designer-link {
    color: #000;
    text-align: center;
    fon-size: 12px;
    text-decoration: none;
    display: block;
  }

  body,
  html {
    overflow-x: visible;
  }

  .app-header {
    display: block;
    padding: 30px;
  }

  .app-title {
    display: inline-block;
    width: 100%;
    margin: 80px 0 0 0;
    float: left;
    position: relative;
    color: #000;
  }
  @media (min-width: 768px) {
    .app-title {
      width: 20%;
      margin: 280px 0 0 0;
    }
  }
  .app-title h1 {
    font-size: 52px;
    margin: 0;
  }
  .app-title p {
    font-weight: 200;
    opacity: 0.5;
  }

  .app-title-content {
    position: relative;
    top: 50%;
    left: 50%;
    width: 100%;
    text-align: center;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  @media (min-width: 768px) {
    .app-title-content {
      width: auto;
      position: absolute;
      text-align: left;
    }
  }

  .app-card-list {
    display: inline-block;
    width: 100%;
    float: right;
    margin: 0;
    min-height: 75vh;
    white-space: normal;
    overflow-x: scroll;
    margin-top: -70px;
  }
  .app-card-list::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    .app-card-list {
      width: 80%;
      white-space: nowrap;
      margin-top: 0;
    }
  }
  .app-card-list .card {
    margin: 60px 30px;
    display: inline-block;
  }
  .app-card-list .card .card-body {
    white-space: normal;
  }

  .designer-link {
    display: inline-block;
    padding-top: 40px;
  }
`;

const PostsData = [
  {
    category: "News",
    title: "CNN Acquire BEME",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },
  {
    category: "Development",
    title: "React and the WP-API",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400",
  },
  {
    category: "News",
    title: "CNN Acquire BEME",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },
  {
    category: "Development",
    title: "React and the WP-API",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400",
  },
];

// Start App

export default class About extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: {},
    };
  }
  componentWillMount() {
    this.setState({
      posts: PostsData,
    });
  }

  render() {
    return (
      <Styles>
        <div>
          <header className="app-header"></header>
          <Title />
          <div className="app-card-list" id="app-card-list">
            {Object.keys(this.state.posts).map((key) => (
              <Card key={key} index={key} details={this.state.posts[key]} />
            ))}
          </div>
        </div>
      </Styles>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
     
        <section className="app-title">
          <div className="app-title-content">
            <h1>Latest News</h1>
            <p>Covering March & April 2015</p>
            <a
              className="designer-link"
              href="https://dribbble.com/shots/1978243-Latest-News"
              target="_blank"
            >
              Design from <i className="fa fa-dribbble"></i>
            </a>
          </div>
        </section>

    );
  }
}

class Button extends React.Component {
  render() {
    return (
  
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>

    );
  }
}

class CardHeader extends React.Component {
  render() {
    const { image, category } = this.props;
    var style = {
      backgroundImage: "url(" + image + ")",
    };
    return (

        <header style={style} className="card-header">
          <h4 className="card-header--title">{category}</h4>
        </header>

    );
  }
}

class CardBody extends React.Component {
  render() {
    return (

        <div className="card-body">
          <p className="date">March 20 2015</p>

          <h2>{this.props.title}</h2>

          <p className="body-content">{this.props.text}</p>

          <Button />
        </div>

    );
  }
}

class Card extends React.Component {
  render() {
    return (
        <article className="card">
          <CardHeader
            category={this.props.details.category}
            image={this.props.details.image}
          />
          <CardBody
            title={this.props.details.title}
            text={this.props.details.text}
          />
        </article>
    );
  }
}
