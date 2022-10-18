import React from 'react';
import { MdDeleteForever, MdEdit, MdCheckCircleOutline, MdVisibility } from 'react-icons/md';

function Budget({ budget, onDelete, onEdit, handleDelete, onView }) {

    return (

        <tr>
            <td>{budget.name}</td>
            <td>{budget.amount}</td>
            <td>$0</td>
            <td> <input type='checkbox' checked={budget.active} /></td>

            <td><MdVisibility onClick={() => onView(budget)} /></td>
            <td><MdEdit onClick={() => onEdit(budget)} /></td>
            <td><MdDeleteForever onClick={() =>
                //  onDelete(exercise._id)
                handleDelete(budget._id)

            } /></td>
        </tr>
    );
}

export default Budget;