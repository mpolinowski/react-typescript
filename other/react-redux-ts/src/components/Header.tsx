import { authenticate } from '@/api/authenticate'
import { authorize } from '@/api/authorize'
import { useSelector, useDispatch } from 'react-redux'

import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu"

import type { RootState } from '@/store/store'

import {
  authenticateAction,
  authenticatedAction,
  authorizeAction,
  authorizedAction,
} from '@/store/userSlice';

export function Header() {
  const user = useSelector((state: RootState) => state.user.user);
  const loading = useSelector((state: RootState) => state.user.loading);
  const dispatch = useDispatch();

  async function handleSignInClick() {
    dispatch(authenticateAction());
    const authenticatedUser = await authenticate();
    dispatch(authenticatedAction(authenticatedUser));
    if (authenticatedUser !== undefined) {
      dispatch(authorizeAction());
      const authorizedPermissions = await authorize(authenticatedUser.id);
      dispatch(authorizedAction(authorizedPermissions));
    }
  }
  return (
    <NavigationMenu className='p-4'>
      <NavigationMenuList>
        <NavigationMenuItem>
            {user ? (
              <span className="ml-auto font-bold">{user.name} has signed in</span>
            ) : (
              <Button variant="outline"
                onClick={handleSignInClick}
                disabled={loading}
              >
                {loading ? '...' : 'Sign in'}
              </Button>
            )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
