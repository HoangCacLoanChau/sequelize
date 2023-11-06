import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);
const getLikedByResAPI = async (req, res) => {
  let { resId } = req.params;
  let data = await model.like_res.findAll({
    where: {
      res_id: resId,
    },
  });
  res.send(data);
};
//
const getRatingByResAPI = async (req, res) => {
  let { resId } = req.params;
  let data = await model.rate_res.findAll({
    where: {
      res_id: resId,
    },
  });
  res.send(data);
};
export { getLikedByResAPI, getRatingByResAPI };
