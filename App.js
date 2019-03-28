import React, { Component } from 'react';
import { Image, FlatList, StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class One extends Component {

    constructor(props) {
        super(props);
        var navigation = this.props.navigation
    }

    render() {
        return (
          <View style= {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>One</Text>
          </View>
        );
    }

}

class Two extends Component {

    constructor(props) {
        super(props);
        var navigation = this.props.navigation
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Two</Text>
            </View>
        );
    }

}

class Three extends Component {
  constructor(props) {
    super(props);
    var navigation = this.props.navigation;
  }

  render() {
    return (
      <View style={{ backgroundColor: 'green', flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Three</Text>
      </View>
    );
  }
}

const MainStack = createBottomTabNavigator(
    {
        One: { screen: One },
        Two: { screen: Two },
        Three: { screen: Three }
    }
)

const App = createAppContainer(MainStack)

export default App

/*

export default class App extends Component {
    state = {
        refresh: false,
        data: [
            {
                name: "Harry",
                image: "https://via.placeholder.com/350x150"
            },
            {
                name: "James",
                image: "https://via.placeholder.com/350x150"
            },
            {
                name: "Bobby",
                image: "https://via.placeholder.com/350x150"
            },
            {
                name: "Carl",
                image: "https://via.placeholder.com/350x150"
            },
            {
                name: "Jos",
                image: "https://via.placeholder.com/350x150"
            },
            {
                name: "Owen",
                image: "https://via.placeholder.com/350x150"
            },
            {
                name: "Winters",
                image: "https://via.placeholder.com/350x150"
            },
            {
                name: "Ralf",
                image: "https://via.placeholder.com/350x150"
            }
        ]

    }

    refreshData = () => {

        this.setState({
            refresh: true
        })

        this.setState({
            refresh: false,
            data: [
                {
                    name: "Updated",
                    image: "http://i.pravatar.cc/400?img=10"
                },
                {
                    name: "Data",
                    image: "http://i.pravatar.cc/400?img=20"
                }]
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    style={{ width: '100%' }}
                    onRefresh={this.refreshData}
                    refreshing={this.state.refresh}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, separators }) => (
                        <View style={{ paddingVertical: 45, borderBottomWidth: 1 }}>
                            <Image style={{ width: 30, height: 30 }} source={{ uri: item.image }} />
                            <Text>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
}); */