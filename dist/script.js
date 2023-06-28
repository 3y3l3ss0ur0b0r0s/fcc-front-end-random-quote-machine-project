import React from "https://esm.sh/react@18.2.0";
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: 0 };

    this.generate = this.generate.bind(this);
  }
  generate() {
    this.setState({
      randomIndex: Math.floor(Math.random() * 10) });

  }
  render() {
    const quoteList = [
    {
      quote:
      "“A writer is someone for whom writing is more difficult than it is for other people.”",
      author: "Thomas Mann" },

    {
      quote:
      "“I've got the key to my castle in the air, but whether I can unlock the door remains to be seen.”",
      author: "Louisa May Alcott" },

    {
      quote:
      "“A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.”",
      author: "G.K. Chesterson" },

    {
      quote:
      "“A story is a letter that the author writes to himself, to tell himself things that he would be unable to discover otherwise.”",
      author: "Carlos Ruiz Zafón" },

    {
      quote:
      "“One kind of good book should leave you asking: how did the author know that about me?”",
      author: "Alain de Botton" },

    {
      quote:
      "“. . . All artists' work is autobiographical. Any writer’s work is a map of their psyche. You can really see what their concerns are, what their obsessions are, and what interests them.”",
      author: "Kim Addonizio" },

    {
      quote:
      "“The standard personality type for a writer is a shy megalomaniac.”",
      author: "John Lanchester" },

    {
      quote:
      "“There is bad in all good authors: what a pity the converse isn't true!”",
      author: "Philip Larkin" },

    {
      quote:
      "“Writing romantic fiction is the second chance that loved ones denied us.”",
      author: "Shannon Alder" },

    {
      quote:
      "“In art nothing is more secondary than the author's intentions.”",
      author: "Jorge Luis Borges" }];



    const chosenQuote = quoteList[this.state.randomIndex];

    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("p", { id: "text" }, chosenQuote.quote), /*#__PURE__*/
      React.createElement("p", { id: "author" }, chosenQuote.author), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "new-quote", onClick: this.generate }, "New Quote"), /*#__PURE__*/


      React.createElement("a", { href: "twitter.com/intent/tweet", id: "tweet-quote", title: "Share to Twitter" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-twitter fa-2x" }))));

  }}


const root = ReactDOM.createRoot(document.getElementById('main-doc'));
root.render( /*#__PURE__*/React.createElement(QuoteMachine, null));