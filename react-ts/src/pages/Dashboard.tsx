import '@/styles/App.css';
import { AddUserDetails } from '@/components/create_user/CreateUser'
import { Vault } from '@/components/login/Vault'

import { DisplayAPIResponseState } from '@/components/api_hooks/EffectHook_APIRequest_useState';
import { DisplayAPIResponseReducer } from '@/components/api_hooks/EffectHook_APIRequest_useReducer';

export default function Dashboard() {
  return (
    <Vault>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12'>
        <AddUserDetails />
        <div className='container'>
          <h2 className="text-3xl font-bold underline mb-3">
              Placeholder
          </h2>
          <p>A few React Hook examples for later...</p>
          <DisplayAPIResponseState />
          <DisplayAPIResponseReducer />
        </div>
      </div>
    </Vault>
  );
}