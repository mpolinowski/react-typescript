export type EventsType = {
  id: number;
  timestamp: string;
  snapshot: string;
}

export type EventsArrayType = {
  [key:string]: EventsType[];
}


var events: EventsArrayType = {
  "0": [
    {
      id: 0,
      timestamp: '12/04/2023 18:36:27:220',
      snapshot: '/alarm_snapshot/01.jpg'
    },
    {
      id: 1,
      timestamp: '14/04/2023 15:36:47:951',
      snapshot: '/alarm_snapshot/01.jpg'
    },
    {
      id: 2,
      timestamp: '15/04/2023 12:36:04:322',
      snapshot: '/alarm_snapshot/01.jpg'
    },
    {
      id: 3,
      timestamp: '17/04/2023 05:12:37:563',
      snapshot: '/alarm_snapshot/01.jpg'
    },
    {
      id: 4,
      timestamp: '24/03/2023 08:43:15:654',
      snapshot: '/alarm_snapshot/01.jpg'
    },
    {
      id: 5,
      timestamp: '24/03/2023 08:43:15:655',
      snapshot: '/alarm_snapshot/01.jpg'
    }
  ],
  "1": [
    {
      id: 4,
      timestamp: '24/03/2023 08:43:15:656',
      snapshot: '/alarm_snapshot/02.jpg'
    },
    {
      id: 3,
      timestamp: '17/04/2023 05:12:37:567',
      snapshot: '/alarm_snapshot/02.jpg'
    },
    {
      id: 2,
      timestamp: '15/04/2023 12:36:04:328',
      snapshot: '/alarm_snapshot/02.jpg'
    },
    {
      id: 1,
      timestamp: '14/04/2023 15:36:47:959',
      snapshot: '/alarm_snapshot/02.jpg'
    },
    {
      id: 0,
      timestamp: '12/04/2023 18:36:27:220',
      snapshot: '/alarm_snapshot/02.jpg'
    },
    {
      id: 5,
      timestamp: '24/03/2023 08:43:15:651',
      snapshot: '/alarm_snapshot/02.jpg'
    }
  ],
  "2": [
    {
      id: 2,
      timestamp: '15/04/2023 12:36:04:322',
      snapshot: '/alarm_snapshot/03.jpg'
    },
    {
      id: 1,
      timestamp: '14/04/2023 15:36:47:953',
      snapshot: '/alarm_snapshot/03.jpg'
    },
    {
      id: 0,
      timestamp: '12/04/2023 18:36:27:224',
      snapshot: '/alarm_snapshot/03.jpg'
    },
    {
      id: 3,
      timestamp: '17/04/2023 05:12:37:565',
      snapshot: '/alarm_snapshot/03.jpg'
    },
    {
      id: 4,
      timestamp: '24/03/2023 08:43:15:656',
      snapshot: '/alarm_snapshot/03.jpg'
    },
    {
      id: 5,
      timestamp: '24/03/2023 08:43:15:657',
      snapshot: '/alarm_snapshot/03.jpg'
    }
  ],
  "3": [
    {
      id: 2,
      timestamp: '15/04/2023 12:36:04:328',
      snapshot: '/alarm_snapshot/04.jpg'
    },
    {
      id: 1,
      timestamp: '14/04/2023 15:36:47:959',
      snapshot: '/alarm_snapshot/04.jpg'
    },
    {
      id: 0,
      timestamp: '12/04/2023 18:36:27:220',
      snapshot: '/alarm_snapshot/04.jpg'
    },
    {
      id: 3,
      timestamp: '17/04/2023 05:12:37:561',
      snapshot: '/alarm_snapshot/04.jpg'
    },
    {
      id: 4,
      timestamp: '24/03/2023 08:43:15:652',
      snapshot: '/alarm_snapshot/04.jpg'
    },
    {
      id: 5,
      timestamp: '24/03/2023 08:43:15:653',
      snapshot: '/alarm_snapshot/04.jpg'
    }
  ],
  "4": [
    {
      id: 2,
      timestamp: '15/04/2023 12:36:04:324',
      snapshot: '/alarm_snapshot/05.jpg'
    },
    {
      id: 1,
      timestamp: '14/04/2023 15:36:47:955',
      snapshot: '/alarm_snapshot/05.jpg'
    },
    {
      id: 0,
      timestamp: '12/04/2023 18:36:27:226',
      snapshot: '/alarm_snapshot/05.jpg'
    },
    {
      id: 3,
      timestamp: '17/04/2023 05:12:37:567',
      snapshot: '/alarm_snapshot/05.jpg'
    },
    {
      id: 4,
      timestamp: '24/03/2023 08:43:15:658',
      snapshot: '/alarm_snapshot/05.jpg'
    },
    {
      id: 5,
      timestamp: '24/03/2023 08:43:15:659',
      snapshot: '/alarm_snapshot/05.jpg'
    }
  ],
  "5": [
    {
      id: 2,
      timestamp: '15/04/2023 12:36:04:320',
      snapshot: '/alarm_snapshot/06.jpg'
    },
    {
      id: 1,
      timestamp: '14/04/2023 15:36:47:951',
      snapshot: '/alarm_snapshot/06.jpg'
    },
    {
      id: 0,
      timestamp: '12/04/2023 18:36:27:222',
      snapshot: '/alarm_snapshot/06.jpg'
    },
    {
      id: 3,
      timestamp: '17/04/2023 05:12:37:563',
      snapshot: '/alarm_snapshot/06.jpg'
    },
    {
      id: 4,
      timestamp: '24/03/2023 08:43:15:654',
      snapshot: '/alarm_snapshot/06.jpg'
    },
    {
      id: 5,
      timestamp: '24/03/2023 08:43:15:655',
      snapshot: '/alarm_snapshot/06.jpg'
    }
  ]
};

export type Camera = {
    id: number;
    name: string;
    model: string;
    type: string;
    region: string;
    recordings: number;
    ip: string;
    httpport: number;
    events: EventsType[]
};

  
export const cameras: Camera[] = [
  {
    id: 0,
    name: 'Entrance Left',
    model: 'IN-9420 2K+',
    type: 'WQHD',
    region: 'Outdoor',
    recordings: 21,
    ip: '192.168.2.125',
    httpport: 80,
    events: events[0]
  },
  {
    id: 1,
    name: 'Facilities Room',
    model: 'IN-8403 2K+',
    type: 'WQHD',
    region: 'Indoor',
    recordings: 3,
    ip: '192.168.2.125',
    httpport: 80,
    events: events[1]
  },
  {
    id: 2,
    name: 'Back Entrance',
    model: 'IN-9408 2K+',
    type: 'WQHD',
    region: 'Outdoor',
    recordings: 17,
    ip: '192.168.2.125',
    httpport: 80,
    events: events[2]
  },
  {
    id: 3,
    name: 'Car Park',
    model: 'IN-9408 2K+',
    type: 'WQHD',
    region: 'Outdoor',
    recordings: 2,
    ip: '192.168.2.125',
    httpport: 80,
    events: events[3]
  },
  {
    id: 4,
    name: 'Lobby',
    model: 'IN-8415 2K+',
    type: 'WQHD',
    region: 'Indoor',
    recordings: 22,
    ip: '192.168.2.125',
    httpport: 80,
    events: events[4]
  },
  {
    id: 5,
    name: 'Elevator',
    model: 'IN-8403 2K+',
    type: 'WQHD',
    region: 'Indoor',
    recordings: 345,
    ip: '192.168.2.125',
    httpport: 80,
    events: events[5]
  },
];
  