const documentService = require("../services/DocumentService");

class DocumentController {
  getList(req, res) {
    const data = documentService.getList();
    res.json(data);
  }
}

module.exports = new DocumentController();
