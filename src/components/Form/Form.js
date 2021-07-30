import { Component } from "react";
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Form extends Component  {
  state = { ...INITIAL_STATE };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget
    this.setState({ [name]: value })
  };
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
    <form className={styles.form} onSubmit={this.handleSubmit}>
      <label>
        <p className={styles.name}>Name</p>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className={styles.input}
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
        />
        </label>
        <label>
          <p className={styles.name}>Number</p>
          <input
            type="tel"
            name="number"
            placeholder="Enter number"
            value={this.state.number}
            className={styles.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
          />
        </label>
      <button className={styles.button} type="submit">Add contact</button>
    </form>
    )}
};

export default Form;