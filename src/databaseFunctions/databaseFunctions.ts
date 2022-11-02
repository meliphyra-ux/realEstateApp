import * as Realm from "realm-web";
import {CardProps} from "../components/Card";



const app = new Realm.App({ id: "realestateapp-qfgto" });
const mongo = app.currentUser?.mongoClient("mongodb-atlas");
const collection = mongo?.db("RealEstateApp").collection("flats")

export const getFlats = async (flatsAmount: number): Promise<CardProps[]> => {
    if(collection){
        return await collection.find({},{limit: flatsAmount})
    }
    return []
}