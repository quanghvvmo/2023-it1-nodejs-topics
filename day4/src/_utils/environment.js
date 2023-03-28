import config from "../config/config.json" assert { type: "json" };

const getEnvironmentSetting = async () => {
    process.env.NODE_ENV = process.env.NODE_ENV || "development";

    console.log("Init - Start on environment: " + process.env.NODE_ENV);

    switch (process.env.NODE_ENV) {
        case "development":
            break;
        case "production":
            break;
        default:
            process.env.databaseAccount = JSON.stringify(config[process.env.NODE_ENV]);
            break;
    }

    console.log("Init - Start on environment successfully.");
};

export default getEnvironmentSetting;
