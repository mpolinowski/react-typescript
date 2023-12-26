import { useSelector, useDispatch } from 'react-redux'

import {
    Form,
    useNavigate
  } from 'react-router-dom';
  

import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { authenticate } from '@/api/authenticate'
import { authorize } from '@/api/authorize'

import type { RootState } from '@/store/store'

import {
  authenticateAction,
  authenticatedAction,
  authorizeAction,
  authorizedAction,
} from '@/store/userSlice';



export function LoginForm() {

  const loading = useSelector((state: RootState) => state.user.loading);
  const dispatch = useDispatch();

  async function authAction() {
    // set loading to true
    dispatch(authenticateAction());
    // get authenticated user from API
    const authenticatedUser = await authenticate();
    // set authenticated user to current logged in user
    dispatch(authenticatedAction(authenticatedUser));
    // once the user is known set its permissions
    if (authenticatedUser !== undefined) {
      dispatch(authorizeAction());
      const authorizedPermissions = await authorize(authenticatedUser.id);
      dispatch(authorizedAction(authorizedPermissions));
    }
  }

  const navigate = useNavigate();

  return (
    <div className='container mx-auto h-screen flex justify-center'>
      <Card className="h-fit mt-16 w-full">
        <CardHeader>
            <CardTitle>
              Please sign in
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Form method="post" className="space-y-8">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="user">Username</Label>
                    <Input type="text" id="user" name="name" placeholder="Username" required />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password" placeholder="Password" required />
                </div>
                <div>
                    <Button variant="outline" type="submit"
                      onClick={async () => {
                        await authAction()
                        navigate('/start')
                      }}
                      disabled={loading}
                    >
                      {loading ? '...' : 'Sign in'}
                    </Button>
                </div>
            </Form>
        </CardContent>
      </Card>
    </div>
  );
}