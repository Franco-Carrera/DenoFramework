import {
  Response,
  Request,
  Context,
  helpers,
} from "https://deno.land/x/oak/mod.ts";
import db from "../db/mongodb.ts";

const usersCollection = db.collection("users");

// const users = [
//   { id: 1, first_name: "Matías", last_name: "Urbano" },
//   { id: 2, first_name: "Fabricio", last_name: "Marchetti" },
// ];

export const getAllUsers = async (context: Context) => {
  const users = await usersCollection.find().toArray();
  context.response.body = {
    payload: users,
  };
  // context.response.body = {
  //   payload: users,
  // };
};

export const getUserById = (context: Context) => {
  const { id } = helpers.getQuery(context, { mergeParams: true }); //ver explicación y probarlo
  console.log(id);
  context.response.body = id;
};

export const getQuery = ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}) => {
  const query = request.url.searchParams.get("uid");
  console.log(query);
  response.body = query;
};

export const saveUser = async ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}) => {
  const body = await request.body();
  const values = await body.value;
  response.body = values;
};
