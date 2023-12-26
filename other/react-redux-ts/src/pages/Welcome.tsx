import { Link } from 'react-router-dom'

import { Vault } from '@/components/Vault'
import { Secret } from '@/components/LockedWelcome'


export function Welcome() {
  return (
      <div className="flex flex-col py-10 max-w-md mx-auto">
          <h2 className="text-3xl font-bold underline mt-8 text-center">
            Welcome!
          </h2>
          <Vault>
            <Secret />
          </Vault>
          <Link to='/data'>Go to Data Page</Link>
      </div>
  );
}