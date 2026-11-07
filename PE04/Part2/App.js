// PE04 Part 2 - Profile Card gallery laid out with flexbox
/*
  Six ProfileCards are arranged in a 2-column x 3-row grid with flexbox
  (flexDirection: 'row' + flexWrap: 'wrap').
  Each card starts as a thumbnail. Pressing a thumbnail expands it;
  pressing the expanded card collapses it back into a thumbnail.
*/
import React, { Component } from 'react';
// PropTypes lets you specify what properties the ProfileCard component can accept.
import PropTypes from 'prop-types';
// The immutability helper function update lets you update a specific piece of the component's state.
import update from 'immutability-helper';
import { Platform, Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const userImage = require('./assets/user.png');

// Data for six profile cards; every card starts as a thumbnail.
const data = [];
for (let i = 0; i < 6; i++) {
  data.push({
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' +
                 'He loves using JS to build React Native applications ' +
                 'for iOS and Android',
    showThumbnail: true
  });
}

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;

  // Thumbnail = scaled down; expanded = scaled up so it still fits inside its grid cell.
  // The transform is put on TouchableHighlight so the touch area shrinks and grows with the card.
  const sizeStyle = showThumbnail ? styles.cardThumbnail : styles.cardExpanded;

  return (
    <View style={styles.cell}>
      <TouchableHighlight onPress={onPress} underlayColor="transparent" style={sizeStyle}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={image}/>
          </View>
          <View>
            <Text style={styles.cardName}>
              {name}
            </Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>
              {occupation}
            </Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
              {description}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: data
    };
  }

  // Toggles the pressed card between thumbnail and expanded view
  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
    });
  };

  render() {
    const list = this.state.data.map(function(item, index) {
      const { image, name, occupation, description, showThumbnail } = item;
      return <ProfileCard key={'card-' + index}
                          image={image}
                          name={name}
                          occupation={occupation}
                          description={description}
                          onPress={this.handleProfileCardPress.bind(this, index)}
                          showThumbnail={showThumbnail}/>;
    }, this);

    return (
      <View style={styles.container}>
        {list}
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  // Flexbox gallery: lay cards out in a row and wrap onto new lines
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    paddingVertical: 40
  },
  // Each grid cell takes half the width and about a third of the height
  cell: {
    width: '50%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 15
      }
    })
  },
  cardImage: {
    width: 80,
    height: 80
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black',
    textShadowOffset: {
      height: 5,
      width: 5
    },
    textShadowRadius: 3
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
  },
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  },
  // Thumbnail: shrink the card to 30% of its size
  cardThumbnail: {
    transform: [{scale: 0.3}]
  },
  // Expanded: grow the card to 55% so it stays inside its cell
  cardExpanded: {
    transform: [{scale: 0.55}]
  }
});