import { connect } from "react-redux";
import * as Actions from "./Types";

import SearchPage from "../Components/SearchPage";

const mapStateToProps = state => ({
  currency: state.Exchange.currency,
  value: state.Exchange.value,
  rates: state.Exchange.rates
});

const mapDispatchToProps = dispatch => ({
  updateCurrency: value =>
    dispatch({ type: Actions.UPDATE_CURRENCY, value: value }),
  updateValue: value => dispatch({ type: Actions.UPDATE_VALUE, value: value }),
  updateRates: value => dispatch({ type: Actions.UPDATE_RATES, value: value })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
