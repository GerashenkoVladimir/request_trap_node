class HelloWorldController {
    static helloAction(req, resp){
        resp.send("Hello world");
    }
}

exports.HelloWorldController = HelloWorldController;
