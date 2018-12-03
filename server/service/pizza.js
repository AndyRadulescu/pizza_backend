exports.getSomething = (req, res) => {
    console.log(req.body);
    res.send("something happend");
};