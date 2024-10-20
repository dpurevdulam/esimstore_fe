import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AngleRightCircle from '../assets/icons/AngleRightCircle';
import Close from '../assets/icons/Close';
import Esim from '../assets/icons/Esim';
import InfoCircle from '../assets/icons/InfoCircle';
import Logout from '../assets/icons/Logout';
import Notification from '../assets/icons/Notification';
import SimCard from '../assets/icons/SimCard';
import CircularProgress from './CircularProgress';

const UsageDetail = ({route, navigation}) => {
  const {orderId, orderInfo} = route.params;
  const total = orderInfo.data.substring(0, orderInfo.data.indexOf('MB'));
  const totalTxt = orderInfo.data.substring(0, orderInfo.data.indexOf('MB')+2);
  const percent = Number(orderInfo.usedMB) * 100 / Number(total);
  const balance = Number(total) - Number(orderInfo.usedMB);
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={[styles.ml5, styles.mr5, styles.mt5, styles.rowContainer]}>
          <View style={[styles.w25]}>
            <Esim />
          </View>
          <View style={[styles.w62]}>
            <Text style={styles.txt1}>Таны Order ID</Text>
            <Text style={styles.txt2}>{orderId}</Text>
          </View>
          <View style={[styles.w10]}>
            <Notification />
          </View>
        </View>
        <View
          style={[styles.m5, styles.rowContainer, styles.color1, styles.usage]}>
          <CircularProgress percent={percent} balance={balance + 'MB'} />
          <View style={[styles.ml8]}>
            <View>
              <Text style={styles.txt1}>Хэрэглэсэн дата</Text>
              <Text style={styles.txt4}>{orderInfo.usedMB}</Text>
            </View>
            <View>
              <Text style={styles.txt1}>Нийт дата</Text>
              <Text style={styles.txt4}>{totalTxt}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.rowContainer, styles.alignItems]}>
          <Text style={styles.txt1}>Дуусах хугацаа:</Text>
          <Text style={styles.txt5}>March 09 2023</Text>
        </View>
        <LinearGradient
          colors={['#f7922d', '#fcd18d']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[styles.ml5, styles.mr5, styles.mt5, styles.p5, styles.guide]}>
          <View style={[styles.rowContainer, styles.justifyBetween]}>
            <Text style={[styles.guideTxt, styles.mt1]}>Анхааруулга</Text>
            <Close />
          </View>
          <Text style={[styles.txt6, styles.mt5]}>
            Most eSIMs can only be installed once. If you remove the eSIM from
            your device, you cannot install it again.
          </Text>
        </LinearGradient>
        <View
          style={[
            styles.ml5,
            styles.mr5,
            styles.mt5,
            styles.rowContainer,
            styles.guide2,
            styles.color1,
          ]}>
          <View style={[styles.ml5, styles.w5]}>
            <SimCard />
          </View>
          <Text style={[styles.guideTxt2, styles.ml5, styles.w75]}>
            Esim суулгах заавар харах
          </Text>
          <View style={[styles.pr5, styles.w5]}>
            <AngleRightCircle />
          </View>
        </View>
        <View
          style={[
            styles.ml5,
            styles.mr5,
            styles.mt5,
            styles.rowContainer,
            styles.justifyBetween,
            styles.guide2,
            styles.color1,
          ]}>
          <View style={styles.pl5}>
            <SimCard />
          </View>
          <Text style={styles.guideTxt2}>Холбоо барих</Text>
          <View style={styles.pr5}>
            <InfoCircle />
          </View>
        </View>
        <View style={[styles.container, styles.mt5]}>
          <TouchableOpacity
            style={[styles.button, styles.rowContainer]}
            onPress={() => navigation.navigate('Home')}>
            <Logout />
            <Text style={styles.btnTxt}>Гарах</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  usage: {
    borderRadius: 12,
    padding: 20,
  },
  m5: {
    margin: '5%',
  },
  ml5: {
    marginLeft: '5%',
  },
  mr5: {
    marginRight: '5%',
  },
  mt5: {
    marginTop: '5%',
  },
  mt1: {
    marginTop: '1%',
  },
  mb5: {
    marginBottom: '5%',
  },
  mb2: {
    marginBottom: '2%',
  },
  ml8: {
    marginLeft: '8%',
  },
  pl5: {
    paddingLeft: '5%',
  },
  pr5: {
    paddingRight: '5%',
  },
  p5: {
    padding: '5%',
  },
  w50: {
    width: '50%',
  },
  w30: {
    width: '30%',
  },
  w62: {
    width: '62%',
  },
  w25: {
    width: '25%',
  },
  w10: {
    width: '10%',
  },
  w5: {
    width: '5%',
  },
  w75: {
    width: '75%',
  },
  alignItems: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  stretch: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').width - 40,
    resizeMode: 'stretch',
  },
  guide: {
    borderRadius: 12,
  },
  guideTxt: {
    fontFamily: 'BreezeSans',
    fontSize: 16,
    fontWeight: '600',
    color: Colors.lighter,
  },
  guide2: {
    backgroundColor: '#f7f7f7',
    height: 72,
    borderRadius: 12,
    alignItems: 'center',
  },
  guideTxt2: {
    fontFamily: 'BreezeSans',
    fontSize: 16,
    fontWeight: '400',
    color: '#3B1F61',
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
  input: {
    backgroundColor: Colors.lighter,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#F1E7FE',
    padding: 10,
    borderRadius: 12,
  },
  btnTxt: {
    fontFamily: 'BreezeSans',
    fontSize: 16,
    fontWeight: '600',
    color: '#B888F8',
    paddingTop: 2,
    paddingLeft: 2,
  },
  borderCheck: {
    borderWidth: 1,
    borderColor: 'black',
  },
  txt1: {
    fontFamily: 'BreezeSans',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: '#A0A1AC',
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
  color1: {
    backgroundColor: '#f7f7f7',
  },
});

export default UsageDetail;
