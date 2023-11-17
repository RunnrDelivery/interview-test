import { Controller } from "./utils/io.js";

//=========
// Data types and functions

// database
// insert(key, value): Promise<void>
// select(key): Promise<any>
// delete(key): Promise<void>
// update(key, value): Promise<void>
// exists(key): Promise<boolean>

// response
// send(status, json): Promise<void>

// request
// body: any
// params: any

// =========

// POST /users/:userId
// params: { userId: number }
// body: { id: number, name: string, email: string }
// returns: { id: number, name: string, email: string }
export const postUserController = new Controller(
  async (request, response, database) => {
    throw new Error("not implemented");
  }
);

// GET /users/:userId
// params: { userId: number }
// returns: { id: number, name: string, email: string }
export const getUserController = new Controller(
  async (request, response, database) => {
    throw new Error("not implemented");
  }
);

// DELETE /users/:userId
// params: { userId: number }
// returns: nothing
export const deleteUserController = new Controller(
  async (request, response, database) => {
    throw new Error("not implemented");
  }
);

// PATCH /users/:userId
// params: { userId: number }
// body: { id: number, name: string, email: string }
// returns: { id: number, name: string, email: string }
export const patchUserController = new Controller(
  async (request, response, database) => {
    throw new Error("not implemented");
  }
);
