import { Account, Appwrite, Storage } from "@refinedev/appwrite";
import nookies from "nookies";

export const APPWRITE_TOKEN_KEY = process.env.NEXT_PUBLIC_APPWRITE_TOKEN_KEY as string;

const appwriteClient = new Appwrite();

appwriteClient
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT as string);

// for client side authentication
const cookies = nookies.get();
const appwriteJWT = cookies[APPWRITE_TOKEN_KEY];
if (appwriteJWT) {
  appwriteClient.setJWT(appwriteJWT);
}

const account = new Account(appwriteClient);
const storage = new Storage(appwriteClient);

export { appwriteClient, account, storage };
