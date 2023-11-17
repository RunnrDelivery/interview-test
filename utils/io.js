import { Database } from "./database.js";

export class ControllerRequest {
  body = {};
  params = {};

  constructor(body, params) {
    this.body = body;
    this.params = params;
  }
}

export class ControllerResponse {
  status;
  json;
  sent = false;

  send(status, json) {
    if (this.sent) {
      throw new Error("Response already sent");
    }
    this.status = status;
    this.json = json;
  }
}

export class Controller {
  #callback;
  database = new Database();

  constructor(callback) {
    this.#callback = callback;
  }

  async handle(request, response) {
    return this.#callback(request, response, this.database);
  }
}
