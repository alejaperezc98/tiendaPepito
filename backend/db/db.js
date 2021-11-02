import moongoose from "mongoose";

const dbConnection = async () => {
    try {
        await moongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Connection with MongoDB: OK");
    } catch (e) {
        console.log("Error connecting to MongoDB: \n" + e);
    }
};

export default {dbConnection};