import { Stack, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import spillCoffeeImg from '@/assets/images/coffee-spill.png'

export default function NotFound() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={styles.image} source={spillCoffeeImg}>
        {/* <Stack>
          <Stack.Screen name="index" options={{title: `Home`, headerShown: false}}/>
          <Stack.Screen name="contact" options={{title: `Contact Us`}}/>
          <Stack.Screen name="explore" options={{title: `Explore`}}/>
          <Stack.Screen name="+not-found" options={{title: `Screen Not Found`, headerShown: false}}/>
        </Stack> */}
          <Text style={styles.code}>404</Text>
          <Text style={styles.title}>Page Not Found</Text>
          <Text style={styles.subtitle}>Oops! This screen doesn’t exist.</Text>

          <Pressable style={styles.button} onPress={() => router.replace('/')}>
            <Text style={styles.buttonText}>Go Home</Text>
          </Pressable>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  code: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#443322',
    textAlign: 'center',
    marginBottom: 80,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 8,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: '#ffeec0',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    marginBottom: 120,
  },
  link: {
    color: '#ddaa88',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    padding: 10,
  },
  button: {
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.67)',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 'auto',
  },
  buttonText: {
    color: '#ddaa88',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});
