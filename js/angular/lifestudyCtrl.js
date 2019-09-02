app.controller('LifeStudyController', function () {
  this.exodus = [
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
    },
    {
      num: 71,
      title: 'The Implications, Indications, and Significances of the Ordinances of the Law (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/71/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/71/71.pdf'
    },
    {
      num: 72,
      title: 'The Implications, Indications, and Significances of the Ordinances of the Law (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/72/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/72/72.pdf'
    },
    {
      num: 73,
      title: 'The Angel of Jehovah for His People to Take Possession of the Promised Land (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/73/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/73/73.pdf'
    },
    {
      num: 74,
      title: 'The Angel of Jehovah for His People to Take Possession of the Promised Land (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/74/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/74/74.pdf'
    },
    {
      num: 75,
      title: 'The Angel of Jehovah for His People to Take Possession of the Promised Land (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/75/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/75/75.pdf'
    },
    {
      num: 76,
      title: 'The Enactment of the Covenant (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/76/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/76/76.pdf'
    },
    {
      num: 77,
      title: 'The Enactment of the Covenant (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/77/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/77/77.pdf'
    },
    {
      num: 78,
      title: 'The Blood of the Covenant (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/78/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/78/78.pdf'
    },
    {
      num: 79,
      title: 'The Blood of the Covenant (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/79/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/79/79.pdf'
    },
    {
      num: 80,
      title: 'The Vision of God in a Transparent and Clear Heaven and the Stay with God Under His Glory',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/80/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/80/80.pdf'
    },
    {
      num: 81,
      title: 'The Vision of the Tabernacle and Its Furniture Concerning the Materials and the Pattern (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/81/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/81/81.pdf'
    },
    {
      num: 82,
      title: 'The Vision of the Tabernacle and Its Furniture Concerning the Materials and the Pattern (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/82/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/82/82.pdf'
    },
    {
      num: 83,
      title: 'The Vision of the Tabernacle and Its Furniture Concerning the Materials and the Pattern (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/83/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/83/83.pdf'
    },
    {
      num: 84,
      title: 'The Ark of the Testimony (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/84/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/84/84.pdf'
    },
    {
      num: 85,
      title: 'The Ark of the Testimony (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/85/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/85/85.pdf'
    },
    {
      num: 86,
      title: 'The Ark of the Testimony (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/86/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/86/86.pdf'
    },
    {
      num: 87,
      title: 'The Ark of the Testimony (4)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/87/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/87/87.pdf'
    },
    {
      num: 88,
      title: 'The Ark of the Testimony (5)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/88/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/88/88.pdf'
    },
    {
      num: 89,
      title: 'The Ark of the Testimony (6)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/89/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/89/89.pdf'
    },
    {
      num: 90,
      title: 'The Table of the Bread of the Presence (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/90/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/90/90.pdf'
    },
    {
      num: 91,
      title: 'The Table of the Bread of the Presence (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/91/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/91/91.pdf'
    },
    {
      num: 92,
      title: 'The Lampstand (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/92/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/92/92.pdf'
    },
    {
      num: 93,
      title: 'The Lampstand (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/93/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/93/93.pdf'
    },
    {
      num: 94,
      title: 'The Lampstand (3) - Growing, Branching, Budding, and Blossoming to Shine the Light',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/94/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/94/94.pdf'
    },
    {
      num: 95,
      title: 'The Covering of the Tabernacle (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/95/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/95/95.pdf'
    },
    {
      num: 96,
      title: 'The Covering of the Tabernacle (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/96/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/96/96.pdf'
    },
    {
      num: 97,
      title: 'The Boards of the Tabernacle (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/97/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/97/97.pdf'
    },
    {
      num: 98,
      title: 'The Boards of the Tabernacle (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/98/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/98/98.pdf'
    },
    {
      num: 99,
      title: 'The Veil Within the Tabernacle (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/99/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/99/99.pdf'
    },
    {
      num: 100,
      title: 'The Veil Within the Tabernacle (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/100/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/100/100.pdf'
    },
    {
      num: 101,
      title: 'The Curtain for the Door of the Tent (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/101/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/101/101.pdf'
    },
    {
      num: 102,
      title: 'The Curtain for the Door of the Tent (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/102/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/102/102.pdf'
    },
    {
      num: 103,
      title: 'The Curtain for the Door of the Tent (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/103/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/103/103.pdf'
    },
    {
      num: 104,
      title: 'The Altar of Burnt Offering (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/104/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/104/104.pdf'
    },
    {
      num: 105,
      title: 'The Altar of Burnt Offering (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/105/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/105/105.pdf'
    },
    {
      num: 106,
      title: 'The Altar of Burnt Offering (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/106/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/106/106.pdf'
    },
    {
      num: 107,
      title: 'The Altar of Burnt Offering (4)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/107/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/107/107.pdf'
    },
    {
      num: 108,
      title: 'The Altar of Burnt Offering (5)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/108/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/108/108.pdf'
    },
    {
      num: 109,
      title: 'The Altar of Burnt Offering (6)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/109/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/109/109.pdf'
    },
    {
      num: 110,
      title: 'The Court of the Tabernacle (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/110/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/110/110.pdf'
    },
    {
      num: 111,
      title: 'The Court of the Tabernacle (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/111/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/111/111.pdf'
    },
    {
      num: 112,
      title: 'The Court of the Tabernacle (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/112/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/112/112.pdf'
    },
    {
      num: 113,
      title: 'The Court of the Tabernacle (4)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/113/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/113/113.pdf'
    },
    {
      num: 114,
      title: 'The Lighting of the Lamps and the Garments for the Priesthood (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/114/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/114/114.pdf'
    },
    {
      num: 115,
      title: 'The Lighting of the Lamps and the Garments for the Priesthood (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/115/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/115/115.pdf'
    },
    {
      num: 116,
      title: 'The Priestly Garments (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/116/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/116/116.pdf'
    },
    {
      num: 117,
      title: 'The Priestly Garments (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/117/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/117/117.pdf'
    },
    {
      num: 118,
      title: 'The Priestly Garments (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/118/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/118/118.pdf'
    },
    {
      num: 119,
      title: 'The Priestly Garments (4)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/119/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/119/119.pdf'
    },
    {
      num: 120,
      title: 'The Priestly Garments (5)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/120/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/120/120.pdf'
    },
    {
      num: 121,
      title: 'The Priestly Garments (6)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/121/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/121/121.pdf'
    },
    {
      num: 122,
      title: 'The Priestly Garments (7)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/122/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/122/122.pdf'
    },
    {
      num: 123,
      title: 'The Priestly Garments (8)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/123/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/123/123.pdf'
    },
    {
      num: 124,
      title: 'The Priestly Garments (9)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/124/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/124/124.pdf'
    },
    {
      num: 125,
      title: 'The Priestly Garments (10)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/125/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/125/125.pdf'
    },
    {
      num: 126,
      title: 'The Priestly Garments (11)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/126/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/126/126.pdf'
    },
    {
      num: 127,
      title: 'The Priestly Garments (12)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/127/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/127/127.pdf'
    },
    {
      num: 128,
      title: 'The Priestly Garments (13)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/128/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/128/128.pdf'
    },
    {
      num: 129,
      title: 'The Priestly Garments (14)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/129/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/129/129.pdf'
    },
    {
      num: 130,
      title: 'The Priestly Garments (15)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/130/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/130/130.pdf'
    },
    {
      num: 131,
      title: 'The Priestly Garments (16)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/131/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/131/131.pdf'
    },
    {
      num: 132,
      title: 'The Priestly Garments (17)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/132/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/132/132.pdf'
    },
    {
      num: 133,
      title: 'The Sanctification of Aaron and His Sons to be the Priests (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/133/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/133/133.pdf'
    },
    {
      num: 134,
      title: 'The Sanctification of Aaron and His Sons to be the Priests (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/134/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/134/134.pdf'
    },
    {
      num: 135,
      title: 'The Sanctification of Aaron and His Sons to be the Priests (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/135/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/135/135.pdf'
    },
    {
      num: 136,
      title: 'The Sanctification of Aaron and His Sons to be the Priests (4)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/136/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/136/136.pdf'
    },
    {
      num: 137,
      title: 'The Sanctification of Aaron and His Sons to be the Priests (5)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/137/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/137/137.pdf'
    },
    {
      num: 138,
      title: 'The Sanctification of Aaron and His Sons to be the Priests (6)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/138/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/138/138.pdf'
    },
    {
      num: 139,
      title: 'The Sanctification of Aaron and His Sons to be the Priests (7)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/139/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/139/139.pdf'
    },
    {
      num: 140,
      title: 'The Sanctification of Aaron and His Sons to be the Priests (8)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/140/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/140/140.pdf'
    },
    {
      num: 141,
      title: 'The Sanctification of Aaron and His Sons to be the Priests (9)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/141/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/141/141.pdf'
    },
    {
      num: 142,
      title: 'The Sanctification of Aaron and His Sons to be the Priests (10)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/142/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/142/142.pdf'
    },
    {
      num: 143,
      title: 'The Sanctification of Aaron and His Sons to be the Priests (11)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/143/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/143/143.pdf'
    },
    {
      num: 144,
      title: 'The Sanctification of Aaron and His Sons to be the Priests (12)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/144/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/144/144.pdf'
    },
    {
      num: 145,
      title: 'The Sanctification of Aaron and His Sons to be the Priests (13)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/145/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/145/145.pdf'
    },
    {
      num: 146,
      title: 'The Sanctification of Aaron and His Sons to be the Priests (14)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/146/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/146/146.pdf'
    },
    {
      num: 147,
      title: 'The Golden Incense Altar (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/147/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/147/147.pdf'
    },
    {
      num: 148,
      title: 'The Golden Incense Altar (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/148/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/148/148.pdf'
    },
    {
      num: 149,
      title: 'The Golden Incense Altar (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/149/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/149/149.pdf'
    },
    {
      num: 150,
      title: 'The Golden Incense Altar (4)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/150/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/150/150.pdf'
    },
    {
      num: 151,
      title: 'The Golden Incense Altar (5)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/151/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/151/151.pdf'
    },
    {
      num: 152,
      title: 'The Golden Incense Altar (6)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/152/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/152/152.pdf'
    },
    {
      num: 153,
      title: 'The Propitiation Silver (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/153/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/153/153.pdf'
    },
    {
      num: 154,
      title: 'The Propitiation Silver (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/154/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/154/154.pdf'
    },
    {
      num: 155,
      title: 'The Propitiation Silver (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/155/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/155/155.pdf'
    },
    {
      num: 156,
      title: 'The Laver of Bronze',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/156/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/156/156.pdf'
    },
    {
      num: 157,
      title: 'The Holy Anointing Oil (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/157/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/157/157.pdf'
    },
    {
      num: 158,
      title: 'The Holy Anointing Oil (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/158/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/158/158.pdf'
    },
    {
      num: 159,
      title: 'The Holy Anointing Oil (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/159/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/159/159.pdf'
    },
    {
      num: 160,
      title: 'The Compound Ointment of the Compound Spirit (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/160/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/160/160.pdf'
    },
    {
      num: 161,
      title: 'The Compound Ointment of the Compound Spirit (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/161/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/161/161.pdf'
    },
    {
      num: 162,
      title: 'The Compound Ointment of the Compound Spirit (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/162/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/162/162.pdf'
    },
    {
      num: 163,
      title: 'The Ingredients of the Compound Spirit Typified by the Compound Ointment (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/163/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/163/163.pdf'
    },
    {
      num: 164,
      title: 'The Ingredients of the Compound Spirit Typified by the Compound Ointment (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/164/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/164/164.pdf'
    },
    {
      num: 165,
      title: 'The Ingredients of the Compound Spirit Typified by the Compound Ointment (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/165/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/165/165.pdf'
    },
    {
      num: 166,
      title: 'The Ingredients of the Compound Spirit Typified by the Compound Ointment (4)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/166/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/166/166.pdf'
    },
    {
      num: 167,
      title: 'The Incense (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/167/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/167/167.pdf'
    },
    {
      num: 168,
      title: 'The Incense (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/168/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/168/168.pdf'
    },
    {
      num: 169,
      title: 'The Incense (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/169/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/169/169.pdf'
    },
    {
      num: 170,
      title: 'The Workers of the Tabernacle, the Furniture, and the Priestly Garment (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/170/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/170/170.pdf'
    },
    {
      num: 171,
      title: 'The Workers of the Tabernacle, the Furniture, and the Priestly Garment (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/171/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/171/171.pdf'
    },
    {
      num: 172,
      title: 'The Sabbath in Relation to the Building Work of the Tabernacle',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/172/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/172/172.pdf'
    },
    {
      num: 173,
      title: 'The Breaking of the Law',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/173/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/173/173.pdf'
    },
    {
      num: 174,
      title: 'The Principle of the Golden-Calf Idol',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/174/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/174/174.pdf'
    },
    {
      num: 175,
      title: 'The Dealing with the Idol and the Idolaters',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/175/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/175/175.pdf'
    },
    {
      num: 176,
      title: 'A Companion of God (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/176/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/176/176.pdf'
    },
    {
      num: 177,
      title: 'A Companion of God (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/177/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/177/177.pdf'
    },
    {
      num: 178,
      title: 'Moses\' Stay with God (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/178/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/178/178.pdf'
    },
    {
      num: 179,
      title: 'Moses\' Stay with God (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/179/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/179/179.pdf'
    },
    {
      num: 180,
      title: 'Moses\' Stay with God (3)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/180/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/180/180.pdf'
    },
    {
      num: 181,
      title: 'Moses\' Stay with God (4)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/181/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/181/181.pdf'
    },
    {
      num: 182,
      title: 'The Making of the Tabernacle with Its Furniture and the Garments for the Priests (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/182/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/182/182.pdf'
    },
    {
      num: 183,
      title: 'The Making of the Tabernacle with Its Furniture and the Garments for the Priests (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/183/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/183/183.pdf'
    },
    {
      num: 184,
      title: 'The Erection of the Tabernacle (1)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/184/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/184/184.pdf'
    },
    {
      num: 185,
      title: 'The Erection of the Tabernacle (2)',
      audio: 'http://www.rucoc.com/LifeStudy/Eng/2/185/hifias1s.mp3',
      text: 'http://www.rucoc.com/LifeStudy/Eng/2/185/185.pdf'
    }
  ];
});
