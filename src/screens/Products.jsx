import {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import CartContext from '../context/CartContext';

const Products = ({navigation}) => {
  const {cartItems, addToCart, getTotalCartItems} = useContext(CartContext);

  const [productsData, setProductsData] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <View style={styles.cartContainer}>
            <Image
              source={require('../assets/shopping-bag.png')}
              style={styles.cartImage}
            />
            <View style={styles.cart}>
              <Text style={styles.cartText}>{getTotalCartItems()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation, cartItems]);

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(response => {
        console.log('Products Response: ', response);
        setProductsData(response);
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const products = [
    {
      id: 1,
      name: 'Formal ',
      price: 500,
      image: require('../assets/Products/product_1.jpg'),
    },
    {
      id: 2,
      name: 'Bag',
      price: 500,
      image: require('../assets/Products/product_2.jpg'),
    },
    {
      id: 3,
      name: 'Shirt',
      price: 500,
      image: require('../assets/Products/product_3.jpg'),
    },
    {
      id: 4,
      name: 'Jacket',
      price: 500,
      image: require('../assets/Products/product_4.jpg'),
    },
    {
      id: 5,
      name: 'Slim Fit',
      price: 500,
      image: require('../assets/Products/product_5.jpg'),
    },
    {
      id: 6,
      name: 'Gaming Monitor',
      price: 500,
      image: require('../assets/Products/product_6.jpg'),
    },
    {
      id: 7,
      name: 'Gold Plate',
      price: 500,
      image: require('../assets/Products/product_7.jpg'),
    },
    {
      id: 8,
      name: 'Hard Drive',
      price: 500,
      image: require('../assets/Products/product_8.jpg'),
    },
    {
      id: 9,
      name: 'SSD',
      price: 500,
      image: require('../assets/Products/product_9.jpg'),
    },
    {
      id: 10,
      name: 'Monitor',
      price: 500,
      image: require('../assets/Products/product_10.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      {productsData ? (
        <ScrollView contentContainerStyle={styles.allProducts}>
          {productsData?.map(item => (
            <View style={styles.productsContainer} key={item.id}>
              <TouchableOpacity onPress={() => addToCart(item)}>
                <View style={styles.addToCartBtn}>
                  <Image
                    source={require('../assets/plus-cart.png')}
                    style={styles.cartImage}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.productImage}>
                <Image
                  source={{uri: item.image}}
                  style={{width: 70, height: 70, resizeMode: 'contain'}}
                />
              </View>
              <Text style={styles.productName}>{item.title}</Text>
              <Text>RS {item.price}</Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    flex: 1,
  },
  allProducts: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productsContainer: {
    borderWidth: 1,
    width: '45%',
    padding: 10,
    borderColor: '#ccc',
    marginBottom: '5%',
    display: 'flex',
    gap: 10,
  },
  productImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
  },
  cartImage: {height: 30, width: 30},
  cartContainer: {
    position: 'relative',
  },
  cart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 15,
    width: 15,
    backgroundColor: '#000000',
    borderRadius: 15 / 2,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cartText: {
    color: '#fff',
    fontSize: 10,
  },
  addToCartBtn: {
    alignSelf: 'flex-end',
  },
  cartBtnContainer: {},

  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
