import { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { ROUTES } from '../../utils';
import Image from '../../utils/image';

const Login = () => {
  // GETTER //SETTER
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  //   useEffect(() => {}, [emailAdd, password]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black', fontSize: 20, fontWeight: '800' }}>Get Started with Cashio</Text>
      <Text style={{ color: 'gray'}}>Create your secure wallet in just a few steps</Text>
      <Text style={{ color: 'white' }}>{emailAdd}</Text>
      <Text style={{ color: 'black' }}>{password}</Text>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <CustomTextInput
          label={'Email Address'}
          placeholder={'Enter your email'}
          value={val => setEmailAdd(val)}
          containerStyle={{
            width: '100%',
            marginBottom: 10,
          }}
          labelStyle={{
            fontSize: 15,
            fontWeight: '500',
          }}
          textStyle={{
            fontSize: 15,
            borderRadius: 10,

          }}
        />

        <CustomTextInput
          label={'Password'}
          placeholder={'Enter your password'}
          value={val => setPassword(val)}
          containerStyle={{
            width: '100%',
          }}
          labelStyle={{
            fontSize: 15,
            fontWeight: '500',
          }}
          textStyle={{
            fontSize: 15,
            borderRadius: 10,
          }}
        />
      </View>

       <View style={{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'}}>
      <CustomButton
        label={'Sign Up'}
        containerStyle={{
          margin: 20,
          width: '50%',
          backgroundColor: '#B19CD9',
          borderRadius: 20,
        }}
        textStyle={{
          color: '#ffffff',
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 20,
        }}
        onPress={() => {
          if (emailAdd === '' && password === '') {
            Alert.alert('Incorrect Credentials', 'Please try again!');
            return;
          }
        }}
      />
      </View>
     <View style={{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'}}>
       <Text>Already have an accound?</Text>
        <TouchableOpacity
          style={{ marginLeft: 5 }}
          onPress={() => navigation.navigate(ROUTES.REGISTER)}
        >
          <Text style={{ color: 'blue', fontWeight: '500' }}>Log in</Text>
        </TouchableOpacity>
        </View>
        <Text style={{ color: 'black', fontWeight: '500', margin: 10 }}>Or</Text>

         <View style={{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'}}>
      <CustomButton
        label={'Apple'}
        containerStyle={{

          width: '30%',
          backgroundColor: '#B19CD9',
          borderRadius: 20,
          margin: 20,
        }}
        textStyle={{
          color: '#ffffff',
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 15,
        }}
        onPress={() => {
          if (emailAdd === '' && password === '') {
            Alert.alert('Incorrect Credentials', 'Please try again!');
            return;
          }
        }}
      />
      <CustomButton
        label={'Google'}
        containerStyle={{

          width: '30%',
          backgroundColor: '#B19CD9',
          borderRadius: 20,
          margin: 20,
        }}
        textStyle={{
          color: '#ffffff',
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 15,
        }}
        onPress={() => {
          if (emailAdd === '' && password === '') {
            Alert.alert('Incorrect Credentials', 'Please try again!');
            return;
          }
        }}
      />
      </View>
    </View>
  );
};

export default Login;
