import PleaseSignIn from "../components/PleaseSignIn";
import OrderList from "../components/OrderList";

const OrdersPage = (props) => (
  <div>
    <PleaseSignIn>
      <OrderList></OrderList>
    </PleaseSignIn>
  </div>
);

export default OrdersPage;
