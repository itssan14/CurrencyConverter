import { createStackNavigator, createAppContainer } from "react-navigation";
import CurrencyAction from "./Actions/CurrencyAction";
import ResultsAction from "./Actions/ResultsAction";

const AppNavigator = createStackNavigator(
  {
    Home: CurrencyAction,
    Details: ResultsAction
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
