const documentService = require("../services/DocumentService");

class DocumentController {
  getList(req, res) {
    const data = documentService.getList();
    // const data = {message: "Пёрнум"}
    res.json(data);
  }
}

module.exports = new DocumentController();
