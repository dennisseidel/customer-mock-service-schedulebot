const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Customer } = require('./models/customer');

const port = process.env.PORT || 3002;
const app = express();


app.use(bodyParser.json());

// Operation to query employee data
app.get('/customers', (req, res) => {
  console.log(res);
});

app.get('/customers/:id', (req, res) => {
  const customerId = req.params.id;
  Customer.findById(customerId)
  .then((customer) => {
    if (!customer) {
      return res.status(404).send();
    }
    return res.send({ customer });
  })
  .catch((error) => {
    console.log(error);
    return res.status(400).send();
  });
});

// Operation to create customers
app.post('/customers', (req, res) => {
  const customer = new Customer(req.body);
  customer.save().then((doc) => {
    res.send(doc);
  }).catch((err) => {
    res.status(401).send(err);
  });
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
