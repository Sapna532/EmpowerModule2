const extractInfo = (people) => {
  return people.map(({ name, address: { city, street: { name: streetName } } }) =>
    `${name} lives in ${city} on ${streetName}`
  );
};
