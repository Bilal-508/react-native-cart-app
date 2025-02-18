import {
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

  const renderItem = ({item, index}) => (
    <View style={styles.productDetailsContainer}>
      <View style={styles.products}>
        <Image
          source={item.image}
          style={{width: 100, height: 100, resizeMode: 'contain'}}
        />
        <View style={styles.productDetails}>
          <Text style={{fontSize: 17}}>{item.name}</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            RS {item.price}
          </Text>

          <View style={styles.updateCart}>
            <TouchableNativeFeedback onPress={() => addToCart(item)}>
              <Image
                source={require('../assets/plus.png')}
                style={styles.updateCartBtn}
              />
            </TouchableNativeFeedback>
            <Text>{item.quantity}</Text>
            <TouchableNativeFeedback onPress={() => removeFromCart(item)}>
              <Image
                source={require('../assets/minus.png')}
                style={styles.updateCartBtn}
              />
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => deleteFromCart(item)}>
        <View>
          <Image
            source={require('../assets/delete.png')}
            style={styles.deleteCartBtn}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>Total: </Text>
            <Text>{TotalAmount()}</Text>
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
    // flex: 1,
  },
  productDetailsContainer: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  products: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  productDetails: {
    display: 'flex',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  updateCart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  deleteCartBtn: {
    height: 20,
    width: 20,
  },
  updateCartBtn: {
    height: 10,
    width: 10,
  },
});
