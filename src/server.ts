import App from './config/app';

const port = process.env.PORT || 3000;

App.listen(port, () => console.log(`[BackEnd] listening on port ${port}!`));