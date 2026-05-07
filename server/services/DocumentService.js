class DocumentService {
  getList() {
    const data = [
      {
        guid_doc: "f8a3b6c1-9d4e-4c2a-8f10-2e5a7d9b0c12",
        creationDate: "2026-04-29",
        status: 4,
      },
      {
        guid_doc: "1e2f4a5b-6c7d-4e8f-9a0b-1c2d3e4f5a6b",
        creationDate: "2026-04-16",
        status: 3,
      },
      {
        guid_doc: "7c8d9e0f-1a2b-4c3d-8e9f-0a1b2c3d4e5f",
        creationDate: "2026-04-15",
        status: 1,
      },
      {
        guid_doc: "3d4e5f6a-7b8c-4d9e-0f1a-2b3c4d5e6f7a",
        creationDate: "2026-04-07",
        status: 4,
      },
      {
        guid_doc: "9a0b1c2d-3e4f-4a5b-6c7d-8e9f0a1b2c3d",
        creationDate: "2026-04-10",
        status: 0,
      },
      {
        guid_doc: "5e6f7a8b-9c0d-4e1f-2a3b-4c5d6e7f8a9b",
        creationDate: "2026-04-26",
        status: 0,
      },
      {
        guid_doc: "2b3c4d5e-6f7a-489b-0c1d-2e3f4a5b6c7d",
        creationDate: "2026-04-27",
        status: 1,
      },
      {
        guid_doc: "8d9e0f1a-2b3c-4d4e-5f6a-7b8c9d0e1f2a",
        creationDate: "2026-04-04",
        status: 3,
      },
      {
        guid_doc: "4e5f6a7b-8c9d-401e-2f3a-4b5c6d7e8f90",
        creationDate: "2026-04-15",
        status: 1,
      },
      {
        guid_doc: "0f1a2b3c-4d5e-467f-8a9b-0c1d2e3f4a5b",
        creationDate: "2026-04-23",
        status: 0,
      },
    ];
    return {list: data};
  }
}

module.exports = new DocumentService();
