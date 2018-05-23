import TestController from '../controller/test';

module.exports = class Routes {
    constructor(router){
        this.router = router;
    }

    map(){
        //add root routes here, create new route file if you want to group sub-routes
        this.router.get('/', TestController.getAll);
        return this.router;
    }
}