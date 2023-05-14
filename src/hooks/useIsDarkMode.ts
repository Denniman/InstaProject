import {makeUseStyles} from '../helpers/makeUserStyles';

export const useIsDarkMode = () => {
  const {isDarkMode} = useStyles();
  return isDarkMode;
};

const useStyles = makeUseStyles(() => ({}));
