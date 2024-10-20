import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AngleRightCircle from '../assets/icons/AngleRightCircle';
import BoltCircleAlt from '../assets/icons/BoltCircleAlt';
import Esim from '../assets/icons/Esim';
import Facebook from '../assets/icons/Facebook';
import Instagram from '../assets/icons/Instagram';
import SimCard from '../assets/icons/SimCard';
import Viber from '../assets/icons/Viber';
import {AuthResponse} from '../entities/Auth';
import {service} from '../services';
import {OrderInfo} from '../entities/Order';
import Spinner from 'react-native-loading-spinner-overlay';

const Home = ({navigation}) => {
  const image = require('../assets/images/2.png');
  const [number, onChangeNumber] = React.useState('');
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: '#ffffff'}}
      />
      <ScrollView>
        <View
          style={[
            styles.ml5,
            styles.mr5,
            styles.rowContainer,
            styles.justifyBetween,
          ]}>
          <View style={styles.w50}>
            <Esim />
          </View>
          <View
            style={[styles.w50, styles.rowContainer, styles.justifyBetween]}>
            <Instagram />
            <Facebook />
            <Viber />
          </View>
        </View>
        <View style={[styles.m5]}>
          <Image style={styles.stretch} source={image} />
        </View>
        <View
          style={[styles.ml5, styles.mr5, styles.rowContainer, styles.guide]}>
          <View style={[styles.ml5, styles.w5]}>
            <SimCard />
          </View>
          <Text
            style={[styles.guideTxt, styles.color1, styles.ml5, styles.w75]}>
            Esim суулгах заавар харах
          </Text>
          <View style={[styles.pr5, styles.alignItems, styles.w5]}>
            <AngleRightCircle />
          </View>
        </View>
        <Text
          style={[styles.ml5, styles.mr5, styles.mt5, styles.mb2, styles.txt2]}>
          Таны Order ID
        </Text>
        <TextInput
          style={[
            styles.ml5,
            styles.mr5,
            styles.p5,
            styles.input,
            styles.guideTxt,
          ]}
          keyboardType="numeric"
          defaultValue="23232323"
          onChangeText={onChangeNumber}
          value={number}
        />
        <Text style={[styles.m5, styles.txt3]}>
          Та Order ID - аа хийснээр өөрийн дата хэрэглээгээ хянах боложмтой
          болох юм.
        </Text>
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.button, styles.rowContainer]}
            onPress={() => {
              setLoading(true);
              service
                .login()
                .then((res: AuthResponse) => {
                  service
                    .getOrderInfo(res.data.auth_token, number)
                    .then((orderInfo: OrderInfo) => {
                      setLoading(false);
                      console.log(
                        'IndexOf::',
                        orderInfo.data.cardApiDtoList[0].data.indexOf('MB'),
                      );
                      console.log(
                        'SubStr::',
                        orderInfo.data.cardApiDtoList[0].data.substring(
                          0,
                          orderInfo.data.cardApiDtoList[0].data.indexOf('MB'),
                        ),
                      );
                      navigation.navigate('UsageDetail', {
                        orderId: number,
                        orderInfo: orderInfo.data.cardApiDtoList[0],
                      });
                    })
                    .catch(ex => {
                      console.log('Error Order: ', ex);
                      setLoading(false);
                    });
                })
                .catch(ex => {
                  console.log('Error Login: ', ex);
                  setLoading(false);
                });
            }}>
            <BoltCircleAlt />
            <Text style={styles.btnTxt}>Үргэлжлүүлэх</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
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
  mb5: {
    marginBottom: '5%',
  },
  mb2: {
    marginBottom: '2%',
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
  w75: {
    width: '75%',
  },
  w5: {
    width: '5%',
  },
  w10: {
    width: '10%',
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
    backgroundColor: '#f7f7f7',
    height: 72,
    borderRadius: 12,
    alignItems: 'center',
  },
  guideTxt: {
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
    backgroundColor: '#f7f7f7',
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#69C2A7',
    padding: 10,
    borderRadius: 12,
  },
  btnTxt: {
    fontFamily: 'BreezeSans',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    paddingTop: 2,
    paddingLeft: 2,
  },
  borderCheck: {
    borderWidth: 1,
    borderColor: 'black',
  },
  color1: {
    backgroundColor: '#f7f7f7',
  },
  alignItems: {
    alignItems: 'baseline',
  },
});

export default Home;
