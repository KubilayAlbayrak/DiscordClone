import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StreamColors } from '../../constants/Colors';

const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: StreamColors.discord_gray,
  },
  registerButtonStyle: {
    backgroundColor: StreamColors.discord_purple,
    width: wp(75),
    height: hp(10),
  },
  welcomeText: {
    color: 'white',
    fontSize: wp(6),
    fontWeight: 'bold',
  },
  excitedText: {
    color: '#939699',
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  forgotPassText: {
    color: StreamColors.discord_textinput_focus_border,
    alignSelf: 'flex-start',
    marginTop: hp(2),
    fontWeight: '700',
  },
  registerText: {
    color: StreamColors.discord_textinput_focus_border,
    fontWeight: 'bold',
    fontSize: wp(4),
    marginLeft: wp(2),
  },
});

export default styles;
