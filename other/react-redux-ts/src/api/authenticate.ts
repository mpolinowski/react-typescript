export type User = {
  id: string;
  name: string;
};
export function authenticate(): Promise<User | undefined> {
  return new Promise((resolve) => setTimeout(() => resolve({ id: '1', name: 'Admin' }), 1000));
}
