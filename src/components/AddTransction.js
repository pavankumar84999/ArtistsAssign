import React, { Component } from 'react';
import axios from 'axios';

class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      description: '',
      credit: '',
      debit: '',
      balance: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newTransaction = {
      date: this.state.date,
      description: this.state.description,
      credit: this.state.credit,
      debit: this.state.debit,
      balance: this.state.balance
    };

    axios.post('http://localhost:5000/api/transactions', newTransaction) // Replace with your backend URL
      .then(response => {
        console.log('Transaction added:', response.data);
        // Optionally, you might want to clear the form or update the transactions list here
      })
      .catch(error => {
        console.error('Error adding transaction:', error);
      });
  }

  render() {
    return (
      <div>
        <h2>Add Transaction</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Date:
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange} required />
          </label>
          <br />
          <label>
            Description:
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} required />
          </label>
          <br />
          <label>
            Credit:
            <input type="number" name="credit" value={this.state.credit} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Debit:
            <input type="number" name="debit" value={this.state.debit} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Balance:
            <input type="number" name="balance" value={this.state.balance} onChange={this.handleChange} />
          </label>
          <br />
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    );
  }
}

export default AddTransaction;
