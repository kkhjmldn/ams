const Data = require('../models/assignment-model')

exports.test = (req,res) => {
    res.send(`Jalankan perintah test di model. dipanggil oleh router`)
}

exports.create = async (req,res) => {
    let data = new Data({
        name: req.body.name,
        done: false
    })

    await  data.save( err => {
        if (err) {
            return next(err)
        }

        res.json({
            status : 'success',
            message: 'Successfully Added Data',
            data:data
        })
    })
}

exports.getAll = async (req,res) => {
    await Data.find({}, (err, data)  => {
        if (err) {
            return next(err)
        }

        res.json({
            status : 'success',
            message: 'Successfully Load Data',
            data:data
        })
    })
}

exports.getOne= async (req,res) => {
    await Data.findById(req.params.id , (err, data)  => {
        if (err) {
            return next(err)
        }

        res.json({
            status : 'success',
            message: 'Successfully Load Data',
            data:data
        })
    })
}

exports.update= async (req,res) => {
    await Data.findByIdAndUpdate(req.params.id ,{$set:req.body}, (err, data)  => {
        if (err) {
            return next(err)
        }

        res.json({
            status : 'success',
            message: 'Successfully Updated Data',
            data:data
        })
    })
}

exports.delete= async (req,res) => {
    await Data.findByIdAndRemove(req.params.id ,{$set:req.body}, (err, data)  => {
        if (err) {
            return next(err)
        }

        res.json({
            status : 'success',
            message: 'Successfully Deleted Data',
            data:data
        })
    })
}