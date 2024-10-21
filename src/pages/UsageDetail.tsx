import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AngleRightCircle from '../assets/icons/AngleRightCircle';
import Close from '../assets/icons/Close';
import Esim from '../assets/icons/Esim';
import InfoCircle from '../assets/icons/InfoCircle';
import Logout from '../assets/icons/Logout';
import Notification from '../assets/icons/Notification';
import SimCard from '../assets/icons/SimCard';
import styles from '../styles/Styles';
import CircularProgress from './CircularProgress';

const UsageDetail = ({route, navigation}) => {
  const {orderId, orderInfo} = route.params;
  const total = orderInfo.data.substring(0, orderInfo.data.indexOf('MB'));
  const totalTxt = orderInfo.data.substring(
    0,
    orderInfo.data.indexOf('MB') + 2,
  );
  const percent = (Number(orderInfo.usedMB) * 100) / Number(total);
  const balance = Number(total) - Number(orderInfo.usedMB);
  return (
    <SafeAreaView style={styles.container3}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={[styles.ml5, styles.mr5, styles.mt5, styles.container1]}>
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
          style={[styles.m5, styles.container1, styles.bcolor1, styles.usage]}>
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
        <View style={[styles.container1, styles.justifyContentCenter]}>
          <Text style={styles.txt1}>Дуусах хугацаа:</Text>
          <Text style={styles.txt5}>March 09 2023</Text>
        </View>
        <LinearGradient
          colors={['#f7922d', '#fcd18d']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[styles.ml5, styles.mr5, styles.mt5, styles.p5, styles.guide]}>
          <View style={[styles.container1, styles.justifyBetween]}>
            <Text style={[styles.txt8, styles.color3, styles.mt1]}>
              Анхааруулга
            </Text>
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
            styles.container1,
            styles.guide,
            styles.bcolor1,
            styles.pt5,
            styles.pb5,
          ]}>
          <View style={[styles.ml5, styles.w5]}>
            <SimCard />
          </View>
          <Text style={[styles.txt8, styles.ml5, styles.w75]}>
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
            styles.container1,
            styles.guide,
            styles.bcolor1,
            styles.pt5,
            styles.pb5,
          ]}>
          <View style={[styles.ml5, styles.w5]}>
            <SimCard />
          </View>
          <Text style={[styles.txt8, styles.ml5, styles.w75]}>
            Холбоо барих
          </Text>
          <View style={[styles.pr5, styles.w5]}>
            <InfoCircle />
          </View>
        </View>
        <View style={[styles.container2, styles.mt5]}>
          <TouchableOpacity
            style={[styles.button, styles.bcolor3, styles.container1]}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Logout />
            <Text style={[styles.txt7, styles.color1, styles.pt1, styles.pl2]}>
              Гарах
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UsageDetail;
