import React, { Component } from 'react';
import axios from 'axios';

class TransactionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    };
  }

  componentDidMount() {
    this.fetchTransactions();
  }

  fetchTransactions() {
    axios.get('http://localhost:5000/api/transactions') // Replace with your backend URL
      .then(response => {
        this.setState({ transactions: response.data });
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
  }

  render() {
    return (
      <div>
        <h2>Transactions List</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Credit</th>
              <th>Debit</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {this.state.transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.credit}</td>
                <td>{transaction.debit}</td>
                <td>{transaction.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TransactionsList;
