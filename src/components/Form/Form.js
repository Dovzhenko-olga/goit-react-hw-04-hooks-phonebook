import { useState } from "react";
import styles from './Form.module.css';


export default function Form({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }

  const reset = () => {
    setName('');
    setNumber('');
  }

  const handleSubmit = e => {
    e.preventDefault();    
    onSubmit({name, number});
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <p className={styles.name}>Name</p>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className={styles.input}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />
        </label>
        <label>
          <p className={styles.name}>Number</p>
          <input
            type="tel"
            name="number"
            placeholder="Enter number"
            value={number}
            className={styles.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
          />
        </label>
      <button className={styles.button} type="submit">Add contact</button>
    </form>
    )
 }