// releases object from JSON file

export class Disc {
  _id: string;
  title: string;
  year: number;
  basic_information: {
    title: string;
    year: number;
    genres: string[];
    artists: {
      name: string[];
    } [];
  };
}
