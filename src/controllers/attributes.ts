import { RestClient } from "../rest_client";

import util from "util";
import {
  CatalogDataProductAttributeInterface,
  CatalogDataProductAttributeSearchResultsInterface,
  EavDataAttributeOptionInterface,
} from "../interfaces/default";

export class AttributeController {
  private restClient: RestClient;

  constructor(restClient: RestClient) {
    this.restClient = restClient;
  }

  async list(
    searchCriteria?: string
  ): Promise<CatalogDataProductAttributeSearchResultsInterface> {
    const query = "searchCriteria=" + searchCriteria;
    const endpointUrl = util.format("/products/attributes?%s", query);
    return this.restClient.get(endpointUrl);
  }

  async create(categoryAttributes: {
    attribute: CatalogDataProductAttributeInterface;
  }) {
    return this.restClient.post("/products/attributes", categoryAttributes);
  }

  async update(
    attributeId: any,
    categoryAttributes: {
      attribute: CatalogDataProductAttributeInterface;
    }
  ) {
    const endpointUrl = util.format("/products/attributes/%d", attributeId);
    return this.restClient.put(endpointUrl, categoryAttributes);
  }

  async delete(attributeId: any) {
    const endpointUrl = util.format("/products/attributes/%d", attributeId);
    return this.restClient.delete(endpointUrl);
  }

  async get(attributeId: any) {
    const endpointUrl = util.format("/products/attributes/%d", attributeId);
    return this.restClient.get(endpointUrl);
  }

  async addOption(
    attributeId: string,
    option: { option: EavDataAttributeOptionInterface }
  ) {
    const endpointUrl = util.format(
      "/products/attributes/%d/options",
      attributeId
    );
    return this.restClient.post(endpointUrl, option);
  }
}
