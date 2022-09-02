import Admin from '../models/admin.js'

const loginAdmin = async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email || !password) {
      res.status(404).json({ message: 'Please provide all values' })
    }
    const admin = await Admin.findOne({ email, password }).select('+password')
    console.log(admin)
    if (!admin) {
      res.status(404).json({ message: 'Invalid Credientials' })
    } else {
      res.status(200).json(admin)
    }
  } catch (error) {
    res.status(404).json({ message: '404 Error' })
  }
}

export { loginAdmin }
