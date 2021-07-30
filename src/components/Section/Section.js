import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (  
  <div className={styles.section}>
    <span className={styles.title}>{title}</span>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Section;