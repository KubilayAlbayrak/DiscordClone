import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36393E',
    flex: 1,
    padding: 10,
    paddingVertical: 30,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
  },
  subtitle: {
    color: 'lightgrey',
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#202225',
    marginVertical: 5,
    padding: 15,
    color: 'white',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#5964E8',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#4CABEB',
    marginVertical: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 5,
  },
});

export default styles;
