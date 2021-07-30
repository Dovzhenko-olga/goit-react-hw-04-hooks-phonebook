import PropTypes from 'prop-types';
import styles from './PhoneBook.module.css';

const PhoneBook = ({ contacts, onDeleteContact }) => (

  <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.item} key={id}>
        <span>{name}:</span> <span>{number}</span>
        <button className={styles.button} onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

PhoneBook.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default PhoneBook;