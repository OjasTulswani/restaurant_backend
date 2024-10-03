import dotenv from 'dotenv'

dotenv.config()

export default {
    app : {
        port : Number(process.env.APP_PORT) || 8080
    }, 
    db : {
        dbconnection : (process.env.MONGO_CONNECTION_STRING)
    },
    sendGrid : {
        api : String(process.env.SENDGRID_API_KEY),
        templateId : String(process.env.SENDGRID_templateId)
    }
}