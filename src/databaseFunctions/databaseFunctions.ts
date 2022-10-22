import * as Realm from "realm-web";
import {CardProps} from "../components/Card";

const app = new Realm.App({ id: "realestateapp-qfgto" });
const credentials = Realm.Credentials.anonymous();
try {
    const user = await app.logIn(credentials);
} catch(err) {
    console.error("Failed to log in", err);
}
const mongo = app.currentUser?.mongoClient("mongodb-atlas");
const collection = mongo?.db("RealEstateApp").collection("flats")

export const getAllFlats = async (): Promise<CardProps[]> => {
    if(collection){
        return await collection.find()
    }
    return []
}