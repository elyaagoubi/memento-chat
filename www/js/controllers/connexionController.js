app.controller('ConnexionCtrl', function($scope, $state) {
    // quand l'utilisateur clique sur "Connexion"
    // on sauvegarde les informations dans la variable user
    // on redirige l'utilisateur vers la page de chat avec en paramètres la conversation
    // et le pseudo de l'utilisateur
    $scope.save = function(user){
      $scope.conversation = user;
      $state.go("chat", { "conversation": "memento", "user" : user.pseudo });
    }
});