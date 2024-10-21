import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container1: {
    display: 'flex',
    flexDirection: 'row',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  container3: {
    backgroundColor: 'white',
    height: '100%',
  },
  m5: {
    margin: '5%',
  },
  ml5: {
    marginLeft: '5%',
  },
  ml8: {
    marginLeft: '8%',
  },
  mr5: {
    marginRight: '5%',
  },
  mt1: {
    marginTop: '1%',
  },
  mt5: {
    marginTop: '5%',
  },
  mb5: {
    marginBottom: '5%',
  },
  mb2: {
    marginBottom: '2%',
  },
  p5: {
    padding: '5%',
  },
  pl5: {
    paddingLeft: '5%',
  },
  pr5: {
    paddingRight: '5%',
  },
  pt5: {
    paddingTop: '5%',
  },
  pb5: {
    paddingBottom: '5%',
  },
  pt1: {
    paddingTop: '1%',
  },
  pl2: {
    paddingLeft: '2%',
  },
  w5: {
    width: '5%',
  },
  w10: {
    width: '10%',
  },
  w25: {
    width: '25%',
  },
  w30: {
    width: '30%',
  },
  w50: {
    width: '50%',
  },
  w62: {
    width: '62%',
  },
  w75: {
    width: '75%',
  },
  h8: {
    height: '8%',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  bcolor1: {
    backgroundColor: '#f7f7f7',
  },
  bcolor2: {
    backgroundColor: '#69C2A7',
  },
  bcolor3: {
    backgroundColor: '#F1E7FE',
  },
  color1: {
    color: '#B888F8',
  },
  color2: {
    color: '#3B1F61',
  },
  color3: {
    color: '#f7f7f7',
  },
  color4: {
    color: '#ffffff',
  },
  alignItems: {
    alignItems: 'baseline',
  },
  stretch: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').width - 40,
    resizeMode: 'stretch',
  },
  guide: {
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
  },
  input: {
    backgroundColor: '#f7f7f7',
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    padding: 10,
    borderRadius: 12,
  },
  usage: {
    borderRadius: 12,
    padding: 20,
  },
  txt1: {
    fontFamily: 'BreezeSans',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: '#A0A1AC',
  },
  txt2: {
    fontFamily: 'BreezeSans',
    fontSize: 16,
    fontWeight: '600',
    color: '#3B1F61',
  },
  txt3: {
    fontFamily: 'BreezeSans',
    fontSize: 14,
    fontWeight: '400',
    color: '#A0A1AC',
    textAlign: 'center',
  },
  txt4: {
    fontFamily: 'BreezeSans',
    fontSize: 32,
    fontWeight: 900,
    lineHeight: 48,
    color: '#3B1F61',
  },
  txt5: {
    fontFamily: 'BreezeSans',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: '#3B1F61',
  },
  txt6: {
    fontFamily: 'BreezeSans',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16.8,
    color: '#ffffff',
  },
  txt7: {
    fontFamily: 'BreezeSans',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  txt8: {
    fontFamily: 'BreezeSans',
    fontSize: 16,
    fontWeight: '400',
  },
});
export default styles;
