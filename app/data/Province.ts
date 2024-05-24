import { Region } from "./Region";

export type Province = {
  id: number;
  name: string;
  region: Region;
};

export const provinces: Province[] = [
  {
    id: 1,
    name: "Tanger",
    region: {
      id: 1,
      name: "Tanger-Tétouan-Al Hoceïma",
    },
  },
  {
    id: 2,
    name: "Tétouan",
    region: {
      id: 1,
      name: "Tanger-Tétouan-Al Hoceïma",
    },
  },
];
