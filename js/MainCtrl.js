var Games = [
  {
    description: 'the original game ?',
    url:'http://gabrielecirulli.github.io/2048/' 
  },
  {
    description: 'seeing the game solved by an AI ?',
    url:'http://ov3y.github.io/2048-AI/' 
  },
  {
    description: 'a 3 dimensionnal 2048 game?',
    url:'http://joppi.github.io/2048-3D/' 
  },
  {
    description: 'trying to reach 4096 on a 5x5 board ?',
    url:'http://mattjmattj.github.io/4096/' 
  },
  {
    description: 'playing 2048 in a linux terminal ?',
    url:'https://github.com/bfontaine/term2048' 
  },
  {
    description: 'a 4D 2048 game ? That\'s 2048 as four 2x2 boards.',
    url:'http://huonw.github.io/2048-4D/' 
  },
  {
    description: 'playing with no limits ?',
    url:'http://mirri66.github.io/2bitfinity/' 
  },
  {
    description: 'playing on an invisible board ?',
    url:'http://ehzhang.github.io/2048-hardcore/' 
  },
  {
    description: 'an hexagonal 2048 ?',
    url:'http://baiqiang.github.io/2048-hexagon/' 
  },
  {
    description: '2048 on 2 boards that share a single tile ?',
    url:'http://baiqiang.github.io/2048-cross/' 
  },
  {
    description: '2048 in latin ?',
    url:'http://justahero.github.io/' 
  },
  {
    description: '2048 Doctor Who Edition ?',
    url:'http://games.usvsth3m.com/2048-doctor-who-edition/' 
  },
  {
    description: 'Doge2048. Quite weird',
    url:'http://doge2048.com/' 
  },
  {
    description: 'a variant for physicists, with electrons and atoms ?',
    url:'http://milrivel.github.io/LHC/' 
  },
  {
    description: 'a game for hackers, in hexadecimal ?',
    url:'http://albogdano.github.io/2048/' 
  },
  {
    description: 'playing tetris in a 2048 board ?',
    url:'http://prat0318.github.io/2048-tetris/' 
  },
  {
    description: 'Flappy bird in a 2048 board ?',
    url:'http://hczhcz.github.io/Flappy-2048/' 
  },
  {
    description: 'playing Flappy Bird Doge 2048 ?.. yep, someone dared',
    url:'http://www.donaldguy.com/Flappy-Doge2048/' 
  },
  {
    description: 'playing Flappy bird and 2048... Simultaneously !?',
    url:'http://chenglou.github.io/flappy-2048-side-by-side/' 
  },
  {
    description: 'a Scrable variant ? I\'m still trying to figure out how it works.',
    url:'http://danieljanus.pl/wosg/' 
  },
  {
    description: 'a 2 player 2048 ?',
    url:'http://instapainting.com/2x2048/index.html' 
  },
  {
    description: 'a massively multiplayer 2048 game where everybody can request a move ?',
    url:'http://hnplays2048-democracy.herokuapp.com/' 
  },
  {
    description: 'playing 2048 on Twitch ?',
    url:'http://www.twitch.tv/twitchplays2048' 
  },
  {
    description: 'Simply trying to reach 4 ?',
    url:'http://ehzhang.github.io/4/' 
  },
  {
    description: 'A very easy version of the game ?',
    url:'http://jennypeng.me/2048/' 
  },
  {
    description: 'playing 2048 in augmented reality ?',
    url:'http://quentin.bonnard.eu/2048/' 
  },
  {
    description: 'a 2048 clone in 2048 bytes of javascript ? Software developpers are quite weird',
    url:'http://js1k.com/2014-dragons/demo/1813' 
  },
  {
    description: 'an XKCD comic ?',
    url:'http://xkcd.com/1344/' 
  },
  {
    description: '2048 on fire ?',
    url:'http://fabricionaweb.github.io/katon-2048/' 
  },
  {
    description: 'playing 2048 against the clock ?',
    url:'http://balderdash.github.io/2048/' 
  },
  {
    description: 'a double 2048 ?',
    url:'http://baiqiang.github.io/2048-double/' 
  },
  {
    description: 'a 5D 2048 ?',
    url:'http://cesarkawakami.github.io/2048-5D/' 
  },
  {
    description: 'playing against an evil AI ?',
    url:'http://aj-r.github.io/Evil-2048/' 
  },
  {
    description: 'choosing your difficulty ?',
    url:'http://poweroftwo.nemoidstudio.com/32768' 
  },
  {
    description: 'playing with undo ?',
    url:'http://quaxio.com/2048/' 
  },
  {
    description: 'going from 2048 to one ?',
    url:'http://jonastermeau.com/files/others/2048%5E0/' 
  },
  {
    description: 'only getting 4s ?',
    url:'http://hexafluoride.github.io/2048/' 
  },
  {
    description: 'fibonacci\'s sequence ?',
    url:'http://mike199515.free3v.com/1597/2.htm' 
  },
  {
    description: 'an XKCD comic ? Yep, I know, that\'s not a game, but it\'s funny anyway',
    url:'http://xkcd.com/1344/' 
  },
  {
    description: 'removing the randomness ?',
    url:'http://jmfork.github.io/2048/' 
  },
  {
    description: 'a K-pop variant ?',
    url:'http://marumichannel.github.io/2048/' 
  },

  {
    description: 'playing with Pokemons ?',
    url:'http://amschrader.github.io/2048/' 
  },
  {
    description: 'merging 3 tiles at once ?',
    url:'http://hgentry.github.io/81/' 
  },
  {
    description: 'playing on a single column ?',
    url:'http://tiansh.github.io/2048/' 
  },
  {
    description: 'writing your own AI ?',
    url:'http://murgo.github.io/2048/' 
  }
];

function MainCtrl($scope, $window) {
  $scope.nbGames = 0;
  $scope.currentGame = null;

  $scope.onGenerate = function (){
    $scope.nbGames++;
    $scope.currentGame = Games[ Math.floor((Math.random()*Games.length)) ]; 
  }

  $scope.openCurrentGame = function (){
    window.open($scope.currentGame.url)
  }
}
