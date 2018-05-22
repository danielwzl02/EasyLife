import User from '../model/data';

exports.getAll = (req, res) => res.send(User.getUser());