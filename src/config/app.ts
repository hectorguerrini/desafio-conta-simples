import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { json } from 'body-parser';
import router  from '../routes/router';
class App {
    public app: express.Application;
    constructor(){
        this.app = express();
        this.config();
        
    }
    private config(): void {
        // set settings cors using lib cors
        this.app.use(cors());
        // set settings http headers using lib helmet
        this.app.use(helmet());
        // set app to support application/json post data
        this.app.use(json());
        this.app.use(router);
    }
    
}


export default new App().app;