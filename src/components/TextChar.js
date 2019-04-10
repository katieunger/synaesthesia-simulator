import React from 'react';

const TextChar = (props) => {
    console.log(props.children);
    console.log(props.alphabet);

    const renderedText = props.children.map((child) => {
      let pattern = new RegExp('[a-zA-Z]', 'g');
      console.log(pattern);
      let index = child.props.children.search(pattern);
      console.log(index);
      // const replacedText = child.map((text) => {

      // })
      return child.props.children.replace(pattern, `${props.alphabet[index].letter}`);
    })
    // const aPatt = new RegExp('a', 'g');
    // const renderedText = props.children.map((child)=> {
    //    return child.props.children.replace(aPatt, )
    // })
    return (
        <div className="ui segment">
          {renderedText}
        </div>
      );

      
    //return <span style={{color: `${color}`}}>{char}</span>;
}

export default TextChar;