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
  Image,
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
          <View style={styles.topWrapper}>
            <Image
              style={styles.appLogo}
              source={require('./src/img/logo.png')}
            />
            <TextInput
              style={styles.searchBar}
              placeholder="Cari Produk Sehat & Natural"
              defaultValue={''}
            />
          </View>

          {/* Promo Cards */}
          <TouchableOpacity style={styles.promo}>
            <Image
              style={styles.promoImage}
              resizeMode="cover"
              source={require('./src/img/promo.jpg')}
            />
          </TouchableOpacity>

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
                <Text style={styles.menuText}>Rendah Kalori</Text>
              </View>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} />
                <Text style={styles.menuText}>Tanpa Tambahan Gula</Text>
              </View>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} />
                <Text style={styles.menuText}>Rendah Gula</Text>
              </View>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} />
                <Text style={styles.menuText}>Organik</Text>
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
                <Text style={styles.menuText}>Bebas Gluten</Text>
              </View>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} />
                <Text style={styles.menuText}>Ibu Hamil & Menyusui</Text>
              </View>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} />
                <Text style={styles.menuText}>Produk Ramah Anak</Text>
              </View>
              <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} />
                <Text style={styles.menuText}>Selengkapnya</Text>
              </View>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Chips */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: '800',
              paddingLeft: 16,
              marginBottom: 16,
            }}>
            PRODUK
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
                  Pilihan
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
                  Banyak Dibeli
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
                  LemoniloBOX
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
                  Terbaru
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
                  Promo
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Products */}
          <View style={{padding: 8}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.product}>
                <View style={styles.productImageWrapper}>
                  <Image
                    style={styles.productImage}
                    source={require('./src/img/mi.jpg')}
                  />
                </View>
                <Text style={styles.productText}>
                  Lorem ipsum dolor si amet!
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.product}>
                <View style={styles.productImageWrapper}>
                  <Image
                    style={styles.productImage}
                    source={require('./src/img/mi.jpg')}
                  />
                </View>
                <Text style={styles.productText}>
                  Lorem ipsum dolor si amet!
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.product}>
                <View style={styles.productImageWrapper}>
                  <Image
                    style={styles.productImage}
                    source={require('./src/img/mi.jpg')}
                  />
                </View>
                <Text style={styles.productText}>
                  Lorem ipsum dolor si amet!
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.product}>
                <View style={styles.productImageWrapper}>
                  <Image
                    style={styles.productImage}
                    source={require('./src/img/mi.jpg')}
                  />
                </View>
                <Text style={styles.productText}>
                  Lorem ipsum dolor si amet!
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Chips */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: '800',
              paddingLeft: 16,
              marginTop: 32,
              marginBottom: 16,
            }}>
            ARTIKEL
          </Text>
          <TouchableOpacity style={styles.article}>
            <View style={styles.productImageWrapper}>
              <Image
                style={styles.articleImage}
                resizeMode="cover"
                source={require('./src/img/covid.jpg')}
              />
            </View>
            <Text style={styles.productText}>Lorem ipsum dolor si amet!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.article}>
            <View style={styles.productImageWrapper}>
              <Image
                style={styles.articleImage}
                resizeMode="cover"
                source={require('./src/img/covid.jpg')}
              />
            </View>
            <Text style={styles.productText}>Lorem ipsum dolor si amet!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.article}>
            <View style={styles.productImageWrapper}>
              <Image
                style={styles.articleImage}
                resizeMode="cover"
                source={require('./src/img/covid.jpg')}
              />
            </View>
            <Text style={styles.productText}>Lorem ipsum dolor si amet!</Text>
          </TouchableOpacity>
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
              Food
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
              Beauty
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
              Suplement
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
              Bundles
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
  topWrapper: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },
  appLogo: {
    height: 40,
    aspectRatio: 1280 / 357,
    marginVertical: 16,
  },
  searchBar: {
    width: '100%',
    padding: 8,
    backgroundColor: Colors.lighter,
    borderRadius: 4,
  },
  promo: {
    flex: 1,
    height: 160,
    backgroundColor: Colors.lighter,
    alignItems: 'center',
  },
  promoImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
  menu: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
    textAlign: 'center',
  },
  menuItem: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.lighter,
    marginBottom: 8,
    textAlign: 'center',
  },
  menuText: {
    fontSize: 12,
    fontWeight: '200',
    textAlign: 'center',
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
  productImageWrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.lighter,
  },
  productImage: {
    height: 100,
    aspectRatio: 292 / 224,
  },
  productText: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    fontSize: 12,
    fontWeight: '600',
  },
  article: {
    borderRadius: 8,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  articleImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  navBar: {
    flexDirection: 'row',
  },
  navWrapper: {
    flex: 1,
    padding: 8,
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
  divider: {
    height: 2,
    backgroundColor: Colors.lighter,
    marginBottom: 16,
  },
});

export default App;
