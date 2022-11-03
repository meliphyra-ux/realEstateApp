import * as Realm from "realm-web";
import { CardProps } from "../components/Card";

let collection: any;

export async function Auth() {
  const app = new Realm.App({ id: "realestateapp-qfgto" });
  const credentials = Realm.Credentials.anonymous();
  try {
    const user = app.logIn(credentials);
  } catch (err) {
    console.error("Failed to log in", err);
  }
  const mongo = app.currentUser?.mongoClient("mongodb-atlas");
  collection = mongo?.db("RealEstateApp").collection("flats");
}

export const getFlats = async (flatsAmount: number): Promise<CardProps[]> => {
  if (collection) {
    return await collection.find({}, { limit: flatsAmount });
  }
  return [];
};
