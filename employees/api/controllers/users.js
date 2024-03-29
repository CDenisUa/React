const { prisma } = require('../prisma/prisma-client');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

/**
 * @route POST /api/user/login
 * @desc User login
 * @access Public
*/

const login = async (req, res,) => {
    try {
      const { email, password } = req.body;
      if(!email || !password) {
          return  res.status(400).json({message: "Please fill out the required fields."})
      }
    
      const user = await prisma.user.findFirst({
          where: {
              email,
          }
      });

      const isPasswordCorrect = user && (await bcrypt.compare(password, user.password));

      if(user && isPasswordCorrect && secret) {
          res.status(200).json({
              id: user.id,
              email: user.email,
              name: user.name,
              token:  jwt.sign({ id: user.id }, secret, { expiresIn: "30d" })
          });
      } else {
          return res.status(400).json('Wrong login or password!')
      }
    } catch {
      res.status(400).json({ message: 'Something went wrong!'})
    }
}
/**
 * @route POST /api/user/register
 * @desc Registration
 * @access Public
*/

const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
  
    if (!email && !password && !name) {
      return res
        .status(400)
        .json({ message: "Please fill out the required fields!" });
    }
  
    const registeredUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });
  
    if (registeredUser) {
      return res
        .status(400)
        .json({ message: "A user with this email exists!" });
    }

    const salt = await bcrypt.genSalt(10);

    if (!password || !salt) {
        return res.status(400).json({ message: "Invalid password or salt value." });
    } 

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    
    if (user && secret) {
      res.status(201).json({
        id: user.id,
        email: user.email,
        name,
        token: jwt.sign({ id: user.id }, secret, { expiresIn: "30d" }),
      });
    } else {
      return res.status(400).json({ message: "Failed to create user" });
    }

  } catch {
      res.status(400).json({ message: 'Something went wrong!'})
  }
    
};

/**
 * @route GET /api/user/current
 * @desc Current user
 * @access Privet
*/

const current = async (req, res,) => {
  try{
    return res.status(200).json(req.user);
  } catch {
    res.status(400).json({ message: 'Something went wrong!'})
  }
}

module.exports = {
    login,
    register,
    current
}