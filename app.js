import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("h1", {
//     id : "title",
//     key : "h1"
// }, "Namaste React");
 const heading = (
  <h1 id='title' key="h1">Namaste React</h1 >
 )
  const heading2 = (
    <h2 id='title' key="h2">helloooooooo</h2>
   ); 

  //  components 

  const HeaderComponent = () => {
    return (<div>
      {heading}
      <h1>Namaste React functional componemt</h1>
      <h2>hiiiiii from first component</h2>
   </div>);
  };
//    jsx syntax.
// const heading2 = React.createElement("ul", {}, [
//     React.createElement("li", {
       
//     }, "About Us"),
//     React.createElement("li", {
//     }, "Home"),
//     React.createElement("li", {
//         key : "li3"
//     }, "Options")
//     // Add more list items as needed
// ]); 

const container = React.createElement("div", {
    id : "container",
},[heading, heading2,<HeaderComponent/>]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container); 
// root.render(<HeaderComponent/>);