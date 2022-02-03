import React from "react";
import PropTypes from 'prop-types';
import NoteListItem from "./NoteListItem";


export default function NoteListPage() {
    
    return (
        <div className="page">
            <h1>Note list</h1>
            <div className="noteList">
                <div className="noteListItem">
                
                    <div >
                            <NoteListItem
                                id="123"
                                text="Taking notes is very important!"
                                dateTimeText="1/25/2020 5:00 pm"
                                // onClick={handleListItemClick}
                                />
                    </div>
                </div>
            </div>
        </div>
    )

    }

    NoteListItem.propTypes = {
        id: PropTypes.string.isRequired,
        dateTimeText: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func
    };



