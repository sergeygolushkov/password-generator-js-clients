export type Client = {
  title: string;
  statuses: JSX.Element[];
  description: string;
};

export type AvailableClientGroup = {
  name: string;
  clients: Client[];
  image: JSX.Element;
};
