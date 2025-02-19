import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation, route}) => {
  const {name, email} = route.params;

  const userDetails = {
    name: name,
    department: 'Computer Science',
    courses: [
      {id: 1, name: 'Programing Fundamentals', score: 71},
      {id: 2, name: 'Web Technologies', score: 72},
      {id: 3, name: 'Mobile App Development', score: 88},
      {id: 4, name: 'Computer Architecture', score: 73},
      {
        id: 5,
        name: 'Introduction To Management',
        score: 90,
      },
    ],
  };

  const renderItem = ({item}) => (
    <View style={styles.marksDetails}>
      <View>
        <Text>{item.name}</Text>
      </View>
      <View>
        <Text>{item.score}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.details_heading}>
          <Text style={styles.heading}>Name: </Text>
          <Text>{userDetails.name}</Text>
        </View>

        <View style={styles.details_heading}>
          <Text style={styles.heading}>Department: </Text>
          <Text>{userDetails.department}</Text>
        </View>
      </View>

      <View style={styles.flatlist_container}>
        <Text style={styles.heading}>Marks Summary </Text>
        <FlatList
          data={userDetails.courses}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatlist_container}
        />
      </View>

      <View style={styles.marksDetails}>
        <Text style={styles.heading}>Total: </Text>
        <Text>
          {userDetails.courses.reduce((acc, curr) => acc + curr.score, 0)}
        </Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  heading: {
    fontWeight: 'bold',
  },
  details_heading: {
    display: 'flex',
    flexDirection: 'row',
    fontWeight: 'bold',
  },

  flatlist_container: {
    marginTop: 10,
  },
  marksDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  totalMarks: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
