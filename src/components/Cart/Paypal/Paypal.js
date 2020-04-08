import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

export default class MyApp extends React.Component {
  render() {
    const onSuccess = payment => {
      console.log("The payment was succeeded!", payment);
      this.props.clearCart();
      this.props.history.push("/");
    };

    const onCancel = data => {
      console.log("The payment was cancelled!", data);
    };

    const onError = err => {
      console.log("Error!", err);
    };

    let env = "sandbox";
    let currency = "GBP";

    const client = {
      sandbox:"AbHtI6pXjEmOtB8NJx4jg1Xd_xiaN8WTu1tzIiks4kybxKVsgAMlLilbNa41J7BNTAj0NGx5CZCBsBuD",
      production: "YOUR-PRODUCTION-APP-ID"
    };
    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={this.props.total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}
