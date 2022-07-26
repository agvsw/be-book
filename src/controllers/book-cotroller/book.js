const Request = require("request");
const CommonResponse = require("../../dto/common-response");

exports.getListBook = async (req, res) => {
  Request.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.key ? req.query.key : null}`, (error, response, body) => {
      if(error) {
          res.json(new CommonResponse(44, 'failed get data'))
      }
      body = JSON.parse(body);
      let resp = [];

      if(body.items){
        body.items.forEach((data, i) => {
          let title = '';
          let author = '';
          let image = '';
          let rating = '';
  
          if(data.volumeInfo){
            title = data.volumeInfo.title ? data.volumeInfo.title : '';
            if(data.volumeInfo.authors){
              data.volumeInfo.authors.forEach((auth) => {
                author = author + auth + ','
              })
            }
  
          }
  
          author = author.slice(0, -1);
  
          image = data.volumeInfo.imageLinks.thumbnail;
  
          rating = data.volumeInfo.averageRating ? data.volumeInfo.averageRating : 0;
  
          resp.push({title, author, image, rating});
  
          if(i == body.items.length -1){
            res.json(new CommonResponse('', '', resp))
          }
  
        });
      }
      
  });
  
}