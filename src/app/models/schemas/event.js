exports.Schema = {
  name: { type: String },
  start_datetime: { type: String },
  end_datetime: { type: String },
  users_in_the_event: [{ type: String, ref: 'User' }],
  location: [Number],
  owner: { type: String, ref: 'User' }
};
