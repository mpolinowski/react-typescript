type Person = {
  name: string,
};

export function simAPIRequest(): Promise<Person> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ name: "George González" }), 1000)
  );
}