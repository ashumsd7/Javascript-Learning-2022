let cars = [
  {
    name: "Audi",
    year: 2000,
  },
  {
    name: "Mahindra",
    year: 1999,
  },
  {
    name: "Tata",
    year: 2005,
  },
  {
    name: "Maruti",
    year: 1967,
  },
  {
    name: "Neo",
    year: 2005,
  },
];


let after2000= cars.filter(car=>car.year>2000)

console.log(after2000)
