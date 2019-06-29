/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Content, Text, ListItem, Button, Body, Icon, Right, Title, Left, Separator, Badge, Switch } from 'native-base';

import { db } from './src/config';

//******  This fixes the yellow box  *******/
import { YellowBox } from 'react-native';
import _ from 'lodash';
import { bold } from 'ansi-colors';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
//******************************************/


let itemsRef = db.ref('/MyLab');

export default class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }
  render() {
    return (
      <Container>
      <Header noShadow>
        <Left>
          <Button transparent>
              <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Monitoring System</Title>
        </Body>
      </Header>
      <Content>
      <Separator bordered>
      <Text style={styles.separator}>My Lab</Text>
      </Separator>
      <ListItem>
            <Text>เครื่องเป่าลม</Text>
            <Body>
            <Switch value={this.state.items[4]} />
            </Body>
      </ListItem>      
      <ListItem>
        <Badge success>
          <Text>ความชื้น</Text>
        </Badge>
        <Body>
          <Text> {this.state.items[0]} %</Text>
        </Body>
      </ListItem>
      <ListItem>
        <Badge info>
          <Text>อุณหภูมิ</Text>
        </Badge>
        <Body>
          <Text> {this.state.items[7]} °C</Text>
        </Body>
      </ListItem>     
      <ListItem>
        <Badge warning>
          <Text>ความชื้นเปิด</Text>
        </Badge>
        <Body>
          <Text> {this.state.items[6]} %</Text>
        </Body>
      </ListItem>        
      <ListItem>
        <Badge>
          <Text>ความชื้นปิด</Text>
        </Badge>
        <Body>
          <Text> {this.state.items[5]} %</Text>
        </Body>
      </ListItem>
      <Separator bordered>
          <Text style={styles.separator}>กระแสไฟฟ้า 3 เฟส</Text>
      </Separator>
      <ListItem>
        <Badge>
          <Text>I1</Text>
        </Badge>
        <Body>
          <Text> {this.state.items[1]} Ampere</Text>
        </Body>
      </ListItem>
      <ListItem>
        <Badge>
          <Text>I2</Text>
        </Badge>
        <Body>
          <Text> {this.state.items[2]} Ampere</Text>
        </Body>
      </ListItem>     
      <ListItem>
        <Badge>
          <Text>I3</Text>
        </Badge>
        <Body>
          <Text> {this.state.items[3]} Ampere</Text>
        </Body>
      </ListItem>        
      <Separator bordered>
          <Text style={styles.separator}>แรงดันไฟฟ้า 3 เฟส</Text>
      </Separator>
      <ListItem>
        <Badge primary>
          <Text>V1</Text>
        </Badge>
        <Body>
          <Text> {this.state.items[8]} Volt</Text>
        </Body>
      </ListItem>
      <ListItem>
        <Badge primary>
          <Text>V2</Text>
        </Badge>
        <Body>
          <Text> {this.state.items[9 ]} Volt</Text>
        </Body>
      </ListItem>     
      <ListItem>
        <Badge primary>
          <Text>V3</Text>
        </Badge>
        <Body>
          <Text> {this.state.items[10]} Volt</Text>
        </Body>
      </ListItem>   
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'left',
  },
  separator: {
    fontSize: 20,
    fontWeight:'bold',
    color: '#333333',
    textAlign: 'left',
    margin: 0,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
