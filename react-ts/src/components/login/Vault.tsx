import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

type Content = {
  children: JSX.Element
}

export function Vault({ children }: Content) {
  // get array of permissions for current user
  const permissions = useSelector((state: RootState) => state.user.permissions);
  // if permissions exist and include 'admin' load children
  if (permissions && permissions.includes('admin')) {
    return <div>{ children }</div>;
  }
  return <h3 className="mt-8 text-center">Please sign in to view this content!</h3>;
}