import { Link } from 'react-router-dom'

import { Vault } from '@/components/Vault'
import { Secret } from '@/components/LockedData'


export function Data() {
  return (
      <div className="flex flex-col py-10 max-w-md mx-auto">
          <h2 className="text-3xl font-bold underline mt-8 text-center">
            Data
          </h2>
          <Vault>
            <Secret />
          </Vault>
          <Link to='/'>Go Back</Link>
      </div>
  );
}