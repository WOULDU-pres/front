import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthRoutes } from '../navigations/routes';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={StyleSheet.container}>
      <Text>Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUpScreen;
