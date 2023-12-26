export type Start = {
    id: number;
    title: string;
    to: string;
    description: string;
  }

export const gettinStarted: Start[] = [
    {
      id: 0,
      title: 'Start',
      to: '/start',
      description: 'The landing page that gives you an overview over all active camera operations.'
    },
    {
      id: 1,
      title: 'Camera List',
      to: '/camera-list',
      description: 'This overview page gives you a direct access to camera control and alarm recordings for all connected cameras.'
    },
    {
      id: 2,
      title: 'Dashboard',
      to: '/dashboard',
      description: 'The admin dashboard allows you to add and delete cameras and user logins.'
    }
  ];
  