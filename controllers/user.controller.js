const User = require('../model/user.model')

const createUser = async (req, res, next) => {
  const { name, email, country } = req.body
  try {
    const newUser = await User.create({ name, email, country })

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    })
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        status: 'fail',
        data: {
          errorMessage: 'Email already exists',
        },
      })
    }
    return res.status(500).json({
      status: 'fail',
      data: {
        errorMessage: 'Server Error, try again',
      },
    })
  }
}
const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find()
    if (!users) {
      return res.status(404).json({
        status: 'fail',
        data: {
          message: 'No users found in DB',
        },
      })
    }

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      data: {
        errorMessage: 'Server Error, try again',
      },
    })
  }
}

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userID)
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        data: {
          message: 'User not found',
        },
      })
    }

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      data: {
        errorMessage: 'Server Error, try again',
      },
    })
  }
}

const updateUser = async (req, res, next) => {
  const { name, email, country } = req.body

  try {
    const user = await User.findByIdAndUpdate(req.params.userID, {
      name,
      email,
      country,
    })

    console.log(user)

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

const deleteUser = async (req, res, next) => {
  const { name, email, country } = req.body

  try {
    await User.findByIdAndDelete(req.params.userID)

    res.status(200).json({
      status: 'success',
      data: {
        user: null,
      },
    })
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      data: {
        errorMessage: 'Server Error, try again',
      },
    })
  }
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUser,
}
