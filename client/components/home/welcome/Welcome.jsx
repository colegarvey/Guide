import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const jobTypes = ["full","part","contract"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType,setActiveJobType] = useState('')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello!</Text>
        <Text style={styles.welcomeMessage}>Get Started By Creating Your First Map Log!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value="" onChange={() => {}} placeholder='placeholder text'/> 
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList data={jobTypes} 
        renderItem={({item}) => (
          <TouchableOpacity style={styles.tab(activeJobType,item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )} />

      </View>

    </View>
  )
}

export default Welcome;