import Alert from "./components/ui/Alert/Alert";
import { BellRing, Info, Ban, CheckCheck, TriangleAlert } from "lucide-react";

function App() {
  return (
    <div style={{ margin: "2rem" }}>
      <Alert
        type={"alert-default"}
        headerIcon={<BellRing size={20} />}
        title="Upgrade your plan"
      >
        <p>
          we ran into a problem,{" "}
          <strong>
            <a href="/">Check your credit card information</a>
          </strong>{" "}
          and Please try again later.
        </p>
      </Alert>
      <Alert
        type={"alert-info"}
        headerIcon={<Info size={20} />}
        title="Note"
        description="loren ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
      />
      <Alert
        type={"alert-danger"}
        headerIcon={<Ban size={20} />}
        title="Something went wrong!"
        description="You ran into a problem, Check your internet connection and Please try again later."
      />

      <Alert
        type={"alert-success"}
        headerIcon={<CheckCheck size={20} />}
        title="Your order has been processed!"
      >
        <p>
          You will receive an email confirmation shortly. Thank you for your
          purchase. <strong>Order number: 123456</strong>.
        </p>
      </Alert>
      <Alert
        type={"alert-warning"}
        headerIcon={<TriangleAlert size={20} />}
        title="Tips & Tricks"
        description="loren ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque, Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
      />
    </div>
  );
}

export default App;
