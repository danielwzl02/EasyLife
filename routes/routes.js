import TestController from '../controller/test';

module.exports = class Routes {
    constructor(router){
        this.router = router;
    }

    map(){
        this.router.get('/', TestController.getAll);
        return this.router;
    }
}