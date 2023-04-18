import {StyleSheet} from 'react-native';
import {fontWeight} from '../../theme';

export const styles = StyleSheet.create({
  profileContainer: {
    padding: 10,
  },
  statsContainer: {
    alignItems: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 50,
  },
  statsHeader: {
    fontSize: 18,
    fontWeight: fontWeight.bold,
  },
  name: {
    fontSize: 17,
    fontWeight: fontWeight.bold,
  },
  bio: {
    fontSize: 17,
  },
  buttonWrapper: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridContainer: {
    marginTop: 5,
  },
});
