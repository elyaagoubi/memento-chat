app.controller('ChatCtrl', function($scope, $stateParams, $firebaseArray, $state){
    // on récupère les paramètres dans l'url (la conversation et l'utilisateur)
    $scope.conversation = $stateParams.conversation;
    $scope.user = $stateParams.user;
    // on créer une connexion à notre base de donnée Firebase
    var ref = new Firebase("https://supchatarticle.firebaseio.com/chat");
    // on prend toutes les conversations qui ont comme nom celui que l'utilisateur a rentré dans le formulaire
    // et qui est passé en paramètre :
    var query = ref.orderByChild("conversation").startAt($scope.conversation).endAt($scope.conversation);
    // la variable message est un Firebase Array
    // c'est un tableau avec tous les messages qui sont dans la base de donnée
    // l'avantage du FirebaseArray c'est que ce tableau est synchronisé en temps réél et
    // il est mis à jours à chaques fois qu'un élément est ajouté à la conversation :
    $scope.messages = $firebaseArray(query);
    // quand on reçoit un message, on joue une musique
    // quand l'utilisateur clique sur envoyer
    // on ajoute le message dans la base de donnée Firebase
    $scope.add = function(add){
      $scope.messages.$add({
        "conversation": $scope.conversation,
        "date": new Date().getTime(),
        "user": $scope.user,
        "content": add.message
      });
      $scope.add.message = "";
    };
	
    // quand l'utilisateur clique sur le bouton de déconnexion
    // on le redirige vers le page d'accueil
    $scope.logOut = function(){
      $state.go("connexion");
    };

  });