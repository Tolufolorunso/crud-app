const validate = ({ name, email, country, res }) => {
  if (email === '' || name === '' || country === '') {
    return res.status(400).json({
      message: 'fail',
      data: {
        message: 'All fields required',
      },
    })
  }

  const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const letters = /^[A-Za-z]+$/

  if (!email.match(emailFormat)) {
    res.status(400).json({
      message: 'fail',
      data: {
        message: 'Invalid email',
      },
    })
    return true
  }
  if (!name.match(letters)) {
    res.status(400).json({
      message: 'fail',
      data: {
        message: 'Invalid  name supplied',
      },
    })
    return true
  }
  if (!country.match(letters)) {
    res.status(400).json({
      message: 'fail',
      data: {
        message: 'Invalid country name supplied',
      },
    })
    return true
  }

  return false
}

module.exports = { validate }
