import ajaxGet from "../utils/ajaxRequest";
import { Photographer } from "../factories/photographer";

export default class PhotographerApi {
  #url;

  constructor(url) {
    this.#url = url;
  }

  async allPhotographers() {
    const photographers = await ajaxGet(this.#url);
    return photographers.photographers;
  }
}
