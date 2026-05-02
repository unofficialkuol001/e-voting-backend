 const storage = multer.diskStorage(
        {
            destination: function (req, file, cb) {
                cb(null, 'uploads/')
            },
            filename: function (req, file, cb) {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
                cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop())
            }
        }
    )
    const upload = multer({ storage }).single('image')
upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json({
            message: "multer error"
        })
    } else if (err) {
        return res.status(500).json({
            message: "server error"
        })
    }
})