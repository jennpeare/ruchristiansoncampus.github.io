(function () {
  var app = angular.module('rucoc', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

  app.controller('LifeStudyController', function() {
    this.exodus = exodusList;
  });

  var exodusList = [
    {
      num: 1,
      title: 'An Introductory Word',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/1/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/1/1.pdf'
    },
    {
      num: 2,
      title: 'Israel Under Slavery',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/2/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/2/2.pdf'
    },
    {
      num: 3,
      title: 'Preparation of the Savior',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/3/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/3/3.pdf'
    },
    {
      num: 4,
      title: 'The Life Useful to God',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/4/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/4/4.pdf'
    },
    {
      num: 5,
      title: 'God\'s Calling of the Prepared One (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/5/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/5/5.pdf'
    },
    {
      num: 6,
      title: 'God\'s Calling of the Prepared One (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/6/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/6/6.pdf'
    },
    {
      num: 7,
      title: 'The Corporate Thorn-Bush',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/7/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/7/7.pdf'
    },
    {
      num: 8,
      title: 'The Three Signs',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/8/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/8/8.pdf'
    },
    {
      num: 9,
      title: 'The Male Help and the Female Help to the Called One',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/9/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/9/9.pdf'
    },
    {
      num: 10,
      title: 'The Complete View of God\'s Call of Moses',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/10/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/10/10.pdf'
    },
    {
      num: 11,
      title: 'The Purpose of God\'s Calling',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/11/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/11/11.pdf'
    },
    {
      num: 12,
      title: 'The Three Stations in Fulfilling God\'s Purpose',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/12/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/12/12.pdf'
    },
    {
      num: 13,
      title: 'God\'s Demand and Pharaoh\'s Resistance (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/13/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/13/13.pdf'
    },
    {
      num: 14,
      title: 'Jehovah God\'s Name and His Covenant',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/14/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/14/14.pdf'
    },
    {
      num: 15,
      title: 'God\'s Further Training of Moses',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/15/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/15/15.pdf'
    },
    {
      num: 16,
      title: 'God\'s Demand and Pharaoh\'s Resistance (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/16/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/16/16.pdf'
    },
    {
      num: 17,
      title: 'God\'s Demand and Pharaoh\'s Resistance (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/17/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/17/17.pdf'
    },
    {
      num: 18,
      title: 'God\'s Demand and Pharaoh\'s Resistance (4)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/18/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/18/18.pdf'
    },
    {
      num: 19,
      title: 'God\'s Demand and Pharaoh\'s Resistance (5)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/19/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/19/19.pdf'
    },
    {
      num: 20,
      title: 'Pharaoh\'s Subtle Bargaining',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/20/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/20/20.pdf'
    },
    {
      num: 21,
      title: 'The Hardening of Pharaoh\'s Heart',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/21/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/21/21.pdf'
    },
    {
      num: 22,
      title: 'God\'s Demand and Pharaoh\'s Resistance (6)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/22/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/22/22.pdf'
    },
    {
      num: 23,
      title: 'The Passover (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/23/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/23/23.pdf'
    },
    {
      num: 24,
      title: 'The Passover (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/24/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/24/24.pdf'
    },
    {
      num: 25,
      title: 'The Passover (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/25/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/25/25.pdf'
    },
    {
      num: 26,
      title: 'Israel\'s Exodus from Egypt (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/26/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/26/26.pdf'
    },
    {
      num: 27,
      title: 'Israel\'s Exodus from Egypt (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/27/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/27/27.pdf'
    },
    {
      num: 28,
      title: 'Pharaoh\'s Last Struggle',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/28/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/28/28.pdf'
    },
    {
      num: 29,
      title: 'Israel\'s Crossing of the Red Sea',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/29/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/29/29.pdf'
    },
    {
      num: 30,
      title: 'Israel\'s Experience at Marah',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/30/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/30/30.pdf'
    },
    {
      num: 31,
      title: 'Israel\'s Experience at Elim',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/31/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/31/31.pdf'
    },
    {
      num: 32,
      title: 'The Experience of Manna',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/32/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/32/32.pdf'
    },
    {
      num: 33,
      title: 'God\'s Dealing with the Flesh of His People',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/33/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/33/33.pdf'
    },
    {
      num: 34,
      title: 'The Change of Diet',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/34/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/34/34.pdf'
    },
    {
      num: 35,
      title: 'The Heavenly Diet: Manna (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/35/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/35/35.pdf'
    },
    {
      num: 36,
      title: 'The Heavenly Diet: Manna (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/36/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/36/36.pdf'
    },
    {
      num: 37,
      title: 'The Heavenly Diet: Manna (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/37/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/37/37.pdf'
    },
    {
      num: 38,
      title: 'The Heavenly Diet: Manna (4)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/38/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/38/38.pdf'
    },
    {
      num: 39,
      title: 'The Heavenly Diet: Manna (5)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/39/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/39/39.pdf'
    },
    {
      num: 40,
      title: 'The Living Water Out of the Smitten Rock (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/40/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/40/40.pdf'
    },
    {
      num: 41,
      title: 'The Living Water Out of the Smitten Rock (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/41/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/41/41.pdf'
    },
    {
      num: 42,
      title: 'The Water of Life in Resurrection',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/42/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/42/42.pdf'
    },
    {
      num: 43,
      title: 'Drinking the Water of Life (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/43/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/43/43.pdf'
    },
    {
      num: 44,
      title: 'Drinking the Water of Life (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/44/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/44/44.pdf'
    },
    {
      num: 45,
      title: 'Flowing the Water of Life',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/45/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/45/45.pdf'
    },
    {
      num: 46,
      title: 'The Defeat of Amalek',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/46/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/46/46.pdf'
    },
    {
      num: 47,
      title: 'The Continual Fighting Against Amalek',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/47/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/47/47.pdf'
    },
    {
      num: 48,
      title: 'Amalek Versus Kingship',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/48/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/48/48.pdf'
    },
    {
      num: 49,
      title: 'The Type of the Kingdom',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/49/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/49/49.pdf'
    },
    {
      num: 50,
      title: 'Brought Into the Presence of God and Into the Knowledge of Him',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/50/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/50/50.pdf'
    },
    {
      num: 51,
      title: 'The Testimony of God Revealing Him to His People',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/51/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/51/51.pdf'
    },
    {
      num: 52,
      title: 'The Law Being the Living Word of God Infusing His Substance Into His Loving Seekers',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/52/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/52/52.pdf'
    },
    {
      num: 53,
      title: 'God Seeking Lovers in Giving His Law to His People',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/53/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/53/53.pdf'
    },
    {
      num: 54,
      title: 'Keeping the Law of God by Loving Him and His Word and Becoming One with Him (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/54/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/54/54.pdf'
    },
    {
      num: 55,
      title: 'Keeping the Law of God by Loving Him and His Word and Becoming One with Him (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/55/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/55/55.pdf'
    },
    {
      num: 56,
      title: 'How the Old Testament Seekers of God Enjoyed His Law (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/56/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/56/56.pdf'
    },
    {
      num: 57,
      title: 'How the Old Testament Seekers of God Enjoyed His Law (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/57/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/57/57.pdf'
    },
    {
      num: 58,
      title: 'The Function of God\'s Law as His Living Word to His Loving Seekers',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/58/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/58/58.pdf'
    },
    {
      num: 59,
      title: 'The Blessing Received by the Loving Seekers of God Through His Law as His Living Word (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/59/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/59/59.pdf'
    },
    {
      num: 60,
      title: 'The Blessing Received by the Loving Seekers of God Through His Law as His Living Word (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/60/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/60/60.pdf'
    },
    {
      num: 61,
      title: 'The Negative Aspect of the Giving of the Law and Its Function (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/61/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/61/61.pdf'
    },
    {
      num: 62,
      title: 'The Negative Aspect of the Giving of the Law and Its Function (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/62/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/62/62.pdf'
    },
    {
      num: 63,
      title: 'The Negative Aspect of the Giving of the Law and Its Function (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/63/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/63/63.pdf'
    },
    {
      num: 64,
      title: 'Apart from the Living God the Law Becoming Killing Letters',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/64/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/64/64.pdf'
    },
    {
      num: 65,
      title: 'The Veil Over the Glory of the Ministry of Condemnation and Death',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/65/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/65/65.pdf'
    },
    {
      num: 66,
      title: 'The Ordinances of the Law Concerning the Worship of God',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/66/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/66/66.pdf'
    },
    {
      num: 67,
      title: 'The Pollution Caused by Man\'s Work and the Nakedness Exposed Through Man\'s Way',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/67/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/67/67.pdf'
    },
    {
      num: 68,
      title: 'The First Ordinance of the Law Concerning Man\'s Relationship with Others',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/68/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/68/68.pdf'
    },
    {
      num: 69,
      title: 'Sundry Ordinances of the Law',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/69/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/69/69.pdf'
    },
    {
      num: 70,
      title: 'The Implications, Indications, and Significances of the Ordinances of the Law (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/70/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/70/70.pdf'
    }






  ];
})();
