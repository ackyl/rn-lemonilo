/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [chipState, setChipState] = useState(1);
  const [navState, setNavState] = useState(1);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* Search Bar */}
          <View style={styles.pad}>
            <Text style={styles.appTitle}>LEMONILO</Text>
            <TextInput
              style={styles.searchBar}
              placeholder="Search!"
              defaultValue={''}
            />
          </View>

          {/* Balance Cards */}
          <View style={{flexDirection: 'row'}}>
            <View style={styles.balance}>
              <Text style={styles.balanceText}>Balance: Rp. 250.000</Text>
            </View>
            <View style={styles.balance}>
              <Text style={styles.balanceText}>Points: 10.000</Text>
            </View>
          </View>

          {/* Menu */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 16,
                paddingHorizontal: 16,
              }}>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} />
                <Text style={styles.menuText}>Food</Text>
              </View>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} />
                <Text style={styles.menuText}>Mart</Text>
              </View>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} />
                <Text style={styles.menuText}>Delivery</Text>
              </View>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} />
                <Text style={styles.menuText}>Health</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingBottom: 16,
                paddingHorizontal: 16,
              }}>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} />
                <Text style={styles.menuText}>Car</Text>
              </View>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} />
                <Text style={styles.menuText}>Groceries</Text>
              </View>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} />
                <Text style={styles.menuText}>Pulsa</Text>
              </View>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} />
                <Text style={styles.menuText}>More</Text>
              </View>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Chips */}
          <Text
            style={{
              fontSize: 24,
              fontWeight: '800',
              paddingLeft: 16,
              marginBottom: 16,
            }}>
            PRODUCTS
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 16,
                marginHorizontal: -4,
              }}>
              <TouchableOpacity
                style={chipState === 1 ? styles.chipActive : styles.chip}
                onPress={() => {
                  setChipState(1);
                }}>
                <Text
                  style={
                    chipState === 1 ? styles.chipTextActive : styles.chipText
                  }>
                  Entertainment
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={chipState === 2 ? styles.chipActive : styles.chip}
                onPress={() => {
                  setChipState(2);
                }}>
                <Text
                  style={
                    chipState === 2 ? styles.chipTextActive : styles.chipText
                  }>
                  Transport
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={chipState === 3 ? styles.chipActive : styles.chip}
                onPress={() => {
                  setChipState(3);
                }}>
                <Text
                  style={
                    chipState === 3 ? styles.chipTextActive : styles.chipText
                  }>
                  Lifestyle
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={chipState === 4 ? styles.chipActive : styles.chip}
                onPress={() => {
                  setChipState(4);
                }}>
                <Text
                  style={
                    chipState === 4 ? styles.chipTextActive : styles.chipText
                  }>
                  Payments
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={chipState === 5 ? styles.chipActive : styles.chip}
                onPress={() => {
                  setChipState(5);
                }}>
                <Text
                  style={
                    chipState === 5 ? styles.chipTextActive : styles.chipText
                  }>
                  Promos
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Products */}
          <View style={{padding: 8}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.product}>
                <View style={styles.imgTemp} />
                <Text style={styles.productText}>
                  Lorem ipsum dolor si amet!
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.product}>
                <View style={styles.imgTemp} />
                <Text style={styles.productText}>
                  Lorem ipsum dolor si amet!
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.product}>
                <View style={styles.imgTemp} />
                <Text style={styles.productText}>
                  Lorem ipsum dolor si amet!
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.product}>
                <View style={styles.imgTemp} />
                <Text style={styles.productText}>
                  Lorem ipsum dolor si amet!
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.product}>
                <View style={styles.imgTemp} />
                <Text style={styles.productText}>
                  Lorem ipsum dolor si amet!
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.product}>
                <View style={styles.imgTemp} />
                <Text style={styles.productText}>
                  Lorem ipsum dolor si amet!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        {/* Nav Bar */}
        <View style={styles.navBar}>
          <TouchableOpacity
            style={styles.navWrapper}
            onPress={() => {
              setNavState(1);
            }}>
            <View
              style={navState === 1 ? styles.navCircleActive : styles.navCircle}
            />
            <Text
              style={navState === 1 ? styles.navTextActive : styles.navText}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navWrapper}
            onPress={() => {
              setNavState(2);
            }}>
            <View
              style={navState === 2 ? styles.navCircleActive : styles.navCircle}
            />
            <Text
              style={navState === 2 ? styles.navTextActive : styles.navText}>
              Activity
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navWrapper}
            onPress={() => {
              setNavState(3);
            }}>
            <View
              style={navState === 3 ? styles.navCircleActive : styles.navCircle}
            />
            <Text
              style={navState === 3 ? styles.navTextActive : styles.navText}>
              Payment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navWrapper}
            onPress={() => {
              setNavState(4);
            }}>
            <View
              style={navState === 4 ? styles.navCircleActive : styles.navCircle}
            />
            <Text
              style={navState === 4 ? styles.navTextActive : styles.navText}>
              Inbox
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navWrapper}
            onPress={() => {
              setNavState(5);
            }}>
            <View
              style={navState === 5 ? styles.navCircleActive : styles.navCircle}
            />
            <Text
              style={navState === 5 ? styles.navTextActive : styles.navText}>
              Account
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  appTitle: {
    color: '#7dc342',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '800',
    marginVertical: 16,
  },
  searchBar: {
    padding: 8,
    backgroundColor: Colors.lighter,
    borderRadius: 8,
  },
  balance: {
    flex: 1,
    padding: 16,
    borderWidth: 2,
    borderColor: Colors.lighter,
  },
  balanceText: {
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center',
  },
  menu: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
  },
  menuItem: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.lighter,
    marginBottom: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    marginHorizontal: 4,
    borderColor: 'lightgray',
    justifyContent: 'center',
  },
  chipActive: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    marginHorizontal: 4,
    justifyContent: 'center',
    backgroundColor: '#7dc342',
    color: 'white',
  },
  chipText: {
    textAlign: 'center',
  },
  chipTextActive: {
    textAlign: 'center',
    color: 'white',
  },
  product: {
    borderRadius: 8,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  imgTemp: {
    backgroundColor: '#7dc342',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
    height: 200,
  },
  productText: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: '600',
  },
  navBar: {
    flexDirection: 'row',
  },
  navWrapper: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  navCircle: {
    height: 24,
    width: 24,
    borderRadius: 24,
    backgroundColor: 'lightgray',
    marginBottom: 8,
  },
  navCircleActive: {
    height: 24,
    width: 24,
    borderRadius: 24,
    backgroundColor: '#7dc342',
    marginBottom: 8,
  },
  navText: {
    fontSize: 10,
  },
  navTextActive: {
    fontSize: 10,
    color: '#7dc342',
  },
  pad: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  divider: {
    height: 2,
    backgroundColor: Colors.lighter,
    marginBottom: 16,
  },
});

export default App;
