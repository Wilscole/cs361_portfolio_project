import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';


export const ViewBudgetPage = ({ viewBudgets, setBudgetId }) => {
    const [amount, setAmount] = useState(viewBudgets.amount);
    console.log('id', viewBudgets._id)

    return (
        <>
            <article>
                <h2>Budget Health</h2>
                <p>The below data provides insights into your overall budget health with facts including your total budget amount, how much you have spent,
                    your remaiing balance, and how much of your budget has been added to different categories!
                </p>
                <table id="exercises">
                    <thead>
                        <tr>
                            <th>Budget Total</th>
                            <th>Spent</th>
                            <th>Remaining Balance</th>
                            <th>Budget Allocated</th>
                            <th>Remaing Allocations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${viewBudgets.amount}</td>
                            <td>$0</td>
                            <td>${viewBudgets.amount}</td>
                            <td>$0</td>
                            <td>${viewBudgets.amount}</td>

                        </tr>
                    </tbody>
                </table>
                <table class='categoryBtn'>
                    <p>You can now add categories to your budget to group transactions! This will help you see where your spending most!</p>
                    <button onClick={setBudgetId(viewBudgets._id)}><Link to="../add-category">Create Category</Link></button>
                </table>
                <table class='categoryBtn'>
                    <p>Use the 'Create Transaction' button to add transaction details to your budget! Additionally, you can select a category for each transaction.</p>
                    <button><Link to="../add-transaction">Create Transaction</Link></button>
                </table> <br />
                <button><Link to="/">Return to All Budgets </Link></button>
            </article>
        </>
    );
}

export default ViewBudgetPage;