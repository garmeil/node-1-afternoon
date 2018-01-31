const express = require("express");
const bodyParser = require("body-parser");

const {
  read,
  update,
  create,
  destroy
} = require("./controllers/messages_controller");

const app = express();

app.use(bodyParser.json());
app.use(express.static(`../public/build`));

const port = 3000;

app.put(`/api/messages/:id`, update);
app.get(`/api/messages`, read);
app.post(`/api/messages`, create);
app.delete(`/api/messages/:id`, destroy);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
