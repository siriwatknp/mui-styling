import { mergeStyleCreators } from 'index';
import { createStyles as createChildStyles } from '../Child';

export default mergeStyleCreators(createChildStyles, () => ({
  parentRoot: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 32,
    padding: '0 16px',
    '&:hover': {
      backgroundColor: '#f7f7f7',
    },
  },
  parentLabel: {
    margin: '0 auto 0 0',
  },
}));
