import {forwardRef, useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const TextField = props => {
  const {label, errorMsg} = props;

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput {...props} />
      {!!errorMsg && <Text style={styles.errorMsg}>{errorMsg}</Text>}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  errorMsg: {
    color: 'red',
    fontSize: 11,
    paddingTop: 5,
  },
});
