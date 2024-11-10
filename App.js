import { View, StyleSheet } from 'react-native';
import Carousel from './components/Carousel';

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
