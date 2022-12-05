import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Audio,
} from 'expo-av'

export default function App() {
  const[resolved, setResolved] = useState(false)
  const[rejected, setRejected] = useState(false)

  useEffect(() => {
    const sound = new Audio.Sound()

    sound.loadAsync({
        uri: 'https://zombo.com',
    }).then(() => setResolved(true)).catch(() => setRejected(true))
  }, [])

  return (
    <View style={styles.container}>
      <Text>{resolved? "resolved" : rejected ? "rejected": "loading"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
