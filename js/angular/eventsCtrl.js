app.controller('EventsController', function() {
  this.upcomingEvents = [
    // {
    //   name: 'Freshmen Connect',
    //   details: 'September 11-12 | West Windsor, NJ',
    //   month: 'Sep',
    //   day: '11',
    //   link: 'freshmen-connect',
    //   disable: false
    // },
    // {
    //   name: '"Science and the Bible" with Dr. Ken Diller',
    //   details: 'Friday @ 7pm | The Cove — Busch Student Center',
    //   month: 'Sep',
    //   day: '18',
    //   link: '',
    //   disable: true
    // },
    {
      name: 'Harvey Cedars College Retreat',
      details: 'October 23-25 | Harvey Cedars Bible Conference',
      month: 'Oct',
      day: '23',
      link: 'retreat',
      disable: false
    }
  ];

  this.weeklyEvents = [
    {
      name: 'Bible Study',
      details: '8-9pm | Livingston Campus',
      day: 'Mon'
    },
    {
      name: 'Home Meeting',
      details: '7-9pm',
      day: 'Fri'
    },
    {
      name: 'Sunday Ministry Series',
      details: '11:30am-12:30pm | Busch Student Center',
      day: 'Sun'
    }
  ];
});
