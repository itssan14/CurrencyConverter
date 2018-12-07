import React from "react";
import { Text, View } from "react-native";
import { List, Container, ListItem, Content, Spinner } from "native-base";

class SearchResults extends React.Component {
  static navigationOptions = {
    headerTitle: "CurrencyValue",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#283593"
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.rates === []) {
      return <Spinner />;
    } else {
      return (
        <Container>
          <Content padder>
            <List>
              {this.props.rates.map(x => (
                <ListItem key={x.currency}>
                  <View
                    style={{
                      flexDirection: "column"
                    }}
                  >
                    <Text style={{ fontSize: 17 }}>{x.currency}</Text>
                    <Text style={{ fontSize: 15 }}>{x.rate}</Text>
                    <Text style={{ fontSize: 15 }}>
                      {this.props.value * x.rate}
                    </Text>
                  </View>
                </ListItem>
              ))}
            </List>
          </Content>
        </Container>
      );
    }
  }
}
export default SearchResults;
