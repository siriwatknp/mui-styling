import { mergeStyleCreators } from 'index';
import { createStyles as createParentStyles } from '../Parent';

export default mergeStyleCreators(createParentStyles, () => ({
  root: {},
}));
