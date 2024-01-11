const teams = [
  {
    id: 1,
    name: "Engineering",
    teamLead: {
      id: 101,
      name: "John Doe",
      position: "Team Lead",
      image: "/team1.png",
    },
    members: [
      {
        id: 102,
        name: "Jane Smith",
        position: "UX Designer",
        image: "url_to_image",
      },
      {
        id: 103,
        name: "Bob Johnson",
        position: "QA Engineer",
        image: "url_to_image",
      },
    ],
  },
  {
    id: 2,
    name: "Marketing",
    teamLead: {
      id: 201,
      name: "Alice Brown",
      position: "Marketing Manager",
      image: "/team2.png",
    },
    members: [
      {
        id: 202,
        name: "Charlie Green",
        position: "Content Writer",
        image: "/team.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Sales",
    teamLead: {
      id: 301,
      name: "David White",
      position: "Sales Manager",
      image: "/team3.png",
    },
    members: [
      {
        id: 302,
        name: "Eva Black",
        position: "Sales Representative",
        image: "url_to_image",
      },
    ],
  },
];

export default teams;
