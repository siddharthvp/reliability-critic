import express from "express";

const app = express();

app.use(express.json());

const port = parseInt(process.env.PORT as string); // necessary for the tool to be discovered by Toolforge proxy

app.get('/stats/:domain', (req, res) => {
  const { domain } = req.params
  res.send({
    domain
  })
});

app.listen(port, () => console.log(`Reliability-critic app listening at port ${port}`));

