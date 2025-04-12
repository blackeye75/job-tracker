import { Client, Account, Databases, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67f8f917003c9a30642a");

export const account = new Account(client);
export const databases = new Databases(client); // 👈 Extra line
export { ID };

