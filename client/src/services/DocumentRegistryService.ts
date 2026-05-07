import { DocumentTypeMetaData } from "../models/Document";

class DocumentRegistryService {
    private types = new Map<string, DocumentTypeMetaData>();

    register(type: DocumentTypeMetaData) {
        this.types.set(type.id, type)
    }

    get(id: string): DocumentTypeMetaData | undefined {
        return this.types.get(id)
    }
}

export const documentRegistryService = new DocumentRegistryService()