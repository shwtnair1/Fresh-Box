import styles from './Heading.module.css';
import Flex from '../../components/Flex';
import Box from '../../components/Box';

const Heading = ({ summary }) => {
  return (
    <>
      <Flex className={styles.heading}>
        <Box className={styles.date}>WEEK OF OCTOBER 12TH</Box>
        <Flex>
          <div className={styles.price}>{summary}</div>
        </Flex>
      </Flex>
    </>
  );
};

export default Heading;
