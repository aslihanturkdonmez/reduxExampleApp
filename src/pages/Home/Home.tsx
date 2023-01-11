import * as React from 'react';
import {Text, View} from 'react-native';

interface HomeProps {
  navigation: any;
}

const Home = (props: HomeProps) => {
  console.log(props);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
