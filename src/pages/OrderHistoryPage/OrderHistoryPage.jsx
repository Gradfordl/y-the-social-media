import { checkToken } from "../../utilities/users-service";
function OrderHistoryPage() {

  const handleCheckToken = async () => {
    try {
      const expDate = await checkToken();
      alert(expDate.toLocaleString())
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <div>
      <h1>Order History Page</h1>
      <button onClick={handleCheckToken} >Log In Expires?</button>
    </div>
  );
}
export default OrderHistoryPage;
