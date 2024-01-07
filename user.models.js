import mongoos from 'mongoose';
let userSchema = mongoos.Schema(
  {
    username: {
      type: String,
      required: [true, 'username is required'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      unique: true,
    },
  },
  { timeStamps: true }
);

export const User = mongoos.model('User', userSchema);
