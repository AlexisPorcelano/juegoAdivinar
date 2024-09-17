const getHello = (req, res) => {
    
    var message = 'hello world'
    console.log(message);
    
    res.status(200).json(message)
}

module.exports = getHello