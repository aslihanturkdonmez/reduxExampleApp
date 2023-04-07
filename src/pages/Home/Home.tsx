/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import actions from '../../store/saga/actions';
import {ActivityIndicator, FlatList} from 'react-native';

interface HomeProps {
  navigation: any;
}

interface State {
  UserReducer?: any;
}

const Home = (props: HomeProps) => {
  const dispatch = useDispatch();
  const {Loading, Data, TotalUser} = useSelector(
    (state: State) => state.UserReducer,
  );

  const getUsers = () => {
    //console.log(Data);
    dispatch({type: actions.GET_USERS, payload: {results: 10}});
  };

  useEffect(() => {
    getUsers();

    return () => {};
  }, []);

  return (
    <View>
      {Loading && Data?.length ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <FlatList
            data={Data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    paddingVertical: 20,
                    paddingHorizontal: 20,
                    backgroundColor: 'white',
                    borderWidth: 0.7,
                    marginHorizontal: 20,
                    marginVertical: 8,
                  }}>
                  <Text>{item.name.first + item.name.last}</Text>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Home;
