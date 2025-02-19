import {useContext, useEffect} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import CartContext from '../context/CartContext';

const Products = ({navigation}) => {
  const {cartItems, addToCart, getTotalCartItems} = useContext(CartContext);

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

  const products = [
    {
      id: 1,
      name: 'Formal',
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
      image: require('../assets/Products/product_1.jpg'),
    },
  ];

  console.log(cartItems);

  const renderItem = ({item}) => {
    console.log('This is item', item);
    return (
      <View style={styles.productsContainer}>
        <View style={styles.productImage}>
          <Image
            source={item.image}
            style={{width: 70, height: 70, resizeMode: 'contain'}}
          />
        </View>
        <Text style={styles.productName}>{item.name}</Text>
        <Text>RS {item.price}</Text>

        <TouchableOpacity onPress={() => addToCart(item)}>
          <View style={styles.productImage}>
            <Image
              source={require('../assets/plus-cart.png')}
              style={styles.cartImage}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        columnWrapperStyle={{gap: 10}}
        numColumns={2}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 5,
  },
  productsContainer: {
    borderWidth: 1,
    width: '45%',
    padding: 10,
    borderColor: '#ccc',
    marginHorizontal: 'auto',
    marginVertical: 10,
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
  cartBtnContainer: {},
});
