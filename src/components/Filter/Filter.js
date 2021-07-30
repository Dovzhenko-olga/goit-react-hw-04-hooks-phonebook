import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.search}>
    <span className={styles.title}>
      Find contacts by name
    </span>
    <input className={styles.input} type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;