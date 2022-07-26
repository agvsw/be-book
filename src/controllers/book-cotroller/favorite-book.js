const CommonResponse = require('../../dto/common-response');

const FavoriteBook = require('../../models').FavoriteBook;

import { v4 as uuidv4 } from 'uuid';


exports.addFavorite = async (req, res) => {
  req.body.id = uuidv4();
  const data = await FavoriteBook.create(req.body).catch((err) => {
    res.json(new CommonResponse(44, "error save data"))
  })

  res.json(new CommonResponse('', '', data));

}


exports.getAll = async (req, res) => {
  const listFavorite = await FavoriteBook.findALl().catch((err) => {
    res.json(new CommonResponse(44, "error get data"))
  });

  res.json(new CommonResponse('', '', listFavorite));

}