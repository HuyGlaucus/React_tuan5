import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hinh1 from './components/Hinh1';
import Hinh2 from './components/Hinh2';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Hinh1/> */}
      <Hinh2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});