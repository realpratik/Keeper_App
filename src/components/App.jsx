import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


// function createNotes(noteItem){
//   return <Note key= {noteItem.key} title ={noteItem.title} content={noteItem.content} />
// }

function App() {
  return <div>
    <Header />
    {/* <Note  title="This is the title."  content="This is the content." /> */}
    {notes.map( noteItem =>  (
      <Note 
        key= {noteItem.key} 
        title ={noteItem.title} 
        content={noteItem.content}
       /> 
    ))};
    <Footer />
  </div>
}

export default App;


// …or create a new repository on the command line
// echo "# CSVPHP" >> README.mdgit 
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/realpratik/CSVPHP.git
// git push -u origin main




// …or push an existing repository from the command line
// git remote add origin https://github.com/realpratik/CSVPHP.git
// git branch -M main
// git push -u origin main