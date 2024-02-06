module.exports = {

    notFound(err,res, req, next){
        console.error(err.stack);
        next(err);
        // res.status(500).send('Something broke!')
        // res.status(404).json({error: 'Resource not found'});
    }

}