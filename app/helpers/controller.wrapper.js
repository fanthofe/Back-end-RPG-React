// On renvoi une fonction prenant en paramètres un controller
module.exports = (controller) => {
    // qui est chargée de créer un middleware "neutre" qui sera fourni à toutes les routes
    return async (req, res, next) => {
        // Ce middleware va implémenter un try…catch… afin de récupérer toute erreur potentiel
        try {
            // Et se chargé lui-même manuellement d'éxecuter le controller qui doit répondre à la route
            // Pour cela on doit lui refournir manuellement, la a requête l'objet de réponse, et la function next
            await controller(req, res, next);
        } catch(err) {
            console.error(err);
            // Si on a un erreur dans le controller, le controller ne peux pas répondre, c'est donc à nous de le faire.
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
};