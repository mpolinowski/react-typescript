import { UserDetails } from '@/components/create_user/UserDetails'
import { Vault } from '@/components/login/Vault'

export function UserPage() {
  return (
    <Vault>
      <UserDetails />
    </Vault>
  );
}