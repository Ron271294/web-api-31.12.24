module.exports = {
    getAll: (req, res) => {
        console.log('fff');
        return res.status(200).json({ msg: "All Products" });
    },
    getById: (req, res) => {
        let prodid = req.params.id;
        return res.status(200).json({ msg: `Product id ${prodid}` });
    },
    addNew: (req, res) => {
        console.log(req.body);
        return res.status(200).json({ msg: "Add New Product" });
    },
    updateById: (req, res) => {
        let prodid = req.params.id;
        return res.status(200).json({ msg: `Update Product id ${prodid}` });
    },
    deleteById: (req, res) => {
        let prodid = req.params.id;
        return res.status(200).json({ msg: `Delete Product id ${prodid}` });
    }
};
