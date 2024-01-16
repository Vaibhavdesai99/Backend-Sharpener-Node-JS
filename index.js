import express from "express";

const app = express();

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      Name: "The Big Boss",
      Author: "Vaibhav Desai",
    },
    {
      id: 2,
      Name: "The secret superstar",
      Author: "Pooja Hedge",
    },
    {
      id: 3,
      Name: "The  superstar",
      Author: "Swati Desai",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
