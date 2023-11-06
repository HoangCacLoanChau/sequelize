import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

const model = initModels(sequelize);

const likeAPI = async (req, res) => {
  let { user_id } = req.headers;
  let { res_id } = req.params;
  let checkUser = await model.like_res.findOne({ where: { user_id: user_id, res_id: res_id } });
  if (!checkUser) {
    let newData = { user_id, res_id, date_like: Date() };
    await model.like_res.create(newData);
    res.status(201).send(newData);
  } else {
    res.status(400).send("Đã like");
  }
};
const unLikeAPI = async (req, res) => {
  let { user_id } = req.headers;
  let { res_id } = req.params;
  await model.like_res.destroy({
    where: {
      user_id: user_id,
      res_id: res_id,
    },
  });
  res.send("Xoá thành công");
};
const getLikedByUserAPI = async (req, res) => {
  let { user_id } = req.params;
  let data = await model.like_res.findAll({
    where: {
      user_id: user_id,
    },
  });
  res.send(data);
};

const rateAPI = async (req, res) => {
  let { user_id } = req.headers;
  let { res_id } = req.params;
  let { amount } = req.body;
  let checkUser = await model.rate_res.findOne({ where: { user_id: user_id, res_id: res_id } });
  if (!checkUser) {
    let newData = { user_id, res_id, date_rate: Date(), amount };
    await model.rate_res.create(newData);
    res.status(201).send(newData);
  } else {
    res.status(400).send("Đã rate");
  }
};
const getRatingByUserAPI = async (req, res) => {
  let { user_id } = req.params;
  let data = await model.rate_res.findAll({
    where: {
      user_id: user_id,
    },
  });
  res.send(data);
};

// order
const orderAPI = async (req, res) => {
  let { user_id } = req.headers;
  let { food_id, amount, code, arr_sub_id } = req.body;
  let newData = { user_id, food_id, amount: "", code: "", arr_sub_id: "" };
  await model.orders.create(newData);
  res.status(201).send(newData);
};
export { likeAPI, unLikeAPI, getLikedByUserAPI, rateAPI, getRatingByUserAPI, orderAPI };
