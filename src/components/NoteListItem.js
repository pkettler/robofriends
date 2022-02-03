import React from "react";




export default function NoteListItem(props) {
    // const { id } = props;
    const { text } = props;
    const { dateTimeText } = props;
    // const { onClick } = props;

    
     function truncateString(string, limit) {
        const e = props.text + props.dateTimeText;
         if (string.length > limit) {
             return (e).substr(0,limit) + "..."
         }else{
             return props.text + " " + props.dateTimeText
             }
         }
    
    
  

    return (
      
        <div onClick={() => alert(props.id + " is clicked")} className="listItem">
        <div>
            {truncateString(({ text } + " " + { dateTimeText }),200)}
        </div>    
        </div>
    )
}

