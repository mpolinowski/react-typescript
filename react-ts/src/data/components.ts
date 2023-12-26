export type Components = {
    id: number;
    title: string;
    to: string;
    description: string;
  }
  
export const components: Components[] = [
    {
      id: 0,
      title: "Alert Dialog",
      to: "/camera-list",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      id: 1,
      title: "Hover Card",
      to: "/camera-list",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      id: 2,
      title: "Progress",
      to: "/camera-list",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      id: 3,
      title: "Scroll-area",
      to: "/camera-list",
      description: "Visually or semantically separates content.",
    },
    {
      id: 4,
      title: "Tabs",
      to: "/camera-list",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      id: 5,
      title: "Tooltip",
      to: "/camera-list",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    }
  ];
  