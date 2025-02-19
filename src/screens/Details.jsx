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
import React, {useContext} from 'react';
import CartContext from '../context/CartContext';

const Details = () => {
  const {cartItems, deleteFromCart, TotalAmount, addToCart, removeFromCart} =
    useContext(CartContext);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.products}>
        <View style={styles.productDetails}>
          <Image source={item.image} style={styles.productImage} />

          <View style={styles.updateCart}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>RS {item.price * item.quantity}</Text>
            <View style={styles.updateCartBtnContainer}>
              <TouchableOpacity onPress={() => addToCart(item)}>
                <Image
                  source={require('../assets/plus.png')}
                  style={styles.updateCartBtn}
                />
              </TouchableOpacity>
              <Text style={styles.text}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => removeFromCart(item)}>
                <Image
                  source={require('../assets/minus.png')}
                  style={styles.updateCartBtn}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => deleteFromCart(item)}>
          <Image
            source={require('../assets/delete.png')}
            style={styles.updateCartBtn}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={<View style={styles.itemSeparator}></View>}
            renderItem={renderItem}
          />

          <View style={styles.TotalAmountContainer}>
            <View style={styles.TotalAmount}>
              <Text style={styles.text}>Total:</Text>
              <Text style={styles.text}>
                RS {TotalAmount().toLocaleString('en-pk')}
              </Text>
            </View>

            <TouchableNativeFeedback
              onPress={() => Alert.alert('Check Successfully')}>
              <View style={styles.checkOutButton}>
                <Text style={styles.checkOutButtonText}>Check Out</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </>
      ) : (
        <Text>No Items in the cart</Text>
      )}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },

  cartProducts: {},

  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
  },

  productImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  productDetails: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  updateCartBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
    width: '70%',
    borderWidth: 1,
    padding: 5,
    borderRadius: 20,
  },
  updateCart: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  updateCartBtn: {
    height: 20,
    width: 20,
  },

  text: {
    fontSize: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
  TotalAmount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemSeparator: {
    borderTopWidth: 1,
    borderColor: 'lightgrey',
  },

  checkOutButton: {
    backgroundColor: '#037a7a',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 5,
  },

  checkOutButtonText: {
    color: 'white',
  },
  TotalAmountContainer: {
    padding: 10,
  },
});
