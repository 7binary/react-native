import React, { useEffect } from 'react';
import { Text, SafeAreaView, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HTMLView from 'react-native-htmlview';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import mainStyles from 'assets/styles/mainStyles';
import StatusBarDark from 'components/StatusBarDark';
import { RootState } from 'store/rootReducer';
import { getPublications } from 'modules/mobile/store/actions';
import { Publication } from 'modules/mobile/store/types';

const PublicationItem: React.FC<{item: Publication}> = ({item}) => (
  <View style={styles.item}>
    <View style={styles.itemTitleBox}>
      <Ionicons name="ios-notifications" style={styles.itemTitleIcon}/>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
    <View style={styles.itemBody}>
      <HTMLView value={item.anons} addLineBreaks={false}/>
    </View>
    <View style={styles.itemCreatedBox}>
      <Text style={styles.itemCreatedAt}>{item.created_at}</Text>
    </View>
  </View>
);

const PublicationsScreen = () => {
  const publications = useSelector((state: RootState) => state.mobile.publications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPublications());
  }, []);

  return (
    <SafeAreaView style={{...mainStyles.screen, ...styles.container}}>
      <StatusBarDark/>

      <View>
        <FlatList
          data={publications}
          renderItem={({item}) => <PublicationItem item={item}/>}
          keyExtractor={(item) => `pub-${item.id}`}
        />
      </View>

    </SafeAreaView>
  );
};

export default PublicationsScreen;
