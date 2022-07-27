const CommonResponse = require('../../dto/common-response');

const FavoriteBook = require('../../models').FavoriteBook;

import { v4 as uuidv4 } from 'uuid';


exports.addFavorite = async (req, res) => {
  const body = {id: uuidv4().toString() , ...req.body};
  const data = await FavoriteBook.create(body);
  console.log(data)
  res.json(new CommonResponse('', '', body));

}


exports.getAll = async (req, res) => {
  const listFavorite = await FavoriteBook.findAll().catch((err) => {
    res.json(new CommonResponse(44, "error get data", err))
  });

  res.json(new CommonResponse('', '', listFavorite));

}