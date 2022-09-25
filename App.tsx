import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetRefProps} from './components/BottomSheet';

const App = () => {
  const bottomSheetRef = React.useRef<BottomSheetRefProps>(null);
  const handleButton = React.useCallback(() => {
    const isActive = bottomSheetRef?.current?.isActive();

    if (isActive) {
      bottomSheetRef?.current?.scrollTo(0);
    } else {
      bottomSheetRef?.current?.scrollTo(-200);
    }
  }, []);

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TouchableOpacity onPress={handleButton} style={styles.openButton}>
          <Text style={styles.openButtonText}>Toggle Bottomsheet</Text>
        </TouchableOpacity>
        <BottomSheet ref={bottomSheetRef}>
          <Text style={styles.bottomSheetHeader}>Scroll up!</Text>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {padding: 15, borderRadius: 10, backgroundColor: '#fff'},
  openButtonText: {color: '#111', fontWeight: '600'},
  bottomSheetHeader: {alignSelf: 'center', fontWeight: '600', fontSize: 16},
});
