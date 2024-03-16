import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentIcon from "@mui/icons-material/Payment";
import payment from "../Images/payment-trans.jpg";
import TextField from "@mui/material/TextField";
import "./Payment.css";
import PaymentDialogBox from "./Payment-DialogBox/PaymentDialogBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [upiAmount, setUpiAmount] = React.useState(0);
  const [upiId, setUpiId] = useState(0);

  const [amount, setAmount] = React.useState(0);

  const [pay, setPay] = React.useState(false);

  const navi = useNavigate();
  const handlePay = () => {
    setPay(true);
    alert("Your payment is successful");
    navi("/Course");
  };

  return (
    <div className="payment-body">
      <img src={payment} alt="not found" width="100%"></img>
      <h1>Payment Details</h1>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            aria-label="basic tabs example"
          >
            <Tab icon={<CreditCardIcon />} label="Card" {...a11yProps(0)} />
            <Tab icon={<PaymentIcon />} label="UPI" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="payment-card">
            <div className="card-details">
              <h2>Credit Card Payment</h2>
              <TextField
                id="outlined-basic"
                label="Card Number"
                variant="outlined"
                type="number"
                required
              />
              <br />
              <p />
              <TextField
                id="outlined-basic"
                label="Expiration Date(MM/YYYY)"
                variant="outlined"
                type="number"
                required
              />
              <TextField
                id="outlined-basic"
                label="CVC / CVV"
                variant="outlined"
                type="number"
                required
              />
              <br />
              <p />
              <TextField
                id="outlined-basic"
                label="Enter the amount to pay (in Rs)"
                variant="outlined"
                required
                type="number"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            <div className="amount-box">
              <h2>Transaction Summary: </h2>
              <h3>Total Amount: {amount} (in Rs)</h3>
              <h3>Complete Your Purchase: Elevate Your Learning Experience</h3>
              <h3>Earn your certificate completing this course</h3>
              <button type="submit" onClick={handlePay}>
                Pay Now
              </button>
            </div>
          </div>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <div className="upi-payment">
            <div className="upi-details">
              <h2>UPI Payment Details</h2>
              <div style={{ display: "flex", gap: "10px" }}>
                <TextField
                  id="outlined-basic"
                  label="UPI ID"
                  variant="outlined"
                  type="text"
                  required
                  onChange={(e) => {
                    setUpiId(e.target.value);
                  }}
                />
                <h3>OR</h3>
                <PaymentDialogBox />
              </div>
              <br />
              <p />
              <TextField
                id="outlined-basic"
                label="Enter Amount in Rs"
                variant="outlined"
                type="number"
                required
                onChange={(e) => {
                  setUpiAmount(e.target.value);
                }}
              />
              <br />
              <p />
              <TextField
                id="outlined-basic"
                label="Add a description(Optional)"
                variant="outlined"
                type="text"
                required
              />
            </div>
            <div className="upi-summary">
              <h2>Transaction Summary: </h2>
              <h3>Total Amount: {upiAmount} (in Rs)</h3>
              <h3>UPI ID: {upiId}</h3>
              <button onClick={handlePay}>Pay Now</button>
            </div>
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
