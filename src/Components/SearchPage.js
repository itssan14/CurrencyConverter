import React, { Component } from "react";
import { Container, Content, Button } from "native-base";
import { Text, View, Picker, TextInput } from "react-native";

class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerTitle: "CurrencyConverter",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#283593"
    }
  };

  async updateData() {
    await fetch(
      `https://api.exchangeratesapi.io/latest?base=${this.props.currency}`
    )
      .then(data => data.json())
      .then(res => {
        let vals = [];
        for (let key in res.rates) {
          vals.push({
            currency: key,
            rate: res.rates[key]
          });
        }
        return vals;
      })
      .then(sol => this.props.updateRates(sol));
  }

  valChange = event => {
    this.props.updateValue(event);
  };

  curChange = event => {
    this.props.updateCurrency(event);
  };

  componentWillMount() {
    this.updateData();
  }

  render() {
    return (
      <Container
        style={{
          flex: 1,
          justifyContent: "center"
        }}
      >
        <Content padder>
          <TextInput
            placeholder="Enter amount"
            style={{
              fontSize: 16,
              backgroundColor: "#fff",
              borderColor: "grey",
              borderBottomWidth: 1
            }}
            name="amount"
            onChangeText={event => this.valChange(event)}
          />
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "grey",
              paddingBottom: -2,
              marginBottom: 5
            }}
          >
            <Picker
              mode="dropdown"
              selectedValue={this.props.currency}
              onValueChange={event => this.curChange(event)}
              placeholder="Choose currency"
            >
              {this.props.rates.map(x => (
                <Picker.Item
                  label={x.currency}
                  value={x.currency}
                  key={x.currency}
                />
              ))}
            </Picker>
          </View>
          <Button
            block
            color="#5f5fc4"
            onPress={() => {
              this.updateData();
              this.props.navigation.navigate("Details");
            }}
          >
            <Text style={{ color: "#fff" }}>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default SearchPage;
