exports.Schema = {
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String, unique: true, },
  username: { type: String, unique: true, },
  password: { type: String },
};
