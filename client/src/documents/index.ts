import { documentRegistryService } from "../services/DocumentRegistryService";
import { CompensationOfExpenses } from "./CompensationOfExpenses";
import { BusinessTrip } from "./BusinessTrip";

documentRegistryService.register(CompensationOfExpenses);
documentRegistryService.register(BusinessTrip);

