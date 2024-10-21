import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import AngleRightCircle from '../assets/icons/AngleRightCircle';
import BoltCircleAlt from '../assets/icons/BoltCircleAlt';
import Esim from '../assets/icons/Esim';
import Facebook from '../assets/icons/Facebook';
import Instagram from '../assets/icons/Instagram';
import SimCard from '../assets/icons/SimCard';
import Viber from '../assets/icons/Viber';
import { AuthResponse } from '../entities/Auth';
import { OrderInfo } from '../entities/Order';
import { service } from '../services';
import styles from '../styles/Styles';

const Home = ({navigation}) => {
  const image = require('../assets/images/2.png');
  const [number, onChangeNumber] = React.useState('');
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container3}>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={styles.color4}
      />
      <ScrollView>
        <View
          style={[
            styles.ml5,
            styles.mr5,
            styles.container1,
            styles.justifyBetween,
          ]}>
          <View style={styles.w50}>
            <Esim />
          </View>
          <View
            style={[styles.w50, styles.container1, styles.justifyBetween]}>
            <Instagram />
            <Facebook />
            <Viber />
          </View>
        </View>
        <View style={[styles.m5]}>
          <Image style={styles.stretch} source={image} />
        </View>
        <View
          style={[styles.ml5, styles.mr5, styles.container1, styles.guide, styles.pt5, styles.pb5]}>
          <View style={[styles.ml5, styles.w5]}>
            <SimCard />
          </View>
          <Text
            style={[styles.txt8, styles.bcolor1, styles.color2, styles.ml5, styles.w75]}>
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
            styles.txt8,
            styles.color2,
          ]}
          keyboardType="numeric"
          maxLength={8}
          onChangeText={onChangeNumber}
          value={number}
        />
        <Text style={[styles.m5, styles.txt3]}>
          Та Order ID - аа хийснээр өөрийн дата хэрэглээгээ хянах боложмтой
          болох юм.
        </Text>
        <View style={styles.container2}>
          <TouchableOpacity
            style={[styles.button, styles.bcolor2, styles.container1]}
            onPress={() => {
              if (number === '') {
                return;
              }
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
            <Text style={[styles.txt7, styles.pt1, styles.pl2]}>Үргэлжлүүлэх</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
