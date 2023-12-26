import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

type Content = {
  children: JSX.Element
}

export function Vault({ children }: Content) {
  const user = useSelector((state: RootState) => state.user.user);

  if (user) {
    return <div>{ children }</div>;
  }
  return <h3 className="mt-8 text-center">Please sign in to view this content!</h3>;
}