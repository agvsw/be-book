class CommonResponse {
  constructor(responseCode, responMessage, data){
      this.responseCode = responseCode ? responseCode : "20"; //if constructor params null, set with 00
      this.responseMessage = responMessage ? responMessage: "Success";
      this.data = data;
  }
}

module.exports = CommonResponse;
