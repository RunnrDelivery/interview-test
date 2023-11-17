import {
  getUserController,
  postUserController,
  deleteUserController,
  patchUserController,
} from "./problem2.js";
import { ControllerRequest, ControllerResponse } from "./utils/io.js";
import { assertEquals, test } from "./utils/test.js";

function createUser() {
  return {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
  };
}

await test("postUserController: should insert user", async () => {
  const user = createUser();
  const request = new ControllerRequest(user, { userId: user.id });
  const response = new ControllerResponse();
  await postUserController.handle(request, response);
  assertEquals(response.status, 200);
  assertEquals(response.json.id, user.id);
  assertEquals((await postUserController.database.select(user.id)).id, user.id);
});

await test("getUserController: should return 404 doesn't exist ", async () => {
  const user = createUser();
  const request = new ControllerRequest(user, { userId: user.id });
  const response = new ControllerResponse();
  await getUserController.handle(request, response);
  assertEquals(response.status, 404);
});

await test("getUserController: should return user", async () => {
  const user = createUser();
  await getUserController.database.insert(user.id, user);
  const request = new ControllerRequest(user, { userId: user.id });
  const response = new ControllerResponse();
  await getUserController.handle(request, response);
  assertEquals(response.status, 200);
  assertEquals(response.json.id, user.id);
});

await test("deleteUserController: should delete user", async () => {
  const user = createUser();
  await deleteUserController.database.insert(user.id, user);
  const request = new ControllerRequest(user, { userId: user.id });
  const response = new ControllerResponse();
  await deleteUserController.handle(request, response);
  assertEquals(response.status, 200);
  assertEquals(await deleteUserController.database.exists(user.id), false);
});

await test("patchUserController: should update user", async () => {
  const user = createUser();
  await patchUserController.database.insert(user.id, user);
  const request = new ControllerRequest(
    {
      id: user.id,
      name: "Jane Doe",
      email: "janedoe@example.com",
    },
    { userId: user.id }
  );
  const response = new ControllerResponse();
  await patchUserController.handle(request, response);
  assertEquals(response.status, 200);
  assertEquals(response.json.id, user.id);
  assertEquals(
    (await patchUserController.database.select(user.id)).name,
    "Jane Doe"
  );
  assertEquals(
    (await patchUserController.database.select(user.id)).email,
    "janedoe@example.com"
  );
});
