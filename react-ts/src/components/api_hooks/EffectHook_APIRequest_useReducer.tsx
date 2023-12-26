import { useEffect, useReducer } from 'react';
// import { Button } from "@/components/ui/button"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

import {
  Plus,
  Minus,
  RotateCcw,
} from 'lucide-react';

import { simAPIRequest } from '@/components/api_hooks/EffectHook_APIRequest';

type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

type Action =
| {
    type: 'initialize';
    name: string;
  }
| {
    type: 'increment';
  }
| {
    type: 'decrement';
  }
| {
    type: 'reset';
  };

function reducer(state: State, action: Action): State {
    switch (action.type) {
      case 'initialize':
        return { name: action.name, score: 0, loading: false };
      case 'increment':
        return { ...state, score: state.score + 1 };
      case 'decrement':
        return { ...state, score: state.score - 1 };
      case 'reset':
        return { ...state, score: 0 };
      default:
        return state;
    }
  }

export function DisplayAPIResponseReducer()  {
  const [{ name, score, loading }, dispatch] = useReducer(
      reducer,
      {
        name: undefined,
        score: 0,
        loading: true,
      }
  );
  

  useEffect(() => {
    simAPIRequest().then(({ name }) =>
    dispatch({ type: 'initialize', name })
    );
    }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <h3>{name}, {score}</h3>

      <ToggleGroup type="multiple" variant="outline" className='my-4'>
        <ToggleGroupItem value="bold" aria-label="Toggle bold" onClick={() => dispatch({ type: 'increment' })}>
          <Plus size={20} strokeWidth={1.5} className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic" onClick={() => dispatch({ type: 'decrement' })}>
          <Minus size={20} strokeWidth={1.5} className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough" onClick={() => dispatch({ type: 'reset' })}>
          <RotateCcw size={20} strokeWidth={1.5} className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      {/* <Button onClick={() => dispatch({ type: 'increment' })}>Add</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>Subtract</Button>
      <Button onClick={() => dispatch({ type: 'reset' })}>Reset</Button> */}
    </>
  );
}