import { MongoClient } from "mongodb";
import { Booking, Database, Listing, User } from "../lib/types";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.gsdvr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true });
  const db = client.db("db_peace_village_origin");

  return {
    bookings: db.collection<Booking>("bookings"),
    listings: db.collection<Listing>("listings"),
    users: db.collection<User>("users"),
  };
};
