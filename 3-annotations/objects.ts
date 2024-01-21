const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// destructuring with annotations
const { age, name }: { age: number; name: string } = profile;

//destructuring lat and lng from coords
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
