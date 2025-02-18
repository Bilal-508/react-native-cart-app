import {Image, StyleSheet, Text, View} from 'react-native';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <View style={styles.viewIcon}></View>
        <View style={styles.deleteIcon}></View>
      </View>
      <Image
        resizeMode="contain"
        source={require('./assets/chair.jpg')}
        style={styles.image}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  viewIcon: {
    height: '50',
    width: '50',
    backgroundColor: '#fc5c65',
  },
  deleteIcon: {
    height: '50',
    width: '50',
    backgroundColor: '#4ecdc4',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
});
